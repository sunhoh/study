import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux/index';

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className='items'>
      <h2>구독자 수: {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기</button>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  // console.log(state, 'state');
  return {
    count: subscribers.count,
  };
};

//함수형
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber())
//   }
// }

//객체형
const mapDispatchToProps = {
  addSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
