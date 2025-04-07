'use client';
import { SignUp } from '@clerk/nextjs'

// Add this function to enable static exports
export function generateStaticParams() {
  return [
    { 'sign-up': [] },
    { 'sign-up': ['start'] },
    { 'sign-up': ['factor-one'] },
    { 'sign-up': ['factor-two'] }
  ]
}

export default function Page() {
  return <SignUp />
}