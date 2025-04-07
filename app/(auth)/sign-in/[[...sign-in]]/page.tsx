import { SignIn } from '@clerk/nextjs'

// Add this function to enable static exports
export function generateStaticParams() {
  return [
    { 'sign-in': [] },
    { 'sign-in': ['start'] },
    { 'sign-in': ['factor-one'] },
    { 'sign-in': ['factor-two'] }
  ]
}

export default function Page() {
  return <SignIn />
}