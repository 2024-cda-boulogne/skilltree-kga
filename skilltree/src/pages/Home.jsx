import React, { useState, useEffect } from 'react';
import '../Home.css';
import supabase from '../services/supabase';

function Home() {
  const [data, setData] = useState([]);
  const [selectedDivIndex, setSelectedDivIndex] = useState(null); // Index de la div sélectionnée

  useEffect(() => {
    async function fetchData() {
      const { data: fetchedData, error } = await supabase
        .from('Learners')
        .select('*');
      if (error) {
        console.error(error);
        return;
      }

      setData(fetchedData);
    }

    fetchData();
  }, []);

  // Tableau contenant les URLs de chaque musique correspondant à chaque div
  const musicUrls = [
    'Eric.mp3',
    'Alex.mp3',
    'Karl.mp3',
    'ThéoD.mp3',
    'Kevin.mp3',
    'Vivien.mp3',
    'William.mp3',
    'ThéoD.mp3',
    'Geoffrey.mp3',
    'Alexandre.mp3',
    'Cédric.mp3',
    'Simon.mp3',
    // Ajoutez autant d'URLs de musique que nécessaire
  ];

  // Fonction pour activer ou désactiver la musique
  const toggleAudio = (index) => {
    // Si la div actuellement sélectionnée est différente de l'index passé en paramètre,
    // arrêter la musique de la div précédente et jouer la musique de la nouvelle div
    if (selectedDivIndex !== index) {
      setSelectedDivIndex(index);
    } else {
      // Si la div actuellement sélectionnée est la même que l'index passé en paramètre,
      // arrêter la musique de cette div
      setSelectedDivIndex(null);
    }
  };

  return (
    <div>
      <div className='dflexresize'>
        {data.map((Learner, index) => (
          <div key={Learner.id} onClick={() => toggleAudio(index)} className='reglageimg'>           
            <img src={Learner.url} alt="" className='photomg' />
          </div>
        ))}
      </div>
      <div className='paddingto'>
        <div className='border-showskill-window'>
          <div className='showskill-window'>

            <div className='skill-window'>
              <p className='top-mark-window text-black'>Développer une application sécurisée</p>
            </div>
            <div className='skill-window'>
              <p className='top-mark-window text-black'>Concevoir et développer une application sécurisée organisée en couches</p>
            </div>
            <div className='skill-window'>
              <p className='top-mark-window text-black'>Préparer le déploiement d’une application sécurisée</p>
            </div>

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
