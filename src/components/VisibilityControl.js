export default function VisibilityControl({
  isChecked,
  setShowCompleted,
  cleanTask,
}) {
  function handleDelete() {
    if (window.confirm("Are you sure?")) {
      cleanTask();
    }
  }
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Show Tasks Done</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Clear
      </button>
    </div>
  );
}
