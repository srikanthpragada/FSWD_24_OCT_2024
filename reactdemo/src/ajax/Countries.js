import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";


export default function Countries() {
    const [countryName, setCountryName] = useState("")
    const [regions, setRegions] = useState([])
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        $.get({
            url: `https://restcountries.com/v3.1/all`,
            success: resp => {
                setCountries(resp);
                setSelectedCountries(resp);
                setRegions(getRegions(resp))
                setLoading(false)
            },
            error: (error) => {
                alert("Sorry! Could not get country details!")
            },
        });
    }, []);

    function getRegions(countries) {
        var regionNames = new Set()
        for(var i = 0; i < countries.length ; i ++)
            regionNames.add( countries[i].region)

        return Array.from(regionNames) 
    }

    function countriesByRegion(e) {
        console.log(e.target.value)
        // select all countries in the selected region 
        
    }
    
    function updateCountryName(e) {
        var cname = e.target.value.toLowerCase()
        setCountryName(cname)
        setSelectedCountries(
          countries.filter(country => country.name.common.toLowerCase().includes(cname))
        );
    }
    return (
        <div>
            <h1>Find Country Information</h1>
            Regions :
            <select onChange={countriesByRegion}>
                 {
                    regions.map((v,idx) => 
                         <option value={v}>{v}</option>)
                 }
            </select>
            <p></p>
            Country Name:
             <input type="text" value={countryName} 
                onChange={updateCountryName} />
            <p></p>

            {isLoading ? <span>Loading... please wait...</span> :
                <div>
                    {selectedCountries.length === 0 ?
                        <h3>Sorry! No country found!</h3>
                        :
                        <div>
                            <h4>Countries</h4>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Capital</th>
                                        <th>Region</th>
                                        <th>Flag</th>
                                    </tr>
                                    {selectedCountries.map((country, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <td>{country.name.common}</td>
                                                <td>{country.capital ? country.capital.join(",") : "None"}</td>
                                                <td>
                                                    {country.region}
                                                </td>
                                                <td>
                                                    <img style={{ width: '100px', height: '50px' }}
                                                        title={country.name.common}  src={country.flags.png} alt={country.name} />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </thead>
                            </table>
                        </div>
                    }
                </div>
            }
        </div>
    );
}