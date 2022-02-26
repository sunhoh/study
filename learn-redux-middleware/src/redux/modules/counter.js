// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action create 
export const increase =()=>({ type:INCREASE });
export const decrease =()=>({ type:DECREASE });


// middlewares
export const increaseAsync =()=> dispatch => {
    setTimeout(()=> dispatch(increase()), 1000)
};
export const decreaseAsync =()=> dispatch => {
    setTimeout(()=> dispatch(decrease()), 1000)
};



// initialState
const initialState = 0;


// reducer
export default function counterReducer(state=initialState, action) {
    switch(action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}