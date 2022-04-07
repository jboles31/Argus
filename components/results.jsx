import React from 'react';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

const Results = ( props ) => {


  const cardGenerator = (reps) => {
    
    let result = []
    
    reps.map((rep) => {

      let branch = rep.type ==  "representative" ? "House of Representatives" : "Senate";

      let cardHeader = (
        <div className="card-header">
          <div className="branch">{branch}</div>
          {rep.bio.party}
        </div>
      )

      let social = []
      let testObj = Object.entries(rep.social)
      console.log('testObj: ', testObj);
      Object.keys(rep.social).map(key => {
        
        if(rep.social[key] != null) {
          switch (key) {
            case 'twitter':
              social.push(
                <a className="twitter" target="_blank" href={"https://www.twitter.com/" + rep.social[key]} rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></a>
              )
              break;
            case 'facebook':
              social.push(
                <a className="twitter" target="_blank" href={"https://www.facebook.com/" + rep.social[key]} rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
              )
                break;
          }
        }

      })

      result.push(
        <div className="card">
          {cardHeader}
          <div className="card-body">
            <h5 className="card-title">{rep.bio.first_name} {rep.bio.last_name}</h5>
            <p className="card-text">
              Age: {getAge(rep.bio.birthday)} <br></br>
              Website: <a className="link" target="_blank" href={rep.contact.url} rel="noreferrer">{rep.contact.url}</a> <br></br>
              Phone: {rep.contact.phone} <br></br>
              Address:  {rep.contact.address} <br></br>
            </p>
            {social.length > 0 ? <div className="socialWrapper">{social}</div> : null}
          </div>
        </div>
      )
    })

    return result
  }

  return (
    <div className="result-list">
      {cardGenerator(props.reps)}
    </div>
  )
}

export default Results;