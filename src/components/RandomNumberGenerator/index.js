import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  onGenerate = () => {
    this.setState({random: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {random} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="random-heading">Random Number</h1>
          <p className="random-instruction">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button className="button" type="submit" onClick={this.onGenerate}>
              Generate
            </button>
          </div>
          <p className="random-value">{random}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
