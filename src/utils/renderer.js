import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import NotificationComponent from "../components";

const getContainerClassName = (position) => (`notification-container ${position}`)

function getNotificationContainer(config) {
  const className = getContainerClassName(config.position);
  let container = document.getElementsByClassName(className)[0];

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("class", className);
    document.body.appendChild(container);
  }

  return container;
}

export function mount({ title, parsedTemplate /* parsed template */, config }) {
  render(
    <NotificationComponent
      config={config}
      title={title}
      template={parsedTemplate}
    />,
    getNotificationContainer(config)
  );
}

export function unmount(config) {
  unmountComponentAtNode(getNotificationContainer(config));
}
