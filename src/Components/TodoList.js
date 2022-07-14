import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ todos, doneTodo, setUpdateValue, deleteTodo }) => {
    return (
        <div className="list_todo">
            {todos &&
                todos.map((todo, index) => (
                    <div key={index} className="todo">
                        <li key={index} className={todo.status ? "done" : ""}>
                            <span className="number_todo">{index + 1}</span>
                            <span className="text_todo">{todo.value}</span>
                        </li>
                        <div className="icon">
                            <BsFillCheckCircleFill
                                className="done_todo"
                                onClick={() => doneTodo(todo.id)}
                            />
                            {todo && todo.status ? (
                                ""
                            ) : (
                                <MdModeEdit
                                    className="edit_todo"
                                    onClick={() => setUpdateValue(todo)}
                                />
                            )}

                            <AiFillDelete
                                className="delete_todo"
                                onClick={() => deleteTodo(todo.id)}
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TodoList;
