import React from 'react';



export default ({ font: { abbr, label, id, color }, onAddPost, selectedFont}) => {
    return (
        <div className="col-sm-12 col-md-6 font" onClick={() => onAddPost(id)}>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <div className="my-card" style={{background: color}}>
                        <div className="header-content" >
                            {abbr}
                        </div>
                    </div>
                </div>
                <div className={"card-body ml-1 mt-2 " + (selectedFont === id && 'putOpacity')}>
                    <h5 className="card-title bullet">{label}</h5>
                </div>
            </div>
        </div>
    );
};
