import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './singupCard.css';
const SingupCard = () => {
  return (
    <Container sm='2' md='4' className='card '>
      <Row>
        <Col className='header'>
          <p>Create New Customer Account</p>
        </Col>
      </Row>
      <Row>
        <Col className='second-header '>
          <p>Personal Information</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <input
            type='text'
            className='input-box'
            placeholder='First Name'></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type='text'
            className='input-box'
            placeholder='Lasr Name'></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <input type='text' className='input-box' placeholder='Email'></input>
        </Col>
      </Row>
      <Row>
        <Col className='second-header '>
          <p>Signin Information</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type='text'
            className='input-box'
            placeholder='Password'></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type='text'
            className='input-box'
            placeholder='Confirm Password'></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            as='input'
            type='button'
            className='login-bttn'
            value='Create Account'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SingupCard;
