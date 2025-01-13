'use client'
import Link from "next/link";
import SideNavDropDownItem from "./SideNavDropDownItem";
import { useAppSelector } from "@/redux/hooks";
import { LogoDark } from "../utils/Icons";
import { useGetDepartmentsListQuery } from "@/redux/api/departmentsApi";


// const 

export default function SideNav() {
    
    const {role} = useAppSelector(state => state.auth.user)
    const {data, isLoading} = useGetDepartmentsListQuery(undefined)
    // const casesInnerLinks = [
    //     {title:'إضافة قضية', link:'/cases/add'},
    //     {title:'جميع القضايا', link:'/cases'}, 
    //     {title:'القضايا المنتهية', link:'/cases?filter=finished'},
    //     {title:'قضايا اللجنة التمويلية', link:'/cases?filter=financial'},
    // ]
    
    // const sessionsInnerLinks =()=>{
    
    //     const sessions = [
    //         {title:'جلسات اليوم', link:'/sessions?filter=daily'}, 
    //         {title:'الجلسات الأسبوعية', link:'/sessions?filter=weekly'},
    //         {title:'الجلسات القائمة', link:'/sessions?filter=active'},
    //         {title:'الجلسات المنتهية', link:'/sessions?filter=finished'},
    //         {title:'جميع الجلسات', link:'/sessions'}, 
    //     ]
    //     if(role && role.toLocaleLowerCase() === 'lawyer')
    //         sessions.unshift({title:'جلساتي', link:'/sessions?filter=mine'})
    
    //     return sessions
    // }

    // const settingsInnerLinks =()=>{
    
    //     const settings = [
    //         {title:'المدن', link:'/settings/cities'}, 
    //         {title:'المحاكم', link:'/settings/courts'},
    //         {title:'حالات القضايا', link:'/settings/states'},
    //         {title:'أنواع القضايا', link:'/settings/litigation-types'},
    //         // {title:'الدوائر', link:'/settings/circulars'},
    //         {title:'المستخدمين', link:'/settings/users'},
    //         {title:'الأدوار', link:'/settings/roles'}, 
    //         {title:'العملاء', link:'/settings/customers'},
    //         {title:'المحامين', link:'/settings/lawyers'},
    //     ]
        
    
    //     return settings
    // }
    console.log(data);
    
    
    return (
        <div className={"w-[62px] hover:w-[250px] relative transition-all duration-300"}>
            <div className={' w-[62px] hover:w-[250px] h-full fixed transition-all delay-50 bg-secondary drop-shadow-2xl text-white'}>
                <ul className="h-full overflow-y-auto overflow-x-hidden py-5 px-1 space-y-1 side-nav-ul">
                    <li className='mb-5'>
                        <Link href={'/'}>
                            <div className="mx-auto w-fit">
                                <LogoDark 
                                    height="35"
                                    width="35"
                                />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <SideNavDropDownItem 
                            title="الصفحة الرئيسية"
                            innerLinks={[]}
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 18V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            }
                            baseKey=''
                        />
                    </li>  
                    {
                        isLoading?
                            null
                        :
                            data?.departments?
                                data?.departments.map((department:any)=>(
                                    <li>
                                        
                                        <SideNavDropDownItem 
                                            title={department?.name}
                                            // innerLinks={[]}
                                            // icon={
                                            //     department?.icon
                                            // }
                                            icon=""
                                            baseKey={"departments/"+department?.slug}
                                        />
                                    </li>
                                ))

                            :null
                    }
                    
                </ul>
                
            </div>
        </div>
    );
}