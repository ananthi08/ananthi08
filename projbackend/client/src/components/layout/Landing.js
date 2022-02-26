import React  from 'react'
import { Link, Redirect } from 'react-router-dom'
import Alert from './Alert'
import { connect} from 'react-redux';
import PropTypes from 'prop-types'



export const Landing = ({ isAuthenticated }) => {
if(isAuthenticated){
  return <Redirect to ='/dashboard' />;

}

return (
  <section className="landing">
    
        <div className="dark-overlay">
          <div className="landing-inner">
           
            


            <p className="leads" >
              <b>There is No Caste in</b>
            </p>
            <p className='leads'>
            <b><b><b>Blood</b></b></b>
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary"><b>Register Free</b></Link>

              <p className='para'>Already a member?</p><br></br>
              <Link to="/login" className="btn btn-primary"><b>Login</b></Link>
             
            </div>
           
       
          </div>
          <div class="footer">
               <p>This website is strictly for matrimonial purpose only and not a dating website</p>
                   <p>Copyright @ 2022 . All rights reserved.</p>
                   <p>powered by<b>FCGSS</b>.</p>
               </div>
       
        </div>
        
          
      </section>
      

    ) 



   
}


Landing.propTypes = {
  isAuthenticated : PropTypes.bool,
}
const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)