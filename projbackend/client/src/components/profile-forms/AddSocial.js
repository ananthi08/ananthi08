import React, { Fragment, useState} from 'react'
import { Link ,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { addSocial } from '../../actions/profile';
import Alert from '../layout/Alert';
import ncm from '../../img/NCM1.svg'


const AddSocial = ({ addSocial , history }) => {
const [formData, setFormData] = useState({
     facebook: '',
     instagram: '',
     linkedin: ''

});

const { facebook, instagram, linkedin} = formData;  

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return (
      

        
          <div class="main">
              <div class="block1">
             <div class="innerblock1">
    
              </div>
            <div class="innerblock2"> 

                         
            <h1 class="large text-primar">
        Social Media Details</h1>
     
      <small>*  required field</small>
      <form class="form"  
          onSubmit={ e => {
          e.preventDefault();
          addSocial(formData, history); 
      }}>
        <div class="form-group">
            
                <input id="reginput" type="text" placeholder="facebook" name="facebook" value={facebook} onChange={e => onChange(e)} />
              
              </div>
              <div class="form-group">
                
                <input  id="reginput" type="text" placeholder="instagram" name="instagram" value={instagram} onChange={e => onChange(e)} />
               
              </div>

              <div class="form-group">
                <input id="reginput" type="text" placeholder= "linkedin" name="linkedin" value={linkedin} onChange={e => onChange(e)} />
              
              </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link class="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
             
           </div>
      </div>
    </div>
        
    )
}

AddSocial.propTypes = {
addSocial : PropTypes.func.isRequired,
}

export default connect(null, {addSocial})(withRouter(AddSocial));
