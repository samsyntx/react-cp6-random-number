import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomByClick = () => {
    const generateRandomNumber = Math.ceil(Math.random() * 100)
    this.setState(() => ({number: generateRandomNumber}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-bg-container">
        <div className="content-card-container">
          <h1 className="card-heading-style">Random Number</h1>
          <p className="card-paragraph-style">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateRandomByClick}
            className="button-style"
            type="button"
          >
            Generate
          </button>
          <p className="random-number-styling">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
