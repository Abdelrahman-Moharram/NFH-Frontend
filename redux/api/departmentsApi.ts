import { apiSlice } from "../services/apiSlice";

const base_url = 'departments/'

const departmentsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getDepartmentsList: builder.query({
            query:()=>({
                url:base_url,
            }),
            providesTags:['departments']
        }),

        getDepartmentDetails: builder.query({
            query:({dept_name}:{dept_name:string})=>({
                url:base_url+dept_name+'/',
            }),
            providesTags:['departments']
        }),
    }) 
})


export const {
    useGetDepartmentsListQuery,
    useGetDepartmentDetailsQuery

} = departmentsApiSlice