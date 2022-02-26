import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


 const Navbar = ({ auth: { isAuthenticated,loading} = { isAuthenticated: false, loading: false }, logout }) => {
const authLinks = (
  <ul>     
   <li><Link to="/profiles">

   
   Profiles</Link>
   </li>
   <li>

     <a onClick={logout} href ='#!'>
       <i className='fas fa-sign-out-alt'></i>{' '}
       <span className="hide-sm"></span>Logout
       </a>
     </li>
   </ul>

)

const guestLinks = (
  
   <ul>   
   
   </ul>
)




    return (
        <nav className='navbar' >
     <h1></h1>
     {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
    );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps , {logout})(Navbar);
