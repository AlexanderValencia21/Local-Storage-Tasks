import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import Container from "./components/Container";

function App() {
  const [taskItems, setTaskItem] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItem([...taskItems, { name: taskName, done: false }]);
    }
  }
  function toggleTask(task) {
    setTaskItem(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  }
  function deleteTask() {
    setTaskItem(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  }
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItem(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);
  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={deleteTask}
        />
        {showCompleted === true && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}
export default App;
