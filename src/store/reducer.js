import { SET_AMOUNT } from './actions';

const initialState = {
    packets: [
        {
            id: 1,
            quantity: 250
        },
        {
            id: 2,
            quantity: 500
        },
        {
            id: 3,
            quantity: 1000
        },
        {
            id: 4,
            quantity: 2000
        },
        {
            id: 5,
            quantity: 5000
        }
    ],
    amount: 0
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AMOUNT:
            return {
                ...state,
                amount: action.payload
            }

        default:
            return state;
    }
}

export default reducer;