import { FaHome, FaStar } from "react-icons/fa";
import styles from "../components/Header.module.css";

function Header({ setPage }) {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className={`${styles.title} text-2xl font-bold flex items-center gap-2`}>
        Каталог 
      </h1>
      <nav className="flex gap-3">
        <button
          onClick={() => setPage("home")}
          className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded"
        >
          <FaHome /> Главная
        </button>
        <button
          onClick={() => setPage("favorites")}
          className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white rounded"
        >
          <FaStar /> Избранное
        </button>
      </nav>
    </header>
  );
}

export default Header;
