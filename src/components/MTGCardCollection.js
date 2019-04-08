import React from 'react';
import { Link } from 'react-router-dom';
import "./MTGCardCollection.css";

const CARDFILTEROPTIONS = ["Land", "Creature", "Token", "Sorcery", "Planeswalker", "Artifact"];

export default class MTGCardCollection extends React.Component {

    /**
     * Sets up state by loading the "filter by" value(s) 
     * maintained in localStorage, or initializing it to 
     * an empty array, then binds the handleCardTypeChange 
     * event handler so that "this" has scope.
     */
    constructor(props) {
        super(props);
        var storedFilter = localStorage.getItem("cardFilter") === null ? [] : JSON.parse(localStorage.getItem("cardFilter"));
        this.state = {
            filterBy: storedFilter
        }
        this.handleCardTypeChange = this.handleCardTypeChange.bind(this);
    }    
    /**
     * Returns a filtered array of MTG Card objects using 
     * the filterBy values that are stored within the state.
     */
    cards() {
        var cards = this.props.cards;
        this.state.filterBy.map((filterItem) => {
           return cards = cards.filter(card => card.type_line.includes(filterItem));            
        });                
        return cards.sort(function(a,b) {
            if (a.name < b.name) {return -1;}
            if (a.name > b.name) {return 1;}
            return(0);
        });
    }
    /**
     * This is a helper function that creates a label enclosed 
     * checkbox input element using the value (val) and key 
     * provided by the calling map function.  
     */
    createFilterCheckbox = (val, key) =>  (
        <label key={key}>
            {val}
            <input type="checkbox" value={val} onChange={this.handleCardTypeChange} checked={this.state.filterBy.includes(val)} />
        </label>
    );
    /**
     * Iterates over the Filter option array and builds 
     * checkbox elements for each item.
     */
    createFilterCheckboxes = ()  => CARDFILTEROPTIONS.map(this.createFilterCheckbox);
    /**
     * This event handler is called whenever a
     * filter by checkbox value changes.  This function
     * updates the both the state maintained filterBy value
     * and the localStorage value for persistence across
     * requests.
     * @param {event} e 
     */
    handleCardTypeChange(e) {
        const filter = this.state.filterBy;
        if (e.target.checked) {
            filter.push(e.target.value);
        }
        else {
            var idx = filter.indexOf(e.target.value);
            filter.splice(idx, 1);
        }         
        localStorage.setItem("cardFilter", JSON.stringify(filter));   
        this.setState({filterBy: filter});
    }
    /**
     * Renders this component
     */
    render() {
        const mtgCards = this.cards();
        const ui = mtgCards.map((card) =>
            <tr key={card.id}>
                <td>
                    <Link to={`/card/${card.id}`}>
                        {card.name}
                    </Link>
                </td>
                <td>
                    {card.type_line}
                </td>
            </tr>
        );        
        return(
            <div className="mtg-card-collection">
                <div className="grid-x">
                    <div className="cell small-12 text-left">
                        <a href="/">Home</a>
                    </div>
                </div>
                <div className="grid-x topspace">
                    <div className="cell small-12 medium-12 text-left">
                        <h4>Filter cards by:</h4>
                        <form>
                            {this.createFilterCheckboxes()}
                        </form>
                    </div>
                </div>
                <div className="grid-x mtg-card-collection">
                    <div className="cell small-12 medium-12">
                        <div className="text-right text-small">
                            Total: {mtgCards.length}
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td width="200">Name</td>
                                    <td width="800"></td>
                                </tr>
                            </thead>
                            <tbody>
                                {ui}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}