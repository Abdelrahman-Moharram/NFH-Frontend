import Link from 'next/link'
import React from 'react'

const MainCard = ({ href, title, description, icon }:{ href:string,  title:string, description:string, icon:React.ReactNode}) => {
  return (
    <Link
        href={href}
        className="rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6 drop-shadow-md"
      >
        <span className="inline-block rounded-sm bg-gray-100 p-1 text-white text-4xl">
          {icon}
        </span>

        <h3 className="mt-0.5 text-lg font-bold text-color">
            {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-color/90">
          {description}
        </p>

        <Link href={href} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
          Find out more

          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </Link>
    </Link>
  )
}

export default MainCard
