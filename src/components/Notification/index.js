import React, { Component } from "react";
import "./style.css";

class Notification extends Component {
  componentDidMount() {
    const { config, remove } = this.props;
    const { animation } = config;

    // apply animation
    setTimeout(() => {
      this.notification.className = this.notification.className.replace(
        /(slide|fade)/,
        ""
      );
    }, 10);

    // prepare unmount
    setTimeout(() => {
      this.notification.className += ` ${animation}`;
      setTimeout(remove, 500);
    }, config.duration);
  }

  render() {
    const { title, template, config } = this.props;
    const className = `notification ${config.animation} ${config.type}`;

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
