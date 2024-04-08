import React from 'react';
import '../Details.css';

function Details() {
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
                <img className='CardIMG' src="./eric.png" alt="" />
                <h1 className='CardName'>Eric Da Silva Rocha</h1>
                <h2 className='CardAge'>28 ans</h2>
                <p className='CardStacks'>Stacks : React</p>
                <p>Le back c’est d’la merde, le front c’est bien </p>
            </section>
        </div>
    );
}

export default Details