import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col p-6 items-center">
      <h1 className="text-lg font-bold text-gray-600">
        Gerenciador de tarefas
      </h1>
      {children}
    </div>
  );
}

export default Container;
