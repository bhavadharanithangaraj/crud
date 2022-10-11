import React from 'react';
import people from '../images/people.png';

const ContactCard = (props) => {
    const{ id, name, email } = props.contact;

    return(

        <div className="ui fluid vertical menu">
            <div className="item">
            <div class="row">            
            <img className="ui avatar image"  src={people} alt="people"/>
                <div className=" ui header">{name}</div>
                <div>{email}</div>
                
            </div>
            <div className="right aligned trash">
            <i className="trash alternate outline large icon"
            style={{
            
                color:"red",
                marginTop:"10px",
                marginBottom:"10px",
                textAlign:"right",
                marginRight: "20px",
                 }}
                 onClick={() => props.clickHander(id)}
                 
                ></i>
                </div>
                
                

           </div>
           </div>
           
    );
};

export default ContactCard;
