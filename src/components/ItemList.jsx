import styles from "./ItemList.module.css";
import { Star } from "lucide-react";

function ItemList({ items, deleteItem, toggleFavorite, startEdit }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.id} className={styles.card}>
          <img src={item.image} alt={item.title} className={styles.image} />
          <h3>{item.title}</h3>

          <div className={styles.actions}>
            <button onClick={() => toggleFavorite(item.id)}>
              <Star color={item.isFavorite ? "yellow" : "gray"} fill={item.isFavorite ? "yellow" : "none"} />
            </button>
            <button onClick={() => startEdit(item)}>✏️</button>
            <button onClick={() => deleteItem(item.id)}>🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
