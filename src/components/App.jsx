import { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) =>
        setPlants(data.map((plant) => ({
          inStock: plant.inStock ?? true,
          ...plant,
        })))
      );
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([
      ...plants,
      newPlant.inStock === undefined
        ? { ...newPlant, inStock: true }
        : newPlant,
    ]);
  }

  function handleToggleStock(plantId) {
    setPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === plantId
          ? { ...plant, inStock: !plant.inStock }
          : plant
      )
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Search
        search={search}
        onSearchChange={setSearch}
      />

      <NewPlantForm
        onAddPlant={handleAddPlant}
      />

      <PlantList plants={filteredPlants} onToggleStock={handleToggleStock} />
    </div>
  );
}

export default App;
