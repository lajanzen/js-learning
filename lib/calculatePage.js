import { createButtonElement } from "./buttonComponent.js";
import { createElement } from "./elements.js";
import { createInputElement } from "./inputComponent.js";

export function createCalculatePage() {
  const firstInput = createInputElement({ placeholder: "Type a number here" });

  const secondInput = createInputElement({
    placeholder: "Type another number here",
  });

  function add() {
    const result = +firstInput.value + +secondInput.value;
    alert(result);
  }

  function sub() {
    const result = +firstInput.value - +secondInput.value;
    alert(result);
  }

  const addButton = createButtonElement(
    { className: "addButton", onClick: add },
    "+"
  );
  const subButton = createButtonElement(
    { className: "subButton", onClick: sub },
    "-"
  );

  const calcElement = createElement("div", { className: "calc" }, [
    firstInput,
    secondInput,
    addButton,
    subButton,
  ]);

  return calcElement;
}
