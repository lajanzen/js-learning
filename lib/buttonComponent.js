import { createElement } from "./elements.js";

export function createButtonElement(onClick, children) {
  const buttonElement = createElement(
    "button",
    {
      className: "button",
      onclick: onClick,
    },
    [children]
  );

  return buttonElement;
}
