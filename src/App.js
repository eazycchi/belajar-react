import './App.css';
import { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: parseInt(props.time) };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: parseInt(this.state.time) + 1
    });
  }

  render() {
    return (
      <div>
        <h3>Timer</h3>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock time="0" />
      </header>
    </div>
  );
}

export default App;
