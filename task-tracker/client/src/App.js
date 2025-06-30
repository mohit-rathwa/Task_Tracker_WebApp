import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async () => {
    if (!title) return;
    await axios.post("http://localhost:5000/tasks", { title, completed: false });
    setTitle("");
    fetchTasks();
  };

  return (
    <div>
      <h2>Task Tracker</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;