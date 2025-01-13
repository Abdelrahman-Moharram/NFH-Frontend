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
    }) 
})


export const {
    useGetDepartmentsListQuery

} = departmentsApiSlice