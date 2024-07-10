export function Todos({todos}){
    return <div>
            {todos.map(function(todo){
                
                 return <div key={todo._id}>
                
                    
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "completed" :"mark as completed" }</button>
                </div>
            })}

    </div>
}