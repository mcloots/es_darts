import { Helpers } from "../helpers/helpers.js";

document.addEventListener("readystatechange", (event) => {
  switch (event.target.readyState) {
    case "complete":
      console.log("Complete...");
      initLogin();
      break;
    default:
      console.log("No state found...");
  }
});

async function login(name, password) {
  let loginUser = {
    name: name,
    password: password,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginUser),
  };

  let result = await (
    await fetch("https://localhost:7113/api/Users/Login", options)
  ).json();
  console.log(result);
}

// Arrow function
const initLogin = () => {
  let form = document.getElementById("loginform");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    login(username, password);
  });
};
