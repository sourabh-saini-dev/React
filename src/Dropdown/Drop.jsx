import React ,{useState}from 'react'


const data = [
  {
    country: "India",
    states: [
      {
        state: "Rajasthan",
        cities: ["Jaipur", "Kota", "Ajmer"]
      },
      {
        state: "Gujarat",
        cities: ["Ahmedabad", "Surat", "Vadodara"]
      }
    ]
  },

  {
    country: "USA",
    states: [
      {
        state: "California",
        cities: ["Los Angeles", "San Diego", "San Francisco"]
      },
      {
        state: "Texas",
        cities: ["Houston", "Dallas", "Austin"]
      }
    ]
  }
]



const Drop = () => {
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")



    const selectCountry =  data.find((item)=> item.country === country)
    const selectState = selectCountry?.states.find((item)=> item.state ===  state)





    
  return (
    <div>
        <h2>Country</h2>
        <select name="" value={country} id="" onChange={(e)=>{ 
             setCountry(e.target.value)   
              setState("")
                setCity("")
         }}>
            <option value="">Selecte country</option>
              
                {data.map((item)=>(
                <option key={item.country} value={item.country}>
                    {item.country}
                </option>
                ))}
                 </select>

               



                <h2>State</h2>
                <select name="" value={state} id="" onChange={(e)=>  setState( e.target.value)}>
                    <option value="">Select state</option>
                    {selectCountry?.states.map((item)=>(
                    <option key={item.state}>
                        {item.state}
                    </option>
                    ))}
                </select>


                <h2>City</h2>

                <select name="" value={city} id="" onChange={(e)=> setCity(e.target.value)}>
                    <option value="">Select city</option>
                      {selectState?.cities.map((item)=>(
                        <option key={item} value={item}>
                            {item}
                        </option>
                      ))}
                </select>

               
                    
               
       
      
    </div>
  )
}

export default Drop
