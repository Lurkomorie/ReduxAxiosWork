import React from 'react';

const styles = {
  padding: '.6rem 1rem',
  maxWidth: '500px',
};

export default ({ tab: { label, content_endpoint, id }, onClick, selectedTab }) => {
  return (
    <div className={"tabText col-4  " + (selectedTab === content_endpoint ? 'active' : '') } style={ styles } onClick={() => onClick(content_endpoint)}>
        {label.toUpperCase()}
    </div>
  );
};
