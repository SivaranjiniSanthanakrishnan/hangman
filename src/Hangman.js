import React from 'react';
import {randomWord} from './words'
import image0 from './images/0.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import { Button } from '@material-ui/core';

class Hangman extends React.Component{
    static defaultProps = {
        maxWrong : 10,
        images : [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]
    }
    constructor(props){
        super(props);
        this.state = {
            mistake : 0,
            guessed : new Set([]),
            answer : randomWord()
        }
    }
    guessedWord = () => {
        return this.state.answer.split("").map(letter=> this.state.guessed.has(letter) ? letter : " __ ");
    }
    handleGuess = (guessedLetter) => {
        this.setState({
            guessed : this.state.guessed.add(guessedLetter),
            mistake : this.state.mistake + (this.state.answer.includes(guessedLetter) ? 0 : 1)
            // 0 + 1 => 1
        })
    }
    generateButton = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <Button key={letter} value={letter} onClick={() => this.handleGuess(letter)} 
                    disabled={this.state.guessed.has(letter)}>{letter}</Button>
        ))
    }
    handleReset = () => {
        this.setState  ({
            mistake : 0,
            guessed : new Set([]),
            answer : randomWord()
        })
    }
    render(){
        var gameState = this.generateButton();
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const isWon = this.guessedWord().join("") === this.state.answer;
        if(isWon) {
            gameState = "You Won!!!"
        }
        if(gameOver) {
            gameState = "Better luck next time!!!"
        }
        return(
            <div align="center">
                <h1>Hangman</h1>
                <div>Wrong guesses : {this.state.mistake} of {this.props.maxWrong}</div> <br/> <br/>
                <img src={this.props.images[this.state.mistake]} />

                <p> Guess the Programming Language </p>
                <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
                <p style={{width: '50%'}}>{gameState} </p>
                <button onClick={()=>this.handleReset()}>Reset</button>
            </div>
        )
    }
}

export default Hangman;