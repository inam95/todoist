import { Plus } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import AddTaskInline from "./add-task-inline";
import { todos } from "../data";

export function AddTaskWrapper({
  parentTask,
  projectId,
}: {
  parentTask?: (typeof todos)[number];
  projectId?: number;
}) {
  const [showAddTask, setShowAddTask] = useState(false);

  return showAddTask ? (
    <AddTaskInline
      setShowAddTask={setShowAddTask}
      parentTask={parentTask}
      projectId={projectId}
    />
  ) : (
    <AddTaskButton onClick={() => setShowAddTask(true)} title="Add task" />
  );
}

export default function AddTaskButton({
  onClick,
  title,
}: {
  onClick: Dispatch<SetStateAction<any>>;
  title: string;
}) {
  return (
    <button className="pl-2 flex mt-2 flex-1" onClick={onClick}>
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <div className="flex items-center gap-2 justify-center">
          <Plus className="h-4 w-4 text-primary hover:bg-primary hover:rounded-xl hover:text-white" />
          <h3 className="text-base font-light tracking-tight text-foreground/70">
            Add Task
          </h3>
        </div>
      </div>
    </button>
  );
}
