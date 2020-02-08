import {SELECT_TAB, FETCH_DATA, FETCH_TABS, SELECT_DATA, SELECT_FONT} from './types';
import axios from 'axios';



const apiUrl = 'http://json.ffwagency.md';


  export const selectFont = (id) => {
      localStorage.setItem('selectedFont', id);

      return {
        type: SELECT_FONT,
        selectedFont: id
      }
  }
    export const selectedTab = (id) => {

        return {
            type: SELECT_TAB,
            selectedTab: id
        }
    }

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data
  }
}

export const fetchTabs = (tabs) => {
  return {
    type: FETCH_TABS,
    tabs: tabs,

  }
};

export const selectTabSuccess = data => {
  console.log(data)
    return {
        type: SELECT_DATA,
        data: data,
    }
}


export const selectTab = id => {

    return (dispatch) => {
        return axios.get(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(selectTabSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};


export const fetchAllTabs = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/tabs`)
      .then(response => {
        dispatch(fetchTabs(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

/*export const fetchAllData = (endpoints) => {
  return (dispatch) => {
    let data = [];
    let itemProcessed = 0;
    endpoints.forEach((element) => {
      axios.get(`${apiUrl}/${element.content_endpoint}`)
          .then(response => {
            let item = response.data;
            item.endpoint = element.content_endpoint;
            data.push(item);
              itemProcessed++;
              if(itemProcessed === endpoints.length) {
                  console.log(data)
                  dispatch(fetchData(data));
              }
          })
    })
  }
}*/
