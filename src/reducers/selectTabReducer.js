import { SELECT_TAB } from '../actions/types';



export default function selectTabReducer(state = [], action) {
    switch (action.type) {
        case SELECT_TAB:
            return action.selectedTab;
        default:
            return state;
    }
}
