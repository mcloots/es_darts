import { Helpers } from "../helpers/helpers.js";

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
  hideLoginAlert();
};

const hideLoginAlert = () => {
  if (Helpers.isLoggedIn()) {
    document.getElementById("loginAlert").style.display = "none";
  }
};
