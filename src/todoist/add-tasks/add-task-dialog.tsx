import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { subTodos, todos } from "../data";
import { Calendar, ChevronDown, Flag, Hash, Tag } from "lucide-react";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Task from "../todos/task";
import { AddTaskWrapper } from "./add-task-button";

export default function AddTaskDialog({
  data,
}: {
  data: (typeof todos)[number];
}) {
  const { taskName, description, projectId, labelId, priority, dueDate } = data;

  const todoDetails = [
    {
      labelName: "Project",
      value: "Get Started",
      icon: <Hash className="w-4 h-4 text-primary" />,
    },
    {
      labelName: "Due Date",
      value: format(new Date(dueDate), "MMM dd, yyyy"),
      icon: <Calendar className="w-4 h-4 text-primary" />,
    },
    {
      labelName: "Priority",
      value: "P1",
      icon: <Flag className="w-4 h-4 text-primary" />,
    },
    {
      labelName: "Label",
      value: "Urgent",
      icon: <Tag className="w-4 h-4 text-primary  " />,
    },
  ];

  return (
    <DialogContent className="max-w-4xl lg:h-4/6 flex flex-col md:flex-row lg:justify-between text-right">
      <DialogHeader className="w-full">
        <DialogTitle>{taskName}</DialogTitle>
        <DialogDescription>
          <p className="my-2 capitalize">{description}</p>
          <div className="flex items-center gap-1 mt-12 border-b-2 border-gray-100 pb-2 flex-wrap sm:justify-between lg:gap-0 ">
            <div className="flex gap-1">
              <ChevronDown className="w-5 h-5 text-primary" />
              <p className="font-bold flex text-sm text-gray-900">Sub-tasks</p>
            </div>
            <div>
              <Button>Suggest</Button>
            </div>
          </div>
          <div className="pl-4">
            {subTodos
              .filter((task) => task.isCompleted)
              .map((task) => {
                return (
                  <Task
                    key={task.id}
                    data={task}
                    isCompleted={task.isCompleted}
                    handleOnChange={() => console.log(task.id)}
                  />
                );
              })}
          </div>
          <div className="pb-4">
            <AddTaskWrapper parentTask={data} />
          </div>
          {subTodos
            .filter((task) => !task.isCompleted)
            .map((task) => {
              return (
                <Task
                  key={task.id}
                  data={task}
                  isCompleted={task.isCompleted}
                  handleOnChange={() => console.log(task.id)}
                />
              );
            })}
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-2 bg-gray-100 lg:w-1/2">
        {todoDetails.map(({ labelName, value, icon }, idx) => (
          <div
            key={`${value}-${idx}`}
            className="grid gap-2 p-4 border-b-2 w-full"
          >
            <Label className="flex items-start">{labelName}</Label>
            <div className="flex text-left items-center justify-start gap-2 pb-2">
              {icon}
              <p className="text-sm">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </DialogContent>
  );
}
