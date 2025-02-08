export interface chart_types {
    type : 'bar' | 'line' | 'pie' | 'doughnut'
    data: any; 
    options?: any;
}

export interface departmentFormType{
    name:string
    ar_name:string
    icon:File | string
    color:string
}