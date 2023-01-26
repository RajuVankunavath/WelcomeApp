import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  changeSubcribeButton = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  getButton = () => {
    const {subscribe} = this.state
    return subscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButton()
    return (
      <div className="bg-container">
        <h1 className="greeting-msg">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="button"
          onClick={this.changeSubcribeButton}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
