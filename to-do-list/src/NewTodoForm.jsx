import { useState } from "react";

export function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = function(e) {
    e.preventDefault();
    if (newItem == "") return;
    props.onSubmit(newItem);
    setNewItem('')
  };
  
  return (
    <>
      <h2 htmlFor="item" className="name">
        Add a To-do
      </h2>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            className="input"
          />
        </div>
        <button className="btn"> Add </button>
      </form>
    </>
  );
}
