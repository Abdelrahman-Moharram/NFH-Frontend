import { apiSlice } from "../services/apiSlice";

const base_url = 'reports/connections/'

const connectionssApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getConnectionsList: builder.query({
            query:()=>({
                url:base_url,
            }),
            providesTags:['connections']
        }),
        getConnectionFormDropdowns: builder.query({
            query:()=>({
                url:base_url+'form-dropdowns/',
                method:'GET',
            }),
        }),
        addConnection: builder.mutation({
            query:({form}:{form:FormData})=>({
                url:base_url+'add/',
                body:form,
                method:'POST',
            }),
            invalidatesTags:['connections']
        }),
        deleteConnection: builder.mutation({
            query:({connection_id}:{connection_id:string})=>({
                url:base_url+connection_id+'/delete/',
                method:'DELETE',
            }),
            invalidatesTags:['connections']
        }),
        

        
    }) 
})


export const {
    useGetConnectionsListQuery,
    useAddConnectionMutation,
    useGetConnectionFormDropdownsQuery,
    useDeleteConnectionMutation

} = connectionssApiSlice