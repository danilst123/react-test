import React, { Component } from "react";

const withDateLog = (WrappedComponent) =>
  class withDateLog extends Component {
    static displayName = `WithDateLog(${getDisplayName(WrappedComponent)})`;

    render() {
      return (
        <WrappedComponent date={new Date().toDateString()} {...this.props} />
      );
    }
  };

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withDateLog;
