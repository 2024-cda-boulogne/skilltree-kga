import React, { useEffect } from 'react';
import '../Details.css';

function Details() {
    const selectedLearner = JSON.parse(localStorage.getItem('selectedLearner'));

    useEffect(() => {
        const audio = new Audio('./Détails.mp3');
        audio.loop = true; // Active la boucle
        audio.play();
        const selectedLearner = JSON.parse(localStorage.getItem('selectedLearner'));
        console.log("Selected learner:", selectedLearner);
    }, []);

    return (
        <div id='FlexDetails'>
            <section id='List'>
                <div className='REACList'>
                    <h1 className='REACNumber'>1</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Installer et configurer son environnement de travail en fonction du projet</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./bronze.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>2</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Développer des interfaces utilisateur</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./bronze.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>3</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Développer des composants métiers</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./bronze.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>4</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Contribuer à la gestion d’un projet informatique</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./bronze.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>5</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Analyser les besoins et maquetter une application</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./gold.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>6</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Définir l’architecture logicielle d’une application</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./silver.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>7</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Concevoir et mettre en place une base de données relationnelle</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./silver.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>8</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Développer des composants d’accès aux données SQL et NoSQL</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./silver.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>9</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Préparer et exécuter les plans de tests d’une application</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./silver.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>10</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Préparer et documenter le déploiement d’une application</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./silver.png" alt="" />
                </div>
                <div className='REACList'>
                    <h1 className='REACNumber'>11</h1>
                    <div className='Line'></div>
                    <p className='REACName'>Contribuer à la mise en production dans une démarche DevOps</p>
                    <div className='Line'></div>
                    <img className='REACIMG' src="./silver.png" alt="" />
                </div>
            </section>
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

export default Details