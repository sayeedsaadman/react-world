import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countrieData = use (countriesPromise);
    
    const countries = countrieData.countries;
    console.log(countries);
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            {
                countries.map(country => <Country country = {country}></Country>)
            }
        </div>
    );
};

export default Countries;