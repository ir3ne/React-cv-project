import React, { Component } from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';

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
      name: 'description',
      placeholder: 'Your job description'
    }
  },
}
class WorkExperienceItem extends Component {
  render() {
  const { experience } = workExperienceFields;
  return (
    <div>
      {this.props.workList.map(work => {
        return (
          <form id={work.id} key={work.id} onSubmit={this.props.handleSubmitWork} className="box">
          <div className="has-text-right">
            <Button className="button is-danger is-light is-small mb-2" handleClick={this.props.handleDeleteWork} type="button" text="Delete" />
          </div>
          <Input 
            type={experience.role.type} 
            name={experience.role.name} 
            placeholder={experience.role.placeholder} 
            handleChange={this.props.handleChange}
            isEditable={work.isEditable} />
          <Input 
            type={experience.where.type} 
            name={experience.where.name} 
            placeholder={experience.where.placeholder} 
            handleChange={this.props.handleChange} 
            isEditable={work.isEditable} />
            <div className="columns">
              <div className="column">
              <Input 
                type={experience.startDate.type} 
                name={experience.startDate.name} 
                placeholder={experience.startDate.placeholder} 
                handleChange={this.props.handleChange} 
                isEditable={work.isEditable} />
              </div>
              <div className="column">
              <Input 
                type={experience.endDate.type} 
                name={experience.endDate.name} 
                placeholder={experience.endDate.placeholder} 
                handleChange={this.props.handleChange} 
                isEditable={work.isEditable} />
              </div>
            </div>
          <Textarea 
            name={experience.description.name} 
            placeholder={experience.description.placeholder} 
            handleChange={this.props.handleChange}
            isEditable={work.isEditable} />
          <div className="has-text-right mt-4">
            <Button type="submit" className="button is-primary" text={work.isEditable ? 'Save' : 'Edit'} /> 
          </div>
        </form>
        );
      })}
  </div>   
  );
  }
}

export default WorkExperienceItem;