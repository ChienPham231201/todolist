import "./App.css";
import Todo from "./Components/Todo";

function App() {
    return (
        <>
            <h1>TodoList</h1>
            <Todo />
            <p>
                <i>@Todolist with Reactjs</i>
            </p>
            <span
                style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "14px",
                }}
            >
                Add, Update, Delete, Done Task, Delete All Task Done
            </span>
        </>
    );
}

export default App;
