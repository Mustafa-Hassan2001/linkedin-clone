import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subheading) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subheading}</p>
            </div>
        </div>
    );

  return (
    <div className='Widgets'>
      <div className='widgets__widgetContainer'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
    </div>
  )
}

export default Widgets;
