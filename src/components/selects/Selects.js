import React from 'react'
import './Selectsstyles.css'

import Portugal from '../../assets/img/portugal/portugal.jpg'
import LakeTahoe from '../../assets/img/lake-tahoe/lake-tahoe.jpg'
import Maldives from '../../assets/img/maldives/maldives.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Portugal} text='Portugal' />
                <SelectsImg bgImg={LakeTahoe} text='Lake Tahoe' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
            </div>

        </div>
    )
}


export default Selects