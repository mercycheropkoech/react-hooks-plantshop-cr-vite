function PlantCard({ plant, onToggleStock }) {
  const { name, image, price, inStock } = plant;

  return (
    <div className="plant-card" data-testid="plant-item">
      <h4>{name}</h4>

      <img src={image} alt={name} />

      <p>Price: {price}</p>

      <button onClick={() => onToggleStock(plant.id)}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}

export default PlantCard;
