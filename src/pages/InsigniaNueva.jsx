import React from 'react';
import Navbar from './Navbar'
import Formulario from '../component/Formulario';
import Insignia from '../component/Insignia';

class InsiginiaNueva extends React.Component{
    state={
        form:{
            firstName:'',
            lastName:'',
            email:'',
            ocupacion: '',
            twitter:'',
        }
    };

    handleChange= (e)=>{
        const nextForm = this.state.form 
        nextForm [e.target.name] = e.target.value
        this.setState({
            form:nextForm,
        })
    }

    render(){
        return(
            <div>
          
            <div className='BadgeNew__hero'>
           </div>
           <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <Insignia
                        firstName={this.state.form.firstName}
                        lastName={this.state.form.lastName}
                        email={this.state.form.email}
                        ocupacion={this.state.form.ocupacion}
                        twitter={this.state.form.twitter}
                        avatar='https://lh3.googleusercontent.com/ogw/ADGmqu_e23iETjKvu6OThpjgArZYP58etUW65I32YKU0=s83-c-mo'
                    />
                </div>
                
            </div>
           </div>
            </div>
        )
    }
}

export default InsiginiaNueva;