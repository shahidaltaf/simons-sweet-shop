import {
    ADD_BASKET_ITEM,
    REMOVE_BASKET_ITEM,
    ADD_PACK_ITEM,
    REMOVE_PACK_ITEM,
    EDIT_PACK_ITEM
} from './actions';

const initialState = {
    sweets: [
        {
            id: '1234',
            name: 'Rhubarb & Custard',
            description: [
                'These pink and yellow sweets have a real hit of rhubarb and custard flavour - a classic combination',
                'Hard boiled so great for sucking on and they last a long time!'
            ],
            image: 'rhubarb-custard.png'
        }
    ],
    packs: [
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
    cart: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET_ITEM:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }

        case REMOVE_BASKET_ITEM:
            const updatedCart = state.cart.filter(item => item.id !== action.payload);
            return {
                ...state,
                cart: updatedCart
            }

        case ADD_PACK_ITEM:
            return {
                ...state,
                packs: [
                    ...state.packs,
                    action.payload
                ]
            };

        case REMOVE_PACK_ITEM:
            const updatedPackSizes = state.packs.filter(item => item.id !== action.payload);
            return {
                ...state,
                packs: updatedPackSizes
            };

        case EDIT_PACK_ITEM:
            const otherPacks = state.packs.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                packs: [
                    ...otherPacks,
                    {
                        id: action.payload.id,
                        quantity: action.payload.amount
                    }
                ]
            };

        default:
            return state;
    }
}

export default reducer;