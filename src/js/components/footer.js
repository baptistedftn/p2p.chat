import React from 'react'
import {Shield, Users, Lock} from 'react-feather'

export default (props) => {

  return (
    <div id='footer'>
      <div className='container'>
        <div className='row'>
          <h5>À propos</h5>
          <p>p2p.chat est un projet gratuit et open source. Les contributions ou les rapports de bogues sont les bienvenus sur <a href="https://github.com/tom-james-watson/p2p.chat">https://github.com/tom-james-watson/p2p.chat</a>.</p>
        </div>
        <div className='row'>
          <p>Créé par <a href="https://tomjwatson.com">tomjwatson.com</a>.</p>
          <p>Traduit par <a href="https://github.com/baptistedftn">baptistedftn</a>.</p>
        </div>
      </div>
    </div>
  )

}
