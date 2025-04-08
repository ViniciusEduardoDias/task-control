import { ChevronRightIcon, TrashIcon } from "@heroicons/react/24/outline";

type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TasksProps = {
  tasks: Task[];
  onChangeCompleted: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
};

const Tasks = ({ onDeleteTask, onChangeCompleted, tasks }: TasksProps) => {
  return (
    <ul className="w-2/3 space-y-2 p-4 bg-slate-100 rounded-md shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between gap-1">
          <button
            className={`text-start w-full bg-slate-300 p-2 rounded-sm hover:bg-slate-900 hover:text-white transition duration-5000 ease-in-out ${
              task.isCompleted ? "line-through" : ""
            }`}
            onClick={() => onChangeCompleted(task.id)}
          >
            {task.title}
          </button>

          <button className="bg-slate-300 p-2 rounded-sm hover:bg-slate-900 hover:text-white transition duration-5000 ease-in-out">
            <ChevronRightIcon className="size-4" />
          </button>

          <button
            className="bg-slate-300 p-2 rounded-sm hover:bg-slate-900 hover:text-white transition duration-5000 ease-in-out"
            onClick={() => onDeleteTask(task.id)}
          >
            <TrashIcon className="size-4" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
