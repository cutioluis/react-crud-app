import React, { useState } from "react";
import "./TodoApp.css";
import Todo from "./Todo";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const handdleSubmit = (e) => {
    /* Cancel event default submit */
    e.preventDefault();

    /* Now create a new task */
    if (title == "") {
      alert("Please enter a task");
    } else {
      const mewTask = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      };

      setTasks([...tasks, mewTask]);
    }
  };

  const handdleChange = (e) => {
    setTitle(e.target.value);
  };

  const handdleUpdate = (id, value) => {
    const temp = [...tasks];
    const item = temp.find((t) => t.id === id);
    item.title = value;
    setTasks(temp);
  };

  const handdleDelete = (id) => {
    const temp = tasks.filter((t) => t.id !== id);
    setTasks(temp);
  };

  return (
    <section>
      <form className="container-form" onSubmit={handdleSubmit} action="">
        <input
          className="input-text"
          onChange={handdleChange}
          type="text"
          placeholder="Task name her..."
        />
        <input value="Add task" type="submit" />
      </form>
      {
        /* Render all tasks */
        tasks.map((item) => (
          <Todo
            id={item.id}
            item={item}
            onUpdate={handdleUpdate}
            onDelete={handdleDelete}
          />
        ))
      }
    </section>
  );
};

export default TodoApp;
