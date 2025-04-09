import { useSearchParams } from "react-router-dom";
import Home from "./Home";
import TaskPage from "./TaskPage";
import { Header, Footer } from "../components";

export default function Roteador() {
  const [searchParams] = useSearchParams();
  const pagina = searchParams.get("pagina");

  const title = searchParams.get("title") || "";
  const description = searchParams.get("description") || "";

  let PageComponent;
  if (pagina === null || pagina === "/") {
    PageComponent = <Home />;
  } else if (pagina === "task") {
    PageComponent = <TaskPage title={title} description={description} />;
  } else {
    PageComponent = (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Página não encontrada
        </h1>
        <p className="mt-2">
          O valor de <code>pagina</code> é inválido: <strong>{pagina}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{PageComponent}</main>
      <Footer />
    </div>
  );
}
