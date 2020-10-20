import React from 'react';
import '../styles/Insignia.css';

class Insignia extends React.Component{
    render(){
        return(
            <div className="Insignia">
                <div className="Insignia_header">
                    <img src="" alt="Logo"/> 

                </div>
                <div className ="Insignia__section_name">
                    <img className="Insignia__avatar" src=""/> 
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="Insignia__setcion_info">
                    <h2>Usuario 1</h2>
                    <div>Informacion</div>
                </div>
                <div className="Insignia__footer">
                    Lv: 0 puntos: 0
                </div>
            </div>
        )
    }
}

export default Insignia;