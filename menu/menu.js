import { Helpers } from "../helpers/helpers.js";

class MyMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Darts</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">Home</a>
              </li>
              </ul>
              <ul class="navbar-nav ms-auto w-100 justify-content-end">
              <li class="nav-item" id="login">
                <a class="nav-link" href="login.html">Login</a>
              </li>
              <li class="nav-item" id="logout">
                <a class="nav-link" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        `;
  }
}

customElements.define("menu-component", MyMenu);

document.getElementById("logout").addEventListener("click", () => {
  Helpers.clearToken();
  window.location.href = "index.html";
});

if (Helpers.isLoggedIn()) {
  document.getElementById("login").style.display = "none";
  document.getElementById("logout").style.display = "block";
} else {
  document.getElementById("login").style.display = "block";
  document.getElementById("logout").style.display = "none";
}
