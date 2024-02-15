import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:6001/plants`)
    .then(res => res.json())
    .then(data => {
      setPlants(data)})
  }, [])

  function onAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  const plantsToDisplay = plants
  .filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm 
      onAddPlant={onAddPlant}/>
      <Search whileSearching = {setSearch}/>
      <PlantList 
      plants = {plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
