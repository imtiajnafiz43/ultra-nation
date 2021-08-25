import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const flagstyle = { height: "50px" }
    const countryStyle = { border: "1px solid gray", margin: "10px", padding: "10px", height: '250px', width: '250px', float: 'left', boxShadow: "5px 5px 10px gray" }
    const handleAddCountry = props.handleAddCountry
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style={flagstyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;