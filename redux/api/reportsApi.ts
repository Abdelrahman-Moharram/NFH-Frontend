import { apiSlice } from "../services/apiSlice";

const base_url = 'reports/'

const reportsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getFormDropdowns: builder.query({
            query:()=>({
                url:base_url+'form-dropdowns/',
            }),
        }),
        getChartCols: builder.mutation({
            query:({chart_id}:{chart_id:string})=>({
                url:base_url+`charts/${chart_id}/cols/`,
            }),
        }),
        addChartAxis: builder.mutation({
            query:({form, chart_id}:{form:FormData, chart_id:string})=>({
                url:base_url+'charts/'+chart_id+'/axis/add/',
                method:'POST',
                body:form,
            }),
        }),
        addReport: builder.mutation({
            query:({form, step}:{form:FormData, step:number})=>({
                url:base_url+'add/',
                method:'POST',
                body:form,
                params:{step}
            }),
        }),
        addReportBaseData: builder.mutation({
            query:({form}:{form:FormData})=>({
                url:base_url+'add/base-data/',
                method:'POST',
                body:form,
            }),
        }),
        addReportChartData: builder.mutation({
            query:({form, report_id}:{form:FormData, report_id:string})=>({
                url:base_url+'add/chart-data/'+report_id+'/',
                method:'POST',
                body:form,
            }),
        }),
        

        
    }) 
})


export const {
    useGetFormDropdownsQuery,
    useAddReportMutation,
    useAddReportBaseDataMutation,
    useAddReportChartDataMutation,
    useGetChartColsMutation,
    useAddChartAxisMutation

} = reportsApiSlice