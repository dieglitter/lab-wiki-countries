import React, {useState, useEffect} from 'react'
import countries from "../countries"
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Details = styled.div`
position: fixed;
right: 400px;
top: 100px;
width:400px;

`

function CountryDetails(props) {
    

    const pais = [...countries].find((country) => {
        return country.cca3 === props.match.params.cca3;
      });



      const [getPais, setPais ] = useState(pais)

      useEffect(() =>{

        setPais(pais)

      },[])


    return (
        <Details>
            <h3>{pais.name.common} {pais.flag}</h3>
            <hr/>
            <p>Capital: {pais.capital}</p>
            <hr/>
            <p>Area: {pais.area}km²</p> 
            <hr/>
            <p>Borders </p> 
            <ul>
                {pais.borders.map( (country,index) => 
                <Link to={`/${country.cca3}`}><li key={index}>{country}</li></Link>)}
            </ul>      
        </Details>
    )
}

export default CountryDetails
