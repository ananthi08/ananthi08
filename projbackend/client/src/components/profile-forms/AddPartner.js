import React, { Fragment, useState} from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { addPartner } from '../../actions/profile';
import Alert from '../layout/Alert';
import ncm from '../../img/NCM1.svg';



const AddPartner = ({ addPartner , history }) => {
const [formData, setFormData] = useState({
     height: '',
     mothertongue: '',
     physicalstatus: '',
     qualification: '',
     annualincome: '',
     age: '',
     religion: ''

});

const { height, mothertongue,physicalstatus, qualification , annualincome, age, religion} = formData;  

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return (
        
           
             
          <div class="main">
          <div class="block1">
         <div class="innerblock1">

          </div>
        <div class="innerblock2"> 
        <h1 class="large text-primar">
       Partner Preference
      </h1>
     
      <small>*  required field</small>

      <form class="form"
      onSubmit={ e => {
        e.preventDefault();
        addPartner(formData, history);
       }}
      >
        
          <div class="form-group">
           
            <select id="reginput" name="height" value={height} onChange={e => onChange(e)}>
            
              <option value="0">Height </option>
              <option value="1">4 Ft 6 In</option>
              <option value="4 Ft 7 In">4 Ft 7 In</option>
              <option value="4 Ft 8 In">4 Ft 8 In</option>
              <option value="4 Ft 8 In">4 Ft 8 In</option>
              <option value="4 Ft 9 In">4 Ft 9 In</option>
              <option value="4 Ft 10 In">4 Ft 10 In</option>
              <option value="4 Ft 11 In">4 Ft 11 In</option>
              <option value="5 Ft">5 Ft</option>
              <option value="5 Ft 1 In">5 Ft 1 In</option>
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
              <option value="6 Ft 7 In">6 Ft 7 In</option>
              <option value="6 Ft 8 In">6 Ft 8 In</option>
              <option value="6 Ft 9 In">6 Ft 9 In</option>
              <option value="6 Ft 10 In">6 Ft 10 In</option>
              <option value="6 Ft 11 In">6 Ft 11 In</option>
              <option value="7 Ft">7 Ft </option>
              <option value="4 Ft - 5 Ft ">4 Ft - 5 Ft </option>
              <option value="5 Ft - 6 Ft ">5 Ft - 6 Ft </option>
              <option value="6 Ft - 7 Ft">6 Ft - 7 Ft </option>
            </select>
            </div>

            <div class="form-group">
                <select id="reginput" name="mothertongue" value={mothertongue} onChange={e => onChange(e)} >
                  <option value="0">*Mother Tongue </option>
                  <option value="Tamil">Tamil</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Urdu">Urdu</option>
                  <option value="Any">Any</option>
                </select>
            </div>
            <div class="form-group">
                <select  id="reginput" name="physicalstatus" value={physicalstatus} onChange={e => onChange(e)}>
                  <option value="0">*Physical Status </option>
                  <option value="Normal">Normal</option>
                  <option value="Physically challenged">Physically challenged</option>
                 
                </select>
            </div>
            <div class="form-group">
                <select id="reginput" name="qualification" value={qualification} onChange={e => onChange(e)}>
                  <option value="0">* Qualification </option>
                  <option value="Aeronautical Engineering"> Aeronautical Engineering </option>
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
                    <select  id="reginput" name="annualincome" value={annualincome} onChange={e => onChange(e)}>
                      <option value="0">* Annual Income</option>
                      <option value="0-1 Lakh">0-1 Lakh</option>
                      <option value="1-2 Lakh">1-2 Lakh</option>
                      <option value="2-3 Lakh">2-3 Lakh</option>
                      <option value="3-4Lakh">3-4Lakh</option>
                      <option value="4-5 Lakhs">4-5 Lakhs</option>
                      <option value="5-6 Lakhs">5-6 Lakhs</option>
                      <option value="6-7 Lakhs">6-7 Lakhs</option>
                      <option value="7-8 Lakhs">7-8 Lakhs</option>
                      <option value="8-9 Lakhs">8-9 Lakhs</option>
                      <option value="10-20 Lakhs">10-20 Lakhs</option>
                      <option value="20-30 Lakhs">20-30 Lakhs</option>
                      <option value="30-40 Lakhs">30-40 Lakhs</option>
                      <option value="40-50 Lakhs">40-50 Lakhs</option>
                      <option value="50-60 Lakhs">50-60 Lakhs</option>
                      <option value="60-70 Lakhs">60-70 Lakhs</option>
                      <option value="70-80 Lakhs">70-80 Lakhs</option>
                      <option value="80-90 Lakhs">80-90 Lakhs</option>
                      <option value="90 Lakhs-1 crore">90 Lakhs-1 crore</option>
      
      
                    </select>
                   
                   </div>
        <div class="form-group">
          <input  id="reginput" type="text" placeholder="age" name="age 'eg : 23-26'" value={age} onChange={e => onChange(e)} />
        
        </div>

        <div class="form-group">
            <select id="reginput" name="religion" value={religion} onChange={e => onChange(e)}>
              <option value="0">* Religion</option>
              <option value="Hindu">Hindu </option>
              <option value="Christianity">Christianity</option>
              <option value="Muslim">Islam</option>
              <option value="Jain">Jain</option>
              <option value="Sikh">Sikh</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Any">Any</option>
            </select>
            
       
        </div>
        
      


        
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
         
       </div>
  </div>
</div>
           
    )
}

AddPartner.propTypes = {
addPartner: PropTypes.func.isRequired,
}

export default connect(null, {addPartner})(withRouter(AddPartner));
