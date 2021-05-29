import React from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import InputFile from '../InputFile';
import Button from '../Button';

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
    placeholder: 'Choose a file'
  }
}

const PersonalInformationForm = (props) => {
  const { firstName, lastName, address, country, email, phone, biography, photo } = personalInfoFields;
  return (
    <form onSubmit={props.handleSubmitPersonal} className="box">
      <h4>Personal Information</h4>
      <Input 
        type={firstName.type} 
        name={firstName.name} 
        placeholder={firstName.placeholder} 
        handleChange={props.handleChange} 
        isEditable={props.isEditable} />
      <Input 
        type={lastName.type} 
        name={lastName.name} 
        placeholder={lastName.placeholder} 
        handleChange={props.handleChange}
        isEditable={props.isEditable} />
      <Input 
        type={address.type} 
        name={address.name} 
        placeholder={address.placeholder} 
        handleChange={props.handleChange}
        isEditable={props.isEditable} />
      <Input 
        type={country.type} 
        name={country.name} 
        placeholder={country.placeholder} 
        handleChange={props.handleChange}
        isEditable={props.isEditable} />
      <Input 
        type={email.type} 
        name={email.name} 
        placeholder={email.placeholder} 
        handleChange={props.handleChange}
        isEditable={props.isEditable} />
      <Input 
        type={phone.type} 
        name={phone.name} 
        placeholder={phone.placeholder} 
        handleChange={props.handleChange}
        isEditable={props.isEditable} />
      <Textarea 
        name={biography.name} 
        placeholder={biography.placeholder} 
        handleChange={props.handleChange}
        isEditable={props.isEditable} />
        <div className="mt-3">
        <InputFile
          name={photo.name} 
          placeholder={photo.placeholder} 
          handleChange={props.handleChange}
          isEditable={props.isEditable} />
        </div>
      <div className="has-text-right">
        <Button type="submit" text={props.isEditable ? 'Save' : 'Edit'} /> 
      </div>
    </form>
  );
}

export default PersonalInformationForm;