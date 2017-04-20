import React, { Component } from "react";
import { unmount } from "../../utils/renderer";
import "./style.css";

class Notification extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.notification.className += " dissolve";
      setTimeout(() => unmount(this.props.config), 500);
    }, 2000);
  }

  render() {
    const { title, template, config } = this.props;
    const className = `notification ${config.type}`;

    return (
      <div className={className} ref={e => (this.notification = e)}>
        {title && <p className="title">{title}</p>}
        {this.props.template}
      </div>
    );
  }
}

export default Notification;
