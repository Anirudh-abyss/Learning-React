import React from "react";  

function Hero({HeroName}){
    if(HeroName==='joker'){
        throw new Error('NOT A HERO')
    }
    return(
        <div>{HeroName}</div>
    )
}
export default Hero;