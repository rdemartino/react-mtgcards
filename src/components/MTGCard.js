import React from 'react'
import './MTGCard.css'


export default class MtgCard extends React.Component {

    get card() {
        return this.props.card;
    }
    render() {
        return (
            <div>
                <div className="grid-x">
                    <div className="cell small-12 text-left">
                        <a href="/">Home</a> &gt;&gt; <a href="/allcards">Cards</a>
                    </div>
                </div>
                <div className="grid-x mtgcard">
                    <div className="cell small-12 medium-3">
                        <img src={this.card.image_uris.normal} alt={this.card.name} />
                    </div>
                    <div className="cell small-12 medium-9 text-left card-data">
                        <div className="card-heading hide-for-small-only">
                            <div className="card-title">{this.card.name}</div>
                            <div className="card-subtitle">
                                {this.card.type_line}
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th width="150"></th>
                                    <th width="900"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SET</td>
                                    <td>{this.card.set_name}</td>
                                </tr>
                                <tr>
                                    <td>RELEASE DATE</td>
                                    <td>{this.card.released_at}</td>
                                </tr>
                                <tr>
                                    <td>MANA COST</td>
                                    <td>{this.card.mana_cost === "" ? "n/a" : this.card.mana_cost}</td>
                                </tr>
                                <tr>
                                    <td>ARTIST</td>
                                    <td>{this.card.artist}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}