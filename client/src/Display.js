import React from 'react';


const Display = (props) => {

    const {
        name,
        country,
        searches,
        id } = props.user;

    console.log(props);

    return (
        <div className = "playerCard">
            <p dataID = "nameID">Name: {name}</p>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
            <p>Id: {id}</p>
        </div>
    )
}

export default Display;
