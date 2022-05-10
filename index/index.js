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

// Fetch tournaments from API
const fetchTournaments = async () => {
  const response = await fetch("http://localhost:3000/tournaments");
  const data = await response.json();
  data.forEach(t => {
      let ul = document.querySelector(".tournament-list");
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(t.name));
      ul.appendChild(li);
  });
  return data;
};
