import { SELECT_FONT } from '../actions/types';


export default function selectReducer(state = [], action) {
    switch (action.type) {
        case SELECT_FONT:
            return action.selectedFont;
        default:
            return state;
    }
}
