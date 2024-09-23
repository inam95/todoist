import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Text } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { CardFooter } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { labels as labelsData, projects as projectsData, todos } from "../data";

const FormSchema = z.object({
  taskName: z.string().min(2, {
    message: "Task name must be at least 2 characters.",
  }),
  description: z.string().optional().default(""),
  dueDate: z.date({ required_error: "A due date is required" }),
  priority: z.string().min(1, { message: "Please select a priority" }),
  projectId: z.string().min(1, { message: "Please select a Project" }),
  labelId: z.string().min(1, { message: "Please select a Label" }),
});

export default function AddTaskInline({
  setShowAddTask,
  parentTask,
  projectId: myProjectId,
}: {
  setShowAddTask: Dispatch<SetStateAction<boolean>>;
  parentTask?: (typeof todos)[number];
  projectId?: number;
}) {
  const [labels, setLabels] = useState(labelsData);
  const [projects, setProjects] = useState(projectsData);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      taskName: "",
      description: "",
      priority: "1",
      projectId: "1",
      dueDate: new Date(),
      labelId: "1",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 border-2 p-2 border-gray-200 my-2 rounded-xl px-3 pt-4 border-foreground/20"
      >
        <FormField
          control={form.control}
          name="taskName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="taskName"
                  placeholder="Enter your task name"
                  required
                  className="border-0 font-semibold text-lg"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-start gap-2">
                  <Text className="ml-auto h-4 w-4 opacity-50" />
                  <Textarea
                    id="description"
                    placeholder="Description"
                    className="resize-none"
                    {...field}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "flex gap-2 w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue="1">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[1, 2, 3, 4].map((item, idx) => (
                      <SelectItem key={idx} value={item.toString()}>
                        Priority {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="labelId"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Label" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {labels.map(
                      (label: (typeof labels)[number], idx: number) => (
                        <SelectItem key={idx} value={label.id.toString()}>
                          {label?.name}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="projectId"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Project" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {projects.map(
                    (project: (typeof projects)[number], idx: number) => (
                      <SelectItem key={idx} value={project.id.toString()}>
                        {project?.name}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <CardFooter className="flex flex-col lg:flex-row lg:justify-between gap-2 border-t-2 pt-3">
          <div className="w-full lg:w-1/4"></div>
          <div className="flex gap-3 self-end">
            <Button
              className="bg-gray-300/40 text-gray-950 px-6 hover:bg-gray-300"
              variant={"outline"}
              onClick={() => setShowAddTask(false)}
            >
              Cancel
            </Button>
            <Button className="px-6" type="submit">
              Add task
            </Button>
          </div>
        </CardFooter>
      </form>
    </Form>
  );
}
