import React from 'react';
import { Link } from 'react-router-dom';

const DashboardAction = () => {
  return (
               
    <div className='dash-buttons'>
      <Link to='/edit-profile' >
       
      </Link><br></br><br></br>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primar' /> Edit Profile
      </Link><br></br><br></br>
 
     
      <Link to='/add-social' className='btn btn-light'>
        <i className='fab fa-black-tie text-primar' /> Add Social Media Details
      </Link><br></br><br></br>
      <Link to='/add-profession' className='btn btn-light'>
        <i className='fas fa-user-circle text-primar' /> Add  Professinal Details
      </Link><br></br><br></br>
      <Link to='/add-partner' className='btn btn-light'>
        <i className='fas fa-user-circle text-primar' /> Add Partner Preference Details
      </Link>
    </div>

  );
};

export default DashboardAction;