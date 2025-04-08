import { ChevronRightIcon } from "lucide-react";

type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TasksProps = {
  tasks: Task[];
};

const Tasks = ({ tasks }: TasksProps) => {
  return (
    <ul className="space-y-2 p-6 bg-slate-100 rounded-md shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between gap-2">
          <button className="w-full bg-slate-300 p-2 rounded-md hover:bg-slate-900 hover:text-white transition duration-5000 ease-in-out">
            {task.title}
          </button>
          <button className="bg-slate-300 p-2 rounded-md hover:bg-slate-900 hover:text-white transition duration-5000 ease-in-out">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
