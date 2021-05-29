import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';

const educationExperienceFields = {
  education: {
    course: {
      name: 'role',
      type: 'text',
      placeholder: 'Your course'
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
    }
  },
}
class EducationExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  const { education } = educationExperienceFields;
  return (
    <div>
      {this.props.educationList.map(ed => {
        return (
          <form id={ed.id} key={ed.id} onSubmit={this.props.handleSubmitEducation} className="box">
          <div>
            <Button handleClick={this.props.handleDeleteEducation} type="button" text="delete" />
          </div>
          <Input 
            type={education.course.type} 
            name={education.course.name} 
            placeholder={education.course.placeholder} 
            handleChange={this.props.handleChange}
            isEditable={ed.isEditable} />
          <Input 
            type={education.where.type} 
            name={education.where.name} 
            placeholder={education.where.placeholder} 
            handleChange={this.props.handleChange} 
            isEditable={ed.isEditable} />
            <div className="columns">
              <div className="column">
              <Input 
                type={education.startDate.type} 
                name={education.startDate.name} 
                placeholder={education.startDate.placeholder} 
                handleChange={this.props.handleChange} 
                isEditable={ed.isEditable} />
              </div>
              <div className="column">
              <Input 
                type={education.endDate.type} 
                name={education.endDate.name} 
                placeholder={education.endDate.placeholder} 
                handleChange={this.props.handleChange} 
                isEditable={ed.isEditable} />
              </div>
            </div>
          <div className="has-text-right">
            <Button type="submit" text={ed.isEditable ? 'Save' : 'Edit'} /> 
          </div>
        </form>
        );
      })}
  </div>   
  );
  }
}

export default EducationExperienceForm;