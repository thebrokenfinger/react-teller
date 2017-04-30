import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import NotificationComponent from "../components";

const getContainerClassName = position =>
  `ReactTellerNotifications ${position}`;

function getNotificationContainer(config) {
  const className = getContainerClassName(config.position);
  let rootContainer = document.getElementsByClassName(className)[0];
  const container = document.createElement("div");

  if (!rootContainer) {
    rootContainer = document.createElement("div");
    rootContainer.setAttribute("class", className);
    document.body.appendChild(rootContainer);
  }

  if (/^top/.test(config.position)) {
    rootContainer.prepend(container);
  } else {
    rootContainer.appendChild(container);
  }

  return container;
}

export function mount({ title, parsedTemplate /* parsed template */, config }) {
  const container = getNotificationContainer(config);

  render(
    <NotificationComponent
      config={config}
      title={title}
      template={parsedTemplate}
      remove={() => {
        unmount(container);
      }}
    />,
    container
  );
}

export function unmount(container) {
  unmountComponentAtNode(container);
  container.remove();
}
