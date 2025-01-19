import Link from 'next/link'
import React from 'react'

interface item{
    href:string,
    title?:string,
    icon: React.ReactNode
}
interface Props {
    item:item
}
const SideNavItem = ({item}:Props) => {
  return (
    <Link href={item.href} title={item.title} className="block p-4 rounded-full bg-transparent text-xl text-color transition-all hover:bg-secondary hover:text-white">
        {item.icon}
    </Link>
  )
}

export default SideNavItem
