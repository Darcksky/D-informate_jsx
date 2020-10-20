import React from 'react';






class Formulario extends React.Component{
    handleClick = (e) =>{
        console.log('Boton presionado')
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submit')
        console.log(this.state)
    }
    render(){
        return(
           <div>
                <h1>Estudiante</h1>
                <form onSubmit={this.handleSubmit}>
                
                        
                <div className='form-group'>
                    <label>ror </label>
                    <input onChange={this.props.onChange} className='form-control' type='text' name='fistName' value='this.props.formValues.firstName'/>

                </div>
                    
                   
                    <button onClick={this.handleClick} className='btn btn-primary'>Guardar</button>

                </form>
            </div>
        )
    }
}

export default Formulario;