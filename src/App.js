import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom' /* Demonstrates import renaming using 'as'  */
import './App.css';
import { HeroHeader } from './components/HeroHeader' /* Demonstrates a 'named' export */
import MtgCard from './components/MTGCard'
import MTGCardCollection from './components/MTGCardCollection';
import Navigation from './components/Navigation'
import MTGHome from './components/MTGHome';
import allCards from './data/scryfall-default-cards.json';

/**
 * Main component / container for the
 * application.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
      cards: []
    }
  }
  /**
   * Once everything is ready to run, 
   * Assign the imported allCards (JSON) 
   * object collection to state.cards
   */
  componentWillMount() {
    this.setState( {      
      cards: allCards
    })
  }
  /**
   * Handles rendering components and content to
   * the screen, as well as maintaining all routing 
   * through 
   */
  render() {
    return (      
      <Router>
        <div className="App">
          <Navigation />
          <HeroHeader />        
          <div className="grid-container">
            <div className="grid-x">
              <div className="cell small-12">
                <Switch>
                  <Route exact path="/" component={MTGHome} />
                  <Route exact path="/allcards" render={() => (
                    <MTGCardCollection cards={this.state.cards} />
                  )} />
                  <Route exact path="/card/:id" render={(props) => {
                    let cardId = props.location.pathname.replace("/card/", '');
                    let card = this.state.cards.find(card => card.id === cardId);
                    return(
                      <div className="topspace">                        
                        <MtgCard card={card} />
                      </div>
                    )
                  }} />
                  <Route exact path="/randomcard" render={() => {
                    let randomIdx = Math.floor(Math.random() * this.state.cards.length);
                    let card = this.state.cards[randomIdx];
                    return (
                      <div className="topspace">
                        <MtgCard card={card} />
                      </div>
                    )
                 }} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;