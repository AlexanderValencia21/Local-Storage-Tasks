import TaskRow from "./TaskRow";
export default function TaskTable({ tasks, toggleTask, showCompleted=false }) {
  function taskTableRows(doneValue) {
    console.log(doneValue)
    return tasks.filter(task=>task.done===doneValue)
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));
  }
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted )}</tbody>
    </table>
  );
}
