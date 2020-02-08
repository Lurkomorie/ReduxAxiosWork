import { FETCH_DATA, SELECT_DATA  } from '../actions/types';

export default function dataReducer(state = [], action) {
    switch (action.type) {
        case FETCH_DATA:
            return action.data;
        case SELECT_DATA:
            return action.data;
        default:
            return state;
    }
}
