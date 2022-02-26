import React, { Fragment,  useState } from 'react';
import { Link , withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createProfile } from '../../actions/profile';
import Alert from '../layout/Alert';
import ncm from '../../img/NCM1.svg'

const CreateProfile = ({createProfile, history}) => {
    const [ formData ,setFormData] = useState({
        maritalstatus : '',
        height : '',
        familytype : '',
        age : '',
        mothertongue : '',
        religion : '',
        address : '',
        gender :'',
       
      
    });

    const {
        maritalstatus,
        height,
        familytype,
        age,
        mothertongue,
        religion,
        address,
        gender,
        
      } = formData;

const onChange = e => 
setFormData({...formData, [e.target.name]: e.target.value});

 const onSubmit = e => {
  e.preventDefault();
  createProfile(formData, history)
 
};


    return (
       
      <Fragment>
          <Alert />
          <div class="main">
    <div class="block1">
        <div class="innerblock1">
    
        </div>
            <div class="innerblock2"> 
            <h1 className="large text-primary">
        More Details
      </h1>
      
      <small>* = required field</small>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
        <select name="maritalstatus" value= {maritalstatus}  onChange={e => onChange(e)}>
            <option value="0">* Marital Status</option>
            <option value="Never Married">Never Married</option>
            <option value="Widowed">Widow</option>
            <option value="Divorced">Divorced</option>
            <option value=" Awaiting Divorced">Awaiting Divorced</option>
        
          </select>
          
        </div>
        
        <div className="form-group">
            <select name="height" value={height} onChange={e => onChange(e)}>
             
              <option value="0">* Height</option>
              <option value="4 Ft 6 In">4 Ft 6 In</option>
              <option value="4 Ft 7 In">4 Ft 7 In</option>
              <option value="4 Ft 8 In">4 Ft 8 In</option>
              <option value="4 Ft 8 In">4 Ft 8 In</option>
              <option value="4 Ft 9 In">4 Ft 9 In</option>
              <option value="4 Ft 10 In">4 Ft 10 In</option>
              <option value="4 Ft 11 In">4 Ft 11 In</option>
              <option value="5 Ft">5 Ft</option>
              <option value="5 Ft 1 In">5 Ft 1 In</option>
              <option value="5 Ft 2 In">5 Ft 2 In</option>
              <option value="5 Ft 2 In">5 Ft 2 In</option>
              <option value="5 Ft 3 In">5 Ft 3 In</option>
              <option value="5 Ft 4 In">5 Ft 4 In</option>
              <option value="5 Ft 5 In">5 Ft 5 In</option>
              <option value="5 Ft 6 In">5 Ft 6 In</option>
              <option value="5 Ft 7 In">5 Ft 7 In</option>
              <option value="5 Ft 8 In">5 Ft 8 In</option>
              <option value="5 Ft 9 In">5 Ft 9 In</option>
              <option value="5 Ft 10 In">5 Ft 10 In</option>
              <option value="5 Ft 11 In">5 Ft 11 In</option>
              <option value="6 Ft 1 In">6 Ft 1 In</option>
              <option value="6 Ft 2 In">6 Ft 2 In</option>
              <option value="6 Ft 3 In">6 Ft 3 In</option>
              <option value="6 Ft 4 In">6 Ft 4 In</option>
              <option value="6 Ft 6 In">6 Ft 6 In</option>
              <option value="6 Ft 6 In">6 Ft 6 In</option>
              <option value="6 Ft 8 In">6 Ft 8 In</option>
              <option value="6 Ft 9 In">6 Ft 9 In</option>
              <option value="6 Ft 10 In">6 Ft 10 In</option>
              <option value="6 Ft 11 In">6 Ft 11 In</option>
              <option value="7 Ft ">7 Ft </option>
         </select>
        </div>

        <div className="form-group">
           <select name="familytype" value={familytype} onChange={e => onChange(e)}>
                <option value="0">* Family Type</option>
                <option value="Nuclear">Nuclear </option>
                <option value="Joint">Joint</option>
            </select>
        </div>

              <div className="form-group">
                 <select name="mothertongue" value={mothertongue} onChange={e => onChange(e)}>
                      <option value="0">*Mother Tongue </option>
                      <option value="Tamil">Tamil</option>
                      <option value="Telugu">Telugu</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Malayalam">Malayalam</option>
                      <option value="Urdu">Urdu</option>
                      <option value="Others">Others</option>
                    </select> 
                </div>
     <div className="form-group">
          <input type="text" placeholder="age" name="age" value={age} onChange={e => onChange(e)} />
    </div>
       
    <div className="form-group">
            <select name="religion" value={religion} onChange={e => onChange(e)}>
              <option value="0">* Religion</option>
              <option value="Hindu">Hindu </option>
              <option value="Christianity">Christianity</option>
              <option value="Muslim">Islam</option>
              <option value="Jain">Jain</option>
              <option value="Sikh">Sikh</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Others">Others</option>
            </select>
       
        </div>
        <div className="form-group">
          <input type="text" placeholder="address" name="address" value={address} onChange = {e => onChange(e)} />
    </div>
          
    <div className="form-group">
           <select name="gender" value={gender} onChange={e => onChange(e)}>
                <option value="Gender">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
   
             
        
        <input type="submit" className="btn btn-primary my-1"  />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
           
            </div>
      
    </div>
    </div>
   
    

        </Fragment>
    )
}

CreateProfile.propTypes = {
  createProfile : PropTypes.func.isRequired,

};


export default connect(null, {createProfile})(withRouter(CreateProfile));
