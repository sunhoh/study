import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux';

const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);
  return (
    <div className='items'>
      <h2>조회수: {count}</h2>
      <input
        type='text'
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => addView(number)}>조회하기</button>
    </div>
  );
};

const mapStateToProps = ({ views }) => {
  // console.log(state, 'state');
  return {
    count: views.count,
  };
};

//함수형
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addView: () => dispatch(addView())
//   }
// }

//객체형
const mapDispatchToProps = {
  addView: number => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
