import React from 'react';
import Requester from '../Requester.js';

const requester = Requester();

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withClickReporting = (WrappedComponent, widget) => {
  class WithClickReporting extends React.Component {
    constructor(props) {
      super(props);
      this.reportClick = this.reportClick.bind(this);
    }

    reportClick(event) {
      const data = {
        element: event.target.tagName,
        widget: widget || 'Component',
        time: Date.now().toString()
      };
      requester.postInteraction(data)
        .catch(err => {
          console.log(err);
        });
    }

    render() {
      return (
        <WrappedComponent
          reportClick={this.reportClick}
          {...this.props}
        />
      );
    }
  }

  WithClickReporting.displayName = `withClickReporting(${getDisplayName(WrappedComponent)})`;
  return WithClickReporting;
};

export default withClickReporting;