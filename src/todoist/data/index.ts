export const todos = [
  {
    userId: 1,
    projectId: 1,
    labelId: 1,
    id: 1,
    taskName: "Accept terms and conditions",
    isCompleted: true,
    priority: 1,
    dueDate: "2021-09-01",
    description: "You must accept the terms and conditions to proceed",
  },
  {
    userId: 1,
    projectId: 1,
    labelId: 1,
    id: 2,
    taskName: "Read documentation",
    isCompleted: false,
    priority: 1,
    dueDate: "2021-09-01",
    description: "You must accept the terms and conditions to proceed",
  },
  {
    userId: 1,
    projectId: 1,
    labelId: 1,
    id: 3,
    taskName: "Complete the project",
    isCompleted: false,
    priority: 1,
    dueDate: "2021-09-01",
    description: "You must accept the terms and conditions to proceed",
  },
];

export const subTodos = [
  {
    id: 1,
    userId: 1,
    projectId: 1,
    labelId: 1,
    parentId: 1,
    taskName: "Sub task 1",
    isCompleted: false,
    priority: 1,
    dueDate: "2021-09-01",
    description: "You must accept the terms and conditions to proceed",
  },
  {
    id: 2,
    userId: 1,
    projectId: 1,
    labelId: 1,
    parentId: 1,
    taskName: "Sub task 2",
    isCompleted: false,
    priority: 1,
    dueDate: "2021-09-01",
    description: "You must accept the terms and conditions to proceed",
  },
  {
    id: 2,
    userId: 1,
    projectId: 1,
    labelId: 1,
    parentId: 1,
    taskName: "Sub task 2",
    isCompleted: true,
    priority: 1,
    dueDate: "2021-09-01",
    description: "You must accept the terms and conditions to proceed",
  },
];

export const labels = [
  {
    id: 1,
    name: "Urgent",
    type: "system",
    userId: null,
  },
];

export const projects = [
  {
    id: 1,
    userId: null,
    type: "system",
    name: "Get started",
  },
];
