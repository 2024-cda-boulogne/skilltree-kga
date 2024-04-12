import React, { useState, useEffect } from 'react';
import '../Home.css';
import supabase from '../services/supabase';

function Home() {
  const [data, setData] = useState([]);
  const [selectedDivIndex, setSelectedDivIndex] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [filteredDataCategory1, setFilteredDataCategory1] = useState([]);
  const [filteredDataCategory2, setFilteredDataCategory2] = useState([]);
  const [filteredDataCategory3, setFilteredDataCategory3] = useState([]);
  const [firstCategory, setFirstCategory] = useState(null); // Ajout de l'état pour la première catégorie
  const [category1Skills, setCategory1Skills] = useState(null); // Ajout de l'état pour les compétences de la catégorie 1

  useEffect(() => {
    fetchDataLearners();
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

      const skillIds = fetchedData.map(obtainItem => obtainItem.id_skills);

      const category1SkillsResponse = await supabase
        .from('Skills')
        .select('id, rank')
        .eq('category', '1');
      const category1SkillsData = category1SkillsResponse.data;

      const category1Skills = category1SkillsData.map(skillItem => ({
        id: skillItem.id,
        rank: skillItem.rank
      }));

      setCategory1Skills(category1Skills);

      const filteredDataCategory1 = fetchedData.filter(item => 
        category1Skills.some(skill => skill.id === item.id_skills)
      );

      setFilteredDataCategory1(filteredDataCategory1);
      console.log("Filtered Data Category 1:", filteredDataCategory1);
    } catch (error) {
      console.error("Error fetching data from 'obtain' table:", error.message);
    }
  };

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
  ];

  const findIndexById = (id) => {
    return data.findIndex(item => item.id === id);
  };

  const toggleAudio = async (id) => {
    console.log("Toggle audio function called with ID:", id);
    const index = findIndexById(id);
    console.log("Index of the clicked div:", index);
  
    if (index !== -1) {
      const learnerId = data[index].id;
      console.log("Learner ID:", learnerId);
  
      if (selectedDivIndex !== index) {
        console.log("New div clicked, updating selected data.");
        setSelectedDivIndex(index);
        await fetchDataObtain(learnerId);
      } else {
        console.log("Same div clicked again, resetting selected data and index.");
        setSelectedDivIndex(null);
        setSelectedData(null);
      }
    }
  };

  return (
    <div>
      <div className='dflexresize'>
        {data.map((Learner, index) => (
          <div key={Learner.id} onClick={() => toggleAudio(Learner.id)} className={'reglageimg ' + Learner.id}>           
            <img src={Learner.url} alt="" className='photomg' />
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
              {filteredDataCategory1.map((obtainItem) => (
                <div key={obtainItem.id}>
                  {/* Vérifier si category1Skills est défini avant de l'utiliser */}
                  {category1Skills && (
                    // Trouver le rang correspondant à l'id_skills dans les données des compétences de la catégorie 1
                    category1Skills.find(skill => skill.id === obtainItem.id_skills)?.rank
                  )}
                </div>
              ))}

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
