import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './singinCard.css';
const SinginCard = () => {
  return (
    <Container sm='2' md='4' className='card '>
      <Row>
        <Col className='header'>
          <p>Customer Login</p>
        </Col>
      </Row>
      <Row>
        <Col className='second-header '>
          <p>Registered Users</p>
        </Col>
      </Row>
      <Row>
        <Col className='header-info'>
          <p>If you have an account, sign in with your email address.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <input type='text' className='input-box' placeholder='Email'></input>
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
          <a href='#'>Forget password?</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            as='input'
            type='button'
            className='login-bttn'
            value='Log In'
          />
        </Col>
      </Row>
      <Row>
        <Col style={{display: 'flex'}} className='line-div'>
          <div className='line'></div>
        </Col>
      </Row>
      <Row>
        <Col className='header'>
          <p>New Customer</p>
        </Col>
      </Row>
      <Row>
        <Col className='header-info'>
          <p>
            Creating an account has many benefits: check out faster, keep more{' '}
            <br></br>
            than one address, track orders and more.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className='create-account-bttn'
            as='input'
            type='button'
            value='Create Account'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SinginCard;
