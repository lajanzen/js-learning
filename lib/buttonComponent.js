import { createElement } from "./elements.js";

export function createButtonElement(className, onClick, children) {
  const buttonElement = createElement(
    "button",
    {
      className: `${className} button`,
      onclick: onClick,
    },
    [children]
  );

  return buttonElement;
}
