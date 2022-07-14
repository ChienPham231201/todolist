const UpdateTodoForm = ({
    updateValue,
    cancelUpdate,
    updateTodo,
    changeValue,
}) => {
    return (
        <div className="form_todo">
            <input
                type="text"
                placeholder="Update a task..."
                value={updateValue && updateValue.value}
                onChange={(e) => changeValue(e)}
            />
            <button className="btn-update" onClick={updateTodo}>
                Update
            </button>
            <button className="btn-cancel" onClick={cancelUpdate}>
                Cancel
            </button>
        </div>
    );
};

export default UpdateTodoForm;
