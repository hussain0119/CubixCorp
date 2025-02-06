import React from 'react'
import './Programs.css'
import programs_1 from '../../assets/program-1.png'
import programs_2 from '../../assets/Mahaboob.jpg'
import programs_3 from '../../assets/Hussain.s.jpg'
import programs_icon_1 from '../../assets/program-icon-1.png'
import programs_icon_2 from '../../assets/program-icon-2.png'
import programs_icon_3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs' id="programs">
      <div className="program">
        <img src={programs_1} alt="" className='image'/>
        <div className="caption">
            <img src={programs_icon_1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programs_2} alt=""className='image' />
        <div className="caption">
            <img src={programs_icon_2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programs_3} alt="" className='image'/>
        <div className="caption">
            <img src={programs_icon_3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs