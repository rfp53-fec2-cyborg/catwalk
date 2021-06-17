import React from 'react';
import Requester from '../Requester.js';

const requester = Requester();

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withClickReporting = (WrappedComponent, widget = 'Component') => {
  class WithClickReporting extends React.Component {
    constructor(props) {
      super(props);
      this.clickHandlerWithReporting = this.clickHandlerWithReporting.bind(this);
      this.reportClick = this.reportClick.bind(this);
    }

    clickHandlerWithReporting(clickHandler) {
      return (event) => {
        this.reportClick(event);
        clickHandler(event);
      };
    }

    reportClick(event) {
      const data = {
        element: event.target.tagName,
        widget,
        time: Date.now().toString()
      };
      console.log('data:', data);
      requester.postInteraction(data)
        .then(response => {
          console.log('Response:', response);
        })
        .catch(err => {
          console.log(err);
        });
    }

    render() {
      return (
        <WrappedComponent
          addClickReporting={this.clickHandlerWithReporting}
          {...this.props}
        />
      );
    }
  }

  WithClickReporting.displayName = `withClickReporting(${getDisplayName(WrappedComponent)})`;
  return WithClickReporting;
};

export default withClickReporting;