import React, { useState, useEffect } from 'react';
import '../Home.css';
import supabase from '../services/supabase';

function Home() {
  const [data, setData] = useState([]);
  const [selectedDivIndex, setSelectedDivIndex] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    fetchDataLearners();
    fetchDataObtain();
  }, []);

  const fetchDataLearners = async () => {
    try {
      const { data: fetchedData, error } = await supabase
        .from('Learners')
        .select('*');
      if (error) {
        throw error;
      }
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data from 'Learners' table:", error.message);
    }
  };
  const fetchDataObtain = async (learnerId) => {
    try {
      const { data: fetchedData, error } = await supabase
        .from('Obtain')
        .select('*')
        .eq('id_learner', learnerId); // Filtrer les données par ID de Learner
      if (error) {
        throw error;
      }
      setSelectedData(fetchedData); // Mise à jour de selectedData avec les données obtenues
      console.log("Data from 'obtain' table:", fetchedData);
    } catch (error) {
      console.error("Error fetching data from 'obtain' table:", error.message);
    }
  };

  // Tableau contenant les URLs de chaque musique correspondant à chaque div
  const musicUrls = [
    'Simon.mp3',
    'Cédric.mp3',
    'Alex.mp3',
    'Alexandre.mp3',
    'Eric.mp3',
    'Geoffrey.mp3',
    'Karl.mp3',
    'ThéoD.mp3',
    'Kevin.mp3',
    'ThéoC.mp3',
    'William.mp3',
    'Vivien.mp3',
    // Ajoutez autant d'URLs de musique que nécessaire
  ];
  const findIndexById = (id) => {
    return data.findIndex(item => item.id === id);
  };
  
  // Fonction pour activer ou désactiver la musique
  const toggleAudio = async (id) => {
    console.log("Toggle audio function called with ID:", id);
    const index = findIndexById(id);
    console.log("Index of the clicked div:", index);
  
    if (index !== -1) {
      const learnerId = data[index].id;
      console.log("Learner ID:", learnerId);
  
      if (selectedDivIndex === index) {
        console.log("Same div clicked again, resetting selected data and index.");
        setSelectedDivIndex(null);
        setSelectedData(null);
      } else {
        console.log("New div clicked, updating selected data.");
        setSelectedDivIndex(index);
        // Chargez les données de 'Obtain' uniquement si elles n'ont pas déjà été chargées
        if (!selectedData) {
          await fetchDataObtain(learnerId);
        }
      }
    }
  };
  
  
  return (
    <div>
      <div className='dflexresize'>
        {data.map((Learner, index) => (
          <div key={Learner.id} onClick={() => toggleAudio(Learner.id)} className={'reglageimg ' + Learner.id}>           
            <img src={Learner.url} alt="" className='photomg' />
            {/* Vérifier si cette div est actuellement sélectionnée */}
            {selectedDivIndex === index && (
              <audio controls autoPlay>
                <source src={musicUrls[index]} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))}
      </div>
      <div className='paddingto'>
        <div className='border-showskill-window'>
          <div className='showskill-window'>
            <div className='skill-window'>
              <p className='top-mark-window text-black'>Développer une application sécurisée</p>
              <div>
              <div>
                  {selectedData && selectedData.map((Obtain) => (
                    <div key={Obtain.id}>
                      <p>ID Learner: {Obtain.id_learner}</p>
                      <p>ID Skill: {Obtain.id_skills}</p>
                    </div>
                  ))}
                </div>
              </div>
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
          <a className='text-yellow' href="/Details">VOIR +</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
