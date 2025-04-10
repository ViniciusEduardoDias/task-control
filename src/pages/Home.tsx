import React, { useEffect, useState } from "react";
import { Tasks, Container } from "../components";
import AddTask from "../components/AddTask";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onChangeCompleted = (taskId: string) => {
    const newTasks = tasks.map((task: Task) => {
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
    const newTasks = tasks.filter((task: Task) => task.id !== taskId);
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
      <Container>
        <AddTask onAddTask={onAddTask} />
        <div id="tasks" className="w-full">
          <Tasks
            tasks={tasks}
            onChangeCompleted={onChangeCompleted}
            onDeleteTask={onDeleteTask}
          />
        </div>
      </Container>
    </>
  );
}

export default Home;
