import Link from 'next/link'
import React from 'react'
import ImageSkeleton from './ImageSkeleton';
import { IoMdArrowDropright } from 'react-icons/io';

interface item{
  href: string;
  title: string;
  current?: boolean
}
const Breadcrumb = ({items}:{items:item[]|undefined}) => {
  return (
    
<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-1 text-sm text-color">
    {
        items?.length?
            items.map((item, i)=>(
                <li className="flex items-center" key={i}>
                    {
                        i !== 0?
                          <div className="mx-3">
                            <IoMdArrowDropright />
                          </div>

                        :null
                    }
                    {
                      item?.current?
                          <p className="font-semibold text-color flex gap-2 items-center transition "> {item.title} </p>
                        :
                          <Link href={item.href} className="font-semibold text[20px] text-[#3091F2] hover:text-color flex gap-2 items-center transition "> {item.title} </Link>

                    }
                </li>
            ))
        : 
        <ImageSkeleton width='100px' height='40px' />
    }
  </ol>
</nav>
  )
}

export default Breadcrumb
