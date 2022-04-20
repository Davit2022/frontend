import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'

const Info = () => {
	return (	
		<div className='info-items'>	
		<span><HiOutlineLocationMarker /> Address: RA, Gyumri, A. Manukyan 1</span>
		<span><BsTelephone /> Phone: +374 55 51 01 05</span>
		<span><FiMail /> E-mail: market@shop.am</span>
		</div>
	);
};
export default Info;
