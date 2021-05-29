import React from 'react';

const PersonalInformationPreview = (props) => {
  const { isEditable, firstName, lastName, address, country, email, phone, biography, photo } = props.personalCompiled;
  return (
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
  );
}

export default PersonalInformationPreview;