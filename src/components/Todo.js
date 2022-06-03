import { useState } from "react";
import "./Todo.css";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClickEdit = () => {
    setIsEditing(true);
  };

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handdleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdate = () => {
      onUpdate(item.id, newValue);
      setIsEditing(false);
    };

    return (
      <form onSubmit={handleSubmit} className="container-todo-single">
        <div className="container-todo-details">
          <input
            className="details-input"
            onChange={handdleChange}
            type="text"
            value={newValue}
          />
        </div>
        <button onClick={handleClickUpdate} className="btn btn-edit">
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="container-todo-single">
        <div className="container-todo-details">
          <span className="container-todo-title">{item.title}</span>
        </div>
        <button onClick={handleClickEdit} className="btn btn-edit">
          Edit
        </button>
        <button
          onClick={() => {
            onDelete(item.id);
          }}
          className="btn btn-delete"
        >
          Delete
        </button>
      </div>
    );
  }

  return <div>{isEditing ? <FormEdit /> : <TodoElement />}</div>;
}
