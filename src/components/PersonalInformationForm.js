import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

const personalInfoFields = {
  firstName: {
    name: 'firstName',
    type: 'text',
    placeholder: 'First name'
  },
  lastName: {
    name: 'lastName',
    type: 'text',
    placeholder: 'Last name'
  },
  address: {
    name: 'address',
    type: 'text',
    placeholder: 'Address'
  },
  country: {
    name: 'country',
    type: 'text',
    placeholder: 'Country'
  },
  email: {
    name: 'email',
    type: 'email',
    placeholder: 'Email'
  },
  phone: {
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone'
  },
  biography: {
    name: 'biography',
    placeholder: 'Enter a short bio'
  },
  photo: {
    name: 'photo',
    type: 'file'
  }
}

const PersonalInformationForm = (props) => {
  const { firstName, lastName, address, country, email, phone, biography, photo } = personalInfoFields;
  return (
    <form className="box has-background-primary-light">
      <h4>Personal Information</h4>
      <Input 
        type={firstName.type} 
        name={firstName.name} 
        placeholder={firstName.placeholder} 
        handleChange={props.handleChange} />
      <Input 
        type={lastName.type} 
        name={lastName.name} 
        placeholder={lastName.placeholder} 
        handleChange={props.handleChange} />
      <Input 
        type={address.type} 
        name={address.name} 
        placeholder={address.placeholder} 
        handleChange={props.handleChange} />
      <Input 
        type={country.type} 
        name={country.name} 
        placeholder={country.placeholder} 
        handleChange={props.handleChange} />
      <Input 
        type={email.type} 
        name={email.name} 
        placeholder={email.placeholder} 
        handleChange={props.handleChange} />
      <Input 
        type={phone.type} 
        name={phone.name} 
        placeholder={phone.placeholder} 
        handleChange={props.handleChange} />
      <Textarea 
        name={biography.name} 
        placeholder={biography.placeholder} 
        handleChange={props.handleChange} />
      <Input 
        type={photo.type} 
        name={photo.name} 
        handleChange={props.handleChange} />
      <Button text="Save" /> 
    </form>
  );
}

export default PersonalInformationForm;