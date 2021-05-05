import React from 'react'

export default (props) => {

  const {roomName, created, noStream, onRequestPerms} = props

  return (
    <div id='request-perms' className='container'>
      <h3>{created ? 'Création ' : null}{roomName}</h3>
      {
        !created ? (
          <h5>Vous êtes sur le point de rejoindre un appel vidéo.</h5>
        ): null
      }
      <button
        type='button'
        className='button-primary'
        onClick={onRequestPerms}
      >
        Autoriser l'accès au micro / caméra
      </button>
    </div>
  )

}
