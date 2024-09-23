import { useToast } from "@/hooks/use-toast";
import { todos } from "../data";
import Task from "./task";

type TTodo = (typeof todos)[number];

const checkATodo = ({ taskId }: { taskId: number }) => {
  console.log("Checking a todo with id: ", taskId);
};

const unCheckATodo = ({ taskId }: { taskId: number }) => {
  console.log("Unchecking a todo with id: ", taskId);
};

export default function Todos({ items }: { items: Array<TTodo> }) {
  const { toast } = useToast();

  const handleOnChangeTodo = (task: TTodo) => {
    if (task.isCompleted) {
      unCheckATodo({ taskId: task.id });
    } else {
      toast({
        title: "🥙 Task completed",
        description: "You have completed a task",
        duration: 3000,
      });
      checkATodo({ taskId: task.id });
    }
  };

  return items.map((task: TTodo, idx: number) => (
    <Task
      key={task.id}
      data={task}
      isCompleted={task.isCompleted}
      handleOnChange={() => handleOnChangeTodo(task)}
    />
  ));
}
