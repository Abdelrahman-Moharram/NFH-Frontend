import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface itemType{
    label:string
    href:string
    icon?:React.ReactNode | string
    icon_str?: string
    image?:string
    description?: string
    color:string
  }

interface props{
    item:itemType;
    preLink: string
}
const SmallCard = ({item, preLink}:props) => {
   
  return (
    <Link
      key={item.href}
      className="block rounded-xl border border-gray-100 p-4 default-shadow transition-all hover:scale-105"
      href={`/${preLink}/`+item.href}
    >
      <div className={`flex items-end gap-3 ${item.color}`}>
        <span className="inline-block rounded-lg bg-gray-50 p-1">
        {
          item.image?
            <Image
              height={40}
              width={40}
              src={process.env.NEXT_PUBLIC_HOST + item.image} 
              alt={item.label} 
              unoptimized
            />
          :
          item.icon?
            item.icon
          :
          item.icon_str?
            <div className={``}
              style={{color:`${item.color}`}} 
              dangerouslySetInnerHTML={{ __html: item.icon_str }}
            />
          :
            null

        }
        </span>

        <h2 className="mt-2 font-bold">{item.label}</h2>  
      </div>  

      <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
        {item.description}
      </p>
    </Link>
  )
}

export default SmallCard