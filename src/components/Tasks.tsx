import { ChevronRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TasksProps = {
  tasks: Task[];
  onChangeCompleted: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

const Tasks = ({ onDeleteTask, onChangeCompleted, tasks }: TasksProps) => {
  const navigate = useNavigate();

  const handleDetalhes = (title: string, description: string) => {
    navigate(
      `/?pagina=task&title=${encodeURIComponent(
        title
      )}&description=${encodeURIComponent(description)}`
    );
  };

  return (
    <ul className="w-full space-y-2 p-4 bg-slate-100 rounded-md shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between gap-1">
          {/* <button
            className={`text-start w-full bg-slate-300 p-2 rounded-sm hover:bg-slate-800 hover:text-white transition duration-5000 ease-in-out ${
              task.isCompleted ? "line-through" : ""
            }`}
            onClick={() => onChangeCompleted(task.id)}
          >
            {task.title}
          </button> */}

          <Button
            className={`text-start w-full ${
              task.isCompleted ? "line-through" : ""
            }`}
            onClick={() => onChangeCompleted(task.id)}
          >
            {task.title}
          </Button>

          <Button onClick={() => handleDetalhes(task.title, task.description)}>
            <ChevronRightIcon className="size-4" />
          </Button>

          <Button onClick={() => onDeleteTask(task.id)}>
            <TrashIcon className="size-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
