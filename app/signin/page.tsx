// SignIn.tsx

'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@app/components/Layout/Footer';

const SignIn: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const enteredUsername = data.get('email') as string;
    const enteredPassword = data.get('password') as string;

    // Check if the entered credentials are valid
    if (enteredUsername === 'Tungthichanvai' && enteredPassword === 'Ngaphaiyeutungforever') {
      // Redirect to the home page
      router.push('/home');
    } else {
      // Handle invalid credentials (you might want to show an error message)
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="container mx-auto max-w-md p-8 bg-white rounded-md shadow-md">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center text-black">Sign in</h1>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          type="text"
          required
          placeholder="Username"
          name="email"
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          type="password"
          required
          placeholder="Password"
          name="password"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
