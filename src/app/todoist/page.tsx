import { MobileNav } from "@/todoist/nav/mobile-nav";
import { Sidebar } from "@/todoist/nav/side-bar";

export default function Todoist() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <MobileNav />
        {/* <main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
        <TodoList />
      </main> */}
      </div>
    </div>
  );
}
