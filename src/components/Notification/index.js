import React, { Component } from "react";
import "./style.css";

class Notification extends Component {
  componentDidMount() {
    const { config, remove } = this.props;

    setTimeout(() => {
      this.notification.className += " dissolve";
      setTimeout(remove, 500);
    }, config.duration);
  }

  render() {
    const { title, template, config } = this.props;
    const className = `notification ${config.type}`;

    return (
      <div
        className={className}
        onClick={config.onClick}
        ref={e => (this.notification = e)}
      >
        {title && <p className="title">{title}</p>}
        {this.props.template}
      </div>
    );
  }
}

export default Notification;
