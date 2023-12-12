// SignInLayout.tsx

import React, { ReactNode } from 'react';
import Footer from '@app/components/Layout/Footer';

interface SignInLayoutProps {
  children: ReactNode;
}

const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign In</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          rel="icon"
          href="https://drive.google.com/uc?export=view&id=1wi8XaEmXYLGHXkz_5mcXNFw5NRGIilmu"
        />
      </head>
      <body className="bg-gray-100">
        <div className="container mx-auto max-w-md p-8 bg-white rounded-md shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
};

export default SignInLayout;
