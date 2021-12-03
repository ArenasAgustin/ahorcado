import React from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'

const Landing = () => {
    return (
       <div className="container">
           <h1>Ahorcado</h1>
           <div className="containerlevels">
                <h3>Hoy con que nivel te desafias?</h3>
                <div className="container-btns">
                    <div className="btns">
                         <Link to= 'home'>
                            <button className="btn">Facil</button>
                        </Link> 
                            <button  className="btn">Medio</button>
                            <button  className="btn">Dificil</button>
                    </div>
                </div>
           </div>
       </div>
    )
}

export default Landing
