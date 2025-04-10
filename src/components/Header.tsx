import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <header className="flex justify-center items-center gap-4 md:w-2/3 md:mx-auto p-8 text-gray-500">
      <img
        src="/icon.png"
        alt="Ícone do Gerenciador de Tarefas"
        className="w-[50px] cursor-pointer"
        onClick={handleLogoClick}
      />
      <h1 className="text-3xl font-bold">Gerenciador de Tarefas</h1>
    </header>
  );
}
export default Header;
