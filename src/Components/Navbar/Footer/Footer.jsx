import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBRipple,
   MDBBtn
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../../Assetes/Images/logo1.png'



import upd1 from '../../../Assetes/Images/upd-1.jpg'
import upd2 from '../../../Assetes/Images/upd-2.jpg'
import upd3 from '../../../Assetes/Images/upd-3.jpg'
import upd4 from '../../../Assetes/Images/upd-4.jpg'
import upd5 from '../../../Assetes/Images/upd-5.jpg'
import upd6 from '../../../Assetes/Images/upd-6.jpg'

const Footer = () => {

  return (
   <>
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
    <MDBContainer className='pt-4' >
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.facebook.com/people/JSR-GROUP/61554699337227/?mibextid=ZbWKwL'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://x.com/_JSR_GROUP_?t=5qHTaceDw0lwy2xZcnvVqw&s=09'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          {/* <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn> */}

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.instagram.com/jsrgroup_org?igsh=ZXR6Z2g0Z2p1Nmp5'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.linkedin.com/in/jsr-group-b717132a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://github.com/KULBHUSHANSINGH-arch'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>
 
      <MDBContainer className='text-center text-md-start mt-5'>
      <MDBRow className='mt-3'>
      <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                <img src={logo} alt=""  className='mx-auto mb-4' style={{width:'23px', height:'23px', marginTop:'23px'}}/>
                JSR GROUP
              

              </h6>
              <p>
              One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
              </p>
            </MDBCol>

            
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Project's</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home Designe
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Building Structure
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Infrastructure of Arch
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Building Structure 
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>OUR Pages</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Project
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gallery
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='building' className='me-2' />
                Pritampura, New Delhi- 110034
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />               
                jsrgroup.org@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 
                (+91) 9899696819
              </p>
              <p>
                <MDBIcon color='secondary' icon='mobile' className='me-3' /> 
                (+91) 8873172039
              </p>
            </MDBCol>

            </MDBRow>
            </MDBContainer>

            
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src={upd1} alt='fuck off' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src={upd2} className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src={upd3} className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src={upd4} className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src={upd5} className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src={upd6} className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <MDBIcon icon='lightbulb' className='text-info' />
        © Designed by: Kulbhushan Singh
      </div>
    </MDBFooter>
   </>
  )
}

export default Footer