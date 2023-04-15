import React from 'react';

export function Layout({ children } : { children : React.ReactNode }) {
    return (
        <div className='bg-hero-pattern bg-cover bg-cover-no-repeat bg-center h-screen w-full'>
            {children}
        </div>
    );
}
