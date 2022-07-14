const AddTodoForm = ({ value, setValue, addTodo }) => {
    return (
        <div className="form_todo">
            <input
                type="text"
                placeholder="Add a task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="btn-add" onClick={addTodo}>
                Add
            </button>
        </div>
    );
};

export default AddTodoForm;
