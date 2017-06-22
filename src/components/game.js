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
            num: Math.floor((Math.random() * 100) + 1),
            feedback: 'Make your guess!'
        }
    }

    importGuesses(guess) {

        if (this.state.guesses.includes(guess)) {
          return this.setState({ feedback: 'You already guessed that.' });
        } else {
          this.setState({
              guesses: [...this.state.guesses, guess]
          });
        }

        const difference = Math.abs(guess - this.state.num);

        if (Number(guess) === this.state.num) {
          this.setState({ feedback: 'You got it...Great Job!' });
        } else if (difference >= 50) {
          this.setState({ feedback: 'You are ice cold!!!!' });
        } else if (difference >= 30) {
          this.setState({ feedback: 'You are pretty cold.' });
        } else if (difference >= 10) {
          this.setState({ feedback: 'Now you are warm.' });
        } else if (difference >= 1) {
          this.setState({ feedback: 'You are hot!' });
        }
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
              <Header newGame={() => this.newGame()}/>
              <GuessSection feedback={this.state.feedback} onGuess ={(guess) => this.importGuesses(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }

}
