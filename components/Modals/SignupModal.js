import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import styles from '../../styles/Pages/sign-up/signup.module.css'


import Image from 'next/image'

function SignupModal() {
  const [show, setShow] = useState(true)
  const [userData, setuserData] = useState({
    companyName: '',
    registrationNo: '',
    companyEmailAddress: '',
    otp: ''
  })
  const [userValidators, setUserValidators] = useState({
    isCompanyName: true,
    isRegistrationNo: true,
    isCompanyEmailAddress: true,
    isOtp: true
  })

  const handleOnChange = (e) => {

    try {
      e.stopPropagation();
      const { name, value } = e.target;

      const tempValidators = userValidators;


      if (name === 'companyName') {

        tempValidators.isCompanyName = value.trim() ? true : false;
        setUserValidators({ ...tempValidators })

      }

      if (name === 'registrationNo') {

        tempValidators.isRegistrationNo = value.trim() && !isNaN(value) ? true : false;
        setUserValidators({ ...tempValidators })

      }
      if (name === 'companyEmailAddress') {
        var validator = require('validator');

        tempValidators.isCompanyEmailAddress = validator.isEmail(value);
        setUserValidators({ ...tempValidators })

      }
      if (name === 'otp') {

        tempValidators.isOtp = value.trim() && !isNaN(value) && value.length <= 5 ? true : false;
        setUserValidators({ ...tempValidators })

      }
      let newUserData = { ...userData };
      newUserData[name] = value;
      console.log(newUserData)
      console.log(tempValidators)

      setuserData(newUserData);

    } catch (error) {
      console.log(error)

    }
  }
  const validator = (userData) => {

  }

  return (
    <Modal
      show={show}
      dialogClassName='modal-90w'
      aria-labelledby='example-custom-modal-styling-title'
      size='xl'
      centered>

      <Modal.Body>
        <div className={[styles.heading, 'p-5'].join(' ')}>
          <h1>
            Create An Account
          </h1>
          <h6>
            Already a user? <span>Sign In</span>
          </h6>
        </div>
        <div className='row  px-5'>

          <div className={[styles[''], 'col-md-5'].join(' ')}>

            <div className='row p-0 m-0'>

              <div className={[userValidators.isCompanyName ? styles['user-info'] : styles['in-valid'], 'col-md-6 py-2 mb-3'].join(' ')}>
                <input placeholder='Company Name' className='col-md-10  px-2' type="text" value={userData.companyName} onChange={handleOnChange} name='companyName' required />
              </div>

              <div className={[userValidators.isRegistrationNo ? styles['user-info'] : styles['in-valid'], 'col-md-6 py-2 mb-3'].join(' ')}>
                <input placeholder='Registration No' className='col-md-10  px-2' type="text" value={userData.registrationNo} onChange={handleOnChange} name='registrationNo' required />
              </div>

            </div>

            <div className={[userValidators.isCompanyEmailAddress ? styles['user-info'] : styles['in-valid'], 'col-md-12 py-2 mb-3'].join(' ')}>
              <input placeholder='Company Email Address' className='col-md-10 px-2' type="text" value={userData.companyEmailAddress} onChange={handleOnChange} name='companyEmailAddress' required />
            </div>

            <div className={[userValidators.isOtp ? styles['user-info'] : styles['in-valid'], 'col-md-12 py-2 '].join(' ')}>
              <input placeholder='OTP' className='col-md-10  px-2' type="text" value={userData.otp} onChange={handleOnChange} name='otp' required />
            </div>

            <button className='col-md-12 my-2 p-2'>Sign Up</button>

            <div className={[styles['o-auth'], 'text-center col-md-12'].join(' ')}>
              <span> Or Sign Up With </span>
            </div>

            <div className={[styles['o-auth-btn'], 'mt-3'].join(' ')}>
              <img alt='google' src='' />
              <img alt='facebook' src='' />
              <img alt='linkedin' src='' />
              <img alt='twitter' src='' />

            </div>

          </div>

          <div className='col-md-2'>
            <img alt='QR scanner' src='' />

          </div>

          <div className='col-md-5'>
            <Image alt='signup image' src='/images/signup-img.png' height={50} width={50} />
          </div>





        </div>

      </Modal.Body>

    </Modal>
  )

}
export default SignupModal