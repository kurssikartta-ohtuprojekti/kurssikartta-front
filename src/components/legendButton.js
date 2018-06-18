import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap'
import './legendButton.css'

// Renders the info button and modal
const LegendButton = () => {
  return (
    <div>
      <Popup
        trigger={<Button id="legendBtn">Info</Button>}
        modal
        closeOnDocumentClick>
        <span>
          <Legend />
        </span>
      </Popup>
    </div>
  )
}

const Legend = () => {

  return (
    <div>
      <h4>Map Legend:</h4>
      <p>Kurssi vahvana = opetusta valitussa periodissa</p>
      <p>Kurssi himmeänä = ei opetusta valitulla periodilla</p>
      <p><img src={require('../images/bold.png')} alt="bold" height="10" width="42" /> = Pakollinen kurssi</p>
      <p><img src={require('../images/sin.png')} alt="blue" height="21" width="42" /> = Networking and Services</p>
      <p><img src={require('../images/kel.png')} alt="yellow" height="21" width="42" /> = Software Systems</p>
      <p><img src={require('../images/pun.png')} alt="red" height="21" width="42" /> = Algorithms, Data-analytics and Machine Learning</p>
      <p><img src={require('../images/vih.png')} alt="green" height="21" width="42" /> = Datascience</p>
      <p><img src={require('../images/orans.png')} alt="orangeish" height="21" width="42" /> = Mathematics and Statistics</p>
    </div>
  )
}

export default LegendButton