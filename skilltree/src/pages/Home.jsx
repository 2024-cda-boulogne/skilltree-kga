import React from 'react';
import '../Home.css';


function Home() {
  return (
    <div>
      <div>
        <div className='showskill-window'>
          <div className='skill-window'>
            <p className='text-black'>Développer une application sécurisée</p>
          </div>
          <div className='skill-window'>
            <p className='text-black'>Concevoir et développer une application sécurisée organisée en couches</p>
          </div>
          <div className='skill-window'>
            <p className='text-black'>Préparer le déploiement d’une application sécurisée</p>
          </div>
        </div>
        <div className='name-window'>
          <p className='text-white'>NOM</p>
        </div>
        <div className='more-window'>
          <p className='text-yellow'>VOIR +</p>
        </div>
      </div>
    </div>
  );
}

export default Home;