import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

const timeout = 150;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
};

class Transition extends React.PureComponent {
  logStatus(status) {
    console.log(status);
  }
  render() {
    const { children, location } = this.props;
    console.log(location);

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.key}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
              {/* {this.logStatus(status)} */}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
