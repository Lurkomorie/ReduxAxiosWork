import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Tab';
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
      <ul className="nav ">
      {tabs.map(tab => {
        return (
          <Post selectedTab={selectedTab} tab={ tab } onClick={ onClick } key={ tab.id } />
        );
      })}
    </ul>
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
