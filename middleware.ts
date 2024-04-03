import { NextRequest, NextResponse } from 'next/server';
import {
  AUTH_LOGIN_CALLBACK_PARAM,
  AUTH_LOGIN_PATHNAME,
  PROMPT_QUERY_PARAM,
  REDIRECT_FROM_WIX_LOGIN_STATUS,
  WIX_REFRESH_TOKEN,
} from '@app/model/auth/auth.const';
import { getServerWixClient } from '@app/model/auth/wix-client.server';
import type { WixClientType } from '@app/model/auth/wix-client.base';

// CORS Configuration
const corsOptions: {
  allowedMethods: string[];
  allowedOrigins: string[];
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge?: number;
  credentials: boolean;
} = {
  allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Add your allowed methods here
  allowedOrigins: ['*'], // Add your allowed origins here
  allowedHeaders: ['Content-Type', 'Authorization'], // Add your allowed headers here
  exposedHeaders: [], // Add your exposed headers here
  maxAge: 60 * 60 * 24 * 30, // 30 days
  credentials: true,
};

const setCorsHeaders = (response: NextResponse) => {
  response.headers.set('Access-Control-Allow-Origin', corsOptions.allowedOrigins.join(','));
  response.headers.set('Access-Control-Allow-Methods', corsOptions.allowedMethods.join(','));
  response.headers.set('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(','));
  response.headers.set('Access-Control-Expose-Headers', corsOptions.exposedHeaders.join(','));
  response.headers.set('Access-Control-Max-Age', corsOptions.maxAge?.toString() ?? '');
  response.headers.set('Access-Control-Allow-Credentials', corsOptions.credentials.toString());
};

const setVisitorTokens = async ({
  wixClient,
  request,
  response,
}: {
  wixClient: WixClientType;
  request: NextRequest;
  response: NextResponse;
}) => {
  const tokens = await wixClient!.auth.generateVisitorTokens();
  response.cookies.set(WIX_REFRESH_TOKEN, JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30,
  });
};

export async function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const requestHeaders = new Headers(request.headers);
  const requestUrl = request.url;
  requestHeaders.set('x-middleware-request-url', requestUrl);
  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  const wixClient = getServerWixClient({
    cookieStore: request.cookies,
  });
  const isLoggedIn = wixClient?.auth.loggedIn();

  // Set CORS headers
  setCorsHeaders(res);

  if (!cookies.get(WIX_REFRESH_TOKEN) && !isLoggedIn) {
    await setVisitorTokens({ response: res, wixClient, request });
  }
  const wixMemberLoggedIn = request.nextUrl.searchParams.get(
    REDIRECT_FROM_WIX_LOGIN_STATUS
  );
  if (wixMemberLoggedIn === 'false' && isLoggedIn) {
    cookies.delete(WIX_REFRESH_TOKEN);
    await setVisitorTokens({ response: res, wixClient, request });
  }
  if (
    wixMemberLoggedIn === 'true' ||
    (!isLoggedIn && request.nextUrl.pathname.startsWith('/account'))
  ) {
    const redirectUrl = new URL(AUTH_LOGIN_PATHNAME, requestUrl);
    const loginCallbackUrl = new URL(requestUrl);
    redirectUrl.searchParams.delete(REDIRECT_FROM_WIX_LOGIN_STATUS);
    loginCallbackUrl.searchParams.delete(REDIRECT_FROM_WIX_LOGIN_STATUS);
    redirectUrl.searchParams.set(
      AUTH_LOGIN_CALLBACK_PARAM,
      loginCallbackUrl.toString()
    );
    redirectUrl.searchParams.set(PROMPT_QUERY_PARAM, 'none');
    return NextResponse.redirect(redirectUrl);
  }
  return res;
}

export const config = {
  unstable_allowDynamic: [
    '**/node_modules/lodash/**',
    '**/node_modules/@wix/**',
  ],
};
