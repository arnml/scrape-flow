'use client';
import { usePathname } from 'next/navigation'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb';
import { MobileSideBar } from './Sidebar';
import { SignedIn, SignOutButton, UserButton } from '@clerk/nextjs';

function BreadcrumbHeader() {
  const pathname = usePathname();
  const paths = pathname === "/"? [""] : pathname?.split("/");

  return (
    <div className='flex items-center justify-between w-full px-2'>
      <MobileSideBar/>
      <Breadcrumb>
        <BreadcrumbList>
            {paths.map((path, index) =>(
                <React.Fragment key={index}>
                    <BreadcrumbItem>
                        <BreadcrumbLink className='capitalize' href={`/${path}`}>
                            {path === "" ? "home" : path}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </React.Fragment>
            ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className='flex items-center gap-2 px-2'>
        <SignedIn>
          <UserButton />
          <SignOutButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default BreadcrumbHeader
