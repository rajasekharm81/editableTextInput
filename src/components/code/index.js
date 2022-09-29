import {Component} from 'react'

import './index.css'

class Code extends Component {
  state = {saveButton: false, textInput: ''}

  updateTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  toggleButton = () => {
    this.setState(prevState => ({saveButton: !prevState.saveButton}))
  }

  render() {
    const {saveButton, textInput} = this.state
    const PorI = saveButton ? (
      <p>{textInput}</p>
    ) : (
      <input
        value={textInput}
        onChange={this.updateTextInput}
        className="ipEl"
        type="text"
      />
    )
    const button = saveButton ? 'Edit' : 'Save'
    return (
      <div className="mainContainer">
        <div className="innerContainer">
          <h1>Editable text input</h1>
          <div className="editableContainer">
            {PorI}
            <button type="button" onClick={this.toggleButton}>
              {button}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Code
