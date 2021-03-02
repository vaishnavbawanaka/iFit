/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import library from './gridlibrarydata';

function GridLibrary() {

    const libraryCards = library.map( l => 
        <div key={l.id} className='grid-card'>
            <div className='card-image-and-workouts'>
                <img 
                    src={require(`./images/${l.image}`)} 
                    className='grid-image'
                    alt={l.altText}
                />
                {l.workouts 
                    ? <div className='workouts'>
                        <div className='workouts-content'>
                            <p className='workouts-number'>{l.workouts}</p>
                            <p className='small-text'>WORKOUTS</p>
                            <img src={require('./images/icn_playlist-copy-3.svg')}/>
                        </div>
                    </div> 
                    : ''}
            </div>
            <div className='card-info'>
                <div className='card-title-and-avatar'>
                    <div className='card-title-and-stats'>
                        <h1 className='card-title'>{l.title}</h1>
                        <h2 className='card-stats'>
                            {l.metricTime 
                                ? <span>
                                    <img className='timer-icon' src={require(`./images/icn_timer_line@3x.png`)}/>
                                    <p>{l.metricTime}</p>
                                    </span> 
                                : ''}
                            {l.metricDistance 
                                ? <span>
                                    <img className='distance-icon' src={require(`./images/icn_distance_line.png`)}/>
                                    <p>{l.metricDistance }</p>
                                    </span>
                                : ''}
                        </h2>
                    </div>   
                    <img 
                        src={require(`./images/${l.avatarImage}`)}
                        className='avatar-icon'
                        alt={l.avatarAltText}
                    />
                </div>
                <a href='#' className='card-link'>VIEW DETAILS</a>
            </div>
        </div>
    );

    return (
        <div className='grid-library-cards'>
            {libraryCards}
        </div>
    );
}

export default GridLibrary;