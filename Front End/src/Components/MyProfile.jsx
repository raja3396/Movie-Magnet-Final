import { useState } from "react";
import NavbarComponent from "./NavbarComponent";

export default function MyProfile(){
    const[profiledetails,setProfileDetails]=useState([
        {name:"nani",phoneNo:"8328527497",email:"nani@gmail.com"}
        
    ]);

    return(
        <>
         <NavbarComponent/>
         <div className="d-flex justify-content-center mt-5 " style={{marginTop:"`180px"}}>
            {
                profiledetails.map((profiledata,index)=>(
                    
                    <div key={index} className="border  p-3  rounded justify-content-center align-items-center" style={{boxShadow:"0px 0px 7px gray",backgroundColor:"orange",marginTop:"60px"}}>
                    <h1>Name: {profiledata.name}</h1>
                    <h3>Email: {profiledata.email}</h3>
                    <h3>PhoneNo: {profiledata.phoneNo}</h3>
                    <a class="btn btn-primary" href='/mytickets' role="button" style={{width:"fit-content"}}>My Tickets</a>

                </div>
                    
                ))
            }
            
         </div>
         


        </>
        
    )
}