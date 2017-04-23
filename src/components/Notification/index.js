import React, { Component } from "react";
import "./style.css";

class Notification extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.notification.className += " dissolve";
      setTimeout(this.props.remove, 500);
    }, 2000);
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
