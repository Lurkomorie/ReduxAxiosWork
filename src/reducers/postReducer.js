import { FETCH_TABS } from '../actions/types';

export default function postReducer(state = [], action) {
    switch (action.type) {
        case FETCH_TABS:
            return action.tabs;
        default:
            return state;
    }
}
