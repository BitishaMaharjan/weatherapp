import React from 'react'
import {BsFillCloudSunFill} from 'react-icons/bs'

import {motion} from 'framer-motion'
export default function Forecast({weather,daily}) {
  return (
    <motion.div initial={{opacity:0.3,y:-40}} animate={{opacity:1,y:0}} transition={{ease:'easeIn',duration:0.4}}>
     <div className="hourly">
        <h4 className='bo'>Hourly Forecast</h4>
        <div className="mern">
        <div className="hous">
            <h1>01:00 PM</h1>
            <div className="col">
                <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[7].main.temp}°C</h1>
        </div>
        <div className="hous">
            <h1>01:00 PM</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[8].main.temp}°C</h1>
        </div>
        <div className="hous">
            <h1>01:00 PM</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[9].main.temp}°C</h1>
        </div>
        <div className="hous">
            <h1>01:00 PM</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[10].main.temp}°C</h1>
        </div>
        <div className="hous">
            <h1>01:00 PM</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[11].main.temp}°C</h1>
        </div>
        </div>
        </div> 
    </motion.div>
  )
}