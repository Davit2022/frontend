import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import sliderFruits1 from "../../assets/sliderFruits1.jpeg";
import sliderFruits2 from "../../assets/sliderFruits2.jpg";
import sliderVegetables from "../../assets/sliderVegetables.jpeg";

export default class Slider extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ sliderFruits1 }
                        alt="sliderFruits1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ sliderVegetables }
                        alt="sliderVegetables"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ sliderFruits2 }
                        alt="sliderFruits2"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}