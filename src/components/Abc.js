import React, {Component} from 'react'
// Type of componets in react
// 1. Function  - display (jsx), props
// 2. Class - state, life cycle,



class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			comments: '',
			topic: 'react'
		}
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		})
	}

	handleCommentsChange = event => {
		this.setState({
			comments: event.target.value
		})
	}

	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		event.preventDefault()
	}

	render() {
		const { username, comments, topic } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Username </label>
					<input
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
						value={comments}
						onChange={this.handleCommentsChange}
					/>
				</div>
				<div>
					<label>Topic</label>
					<select value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

function User(props) {
  return (
    <div>
      			<input
						type="text"
						value="glass" 
            // placeholder="this is my glass"
            />
            
      <h1>Hello User! {props.city}</h1>
      <Form />
    </div>
  );
}

class Great extends Component {
  constructor(props) {
    super(props);
    this.state = {city1: "India"  }
    this.changehandle = this.changehandle.bind(this)
  }

 
  // changehandle = () =>{
  //   alert("sdsdsd")
  //   this.setState({city1: 'PAKISATN'});
  // }

  changehandle() {
    this.setState({city1: 'PAKISATN'});
  }

  render() { 
    return ( 
      <div>
        <h1>hello man!!!</h1>
        {this.state.city1}
        <User city={this.state.city} />
        <button onClick={this.changehandle}>CLICK ME</button>
      </div>
     );
  }
}
 


function Abc(){
  return (
    <>
      <Great />
    </>
    
  )
}

export default Abc;

