import { useState } from "react";
import Input from "./Input";

export type AddTaskProps = {
  onAddTask: (title: string, description: string) => void;
};

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="flex flex-col w-2/3 space-y-2 p-4 bg-slate-100 rounded-md shadow-md gap-2">
      <h1 className="text-lg font-semibold text-slate-500">Adicionar tarefa</h1>
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 font-bold rounded-md hover:bg-slate-800"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os dados corretamente!");
          }
          onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTask;
