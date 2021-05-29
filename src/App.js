import React, { Component } from 'react';
import uniqid from 'uniqid';
import './App.scss';
import PersonalInformationForm from './components/form/PersonalInformationForm';
import WorkExperienceForm from './components/form/WorkExperienceForm';
import EducationExperienceForm from './components/form/EducationExperienceForm';
import PersonalInformationPreview from './components/preview/PersonlalInformationPreview';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInformation: {
        isEditable: true,
        firstName: undefined,
        lastName: undefined,
        address: undefined,
        country: undefined,
        email: undefined,
        phone: undefined,
        biography: undefined,
        photo: undefined
      },
      workexperienceInformation: [
        {
          id: uniqid(),
          isEditable: true,
          role: undefined,
          where: undefined,
          startDate: undefined,
          endDate: undefined,
          description: undefined
        }
      ],
      educationInformation: [
        {
          id: uniqid(),
          isEditable: true,
          course: undefined,
          where: undefined,
          startDate: undefined,
          endDate: undefined,
        }
      ]
    }

    this.handleChangePersonalInformation = this.handleChangePersonalInformation.bind(this);
    this.handleChangeWorkInformation = this.handleChangeWorkInformation.bind(this);
    this.handleChangeEducationInformation = this.handleChangeEducationInformation.bind(this);
    this.isEmptyExceptBoolean = this.isEmptyExceptBoolean.bind(this);
    this.handleSubmitPersonal = this.handleSubmitPersonal.bind(this);
    this.handleSubmitWork = this.handleSubmitWork.bind(this);
    this.handleSubmitEducation = this.handleSubmitEducation.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.handleDeleteWork = this.handleDeleteWork.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
  }

  isEmptyExceptBoolean(object) {
    for (const key in object) {
      if(typeof(object[key]) !== 'boolean') {
        console.log('j', object[key]);
        // if(object[key] === undefined || object[key].length === 0) {
        //   return true
        // }
        // return false;
      }
    }
  }

  handleChangePersonalInformation(e) {
    this.isEmptyExceptBoolean(this.state.personalInformation);
    const personalInformation = this.state.personalInformation;
    const editPersonal =  personalInformation;
    const name = e.target.name;
    const value = (e.target.files && e.target.files[0]) ? URL.createObjectURL(e.target.files[0]) : e.target.value;
    editPersonal[name] = value;
    this.setState({
      personalInformation: editPersonal
    });

    return this.state.personalInformation;
  }

  handleChangeWorkInformation(e) {
    const workId = e.target.form.id;
    this.setState({
      workexperienceInformation: this.state.workexperienceInformation.map(item => {
        if (workId === item.id) {
          item[e.target.name] = e.target.value;
        };
        return item;
      })
    });
  }

  handleChangeEducationInformation(e) {
    const edId = e.target.form.id;
    this.setState({
      educationInformation: this.state.educationInformation.map(item => {
        if (edId === item.id) {
          item[e.target.name] = e.target.value;
        };
        return item;
      })
    });
  }

  handleSubmitPersonal(e) {
    e.preventDefault();
    this.setState({
      personalInformation: {...this.state.personalInformation, isEditable: !this.state.personalInformation.isEditable}
    });
  }

  handleSubmitWork(e) {
    e.preventDefault();
    const editedWork = e.target.id;

    this.setState({
      workexperienceInformation: this.state.workexperienceInformation.map(item => {
        if (editedWork === item.id) {
          item.isEditable = !item.isEditable
        }
        return item;
      })
    });
  }

  handleSubmitEducation(e) {
    e.preventDefault();
    const educationId = e.target.id;

    this.setState({
      educationInformation: this.state.educationInformation.map(item => {
        if (educationId === item.id) {
          item.isEditable = !item.isEditable
        }
        return item;
      })
    });
  }

  handleDeleteWork(e) {
    const workId = e.target.form.id;
    let workList = this.state.workexperienceInformation.filter(item => item.id !== workId);

    this.setState({
      workexperienceInformation: workList
    });
  }

  handleDeleteEducation(e) {
    const eduId = e.target.form.id;
    let eduList = this.state.educationInformation.filter(item => item.id !== eduId);

    this.setState({
      educationInformation: eduList
    });
  }

  addWorkExperience() {
    this.setState({
      workexperienceInformation: [...this.state.workexperienceInformation, 
        {
          id: uniqid(),
          isEditable: true,
          role: undefined,
          where: undefined,
          startDate: undefined,
          endDate: undefined,
          description: undefined
        }
      ]
    });
  }

  addEducation() {
    this.setState({
      educationInformation: [...this.state.educationInformation, 
        {
          id: uniqid(),
          isEditable: true,
          course: undefined,
          where: undefined,
          startDate: undefined,
          endDate: undefined,
        }
      ]
    });
  }

  render() {
    console.log(this.isEmptyExceptBoolean(this.state.personalInformation));
    const { isEditable } = this.state.personalInformation;
    return (
    <div className="container is-fullhd">
      <h1>CV Project</h1>
      <div className="columns">
        <div className="column">
        <h3>Edit Section</h3>
          <div className="card">
            <div className="card-content">
              <div id="work-experience-container" className="content">
                <PersonalInformationForm 
                  isEditable={isEditable}
                  handleChange={this.handleChangePersonalInformation}
                  handleSubmitPersonal={this.handleSubmitPersonal}  />
                <h4>Work Experience</h4>
                <WorkExperienceForm 
                  workList={this.state.workexperienceInformation}
                  handleChange={this.handleChangeWorkInformation}
                  handleClick={this.handleSubmitWork}
                  handleDeleteWork={this.handleDeleteWork} 
                  handleSubmitWork={this.handleSubmitWork} />
                <div className="tt-mt-2">
                  <Button type="button" handleClick={this.addWorkExperience} text='Add work experience' /> 
                </div>
                <h4>Education</h4>
                <EducationExperienceForm
                  educationList={this.state.educationInformation}
                  handleChange={this.handleChangeEducationInformation}
                  handleClick={this.handleSubmitEducation}
                  handleDeleteEducation={this.handleDeleteEducation} 
                  handleSubmitEducation={this.handleSubmitEducation} 
                  />
                <div className="tt-mt-2">
                  <Button type="button" handleClick={this.addEducation} text='Add education' /> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
        <h3>Preview Section</h3>
          <div className="card">
            <div className="card-content">
              <div className="content">
                {this.isEmptyExceptBoolean(this.state.personalInformation) || this.isEmptyExceptBoolean(this.state.workexperienceInformation) ? 
                  <div>
                    <div className="is-size-3 has-text-centered">Let's create your CV</div>
                    <div className="is-size-2 has-text-centered">💪</div>
                  </div>
                  :
                  <div>
                    <PersonalInformationPreview personalCompiled={this.state.personalInformation} />
                    <div className="columns">
                      <div>
                        <div>Work Experience</div>
                        {this.state.workexperienceInformation.map(w => {
                          return (
                            <div key={w.id}>
                              <div>{w.role}</div>    
                            </div>
                          )
                        })}
                        <div></div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
  }
}

export default App;
