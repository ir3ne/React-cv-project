import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

const workExperienceFields = {
  experience: {
    role: {
      name: 'role',
      type: 'text',
      placeholder: 'Your role'
    },
    where: {
      name: 'where',
      type: 'text',
      placeholder: 'Where'
    },
    startDate: {
      name: 'startDate',
      type: 'date'
    },
    endDate: {
      name: 'endDate',
      type: 'date'
    },
    description: {
      name: 'role',
      placeholder: 'Your job description'
    }
  },
}

const WorkExperienceItem = (props) => {
  const { experience } = workExperienceFields;
  return (
    <form id={props.id} onSubmit={props.handleSubmitWork} className="box">
      <Input 
        type={experience.role.type} 
        name={experience.role.name} 
        placeholder={experience.role.placeholder} 
        handleChange={props.handleChange} 
        isEditable={props.isEditable} />
      <Input 
        type={experience.where.type} 
        name={experience.where.name} 
        placeholder={experience.where.placeholder} 
        handleChange={props.handleChange} 
        isEditable={props.isEditable} />
        <div className="columns">
          <div className="column">
          <Input 
            type={experience.startDate.type} 
            name={experience.startDate.name} 
            placeholder={experience.startDate.placeholder} 
            handleChange={props.handleChange} 
            isEditable={props.isEditable} />
          </div>
          <div className="column">
          <Input 
            type={experience.endDate.type} 
            name={experience.endDate.name} 
            placeholder={experience.endDate.placeholder} 
            handleChange={props.handleChange} 
            isEditable={props.isEditable} />
          </div>
        </div>
      <Textarea 
        name={experience.description.name} 
        placeholder={experience.description.placeholder} 
        handleChange={props.handleChange}
        isEditable={props.isEditable} />
      <div className="has-text-right">
        <Button type="submit" text={props.isEditable ? 'Save' : 'Edit'} /> 
      </div>
    </form>
  );
}

export default WorkExperienceItem;