import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TaskForm;
