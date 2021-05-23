import React from 'react';
import Input from './Input';
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
  }
}

const PersonalInformationForm = (props) => {
  const { firstName, lastName, address, country } = personalInfoFields;
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

      {/* <Input type="text" text="Country" />
      <Input type="email" text="Email" />
      <Input type="tel" text="Phone" /> */}
      <Button text="Save" /> 
    </form>
  );
}

export default PersonalInformationForm;