import React from 'react';
import { connect } from 'react-redux';
import Tab from '../components/Tab';
import {selectedTab, selectTab} from '../actions';




function TabList({ tabs, onClick, selectedTab }) {
  if(!tabs.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
      <div className="row justify-content-end">
      {tabs.map(tab => {
        return (
          <Tab selectedTab={selectedTab} tab={ tab } onClick={ onClick } key={ tab.id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tabs: state.tabs,
    selectedTab: state.selectedTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(selectTab(id));
      dispatch(selectedTab(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList);
