import './css/App.css';
import React from 'react';
import Header from './components/header/Header';
import Search from './components/controls/Search'

class App extends React.Component {
  state = {
    foods: [],
    loading: false,
    display: 'log'
  }

  searchFoods = (query) => {
    console.log(query);
  }

  render(){
    return (
      <div className="App container">
        <Header/>
        <div id="control-panel" className="flex-container">
          <button id="log-btn" className="btn add-food"><i className="fas fa-book"></i> Logged</button>
          <Search searchFoods={this.searchFoods}/>
        </div>
      </div>
    );
  }
}

export default App;
