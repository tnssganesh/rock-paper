import {IoIosClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import './App.css'
import {Component} from 'react'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    userImg: '',
    oppoImg: '',
    score: 0,
    status: '',
    isPlaying: false,
  }

  playAgain = () => this.setState({isPlaying: false})

  onPaper = () => {
    const oppoImg = choicesList[Math.floor(Math.random() * choicesList.length)]
    if (oppoImg.id === 'ROCK') {
      this.setState(pre => ({score: pre.score + 1, status: 'YOU WON'}))
    } else if (oppoImg.id === 'SCISSORS') {
      this.setState(pre => ({score: pre.score - 1, status: 'YOU LOSE'}))
    } else if (oppoImg.id === 'PAPER') {
      this.setState({status: 'IT IS DRAW'})
    }
    this.setState({
      userImg: choicesList[2],
      isPlaying: true,
      oppoImg,
    })
  }

  onScissor = () => {
    const oppoImg = choicesList[Math.floor(Math.random() * choicesList.length)]

    if (oppoImg.id === 'PAPER') {
      this.setState(pre => ({score: pre.score + 1, status: 'YOU WON'}))
    } else if (oppoImg.id === 'ROCK') {
      this.setState(pre => ({score: pre.score - 1, status: 'YOU LOSE'}))
    } else if (oppoImg.id === 'SCISSORS') {
      this.setState({status: 'IT IS DRAW'})
    }
    this.setState({
      userImg: choicesList[1],
      isPlaying: true,
      oppoImg,
    })
  }

  onRock = () => {
    const oppoImg = choicesList[Math.floor(Math.random() * choicesList.length)]
    if (oppoImg.id === 'SCISSORS') {
      console.log('hi')
      this.setState(pre => ({score: pre.score + 1, status: 'YOU WON'}))
    } else if (oppoImg.id === 'PAPER') {
      this.setState(pre => ({score: pre.score - 1, status: 'YOU LOSE'}))
    } else if (oppoImg.id === 'ROCK') {
      this.setState({status: 'IT IS DRAW'})
    }
    this.setState({
      userImg: choicesList[0],
      isPlaying: true,
      oppoImg,
    })
  }

  render() {
    const {userImg, oppoImg, score, status, isPlaying} = this.state
    console.log(userImg.id, oppoImg.id)
    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <div>
          <ul>
            <li>ROCK</li>
            <li>PAPER</li>
            <li>SCISSORS</li>
          </ul>
          <p>Score</p>
          <p className="score">{score}</p>
        </div>
        {isPlaying ? (
          <div>
            <p>YOU</p>
            <img alt="your choice" src={userImg.imageUrl} />
            <p>OPPONENT</p>
            <img alt="opponent choice" src={oppoImg.imageUrl} />
            <p>{status}</p>
            <button onClick={this.playAgain} type="button">
              PLAY AGAIN
            </button>
          </div>
        ) : (
          <div>
            <button
              data-testid="rockButton"
              onClick={this.onRock}
              type="button"
            >
              <img alt={choicesList[0].id} src={choicesList[0].imageUrl} />
            </button>
            <button
              data-testid="scissorsButton"
              onClick={this.onScissor}
              type="button"
            >
              <img alt={choicesList[1].id} src={choicesList[1].imageUrl} />
            </button>
            <button
              data-testid="paperButton"
              onClick={this.onPaper}
              type="button"
            >
              <img alt={choicesList[2].id} src={choicesList[2].imageUrl} />
            </button>
          </div>
        )}
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <>
                <div>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    .<IoIosClose />
                  </button>
                  <img
                    alt="rules"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
