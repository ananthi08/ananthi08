import React, { Fragment, useState} from 'react'
import {  withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { addProfession } from '../../actions/profile';
import Alert from '../layout/Alert';
import ncm from '../../img/NCM1.svg';


const AddProfession = ({ addProfession , history }) => {
const [formData, setFormData] = useState({
     highesteducation: '',
     employeedin: '',
     occupation: '',
     annualincome: '',
     worklocation: ''

});

const { highesteducation, employeedin,occupation, annualincome , worklocation} = formData;  

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return (
      
          
            




   
  <div class="main">
  <div class="block1">
 <div class="innerblock1">

  </div>
<div class="innerblock2"> 

<h1 class="large text-primar">
        Professional Details
      </h1>
     
      <small>*  required field</small>
      <form class="form"
       onSubmit={ e => {
        e.preventDefault();
        addProfession(formData, history);
       }}>
        <div class="form-group">
          <select id="reginput" name="highesteducation" value={highesteducation} onChange={e => onChange(e)}>
            <option value="0">Highest Education </option>
            <option value="1"> Aeronautical Engineering </option>
            <option value="B.Arch">B.Arch</option>
            <option value="BCA">BCA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BBA">BBA</option>
            <option value="BE">BE</option>
            <option value="B.A">B.A</option>
            <option value="B.Com">B.Com</option>
            <option value="B.Ed">B.Ed</option>
            <option value="Other Bachelor Degree In Arts/Science">Other Bachelor Degree In Arts/Science</option>
            <option value="Other Bachelor Degree In Engineering">Other Bachelor Degree In Engineering</option>
            <option value="ME">ME</option>
            <option value="M.tech">M.tech</option>
            <option value="M.Sc">M.Sc</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
            <option value="M.A">M.A</option>
            <option value="Other Master Degree In Arts/Science">Other Master Degree In Arts/Science</option>
            <option value="Other Master Degree In Engineering">Other Master Degree In Engineering</option>
            <option value="Hotel Management">Hotel Management</option>
            <option value="Diploma">Diploma</option>
            <option value="Higher secondary">Higher secondary</option>
            <option value="Others">Others</option>

           
        
          </select>
          </div>
          <div class="form-group">
            <select id="reginput" name="employeedin" value={employeedin} onChange={e => onChange(e)}>
              <option value="0">* Employeed In</option>
              <option value="Government/PSU">Government/PSU</option>
              <option value="private">private</option>
              <option value="Defence">Defence</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Not Working">Not Working</option>
            </select>
            </div>
            <div class="form-group">
              <input type="text" placeholder="occupation" name="occupation" value={occupation} onChange={e => onChange(e)} />
            
            </div>
            <div class="form-group">
              <select id="reginput" name="annualincome" value={annualincome} onChange={e => onChange(e)}>
                <option value="0">Annual Income</option>
                <option value="0-1 Lakh">0-1 Lakh</option>
                <option value="1-2 Lakh">1-2 Lakh</option>
                <option value="2-3 Lak">2-3 Lakh</option>
                <option value="3-4Lakh">3-4Lakh</option>
                <option value="3-4Lakh">3-4Lakhs</option>
                <option value="5-6 Lakhs">5-6 Lakhs</option>
                <option value="5-6 Lakhs">5-6 Lakhs</option>
                <option value="7-8 Lakhs">7-8 Lakhs</option>
                <option value="8-9 Lakhs">8-9 Lakhs</option>
                <option value="10-20 Lakh">10-20 Lakhs</option>
                <option value="20-30 Lakhs">20-30 Lakhs</option>
                <option value="30-40 Lakhs">30-40 Lakhs</option>
                <option value="40-50 Lakhs">40-50 Lakhs</option>
                <option value="50-60 Lakh">50-60 Lakhs</option>
                <option value="60-70 Lakhs">60-70 Lakhs</option>
                <option value="70-80 Lakhs">70-80 Lakhs</option>
                <option value="80-90 Lakhs">80-90 Lakhs</option>
                <option value="90 Lakhs-1 crore">90 Lakhs-1 crore</option>


              </select>
              </div>
            
              <div class="form-group">
                <input id="reginput" type="text" placeholder="Work Location" name="worklocation" value={worklocation} onChange={e => onChange(e)} />
              
              </div>

          

        
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>      

</div>
</div>
</div>
)
    
}

AddProfession.propTypes = {
addProfession: PropTypes.func.isRequired,
}

export default connect(null, {addProfession})(withRouter(AddProfession));
