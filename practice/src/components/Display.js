import React from 'react';
import { connect } from 'react-redux';

const Display = props => {
  return (
    <div>
      <p>안녕 : {props.count}</p>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

export default connect(mapStateToProps)(Display);
