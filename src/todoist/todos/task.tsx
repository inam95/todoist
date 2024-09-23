import { Checkbox } from "@/components/ui/checkbox";
import { todos } from "../data";
import clsx from "clsx";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddTaskDialog from "../add-tasks/add-task-dialog";

export default function Task({
  data,
  isCompleted,
  handleOnChange,
  showDetails,
}: {
  data: (typeof todos)[number];
  isCompleted: boolean;
  handleOnChange: any;
  showDetails?: boolean;
}) {
  const { taskName } = data;

  return (
    <div
      key={data.id}
      className="flex items-center space-x-2 border-b-2 p-2 border-gray-100 animate-in fade-in"
    >
      <Dialog>
        <div className="flex gap-2 items-center justify-end w-full">
          <div className="flex gap-2 items-center justify-end w-full">
            <div className="flex gap-2 w-full">
              <Checkbox
                id="todo"
                className={clsx(
                  "w-5 h-5 rounded-xl",
                  isCompleted &&
                    "data-[state=checked]:bg-gray-300 border-gray-300"
                )}
                checked={isCompleted}
                onCheckedChange={handleOnChange}
              />
              <DialogTrigger asChild>
                <div className="flex flex-col items-start">
                  <button
                    className={clsx(
                      "text-sm font-normal text-left",
                      isCompleted && "line-through text-foreground/30"
                    )}
                  >
                    {taskName}
                  </button>
                </div>
              </DialogTrigger>
            </div>
            <AddTaskDialog data={data} />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
