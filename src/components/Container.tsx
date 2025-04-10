import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col items-center md:w-[700px] md:mx-auto py-6 mx-6 gap-5">
      {children}
    </div>
  );
}

export default Container;
