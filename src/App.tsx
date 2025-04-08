import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import Container from "./components/Container";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Estudar React",
      description: "Ler a documentação oficial e criar um projeto simples.",
      isCompleted: false,
    },
    {
      id: "2",
      title: "Configurar Tailwind CSS",
      description: "Integrar o Tailwind em um projeto React com Vite.",
      isCompleted: false,
    },
    {
      id: "3",
      title: "Praticar JavaScript",
      description: "Resolver exercícios de lógica no Codewars.",
      isCompleted: false,
    },
    {
      id: "4",
      title: "Fazer deploy no Vercel",
      description: "Subir o projeto React finalizado no Vercel.",
      isCompleted: false,
    },
    {
      id: "5",
      title: "Criar portfólio",
      description:
        "Montar uma página pessoal com projetos e informações de contato.",
      isCompleted: false,
    },
  ]);

  const onChangeCompleted = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      //selecionar a tarefa clicada
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Não precisa atualizar
      return task;
    });
    setTasks(newTasks);
  };

  const onDeleteTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const onAddTask = (title: string, description: string): void => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <Container>
        <AddTask onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onChangeCompleted={onChangeCompleted}
          onDeleteTask={onDeleteTask}
        />
      </Container>
    </>
  );
}

export default App;
