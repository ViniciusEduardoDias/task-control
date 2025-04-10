import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

type TaskPageProps = {
  title: string;
  description: string;
};

export default function TaskPage({ title, description }: TaskPageProps) {
  const navigate = useNavigate();
  return (
    <div className="w-full p-6">
      <div className="w-[500] space-y-4">
        <div className="w-full flex flex-col sm:flex-row items-center justify-center relative">
          <ChevronLeftIcon
            className="size-4 absolute left-0"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-3xl text-center">Detalhes da Tarefa</h1>
        </div>
        <h1 className="text-2xl text-slate-700 font-bold mb-2">{title}</h1>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
