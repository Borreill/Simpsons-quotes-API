import React from 'react';
import SimpsonsQuotes from './components/SimpsonsQuotes';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: '' }
    this.getQuote = this.getQuote.bind(this);
  }

getQuote() {
  axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        quote: data[0],
        });
      });
  }

render() {
  return (
    <div className="App">
      <SimpsonsQuotes quote={this.state.quote} />
      <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}

export default App;

