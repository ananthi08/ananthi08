import React , {Fragment , useState} from 'react'
import{ Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {login} from  '../../actions/auth';
import ncm from '../../img/NCM1.svg';


export const Login = ({ login , isAuthenticated }) => {
    const[formData, setFormData]= useState({ 
      
        email:'',
        password:''
    
});
    const { email,password } = formData;
    const onChange  = e => 
    setFormData({...formData,[e.target.name]: e.target.value});

    const onSubmit =  async e => {
        e.preventDefault();
      login(email,password);
      };
    // Redirect if logged in
    if(isAuthenticated){
      return <Redirect to = '/dashboard' />
    }

    return (
        
     

<div class="main">
<div class="block1">
    <div class="innerblock1">

    </div>
        <div class="innerblock2"> 

        <h1 className="large text-primar">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign In Your Account</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        
        <div className="form-group">
          <input  type="email" placeholder="Email Address" name="email" autoComplete='off' value ={email} onChange = {e =>onChange(e)} required />
         
          
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete='off'
            value ={password} onChange = {e =>onChange(e)} required
            minLength="6"
          />
        </div>
        
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Dont have an account? <Link to="/Register">Sign Up</Link>
      </p>
        </div>
  
</div>
</div>
    )
};
Login.propTypes = {
login: PropTypes.func.isRequired,
isAuthenticated : PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
 {login}
  )(Login);

