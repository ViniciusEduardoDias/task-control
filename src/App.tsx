import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import Container from "./components/Container";

type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Estudar React",
      description: "Ler a documentação oficial e criar um projeto simples.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Configurar Tailwind CSS",
      description: "Integrar o Tailwind em um projeto React com Vite.",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Praticar JavaScript",
      description: "Resolver exercícios de lógica no Codewars.",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Fazer deploy no Vercel",
      description: "Subir o projeto React finalizado no Vercel.",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Criar portfólio",
      description:
        "Montar uma página pessoal com projetos e informações de contato.",
      isCompleted: true,
    },
  ]);

  return (
    <>
      <Header />
      <Container>
        <Tasks tasks={tasks} />
      </Container>
    </>
  );
}

export default App;
