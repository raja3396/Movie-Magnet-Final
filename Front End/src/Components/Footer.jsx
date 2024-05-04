import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from "react-icons";
import { Container, Row, Col } from 'react-bootstrap';
export default function Footer() {
    const[support,setSupport]=useState([
        {image:"https://www.shutterstock.com/image-vector/telemarketers-icon-logo-element-illustration-260nw-1491371963.jpg",type:"Customer Suppport"},
        {image:"https://e7.pngegg.com/pngimages/706/889/png-clipart-ticket-ticket-miscellaneous-template-thumbnail.png",type:"Booking Conformation"},
        {image:"data:image/png;base64,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",type:"Subcribe letter"}
    ])
    const[queries,setQueries]=useState([
        {heading:"Movies Now Showing In Hyderabad",desc:"Preamlu | Tillu Square | Om boom bush | Razkar"},
        {heading:"Upcoming Movies In Hyderabad",desc:"Bahumukam | KGF-3 | "},
        {heading:"Movie By Genre",desc:"Drama | Action | Emotion | Romantic"},
        {heading:"Movie By Languages",desc:"Telugu | Hindi | English | Kannada"},
        {heading:"Sports Events in Hyderabad",desc:"Football | Cricket | volleyball | Badmantion"},
        {heading:"Help",desc:"About us | Contact us | Terms & Conditions | Privacy policy"}
    ])
    return (
        <div className='footer container-fluid  d-flex mt-2 justify-content-around    bg-dark text-white'style={{flexDirection:"column",}}>
           <div className="container-fluid   mt-2  d-flex justify-content-around align-items-center text-center text-white" style={{paddingLeft:"40px"}} >
            <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="Icon" className="me-2 " style={{ maxWidth: '50px' }} />
            <div className="flex-grow-1" >
                <h4 className="mb-0">List your shows</h4>
                <p className="mb-0">Got a show, event, activity, or a great experience? Book Now</p>
            </div>
             <button className="btn btn-danger">Contact today</button>
            </div>
            <div className='container-fluid mt-2 bg-secondary d-flex justify-content-around'>
                {
                   support.map((supportdata)=>(
                    <div className='container  m-2 ' style={{width:"20%" ,height:"120px"}} >
                    <img src={supportdata.image} className='w-100 mt-1 ' style={{height:"70px"}} alt="" />
                    <h1 className='h6 mt-2 text-truncate text-lg '>{supportdata.type} </h1>
 
                   </div>
                   ))
                  
                }
                

            </div>
            <div className='container-fluid mt-2  p-2 d-flex flex-column'>
                {
                    queries.map((query)=>(
                        <div className='foot-head mb-2'>
                          <h1 className='h5'>{query.heading}</h1>
                          <p>{query.desc}</p>
                       </div>
                    ))
                }
          </div>
          <div className="container">
            <div className="text-center">
               <hr className="my-4"/>
            </div>
            
          </div>
          <Container className='mb-3'>
                <Row className="justify-content-center">
                    <Col xs={6} sm={3} className="text-center">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icons mx-2 rounded-circle bg-black p-2"><FaFacebookF size={20} /></a>
                    </Col>
                    <Col xs={6} sm={3} className="text-center">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icons  mx-2 rounded-circle bg-black p-2"><FaTwitter size={20} /></a>
                    </Col>
                    <Col xs={6} sm={3} className="text-center">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icons mx-2 rounded-circle bg-black p-2"><FaInstagram size={20} /></a>
                    </Col>
                    <Col xs={6} sm={3} className="text-center">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className=" icons  mx-2 rounded-circle bg-black p-2"><FaLinkedinIn size={20} /></a>
                    </Col>
                </Row>
            </Container>
            
            
        </div>
        
    );
}
