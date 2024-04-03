import { createRedirectCallbacks } from '@app/model/redirects/redirect.utils';
import { NextRequest, NextResponse } from 'next/server';
import { getServerWixClient } from '@app/model/auth/wix-client.server';
import { getRequestUrl } from '@app/model/server-utils';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  const requestUrl = getRequestUrl(request);
  const baseUrl = new URL('/', requestUrl).toString();
  const { searchParams } = new URL(requestUrl);
  const checkoutData = searchParams.get('checkoutData');
  const planId = searchParams.get('planId')!;
  const wixClient = getServerWixClient({
    cookieStore: request.cookies,
  });
  const { redirectSession } =
    (await wixClient?.redirects
      .createRedirectSession({
        paidPlansCheckout: {
          planId,
          checkoutData,
        },
        callbacks: createRedirectCallbacks({ baseUrl }),
      })
      .catch((e) => {
        console.error('*** failed redirect session', e);
        throw e;
      })) ?? {};

  // Set CORS headers to allow all origins
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Add other allowed methods if needed
  headers.set('Access-Control-Allow-Headers', 'Content-Type');

  const response = new NextResponse(
    redirectSession?.fullUrl ? redirectSession!.fullUrl! : baseUrl,
    {
      status: 302,
      headers,
    }
  );
  
  
  
  return response;
}
