import { combineReducers } from 'redux';
import tabs from './postReducer';
import data from './dataReducer';
import select from './selectReducer';
import selectTab from './selectTabReducer'

export default combineReducers({
    tabs: tabs,
    data: data,
    selectedFont: select,
    selectedTab: selectTab
});
