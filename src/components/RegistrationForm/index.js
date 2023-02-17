import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstError: false,
    lastError: false,
    isSubmit: false,
  }

  onClickResponse = () => {
    this.setState(prevState => ({
      isSubmit: !prevState.isSubmit,
      firstName: '',
      lastName: '',
    }))
  }

  renderFormSuccess = () => (
    <div className="fillformcontainer1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="para">SubmittedSuccessfully</p>
      <button className="button" type="button" onClick={this.onClickResponse}>
        Submit Another Response
      </button>
    </div>
  )

  validFirst = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validLast = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validFirst()
    const isValidLastName = this.validLast()
    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmit: true})
    } else {
      this.setState({
        isSubmit: false,
        firstError: !isValidFirstName,
        lastError: !isValidLastName,
      })
    }
  }

  onChangeFirst = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLast = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirst = () => {
    const isValidFirst = this.validFirst()
    this.setState({firstError: !isValidFirst})
  }

  onBlurLast = () => {
    const isValidLast = this.validLast()
    this.setState({lastError: !isValidLast})
  }

  renderFillForm = () => {
    const {firstName, lastName, firstError, lastError} = this.state
    const classname = firstError ? 'inputfirstname error' : 'inputfirstname'
    return (
      <form className="fillformcontainer" onSubmit={this.onSubmitForm}>
        <label className="inputlabel" htmlFor="firstname">
          FIRSTNAME
        </label>
        <input
          type="text"
          id="firstname"
          className={classname}
          placeholder="First name"
          onChange={this.onChangeFirst}
          value={firstName}
          onBlur={this.onBlurFirst}
        />
        {firstError && <p className="para">Required</p>}

        <label className="inputlabel" htmlFor="lastname">
          LASTNAME
        </label>
        <input
          type="text"
         id="lastname"
          className={classname}
          placeholder="Last name"
          onChange={this.onChangeLast}
          value={lastName}
        />
        {lastError && <p className="para">Required</p>}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSubmit} = this.state
    return (
      <div className="container">
        <h1 className="head">Registration</h1>
        <div className="form-container">
          {isSubmit ? this.renderFormSuccess() : this.renderFillForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
