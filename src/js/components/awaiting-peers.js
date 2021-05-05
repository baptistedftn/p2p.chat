import React from 'react'
import CopyLink from './copy-link'

export default (props) => {

  return (
    <div id='awaiting-peers' className='hero container'>
      <h3>En attente d'un correspondant</h3>
      <p>Partagez le lien pour commencer l'appel vidéo</p>
      <CopyLink />
    </div>
  )

}
