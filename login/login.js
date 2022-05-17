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
  let loginButton = document.getElementById("loginButton");
  loginButton.disabled = true;

  let loginUser = {
    name: name,
    password: password,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginUser),
  };

  let result = await fetch("https://localhost:7113/api/Users/Login", options);

  if (result.status >= 400 && result.status < 600) {
    throw new Error("Login not successful");
  }

  let jsonResult = await result.json();

  console.log(jsonResult);
  Helpers.saveToken(jsonResult.token);
}

// Arrow function
const initLogin = () => {
  let form = document.getElementById("loginform");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    login(username, password).then(
      (value) => {
        //Success = navigate to home
        window.location.href = "index.html";
      },
      (error) => {
        //Error
        console.log(error);
      }
    );
  });
};
