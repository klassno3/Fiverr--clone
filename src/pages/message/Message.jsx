import React from 'react';
import "./Message.scss";
import { Link } from  "react-router-dom";
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className='Link' to="/messages">MESSAGES  > John Doe </Link> 
        </span>
        <div className="messages">
          <div className="item">
            <img
            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quia.
              Veritatis tempore maxime ab, ut dolores nihil in, libero iure voluptates odit hic
              officiis, blanditiis placeat labore architecto corrupti consequuntur.</p>
          </div>
          <div className="item owner">
            <img
            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quia.
              Veritatis tempore maxime ab, ut dolores nihil in, libero iure voluptates odit hic
              officiis, blanditiis placeat labore architecto corrupti consequuntur.</p>
          </div>
          <div className="item">
            <img
            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quia.
              Veritatis tempore maxime ab, ut dolores nihil in, libero iure voluptates odit hic
              officiis, blanditiis placeat labore architecto corrupti consequuntur.</p>
          </div>
          <div className="item owner">
            <img
            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quia.
              Veritatis tempore maxime ab, ut dolores nihil in, libero iure voluptates odit hic
              officiis, blanditiis placeat labore architecto corrupti consequuntur.</p>
          </div>
          
        </div>
        <hr/>
        <div className="write">
          <textarea name="" id="" cols="30"placeholder='write a message' rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
   </div>
  )
}
import "./Message.scss"
export default Message
