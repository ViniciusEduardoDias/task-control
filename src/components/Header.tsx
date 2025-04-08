function Header() {
  return (
    <header className="flex justify-between items-center p-8 text-gray-500">
      <h1 className="text-3xl font-bold">Gerenciador de Tarefas</h1>
      <nav>
        <ul className="flex gap-6 text-base font-medium">
          <li>
            <a href="#" className="hover:text-gray-800 transition">
              Tarefas
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800 transition">
              Calendário
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
