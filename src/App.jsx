import { useState, useEffect } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import FavoritesList from "./components/FavoritesList";
import ItemForm from "./components/ItemForm";
import EditModal from "./components/EditModal";
import { mockItems } from "./data/mockItems";

function App() {
  // Загружаем из localStorage или используем mockItems
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : mockItems;
  });

  const [page, setPage] = useState("home");
  const [editing, setEditing] = useState(null);

  // Каждый раз при изменении items сохраняем в localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => setItems([...items, newItem]);

  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));

  const toggleFavorite = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const saveEdit = (id, updated) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
    setEditing(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header setPage={setPage} />
      {page === "home" ? (
        <>
          <ItemForm addItem={addItem} />
          <ItemList
            items={items}
            deleteItem={deleteItem}
            toggleFavorite={toggleFavorite}
            startEdit={setEditing}
          />
        </>
      ) : (
        <FavoritesList
          items={items.filter((i) => i.isFavorite)}
          toggleFavorite={toggleFavorite}
        />
      )}

      {editing && (
        <EditModal
          item={editing}
          saveEdit={saveEdit}
          cancel={() => setEditing(null)}
        />
      )}
    </div>
  );
}

export default App;
