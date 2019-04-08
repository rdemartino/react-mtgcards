import React from 'react'
import './MTGHome.css'
import reactLogo from './../images/logo-react.png'
import mtgCardBack from './../images/mtgcard-back.jpg';

/**
 * Functional component
 * This component makes use of imported graphics, 
 * and styles, as well as inline styles.
 */
const MTGHome = () => 
    <div className="grid-x topspace mtg-home">
        <div className="cell small-12 text-center">
            <img src={reactLogo} alt="React" style={{width:"80px"}} />
        </div>
        <div className="cell small-4 text-center padding-small">
            <img id="MtgCardBack" src={mtgCardBack} alt="Back view of Magic card" />
        </div>
        <div className="cell small-8 text-left">
            <div className="main-content">
                <p>My son recently got me into playing <a href="https://magic.wizards.com/en/new-to-magic" target="_blank" rel="noopener noreferrer">Magic</a> and I thought this could provide a good project 
                    to learn React. Luckily <a href="https://scryfall.com/" target="_blank" rel="noopener noreferrer">Scryfall</a> provides a 
                    free REST API which includes access to all of the Magic Card data. - Thank you Scryfall!</p>
                <p>
                    This app allows you to <a href="/allcards">filter Magic cards by type</a> (Land, Creature, Artifact, etc...) and view 
                    the details of each card.
                </p>                
                <p>
                    Some of the concepts include...
                </p>
                <ul>
                    <li><a href="https://reactjs.org/docs/react-component.html" target="_blank" rel="noopener noreferrer">Components</a></li>
                    <li>Project structuring / organization</li>
                    <li><a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener noreferrer">JSX</a></li>
                    <li><a href="https://reactjs.org/docs/faq-ajax.html" target="_blank" rel="noopener noreferrer">Fetching data (JSON)</a></li>
                    <li>Working with collections</li>
                    <li>Rendering based on state</li>
                    <li>Using local storage to save state</li>
                    <li>Incorporating 3rd party libaries, <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noopener noreferrer">react-router</a>,  <a href="https://foundation.zurb.com/" target="_blank" rel="noopener noreferrer">foundation</a></li>
                    <li>ES6, NPM, etc... etc...</li>
                </ul>
                <p className="small-note">
                    To be considerate of Scryfall, I downloaded a small JSON data set containing the 
                    MTG cards and make requests for the individual card images only.
                </p>
            </div>
        </div>
    </div>    

export default MTGHome;