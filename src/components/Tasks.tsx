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
    <ul className="space-y-2 p-4 bg-slate-100 rounded-md shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-1">
          <Button
            className={`flex-1 truncate sm:w-full text-start ${
              task.isCompleted ? "line-through" : ""
            }`}
            onClick={() => onChangeCompleted(task.id)}
          >
            {task.title}
          </Button>

          <Button
            className="flex-shrink-0"
            onClick={() => handleDetalhes(task.title, task.description)}
          >
            <ChevronRightIcon className="size-4" />
          </Button>

          <Button
            className="flex-shrink-0"
            onClick={() => onDeleteTask(task.id)}
          >
            <TrashIcon className="size-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
