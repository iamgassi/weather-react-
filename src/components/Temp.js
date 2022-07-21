import React, { useEffect, useState } from 'react'
import '../components/css/style.css'


const Temp = () => {
  const [city,setCity]=useState(null);
  const [search,setSearch]=useState("Bilaspur");
  useEffect(()=>{
     const getTemp=async ()=>{
          let ApiKey="Enter you key"
          const response=await fetch(`
          https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${ApiKey}&units=metric`)
          const data=await response.json();
          console.log(data);
          setCity(data);
     }
    getTemp();
  },[search])

  
  return (
   <>
   <div className='box'>
    <div className='inputData'>
        <input 
        type="search"
        className='inputField'
        onKeyPress={(e) => {
          if (e.key === "Enter") {
             setSearch(e.target.value)
          }
      }}
      placeholder="City & Hit Enter"
        />
    </div>

    {!city ?(
       <div className='info'>
      <h2>Search City</h2>
      </div>
    ) : (
      <>
      <div className='info'>   
     
      {!city.message?(
       <>
       <h2 className='location'>
        <i className="fa-solid fa-location-dot"> </i>
        {search}</h2>
        <h1 className='temp'>
  
       {city.main.temp} °C 
         
      </h1>
      
       
      <h4 className='tempmin_max'>
           Min:{city.main.temp_min}°C  || Max:{city.main.temp_max}°C 
      </h4>

      <h3 className='tempmin_max'>
       Wind: {city.wind.speed} mi/h
      </h3>

      <h2>Description: {city.weather[0].description}</h2>
       </> 
        
        ):(

            <h2>{city.message}</h2> 
          )
       
      }
  
     </div>
     </>
    )

    }


   <div className='wave -one'></div>
   <div className='wave -two'></div>
   <div className='wave -three'></div>

   </div>
   </>
  )
}

export default Temp