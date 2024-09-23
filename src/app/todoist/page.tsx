import { MobileNav } from "@/todoist/nav/mobile-nav";
import { SideBar } from "@/todoist/nav/side-bar";
import TodoList from "@/todoist/todos/todo-list";

export default function Todoist() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <MobileNav />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
          <TodoList />
        </main>
      </div>
    </div>
  );
}
