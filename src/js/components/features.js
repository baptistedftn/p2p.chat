import React from 'react'
import {Shield, Users, Lock} from 'react-feather'

export default (props) => {

  return (
    <div className='features'>
      <div className='container'>
        <h3>Caractéristiques</h3>
        <div className='row'>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Des salles uniques et sécurisées</div>
              <Shield size={35} />
              <div className='feature-text'>Les salles sont générées avec un hachage crypté unique, ce qui rend les liens impossibles à deviner.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Aucune limite sur la taille de la salle</div>
              <Users size={35} />
              <div className='feature-text'>Appelez autant de personnes que vous le souhaitez. Les seules limites sont la taille de l'écran et la qualité de la connexion.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Chiffrement de bout en bout</div>
              <Lock size={35} />
              <div className='feature-text'>Toute la vidéo, l'audio et les données sont envoyés via une connexion cryptée de bout en bout à l'aide du protocole WebRTC.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
