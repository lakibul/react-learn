import React from "react";

class App extends React.Component{

  render() {

      const names = ['AA', 'BB', 'CC', 'DD', 'EE']
      const items = names.map((item, idx) => {
          return <li>{item}</li>
      })
    return(
        <div className="App">
          <h2>Student List</h2>

          <div>

          </div>
        </div>
    )
  }
}

export default App;
