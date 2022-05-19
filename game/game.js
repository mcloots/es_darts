import { Helpers } from '../helpers/helpers.js';

document.addEventListener("readystatechange", (event) => {
  switch (event.target.readyState) {
    case "complete":
      console.log("Complete...");
      initApp();
      break;
    default:
      console.log("No state found...");
  }
});

const getGameTypes = async() => {
    let gameTypes = await fetch("https://localhost:7113/api/GameTypes/GameTypes/x01vscpu");
    gameTypes = await gameTypes.json();
    gameTypes.forEach(gt => {
          let ul = document.getElementById("gametypes");
          let li = buildGameTypeLi(gt);
          ul.appendChild(li);
      });
}

function buildGameTypeLi(gameType) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = `<a href="gamesettings.html?gameType=${gameType.id}">${gameType.displayName}</a>`;
    li.appendChild(a);
  
    return li;
  }

// Arrow function
const initApp = () => {
    getGameTypes();
};