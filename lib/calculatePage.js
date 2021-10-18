import { createButtonElement } from "./buttonComponent.js";
import { createElement } from "./elements.js";

export function createCalculatePage() {
  const firstInput = createElement("input", {
    type: "number",
    placeholder: "Type a number here",
    className: "input",
  });

  const secondInput = createElement("input", {
    type: "number",
    placeholder: "Type another number here",
    className: "input",
  });

  function add() {
    const result = +firstInput.value + +secondInput.value;
    alert(result);
  }

  function sub() {
    const result = +firstInput.value - +secondInput.value;
    alert(result);
  }

  const addButton = createButtonElement("addButton", add, "+");
  const subButton = createButtonElement("subButton", sub, "-");

  const calcElement = createElement("div", { className: "calc" }, [
    firstInput,
    secondInput,
    addButton,
    subButton,
  ]);

  return calcElement;
}
