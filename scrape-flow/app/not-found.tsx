import React from 'react'

function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <div className='text-center animate-fade-in'>
        <h1 className='text-6xl font-bold text-primary mb-4 animate-bounce'>404</h1>
        <h2 className='text-2xl font-semibold mb-4 animate-fade-in-up'>Page Not Found</h2>
        <p className='text-muted-foreground mb-8 max-w-md animate-fade-in-up delay-200'>Don&apos;t worry, even the best data sometimes gets lost in the internet</p>
      </div>
    </div>
  )
}

export default NotFoundPage