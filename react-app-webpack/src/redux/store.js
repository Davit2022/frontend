import React from "react";
import {createStore} from "redux";


 const store =createStore((state)=>{

  return state;
},{
    user:{
        name:"test"
    }
});

export default store;