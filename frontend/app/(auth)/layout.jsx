import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-md'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
