interface Todo{
    text:string
    completed:boolean
}
interface Props{
    todo:Todo[]
    toggleTodo:(selectedTodo:Todo)=>void
}