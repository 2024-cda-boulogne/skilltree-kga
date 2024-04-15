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
  const [category2Skills, setCategory2Skills] = useState([]);
  const [category3Skills, setCategory3Skills] = useState([]);
  const [selectedLearner, setSelectedLearner] = useState(null);


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
  
      // Récupérer les compétences de chaque catégorie dans la table "Skills" avec leur rank
      const categoriesSkills = await Promise.all([
        supabase.from('Skills').select('id, rank').eq('category', '1').in('id', skillIds),
        supabase.from('Skills').select('id, rank').eq('category', '2').in('id', skillIds),
        supabase.from('Skills').select('id, rank').eq('category', '3').in('id', skillIds),
      ]);
      
      // Mettre à jour les états d'état avec les données filtrées
      const categorySkills = categoriesSkills.map(categorySkillsResponse => {
        return categorySkillsResponse.data.map(skillItem => ({
          id: skillItem.id,
          rank: skillItem.rank
        }));
      });
  
      const [category1Skills, category2Skills, category3Skills] = categorySkills;
  
      setCategory1Skills(category1Skills);
      setCategory2Skills(category2Skills);
      setCategory3Skills(category3Skills);
  
      const filteredDataCategory1 = fetchedData.filter(item =>
        category1Skills.some(skill => skill.id === item.id_skills)
      );
      setFilteredDataCategory1(filteredDataCategory1);
  
      const filteredDataCategory2 = fetchedData.filter(item =>
        category2Skills.some(skill => skill.id === item.id_skills)
      );
      setFilteredDataCategory2(filteredDataCategory2);
  
      const filteredDataCategory3 = fetchedData.filter(item =>
        category3Skills.some(skill => skill.id === item.id_skills)
      );
      setFilteredDataCategory3(filteredDataCategory3);
  
      // Stocker les données sélectionnées dans le local storage
      localStorage.setItem('fetchedData', JSON.stringify(fetchedData));
      localStorage.setItem('filteredDataCategory1', JSON.stringify(filteredDataCategory1));
      localStorage.setItem('filteredDataCategory2', JSON.stringify(filteredDataCategory2));
      localStorage.setItem('filteredDataCategory3', JSON.stringify(filteredDataCategory3));
      localStorage.setItem('category1Skills', JSON.stringify(category1Skills));
      localStorage.setItem('category2Skills', JSON.stringify(category2Skills));
      localStorage.setItem('category3Skills', JSON.stringify(category3Skills));
  
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
    const index = findIndexById(id);
  
    if (index !== -1) {
      const learnerId = data[index].id;
      setSelectedLearner(data[index]);
  
      if (selectedDivIndex !== index) {
        setSelectedDivIndex(index);
        setSelectedLearner(data[index]); // Mettre à jour les données sélectionnées
        await fetchDataObtain(learnerId);
      
        // Stocker les données sélectionnées dans le local storage
        localStorage.setItem('selectedLearner', JSON.stringify(data[index]));
      } else {
        setSelectedDivIndex(null);
        setSelectedLearner(null); // Réinitialiser les données sélectionnées
      
        // Supprimer les données du local storage lorsqu'elles sont réinitialisées
        localStorage.removeItem('selectedLearner');
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
            {selectedDivIndex === index && (
              <div className='containerhud active'>
                <div className='testcontour' id='rotate0'></div>
                <div className='testcontour' id='rotate90'></div>
                <div className='testcontour' id='rotate180'></div>
                <div className='testcontour' id='rotate270'></div>
              </div>
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
                    (() => {
                      const rank = category1Skills.find(skill => skill.id === obtainItem.id_skills)?.rank;
                      switch (rank) {
                        case 1:
                          return <img src="./bronze.png" alt="Image 1" />;
                        case 2:
                          return <img src="./silver.png" alt="Image 2" />;
                        case 3:
                          return <img src="./gold.png" alt="Image 3" />;
                        default:
                          return rank;
                      }
                    })()
                  )}
                </div>
              ))}
            </div>
            <div className='skill-window'>
              <p className='top-mark-window text-black'>Concevoir et développer une application sécurisée organisée en couches</p>
              {filteredDataCategory2.map((obtainItem) => (
                <div key={obtainItem.id}>
                  {/* Vérifier si category1Skills est défini avant de l'utiliser */}
                  {category2Skills && (
                    // Trouver le rang correspondant à l'id_skills dans les données des compétences de la catégorie 1
                    (() => {
                      const rank = category2Skills.find(skill => skill.id === obtainItem.id_skills)?.rank;
                      switch (rank) {
                        case 1:
                          return <img src="./bronze.png" alt="Image 1" />;
                        case 2:
                          return <img src="./silver.png" alt="Image 2" />;
                        case 3:
                          return <img src="./gold.png" alt="Image 3" />;
                        default:
                          return rank;
                      }
                    })()
                  )}
                </div>
              ))}
            </div>
            <div className='skill-window'>
              <p className='top-mark-window text-black'>Préparer le déploiement d’une application sécurisée</p>
              {filteredDataCategory3.map((obtainItem) => (
                <div key={obtainItem.id}>
                  {/* Vérifier si category1Skills est défini avant de l'utiliser */}
                  {category3Skills && (
                    // Trouver le rang correspondant à l'id_skills dans les données des compétences de la catégorie 1
                    (() => {
                      const rank = category3Skills.find(skill => skill.id === obtainItem.id_skills)?.rank;
                      switch (rank) {
                        case 1:
                          return <img src="./bronze.png" alt="Image 1" />;
                        case 2:
                          return <img src="./silver.png" alt="Image 2" />;
                        case 3:
                          return <img src="./gold.png" alt="Image 3" />;
                        default:
                          return rank;
                      }
                    })()
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='name-window'>
          <p className='text-white'>{selectedLearner && selectedLearner.name}</p>
        </div>
        <div className='more-window'>
        <a className='text-yellow' href="/Details" state={{ selectedLearner }}>VOIR +</a>
        </div>
      </div>
    </div>
  );
}

export default Home;