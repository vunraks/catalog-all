import { useState } from "react";
import styles from "./EditModal.module.css";

function EditModal({ item, saveEdit, cancel }) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description || "");
  const [image, setImage] = useState(item.image || "");

  const handleSave = () => {
    saveEdit(item.id, { title, description, image });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Редактировать</h3>
        <input
          className={styles.input}
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.input}
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="URL картинки"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div className="flex gap-2 mt-2">
          <button className={styles.saveBtn} onClick={handleSave}>
            Сохранить
          </button>
          <button className={styles.cancelBtn} onClick={cancel}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
