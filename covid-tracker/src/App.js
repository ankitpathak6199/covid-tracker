import './App.css';
import {FormControl,Select,MenuItem,Card,CardContent} from '@material-ui/core';
import {useState,useEffect} from 'react';
import Table from './Table';
import getsorteddata from './utilities';
import Boxes from './Boxes';
function App() {

  const [countrynames,setcountrynames] = useState([]);
  const [country,setInputcountry] = useState("worldwide");
  const [tabledata,setTableData] = useState([]);

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
      getsorteddata(data);
      setTableData(data);
})
    
})
getcountriesdata();
},[]);



 const onCountryChange = (async (e) => {

  const countrycode = e.target.value;
  setInputcountry(countrycode);
})




  return (
    <div className = "app">
      <div className = "app_left">
        <div className = "app_header">
        <h1> Covid - Tracker WebApp </h1>
        

        <FormControl>
        <Select className = "app_search" 
        variant = "outlined" 
        value = {country}
        onChange = {onCountryChange}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
         { countrynames.map((country) => (
           <MenuItem value = {country.value}>{country.name}</MenuItem>
         ))}
          
        </Select>
        </FormControl>

        </div>
        <div className = "information_boxes">
          <Boxes title = "cases" cases = "14000" total = "1000000000"/>
          <Boxes title = "cases" cases = "14000" total = "1000000000"/>
          <Boxes title = "cases" cases = "14000" total = "1000000000"/>

        </div>
      </div>
    <Card className = "app_right"> 
    <CardContent>
      <div className = "table">
        <Table arraycountries = {tabledata}/>
      </div>
    </CardContent>
    </Card>
    </div>

  );
}

export default App;
