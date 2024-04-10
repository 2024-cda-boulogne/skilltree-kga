import React, { useState, useEffect } from 'react';
import '../Home.css';
import supabase from '../services/supabase';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('Learners')
        .select('*');
        console.log(data);
      if (error) {
        console.error(error);
        return;
      }

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className='dflexresize'>
        {data.map((Learner) => (
          <div key={Learner.id}>
                <div className="image-bordure">
                  <div className='photo'> 
                    <img src={Learner.url} alt="" className='photomg' />
                  </div>
                </div>
          </div>
        ))}
      </div>
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