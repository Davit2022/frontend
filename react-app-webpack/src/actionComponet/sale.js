import React from "react";
import './sale.css';
import apples from '../home/img/apples.png';
import kiwi from '../home/img/kiwi.png';
import pear from '../home/img/pear.png';
import pineapple from '../home/img/pineapple.png';
import plums from '../home/img/plums.png';
import potato from '../home/img/potato.png';
import respberry from '../home/img/respberry.png';
import strawberry from '../home/img/strawberry.png';

function Sale () {
    return (

        <div>
            <div className="continer">
                <div>
                    <img className="imge" src={apples}  ></img>
                    <a href="">
                        <div className="text" >Apples -10%</div>
                    </a>
                </div>
                <div>
                    <img className="imge" src={kiwi} ></img>
                    <a href="">
                    <div className="text">Kiwi -10%</div>
                    </a>
                </div>
                <div>
                    <img className="imge" src={pear} ></img>
                    <a href="">
                    <div className="text">Pear -10%</div>
                    </a>
                </div>
                <div>
                    <img className="imge" src={pineapple} ></img>
                    <a href="">
                    <div className="text">Pineapple -10%</div>
                    </a>
                </div>
                <div>
                    <img className="imge" src={plums} ></img>
                    <a href="">
                    <div className="text">Plums -10%</div>
                    </a>
                </div>
                <div>
                    <img className="imge" src={potato} ></img>
                    <a href="">
                    <div className="text">Potato -10%</div>
                    </a>
                </div>
                <div>
                    <img className="imge" src={respberry} ></img>
                    <a href="">
                    <div className="text">Respberry -10%</div>
                    </a>
                </div>
                <div>
                    <img className="imge" src={strawberry} ></img>
                    <a href="">
                    <div className="text">Strawberry -10%</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sale