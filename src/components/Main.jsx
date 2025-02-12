import React from 'react'
import { ItemList } from './ItemList';
import artistsArray from '../assets/database/artists';
import songsArray from '../assets/database/songs';


export const Main = () => {
    return (
        <div className='main'>
          <ItemList
           title="Artistas" 
           items={10} 
           itemsArray={ artistsArray }
           path="artists"
           idPath="artist"
           />

          <ItemList
           title="Músicas"
           items={20} 
           itemsArray={ songsArray }
           path="songs"
           idPath="song"
           />
        </div>
    );
};

