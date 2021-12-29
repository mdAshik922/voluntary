import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Regester = () => {

const hendelName =()=>{
    
}
const hendelEmail =()=>{

}
const hendelText =()=>{

}
    const handelSubmit = e =>{
console.log(e);
        e.preventDefault();
    }
    return (
        <div>
            <div style={{width: '45%', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', justifyContent: 'center', marginTop: '30px', border: '2px solid ', borderRadius: '30px', backgroundColor: 'whitesmoke'}}>
            <Form onSubmit={handelSubmit}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

    <Form.Label>Full Name</Form.Label>
    <Form.Control onClick={hendelName} type="text" placeholder="name" />
    <Form.Label>Email address</Form.Label>
    <Form.Control onClick={hendelEmail} type="email" placeholder="@gmail.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control onClick={hendelText} as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        </div>
    );
};

export default Regester;