import { createCalculatePage } from "./lib/calculatePage.js";
import { createTitleComponent } from "./lib/titleComponent.js";

function app() {
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();

  const calculatePage = createCalculatePage();

  appElement.append(titleComponent, calculatePage);
}

app();
