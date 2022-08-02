import React from "react";

class App extends React.Component{

    state = {
        username:"",
        mobile:"",
        email:"",
        city:"",
    }

    changeData = (e) => {
        let val = e.target.name;
        let myVal = e.target.value;
        this.setState({[val]:myVal})
    }

    formSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.username);
    }

  render() {
    return(
        <div className="App">
          <h2>Hello {this.state.username}</h2>
          <h2>Your Mobile Number: {this.state.mobile}</h2>
          <h2>Your Email: {this.state.email}</h2>
          <h2>You Live in: {this.state.city}</h2>
          <div>
            <form onSubmit={this.formSubmit}>
              <div className="form-group" style={{marginLeft:200}}>
                <input type="text" name="username" placeholder="Your name" onChange={this.changeData}></input><br/><br/>
                <input type="text" name="mobile" placeholder="Contact Number" onChange={this.changeData}></input><br/><br/>
                <input type="text" name="email" placeholder="Email" onChange={this.changeData}></input><br/><br/>
                <input type="text" name="city" placeholder="City" onChange={this.changeData}></input><br/><br/>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default App;
