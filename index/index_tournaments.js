import { Tournament } from '../models/tournament.js';
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

// Arrow function
const initApp = () => {
  fetchTournaments();
};

function buildTournamentRow(tournament) {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  tdId.innerHTML = tournament.getId();
  let tdName = document.createElement("td");
  tdName.innerHTML = tournament.getName();
  let tdStartDate = document.createElement("td");
  tdStartDate.innerHTML = Helpers.convertDate(tournament.getStartDate(),'nl-be');
  let tdEndDate = document.createElement("td");
  tdEndDate.innerHTML = Helpers.convertDate(tournament.getEndDate(),'nl-be');

  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdStartDate);
  tr.appendChild(tdEndDate);

  return tr;
}

// Fetch tournaments from API
const fetchTournaments = async () => {
  const response = await fetch("http://localhost:3000/tournaments");
  const data = await response.json();
  data.forEach(t => {
    const tournament = new Tournament(t.id, t.name, t.start_date, t.end_date);
    console.log(tournament);
      let table = document.querySelector("#tournaments-table tbody");
      let tr = buildTournamentRow(tournament);
      table.appendChild(tr);
  });
  return data;
};
