import React from "react";
import {motion} from 'framer-motion'
import {BsFillCloudSunFill} from 'react-icons/bs'
export default function Daily({daily}) {
  return (
    <motion.div initial={{opacity:0.3,y:-40}} animate={{opacity:1,y:0}} transition={{ease:'easeIn',duration:0.4}}>
      <div className="hourly">
        <h1 className='bo'>Daily Forecast</h1>
        <div className="mern mern9">
          <div className="hous">
            <h1>Sun</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>     <h1 className="degree">{daily.list[0].main.temp}°C</h1>
          </div>
          <div className="hous">
            <h1>Mon</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[1].main.temp}°C</h1>
          </div>
          <div className="hous">
            <h1>Tue</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[2].main.temp}°C</h1>
          </div>
          <div className="hous">
            <h1>Wed</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[3].main.temp}°C</h1>
          </div>
          <div className="hous">
            <h1>Thu</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[4].main.temp}°C</h1>
          </div>
          <div className="hous">
            <h1>Fri</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[5].main.temp}°C</h1>
          </div>
          <div className="hous">
            <h1>Sat</h1>
            <div className="col">
            <BsFillCloudSunFill className='cloud'/>
            </div>
            <h1 className="degree">{daily.list[6].main.temp}°C</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
}