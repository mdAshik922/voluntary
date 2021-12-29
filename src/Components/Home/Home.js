import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

import './Home.css';

const Home = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/Volunteers')
        .then(res =>res.json())
        .then(data =>{
            setUsers(data)        })
    },[])
    return (
        <div>
        
            <h2> I GROW BY HELPING PEOPLE IN NEED. </h2>

           <div>
           <input style={{width: '25%', height: '40px', marginTop: '20px'}} type="text" placeholder="Search.."></input>
            <Button style={{marginTop: '-7px'}}  variant="primary" type="search">Search</Button>
           </div>
<div>
    {/* {
users.map(user =>  <div className="style-Volunteer " key={user._id}>
  <div className="second-style-Volunteer ">
  <img style={{width: '250px'}} src={user.picture} alt="user"/>
    <h2>{user.name}</h2>
  </div>
    </div> )
    } */}


{
users.map(user =><div key={user._id}>

<CardGroup>
 
 <Card style={{width: '15%'}}>
   <Card.Img style={{width: '250px'}} variant="top" src={user.picture} />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This is a wider card with supporting text below as a natural lead-in to
       additional content. This card has even longer content than the first to
       show that equal height action.
     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.Footer>
 </Card>
</CardGroup>

</div>)

}
</div>

         
        </div>
    );
};

export default Home;