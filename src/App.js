import React, { Component } from 'react';
import './App.scss';
import PersonalInformationForm from './components/PersonalInformationForm';
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
      }
    }

    this.handleChangePersonalInformation = this.handleChangePersonalInformation.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    console.log(this.state.personalInformation);
    return this.state.personalInformation;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      personalInformation: {...this.state.personalInformation, isEditable: false}
    });
    console.log(this.state.personalInformation);
  }

  render() {
    const { isEditable, firstName, lastName, address, country, email, phone, biography, photo } = this.state.personalInformation;
    return (
    <div className="container is-fullhd">
      <h1>CV Project</h1>
      <div className="columns">
        <div className="column">
        <h3>Edit Section</h3>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <PersonalInformationForm 
                  isEditable={isEditable}
                  handleChange={this.handleChangePersonalInformation}
                  handleSubmit={this.handleSubmit} />
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
