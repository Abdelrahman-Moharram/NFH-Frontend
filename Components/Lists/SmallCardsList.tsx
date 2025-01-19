"use client"
import React, { useEffect, useState } from 'react'
import SmallCard from '../Cards/SmallCard'
import { ImageSkeleton } from '../Common';

interface itemType{
  label:string
  href:string
  icon?:React.ReactNode
  image?:string
  description?: string
  color:string
}
interface props{
    items: itemType[]
    preLink: string
    SkeletonNum: number;
    skeletonWidth?:string
    skeletonHeight?:string,
    isLoading?:boolean
}
const SmallCardsList = ({items, preLink, SkeletonNum, skeletonHeight, skeletonWidth, isLoading}:props) => {
  
    const [waitingDelay, setWaitingDelay] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setWaitingDelay(false)
      },3000)
    },[])
    const handleImageSkeleton = ({SkeletonNum, height='124px', width='150px'}:{SkeletonNum:number, height?:string, width?:string})=>{
        const total = [];
        for(let i=0; i < SkeletonNum; i ++)
          total.push(<ImageSkeleton key={i} height={height} width={width} rounded='10px' />)
        return total
      }
     
  return (
    <div className={items?.length?"grid grid-cols-2 gap-5 sm:grid-cols-3":""}>
    {
      items?.length || (isLoading !== true && !waitingDelay)? 
        items?.length?
          items.map((item:itemType)=>(
            <SmallCard preLink={preLink} item={item} key={item.href} />
          ))
      
      :
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {handleImageSkeleton({SkeletonNum:SkeletonNum, width:skeletonWidth, height:skeletonHeight})}
        </div>
      :null
    }
    </div>
  )
}

export default SmallCardsList
