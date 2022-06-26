import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
