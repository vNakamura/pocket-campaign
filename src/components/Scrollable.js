import React, { PropTypes } from 'react'
import style from './Scrollable.styl';

class Scrollable extends React.Component {
  render() {
    return (
      <div className={style.scrollable}>
        {this.props.children}
      </div>
    );
  }
}

Scrollable.propTypes = {
  children: PropTypes.node
};

export default Scrollable;
