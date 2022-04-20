import React from 'react'
import "../info/Info.css"
import {BsTelephone} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiMail} from 'react-icons/fi'

function Info() {
    return (
        <div className="info" >
           <div className="info-item" data-feather='phone'><HiOutlineLocationMarker/> Address: RA, Gyumri, A. Manukyan 1</div>
           <div className="info-item"><BsTelephone/> Phone: +374 55 51 01 05</div>
           <div className="info-item"><FiMail/> E-mail: market@shop.am</div>
        </div>
    )
}
export default Info
