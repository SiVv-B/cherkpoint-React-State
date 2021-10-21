import React, { Component } from 'react'
import Picture from '../profilePicture.PNG';
class Person extends Component {
  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    })
  }
  constructor(props) {
    console.log('constructor()')
    super(props)
    this.state = {
      fullName: 'Siwar Belkhir',
      imgSrc:Picture,
      bio: 'I am a student at GoMyCode.',
      profession: 'Student',

      intervall: null,
      timer: 0,
      isVisible: false,
    }
  }

  componentDidMount() {
    console.log('componentDidMount()')
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 })
      }, 1000),
    })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()')
    clearInterval(this.sate.intervall)
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide the profile' : ' Show the profile'}
        </button>
        {this.state.isVisible ? (
          <div>
            <h1> Hello {this.state.fullName}</h1>
            <img src={this.state.imgSrc}
              alt="my picture"
              style={{
                width: '30%',
                height: '40%',
                marginLeft: '5%',
              }}
            />
            <h2> Profession: {this.state.profession}</h2>
            <h3> Bio: {this.state.bio}</h3>
            <h2>{this.state.timer} </h2>
          </div>
        ) : (
          <h4>Click on the button to show the profile</h4>
        )}
      </div>
    )
  }
}

export default Person
