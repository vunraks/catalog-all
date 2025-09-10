import { Star } from "lucide-react";
import styles from "./ItemCard.module.css";

function ItemCard({ item, toggleFavorite }) {
  return (
    <div className={styles.card}>
      {item.image ? (
        <img src={item.image} alt={item.title} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>Нет изображения</div>
      )}

      <h3 className={styles.title}>{item.title}</h3>

      {item.description && (
        <p className={styles.description}>{item.description}</p>
      )}

      <button
        onClick={() => toggleFavorite(item.id)}
        className={styles.favoriteBtn}
      >
        <Star
          size={20}
          fill={item.isFavorite ? "yellow" : "white"}
          stroke={item.isFavorite ? "yellow" : "black"}
        />
      </button>
    </div>
  );
}

export default ItemCard;
