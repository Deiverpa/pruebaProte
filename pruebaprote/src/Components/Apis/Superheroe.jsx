import React, { useState, useEffect } from "react";
import "./Superheroe.css";

function Superheroe() {
  // setear cantidad de superheroes

  const superheroqty = 20;
  const ids = [];

  for (let index = 1; index < superheroqty; index++) {
    ids.push([index]);
  }

  // const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      const nuevosDatos = await Promise.all(
        ids.map(async (id) => {
          const response = await fetch(
            `https://www.superheroapi.com/api.php/10227539111762068/${id}`
          );
          const data = await response.json();
          return data;
        })
      );
      setDatos(nuevosDatos);
    }
    obtenerDatos();
  }, [ids]);

  function flipCard(index) {
    const updatedDatos = [...datos];
    updatedDatos[index].isFlipped = !updatedDatos[index].isFlipped;
    setDatos(updatedDatos);
  }

  return (
    <div className="Superheroe">
      {datos.map((dato, index) => (
        <div
          key={dato.id}
          className={`card ${dato.isFlipped ? "is-flipped" : ""}`}
          onClick={() => flipCard(index)}
        >
          <h1>{dato.name}</h1>
          <div className="card-front">
            <img src={dato.image?.url} alt={dato.name} />
          </div>
          <div className="card-back">
            <h1>Powerstats</h1>
            <p>Combat: {dato.powerstats.combat}</p>
            <p>Durability: {dato.powerstats.durability}</p>
            <p>Intelligence: {dato.powerstats.intelligence}</p>
            <p>Power: {dato.powerstats.power}</p>
            <p>Speed: {dato.powerstats.speed}</p>
            <p>Strength: {dato.powerstats.strength}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Superheroe;
