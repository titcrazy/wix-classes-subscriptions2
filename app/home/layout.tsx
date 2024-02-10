import 'app/home/globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';
import { useServerAuthSession } from '@app/hooks/useServerAuthSession';

export const revalidate = 0;

export default function RootLayout(layoutProps: any) {
  const { children } = layoutProps;
  const wixSession = useServerAuthSession();
  return (
    <html lang="en">
      <head>
        <title>Anniversary Project</title>
        <meta
          name="6th Month Anniversary Project"
          content="This is a small project for my baby ❤️"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self';"
        />
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <meta http-equiv="X-Frame-Options" content="DENY" />
        <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          http-equiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          http-equiv="Strict-Transport-Security"
          content="max-age=31536000; includeSubDomains; preload"
        />
        <link
          rel="icon"
          href="https://drive.google.com/uc?export=view&id=1wi8XaEmXYLGHXkz_5mcXNFw5NRGIilmu"
        />
      </head>
      {wixSession.wixClient ? (
        <body className="parallax-background">
          <Header />
          <main className="bg-transparent min-h-[600px]">{children}</main>
          <Footer />
        </body>
      ) : (
        <body className="">
          <main className="max-w-full-content mx-auto bg-gray-c2 pt-32">
            <h1>
              Page not available. Please add an environment variable called
              NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
              deployment provider.
            </h1>
          </main>
        </body>
      )}
    </html>
  );
}
