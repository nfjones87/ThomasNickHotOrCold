import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guesses: [],
            num: Math.floor((Math.random() * 100) + 1)
        }
    }

    importGuesses(guess) {
        
        this.setState({
            guesses: [...this.state.guesses, guess]
        })
    }


    newGame() {

        this.setState({
            guesses: [],
            num: Math.floor((Math.random() * 100) + 1)
        })

    }



    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" onGuess ={(guess) => this.importGuesses(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }

}

