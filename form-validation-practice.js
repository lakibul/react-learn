import React from "react";

class App extends React.Component{

    state = {
        email:"",
        password:"",
        emailError:"",
        passError:"",
        details:"",
        age:"",
    }

    validate(){
        if(!this.state.email>0 && !this.state.password>0){
            this.setState({emailError:"Email and Password is required", passError: "Email and Password is required"})
        }
        else if(!this.state.email>0){
            this.setState({emailError:"Email is required"})
        }
        else if(!this.state.password>0){
            this.setState({passError:"Password is required"})
        }
        else{
            return true;
        }
    }

    formSubmit = (e) =>{
        e.preventDefault();

    }

    render() {
        return(
            <div className="App">
                <h2>Login Panel</h2>

                <div>
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group" style={{marginLeft:200}}>
                            <label>Email: </label><br/>
                            <input type="email" name="email" placeholder="Your email" onChange={(event)=>this.setState({email:event.target.value})}></input><br/>
                            <strong style={{color:'red'}}>{this.state.emailError}</strong><br/>

                            <label>Password : </label><br/>
                            <input type="password" name="password" placeholder="Your password" onChange={(event)=>this.setState({password:event.target.value})}></input><br/>
                            <strong style={{color:'red'}}>{this.state.passError}</strong><br/>

                            <label>Details : </label><br/>
                            <textarea onChange={(event)=>{this.setState({details:event.target.value})}}>Write on here</textarea><br/>
                            <h6>{this.state.details}</h6>

                            <h4>Select Option</h4>
                            <select onChange={(event)=>{this.setState({age:event.target.value})}}>
                                <option value="" selected disabled>Select your Age</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                            </select><br/>
                            <h6>My Age: {this.state.age}</h6>

                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;
