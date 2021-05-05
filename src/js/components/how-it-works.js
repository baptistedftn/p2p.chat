import React from 'react'
import {PlusSquare, Send, Video} from 'react-feather'

export default (props) => {

  return (
    <div className='features how-it-works'>
      <div className='container'>
        <h3>Comment ça fonctionne</h3>
        <div className='row'>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Créer une salle</div>
              <PlusSquare size={35} />
              <div className='feature-text'>Choisissez un nom de salle lisible et compréhensible, tel que le but de la réunion.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Partagez le lien</div>
              <Send size={35} />
              <div className='feature-text'>Envoyez le lien à vos invités par e-mail, chat ou tout autre moyen.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Discutez</div>
              <Video size={35} />
              <div className='feature-text'>Discutez avec vos invités via une connexion paire à paire sécurisée et cryptée.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
