import React, { Component } from 'react';
import './App.scss';
import PersonalInformationForm from './components/PersonalInformationForm';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInformation:{
        firstName: '',
        lastName: '',
        address: '',
        country: ''
      }
    }

    this.handleChangePersonalInformation = this.handleChangePersonalInformation.bind(this);
  }

  handleChangePersonalInformation(e) {
    const personalInformation = this.state.personalInformation;
    const editPersonal =  personalInformation;
    const {name, value} = e.target;
    editPersonal[name] = value;
    this.setState({
      personalInformation: editPersonal
    });
    console.log(this.state.personalInformation);
    return this.state.personalInformation;
  }

  render() {
    const { firstName, lastName, address, country } = this.state.personalInformation;
    return (
    <div className="container is-fullhd">
      <h1>CV Project</h1>
      <div className="columns">
        <div className="column">
        <h3>Edit Section</h3>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <PersonalInformationForm handleChange={this.handleChangePersonalInformation}/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
        <h3>Preview Section</h3>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2 class="title is-2">{firstName} {lastName}</h2>
                <h6 class="subtitle is-6 has-text-grey">{address}{country && `, ${country}`}</h6>
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
