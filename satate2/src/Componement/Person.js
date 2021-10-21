import React, { Component } from 'react'

class Person extends Component {
  state = {
    isVisible: false,
  }

  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    })
  }

  constructor(props) {
    console.log('constructor()')
    super(props)
    this.state = {
      intervall: null,
      timer: 0,
      FullName: 'Siwar Belkhir',
      Bio: 'I am a student at GoMyCode.',
      Profession: 'Student',
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

  componentWillUnmount(){
   console.log("componentWillUnmount()");
   clearInterval(this.state.intervall);
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {' '}
          {this.state.isVisible ? 'Hide the profile' : ' Show the profile'}
        </button>
        {this.state.isVisible ? (
          <div>
            <h1> Hello {this.state.FullName}</h1>
            <img
              src={this.props.ImgSrc}
              alt="my picture"
              style={{
                width: '30%',
                height: '40%',
                marginLeft: '5%',
              }}
            />
            <h2> Profession: {this.state.Profession}</h2>
            <h3> Bio: {this.state.Bio}</h3>
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
