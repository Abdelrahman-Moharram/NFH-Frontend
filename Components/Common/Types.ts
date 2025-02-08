interface Step{
    number: number, 
    name: string, 
    is_done: boolean,
    component?:React.ReactNode,
    is_current?:boolean
}