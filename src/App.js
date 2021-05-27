import React, { Component } from 'react';
import uniqid from 'uniqid';
import './App.scss';
import PersonalInformationForm from './components/PersonalInformationForm';
import WorkExperienceForm from './components/WorkExperienceForm';
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
      ]
    }

    this.handleChangePersonalInformation = this.handleChangePersonalInformation.bind(this);
    this.handleChangeWorkInformation = this.handleChangeWorkInformation.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.handleSubmitPersonal = this.handleSubmitPersonal.bind(this);
    this.handleSubmitWork = this.handleSubmitWork.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.handleDeleteWork = this.handleDeleteWork.bind(this);
  }

  isEmpty(object) {
    for (const key in object) {
      if(object[key] === undefined || object[key].length === 0) {
        return true
      }
      return false;
    }
  }
  

  handleChangePersonalInformation(e) {
    this.isEmpty(this.state.personalInformation);
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

  handleDeleteWork(e) {
    const workId = e.target.form.id;
    let workList = this.state.workexperienceInformation.filter(item => item.id !== workId);

    this.setState({
      workexperienceInformation: workList
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

  render() {
    const { isEditable, firstName, lastName, address, country, email, phone, biography, photo } = this.state.personalInformation;
    console.log('listaState in render', this.state.workexperienceInformation);
    return (
    <div className="container is-fullhd">
      <h1>CV Project</h1>
      <div className="columns">
        <div className="column">
        <h3>Edit Section</h3>
          <div className="card">
            <div className="card-content">
              <div id="work-experience-container" className="content">
                {/* <PersonalInformationForm 
                  isEditable={isEditable}
                  handleChange={this.handleChangePersonalInformation}
                  handleSubmitPersonal={this.handleSubmitPersonal}  /> */}
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
              </div>
            </div>
          </div>
        </div>
        <div className="column">
        <h3>Preview Section</h3>
          <div className="card">
            <div className="card-content">
              <div className="content">
                {this.isEmpty(this.state.personalInformation) ? 
                  <div>
                    <div className="is-size-3 has-text-centered">Let's create your CV</div>
                    <div className="is-size-2 has-text-centered">💪</div>
                  </div>
                  :
                  <div>
                    <div className="columns">
                      <div className="column">
                        <h2 className="title is-2">{firstName} {lastName}</h2>
                        <h6 className="subtitle is-6 has-text-grey">{address}{country && `, ${country}`}</h6>
                        <div>{email}</div>
                        <div>{phone}</div>
                        <div>{biography}</div>
                      </div>
                      <div className="column is-3 has-text-right">
                        <img className="image" src={photo} alt="" />
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
