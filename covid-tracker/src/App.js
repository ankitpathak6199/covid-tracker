import './App.css';
import {FormControl,Select,MenuItem} from '@material-ui/core';
import {useState,useEffect} from 'react'
function App() {

  const [countrynames,setcountrynames] = useState([]);
  const [country,setInputcountry] = useState("worldwide");

  useEffect (() => {
    const getcountriesdata = ( () =>{
      fetch("https://disease.sh/v3/covid-19/countries")
    .then(response => response.json())
    .then(data => {
      const countrynames = data.map((country) => ({
        name : country.country,
        value : country.countryInfo.iso2,

      }));
      setcountrynames(countrynames);
      


    });
    
})
getcountriesdata();
},[]);
 const onCountryChange = ((e) => {
  const countrycode = e.target.value;
  setInputcountry(countrycode);
})




  return (
    <div className = "app">
      <div className = "app_left">
        <div className = "app_header">
        <h1> Covid - Tracker WebApp </h1>
        </div>

        <div>
        <Select className = "app_search" 
        variant = "outlined" 
        value = {country}
        onChange = {onCountryChange}
        >
         { countrynames.map((country) => (
           <MenuItem value = {country.value}>{country.name}</MenuItem>
         ))}
          
        </Select>

        </div>

        
        
        
      </div>
      <div className = "app_right"> <h1>HI I am right</h1></div>
    </div>

  );
}

export default App;
