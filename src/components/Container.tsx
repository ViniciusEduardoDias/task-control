import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex w-full flex-col p-6 items-center gap-5">
      {children}
    </div>
  );
}

export default Container;
