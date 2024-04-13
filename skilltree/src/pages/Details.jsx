import React, { useEffect } from 'react';
import '../Details.css';

function Details() {
    useEffect(() => {
        const audio = new Audio('./Détails.mp3');
        audio.loop = true; // Active la boucle
        audio.play();
    }, []);

    // Récupère les données depuis le localStorage pour chaque catégorie
    const categorySkillsData1 = JSON.parse(localStorage.getItem('category1Skills')) || [];
    const categorySkillsData2 = JSON.parse(localStorage.getItem('category2Skills')) || [];
    const categorySkillsData3 = JSON.parse(localStorage.getItem('category3Skills')) || [];

    // Récupère les données du learner sélectionné depuis le localStorage
    const selectedLearner = JSON.parse(localStorage.getItem('selectedLearner'));
    console.log("Selected learner:", selectedLearner);

    return (
        <div id='FlexDetails'>
            <section id='List'>
                {/* Affichage des compétences pour la catégorie 1 */}
                <h2>Catégorie 1</h2>
                {categorySkillsData1.map((element, index) => (
                    <div key={`category1-${index}`}>
                        <p>Compétence {element.id}: {element.rank}</p>
                    </div>
                ))}

                {/* Affichage des compétences pour la catégorie 2 */}
                <h2>Catégorie 2</h2>
                {categorySkillsData2.map((element, index) => (
                    <div key={`category2-${index}`}>
                        <p>Compétence {element.id}: {element.rank}</p>
                    </div>
                ))}

                {/* Affichage des compétences pour la catégorie 3 */}
                <h2>Catégorie 3</h2>
                {categorySkillsData3.map((element, index) => (
                    <div key={`category3-${index}`}>
                        <p>Compétence {element.id}: {element.rank}</p>
                    </div>
                ))}
            </section>

            {/* Section pour afficher les détails du learner sélectionné */}
            <section id='Card'>
                <img className='CardIMG' src={selectedLearner ? selectedLearner.url : "./eric.png"} alt="" />
                <h1 className='CardName'>{selectedLearner ? selectedLearner.name : 'Nom du Learner'}</h1>
                <h2 className='CardAge'>{selectedLearner ? selectedLearner.age : 'Âge du Learner'} ans </h2>
                {/* Utilisez la stack du learner sélectionné pour le p */}
                <p className='CardStacks'>{selectedLearner ? `Stacks : ${selectedLearner.stacks}` : 'Stacks du Learner'}</p>
                <p>{selectedLearner ? selectedLearner.quote : 'Le back c’est d’la merde, le front c’est bien'}</p>
            </section>
        </div>
    );
}

export default Details;
