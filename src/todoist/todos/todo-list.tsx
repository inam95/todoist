"use client";

import { useState } from "react";
import { todos as todosData } from "../data";
import CompletedTodos from "./completed-todos";
import Todos from "./todos";
import { AddTaskWrapper } from "../add-tasks/add-task-button";

export default function TodoList() {
  const [todos, setTodos] = useState(todosData);

  const totalTodos = todos.filter((task) => task.isCompleted).length;
  return (
    <div className="xl:px-40">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Inbox</h1>
      </div>
      <div className="flex flex-col gap-1 py-4">
        <Todos items={todos.filter((task) => !task.isCompleted)} />
      </div>
      <AddTaskWrapper />
      <div className="flex flex-col gap-1 py-4">
        <Todos items={todos.filter((task) => task.isCompleted)} />
      </div>
      <CompletedTodos totalTodos={totalTodos} />
    </div>
  );
}
