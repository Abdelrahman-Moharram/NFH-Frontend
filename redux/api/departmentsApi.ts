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

        getDepartmentReports: builder.query({
            query:({dept_name}:{dept_name:string})=>({
                url:base_url+dept_name+'/reports/',
            }),
        }),
        
        getFormDepartmentDetails: builder.mutation({
            query:({dept_name}:{dept_name:string})=>({
                url:base_url+'edit/'+dept_name+'/',
            }),
            invalidatesTags:['departments']
        }),
        editDepartment: builder.mutation({
            query:({dept_name, form}:{dept_name:string, form:FormData})=>({
                url:base_url+'edit/'+dept_name+'/',
                body:form,
                method:'PUT'
            }),
            invalidatesTags:['departments']
        }),
        
        addDepartment: builder.mutation({
            query:({form}:{form:FormData})=>({
                url:base_url+'add/',
                body:form,
                method:'POST',
            }),
            invalidatesTags:['departments']
        }),
    }) 
})


export const {
    useGetDepartmentsListQuery,
    useGetDepartmentDetailsQuery,
    useGetDepartmentReportsQuery,
    useGetFormDepartmentDetailsMutation,
    useAddDepartmentMutation,
    useEditDepartmentMutation,

} = departmentsApiSlice