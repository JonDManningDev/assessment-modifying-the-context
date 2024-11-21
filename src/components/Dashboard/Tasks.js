import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../../contexts/TasksContext";

function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext);

 const handleMarkComplete = (taskId) => {
   const updatedTasks = tasks.map((task) =>
     task.id === taskId ? { ...task, complete: !task.complete } : task
   );
   setTasks(updatedTasks);
 };


  const taskElements = tasks.map((task) => <Task key={task.id} task={task} taskId={task.id} handleMarkComplete={handleMarkComplete} />);

  return (
    <section>
      <h3 className="text-center">Tasks</h3>
      <div className="d-flex flex-column mt-3">{taskElements}</div>
    </section>
  );
}

export default Tasks;
