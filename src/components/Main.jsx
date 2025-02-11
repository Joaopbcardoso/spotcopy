import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export const Main = () => {
  return (
    <div className='main'>
        <div className='item-list'>
            <div className='item-list__header'>
                <h2>Artistas Populares</h2>
                <a className="main__link" href="/">Mostrar Mais</a>
            </div>
            <div className='sigle-item'>
                <img className='single-item__image' 
                src="https://yt3.googleusercontent.com/1ubV89-FZT-zamcU4aG0ruduzwGI52KvvftgfmGAU55GCTsUa36pQkZigYkz0T-PlTC5NKxS3Gg=s900-c-k-c0x00ffffff-no-rj" alt="Fernandinho" />
                <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
                <p>Fernandinho</p>
                <p>Artista</p>
            </div>
        </div>
    </div>
  )
}
