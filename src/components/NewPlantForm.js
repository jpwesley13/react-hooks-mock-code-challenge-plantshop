import React, {useState} from "react"; //useState is for the user being able to see what they're typing as they add content into the form.

function NewPlantForm( {onAddPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const plantData = {
      name: name,
      image: image,
      price: parseInt(price)
    };
    fetch(`http://127.0.0.1:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData)
    })
    .then(res => res.json())
    .then(data => onAddPlant(data))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        onChange={(e) => setName(e.target.value)}/>
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        onChange={(e) => setImage(e.target.value)}/>
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
