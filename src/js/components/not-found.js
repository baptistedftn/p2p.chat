import React from 'react'

export default () => {

  return (
    <div className='hero container'>
      <h3>404 - Page non trouvée</h3>
      <p>Oups, cette page n'existe pas!</p>
      <a
        href="/"
        className='button button-primary home-button'
      >
        Retour à l'accueil
      </a>
    </div>
  )

}
