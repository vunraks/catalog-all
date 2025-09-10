import ItemCard from "./ItemCard";

function FavoritesList({ items, toggleFavorite }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">⭐ Избранное</h2>
      {items.length === 0 ? (
        <p>Нет избранных</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} toggleFavorite={toggleFavorite} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesList;
