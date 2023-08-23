export function TodoItem({completed, id, title, toggledTodo, deleteTodo}){
 return(
        <li 
        key={id}
        className="box">
        <label>
          <input 
          type="checkbox" 
          onChange={e =>toggledTodo(id, e.target.checked)} 
          checked={completed} />
          {title}
        </label>
        <button 
        className="btn btn-danger"
        onClick={() => deleteTodo(id)}> Delete </button>
      </li>
    )
}