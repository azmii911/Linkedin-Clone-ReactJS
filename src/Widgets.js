import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import React from 'react'
import './Widgets.css'
function Widgets() {

    const widgetSubs = (heading, number) => (
        <div className="widget__area">
            <FiberManualRecordIcon className="widget__infoIcon"/>
        <div className="widget__info">
            <h4>{heading}</h4>
            <p className="widget__countNumber">
               {number}
            </p>
        </div>
    </div>
    )
    return (
        <div className="widgets">
            
            <div className="widget__box">
                <h4>Linked in News</h4>
                {widgetSubs('Iqra University Start', '!Trending - The rise of downfall start')}
                {widgetSubs('Raheel iss backkk', 'Trending - ReactJS')}
                {widgetSubs('Usama in FOREX', 'Trending - Forex Trading is insanee')}
           
            </div>
        </div>
    )
}

export default Widgets
