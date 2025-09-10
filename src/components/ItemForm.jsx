import { useState } from "react";
import styles from "./ItemForm.module.css";

function ItemForm({ addItem }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newItem = {
      id: Date.now(),
      title,
      description,
      imageUrl,
      isFavorite: false,
    };

    addItem(newItem);
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Название..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Описание..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="URL картинки..."
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Добавить</button>
    </form>
  );
}

export default ItemForm;
