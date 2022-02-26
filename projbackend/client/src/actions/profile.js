import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  GET_PROFILES,
  CLEAR_PROFILE
} from './types'
// get current user profile
export const getCurrentProfile  = () => async ( dispatch ) => {
  try {
    
    const res = await axios.get('http://localhost:5000/api/profile/me');

    dispatch ({
      type : GET_PROFILE,
      payload : res.data
    });
  } catch (err) {

    dispatch ({
      type: PROFILE_ERROR,
      payload : {msg : err.response.statusText , status : err.response.status}
    })
    
  }
};


// get all profiles

export const getProfiles  = () => async ( dispatch ) => {

  dispatch({ type : CLEAR_PROFILE})

  try {
    
    const res = await axios.get('http://localhost:5000/api/profile');

    dispatch ({
      type : GET_PROFILES,
      payload : res.data
    });
  } catch (err) {
 
    dispatch ({
      type: PROFILE_ERROR,
      payload : {msg : err.response.statusText , status : err.response.status}
    })
    
  }
};


// Get  profile by ID

export const getProfileById  = userId => async ( dispatch) => {
 try {
    
    const res = await axios.get(`http://localhost:5000/api/profile/user/${userId}`);

    dispatch ({
      type : GET_PROFILE,
      payload : res.data
    });
  } catch (err) {
 
    dispatch ({
      type: PROFILE_ERROR,
      payload : {msg : err.response.statusText , status : err.response.status}
    })
    
  }
}; 


// create or update profile

export const createProfile = (formData,
  history,
  edit = false
  ) =>   async ( dispatch )  => {
 try {
  const config = { 
    headers: {
         'Content-Type' : 'application/json'
        }
      }

  const res = await axios.post('http://localhost:5000/api/profile', formData , config);

  dispatch ({
    type: GET_PROFILE,
    payload: res.data
  });

  dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', ' success'));

  if(!edit){
    history.push('/dashboard');
  }
} catch (err) {

  const errors = err.response.data.errors;
  if(errors){
      errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
  }

  dispatch ({
    type: PROFILE_ERROR,
    payload :{msg : err.response.statusText , status : err.response.status}
  })

}
}

// Add socialmedia details

export const addSocial = (formData, history) => async  (dispatch)  =>  {
  try {
    const config = { 
      headers: {
           'Content-Type' : 'application/json'
          }
        }
  
    const res = await axios.put('http://localhost:5000/api/profile/social', formData , config);
  
    dispatch ({
      type: UPDATE_PROFILE,
      payload: res.data
    });
  
    dispatch(setAlert('Socialmedia Added', ' success'));
  
   
      history.push('/dashboard');
    
  } catch (err) {
  
    const errors = err.response.data.errors;
    if(errors){
        errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
    }
  
    dispatch ({
      type: PROFILE_ERROR,
      payload :{msg : err.response.statusText , status : err.response.status}
    })
  
  }
  



}

// Add Professional details

export const addProfession = (formData, history) => async  (dispatch)  =>  {
  try {
    const config = { 
      headers: {
           'Content-Type' : 'application/json'
          }
        }
  
    const res = await axios.put('http://localhost:5000/api/profile/profession', formData , config);
  
    dispatch ({
      type: UPDATE_PROFILE,
      payload: res.data
    });
  
    dispatch(setAlert('Professional Details Added', ' success'));
  
   
      history.push('/dashboard');
    
  } catch (err) {
  
    const errors = err.response.data.errors;
    if(errors){
        errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
    }
  
    dispatch ({
      type: PROFILE_ERROR,
      payload :{msg : err.response.statusText , status : err.response.status}
    })
  
  }
  



}



// Add Partner details

export const addPartner = (formData, history) => async  (dispatch)  =>  {
  try {
    const config = { 
      headers: {
           'Content-Type' : 'application/json'
          }
        }
  
    const res = await axios.put('http://localhost:5000/api/profile/partner', formData , config);
  
    dispatch ({
      type: UPDATE_PROFILE,
      payload: res.data
    });
  
    dispatch(setAlert('Partner preference Added', ' success'));
  
   
      history.push('/dashboard');
    
  } catch (err) {
  
    const errors = err.response.data.errors;
    if(errors){
        errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
    }
  
    dispatch ({
      type: PROFILE_ERROR,
      payload :{msg : err.response.statusText , status : err.response.status}
    })
  
  }
  



}

