import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodoForm from "./AddTodoForm";
import DeleteTodo from "./DeleteTodo";
import TodoList from "./TodoList";
import UpdateTodoForm from "./UpdateTodoForm";

function Todo() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState(() => {
        const storageTodos = JSON.parse(localStorage.getItem("todos"));
        return storageTodos ?? [];
    });
    const [updateValue, setUpdateValue] = useState("");

    //Add a task
    const addTodo = () => {
        if (!value || /^\s*$/.test(value)) {
            return;
        }
        let idTodo = uuidv4();
        let newEntry = { id: idTodo, value: value, status: false };
        setTodos((prev) => {
            const newTodo = [...prev, newEntry];

            const jsonTodos = JSON.stringify(newTodo);
            localStorage.setItem("todos", jsonTodos);
            return newTodo;
        });
        setValue("");
    };
    //Delete task
    const deleteTodo = (id) => {
        let newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(() => {
            const jsonTodos = JSON.stringify(newTodo);
            localStorage.setItem("todos", jsonTodos);
            return newTodo;
        });
    };
    //Done task
    const doneTodo = (id) => {
        let doneTodo = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, status: !todo.status };
            }
            return todo;
        });
        setTodos(() => {
            const jsonTodos = JSON.stringify(doneTodo);
            localStorage.setItem("todos", jsonTodos);
            return doneTodo;
        });
    };
    //Update task
    const updateTodo = () => {
        let updateTodo = todos.map((todo) => {
            if (todo.id === updateValue.id && updateValue.value) {
                todo = updateValue;
                return todo;
            }
            return todo;
        });
        setTodos(() => {
            const jsonTodos = JSON.stringify(updateTodo);
            localStorage.setItem("todos", jsonTodos);
            return updateTodo;
        });
        setUpdateValue("");
    };
    //Cancel update task
    const cancelUpdate = () => {
        setUpdateValue("");
    };
    //Change value input
    const changeValue = (e) => {
        let newEntry = {
            id: updateValue.id,
            value: e.target.value,
            status: updateValue.status ? true : false,
        };
        setUpdateValue(newEntry);
    };
    //Delete Task Done
    const deleteTaskDone = () => {
        const taskDoing = todos.filter((todo) => todo.status !== true);
        setTodos(() => {
            const jsonTodos = JSON.stringify(taskDoing);
            localStorage.setItem("todos", jsonTodos);
            return taskDoing;
        });
    };
    return (
        <>
            <div className="todo_list">
                {updateValue && updateValue ? (
                    <UpdateTodoForm
                        updateValue={updateValue}
                        setUpdateValue={setUpdateValue}
                        updateTodo={updateTodo}
                        cancelUpdate={cancelUpdate}
                        changeValue={changeValue}
                    />
                ) : (
                    <AddTodoForm
                        addTodo={addTodo}
                        value={value}
                        setValue={setValue}
                    />
                )}
                {todos && todos.length ? (
                    <TodoList
                        todos={todos}
                        setUpdateValue={setUpdateValue}
                        doneTodo={doneTodo}
                        deleteTodo={deleteTodo}
                    />
                ) : (
                    <p>No tasks...</p>
                )}
            </div>
            <DeleteTodo todos={todos} deleteTaskDone={deleteTaskDone} />
        </>
    );
}

export default Todo;
