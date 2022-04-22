import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";

function Info() {
  return (
    <div className="info-items">
      <div>
        <HiOutlineLocationMarker className="info-icon" />
        Address: RA, Gyumri, A. Manukyan 1
      </div>
      <div>
        <BsTelephone className="info-icon" />
        Phone: +374 55 51 01 05
      </div>
      <div>
        <FiMail className="info-icon" />
        E-mail: market@shop.am
      </div>
    </div>
  );
}

export default Info;
