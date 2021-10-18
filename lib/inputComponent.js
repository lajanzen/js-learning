import { createElement } from "./elements.js";

export function createInputElement({ placeholder }) {
  const inputElement = createElement("input", {
    className: "input",
    type: "number",
    placeholder: placeholder,
  });

  return inputElement;
}
