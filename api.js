"use strict";

window.addEventListener("load", function () {
  //const url = "https://pokeapi.co/api/v2/pokemon-form/135/";

  function numerorandom(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
  }
  let idvar = numerorandom(1, 898); //prompt("ingresa el numero de pokemon:");

  let urlvar = "https://pokeapi.co/api/v2/pokemon/" + idvar + "/";
  fetch(urlvar)
    .then((data) => data.json())
    .then((pokemon2) => {
      let div2 = document.getElementById("contenedorpokemon");
      div2.innerHTML = `
    <img id="imagen" src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idvar}.png'/>
    <h1 id="nombre_pokemon">${pokemon2.name}</h1>
    <h1 id="exp_pokemon"> ${pokemon2.base_experience} exp</h1>
    <h1 id="hp_pokemon">  ${pokemon2.stats[0].base_stat} ${pokemon2.stats[0].stat.name}</h1>
    <div id="fondo"></div>`;
    });

  //if tipos de pokemon color
  fetch(urlvar)
    .then((data) => data.json())
    .then((pokemon2) => {
      let colortype = pokemon2.types[0].type.name;
      let fondo = document.getElementById("fondo");
      if (colortype == "fairy") {
        fondo.style.background = "#ffddd2";
      }
      if (colortype == "dragon" || colortype == "fire") {
        fondo.style.background = "#e63946";
      }
      if (colortype == "normal") {
        fondo.style.background = "#f8edeb";
      }
      if (colortype == "ghost") {
        fondo.style.background = "#03071e";
      }
      if (colortype == "electric") {
        fondo.style.background = "#e9c46a";
      }
      if (colortype == "water") {
        fondo.style.background = "#0077b6";
      }
      if (colortype == "rock") {
        fondo.style.background = "#4a4e69";
      }
      console.log(pokemon2)
      console.log(pokemon2.location_area_encounters);
    });
});