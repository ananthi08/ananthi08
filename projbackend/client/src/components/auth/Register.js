import React , {Fragment , useState} from 'react';
import{ Link , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';
import  '../../../src/App.css';
import ncm from '../../img/NCM1.svg'



import Alert from '../layout/Alert';



export const Register = ({setAlert,register,isAuthenticated}) => {
    const[formData, setFormData]= useState({
        name:'',
        email:'',
        password:'',
        password2:'',
        phnumber:''

    });
    const {name,email,password,password2,phnumber,gender} = formData;
    const onChange  = e => 
    setFormData({...formData,[e.target.name]: e.target.value});

    const onSubmit =  async e =>{
        e.preventDefault();
        if(password !== password2) {
        setAlert('password do not match','danger');
         } else {
   register({name,email,password,phnumber,gender});
        }
    } ;
    
     if(isAuthenticated){
      return <Redirect to = '/dashboard' />
    }
    
   return (
      
  
   
    <div class="main">
    <div class="block1">
        <div class="innerblock1">
    
        </div>
            <div class="innerblock2"> 
            <h1 className="large text-primary">Sign Up</h1>
           
           <p className="lead"><i className="fas fa-user"></i>Create Your Account</p>

           <form className="form" onSubmit={e => onSubmit(e)}>
             <div className="form-group">
               <input type="text" placeholder="Name" name="name" autoComplete='off' value ={name} onChange = {e =>onChange(e)}/>
             </div>
             <div className="form-group">
               <input type="email" placeholder="Email Address" name="email" autoComplete='off' value ={email} onChange = {e =>onChange(e)}/>
              
              
             </div>
             <div className="form-group">
               <input
                 type="password"
                 placeholder="Password"
                 name="password"
                 autoComplete='off'
                 value ={password} onChange = {e =>onChange(e)} 
                 />
             </div>
             <div className="form-group">
               <input
                 type="password"
                 placeholder="Confirm Password"
                 name="password2"
                 autoComplete='off'
                 value ={password2} onChange = {e =>onChange(e)} 
                 />
             </div>

             
             <div className="form-group">
               <input type="text" placeholder="Phone Number" name="phnumber" autoComplete='off' value ={phnumber} onChange = {e =>onChange(e)}/>
              
              
             </div>
             
             <input type="submit"  className="btn btn-primary" value="Register"/>
           </form>
           <p className="my-1">
             Already have an account? <Link to="/Login">Sign In</Link>
           </p>
           
            </div>
      
    </div>
    </div>
   
   
)
};


    Register.propTypes = {
      setAlert : PropTypes.func.isRequired,
      register : PropTypes.func.isRequired,
      isAuthenticated : PropTypes.bool
    }

    const mapStateToProps = state => ({
      isAuthenticated : state.auth.isAuthenticated
    });

export default connect(
  mapStateToProps,

{setAlert, register}
)
(Register);

