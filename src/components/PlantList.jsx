import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleStock }) {
  return (
    <div className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onToggleStock={onToggleStock}
        />
      ))}
    </div>
  );
}

export default PlantList;