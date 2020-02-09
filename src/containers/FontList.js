import { connect } from 'react-redux';
import React from 'react';
import { selectFont} from '../actions';
import Font from '../components/Font';


function NewPost({ data, selectedFont, onAddPost }) {
    if(!data.content){
      return(<div>Nothing</div>)
    }
    if(data.type === 'Font selection') {
        return (
            <div className="card-columns row mt-3">
            {data.content.map((item) => {
                return (
                    <Font font={ item } onAddPost={ onAddPost } selectedFont={selectedFont} key={ item.id } />
                )
            })}
    </div>
        )
    }
    return (
        <div className="row h-100">
            <div className="col-sm-12 my-auto align-items-center">
                <div>{data.content}</div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: id => {
      dispatch(selectFont(id));
    }
  };
};

const mapStateToProps = state => {
    return {
        data: state.data,
        selectedFont: state.selectedFont
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
