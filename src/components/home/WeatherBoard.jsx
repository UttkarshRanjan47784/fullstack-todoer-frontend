import React, { memo, useEffect, useState } from 'react'
import axios from "axios"

const WeatherBoard = memo(()=>{

    let [data, setData] = useState({
        country: `loading`,
        city:`loading`,
        region:`loading`,
        temp:`loading`,
        tempFeels:`loading`,
        humidity:`loading`,
        weather:`loading`,
        wind:`loading`,
    })

    async function getData() {
        let response = await axios.get(`http://localhost:5000/weather`);
        console.log(response.data);
        setData(response.data);
    }

    useEffect(()=>{
        getData();
    }, [])

  return (
    <div className='bg-orange-400 grid grid-cols-4 border-b-2 border-t-2 border-gray-800'>
        <div className='p-2 text-center border-r-2 border-gray-800'>{data.temp + `\u00B0C`}<br /><span className='text-xs'>Feels like {data.tempFeels + `\u00B0C`}</span></div>
        <div className='p-2 text-center border-r-2 border-gray-800'>{data.humidity}%<br /><span className='text-xs'>Humidity</span></div>
        <div className='p-2 text-center border-r-2 border-gray-800'>{data.weather}<br /><span className='text-xs'>Wind : {data.wind} kmph</span></div>
        <div className='p-2 text-center'>{data.city}<br /><span className='text-xs'>{data.country}</span></div>
    </div>
  )
})

export default WeatherBoard
