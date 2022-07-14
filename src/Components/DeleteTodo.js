const DeleteTodo = ({ todos, deleteTaskDone }) => {
    const doneTask = todos.filter((todo) => todo.status === true);
    return (
        <div className="footer">
            <span style={{ fontWeight: 600, paddingRight: "1em" }}>Total:</span>
            <span>
                {todos.length +
                    " task (" +
                    doneTask.length +
                    " task done, " +
                    (todos.length - doneTask.length) +
                    " task doing)"}
            </span>
            {/* Delete All Task Done */}
            <button className="btn_delete_all" onClick={deleteTaskDone}>
                {" "}
                Delete All
            </button>
        </div>
    );
};

export default DeleteTodo;
