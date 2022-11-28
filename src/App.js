// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// //belajar STATE
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start: parseInt(props.start) };
  }
  //lifecycle
  componentDidMount() {
    this.interval = setInterval(
      () => this.increase(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  increase() {
    // mengupdate state time setiap detik
    this.setState({
      start: parseInt(this.state.start) + 1
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.start} Detik</h1>
      </div>
    );
  }
}

// // belajar event pakai function
function Clicker() {
  function handleClick(e) {
    alert('Berhasil klik Yeay!')
    e.preventDefault()
  }
  return (
    <a href='http://eazycchi.my.id' onClick={handleClick}>Klik disini</a>
  )
}

// // belajar event pakai class
class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
      </button>
    )
  }
}


// // belajar membuat form
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem: '',
      items: []
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      // items: this.state.items.concat([this.state.todoItem])
      // atau
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }
  handleChange = (e) => {
    this.setState({
      todoItem: e.target.value
    })
    console.log(this.state.todoItem)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange} />
          <button>Tambah</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

function List(props) {
  return (
    <ul>
      {
        props.items.map((item, index) =>
          <li key={index}>{item}</li>
        )
      }
    </ul>
  );
}

// // belajar menggunakan API 
class API extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({
        items: data,
        isLoading: false
      }))
  }

  render() {
    const { items, isLoading } = this.state

    if (isLoading) {
      return (<span>Loading . . .</span>)
    }
    return (
      <div>
        <ul>
          {items.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

// belajar Routes
function Home() {
  return <h1>Halaman Home</h1>
}
function ListUsers() {
  return (
    <div>

      <h1>List Users</h1>
      <ul>
        <li><Link to='user/Mochi'>Mochi</Link></li>
        <li><Link to='user/Izza'>Izza</Link></li>
        <li><Link to='user/Eazycchi'>Eazycchi</Link></li>
      </ul>
    </div>
  )
}
function DetailUser({ match }) {
  return <h1>Ini halaman detail {match.params.nama}</h1>
}
function NoMatch() {
  return <h1>404</h1>
}
class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to='/belajar-react/'>Home</Link></li>
            <li><Link to='/belajar-react/users'>User</Link></li>
          </nav>

          <main>
            <Switch>
              <Route path='/belajar-react/' exact component={Home} />
              <Route path='/belajar-react/users' exact component={ListUsers} />
              <Route path='/belajar-react/user/:nama' exact component={DetailUser} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

// App memakai function
// function App() {
// return (
//   <div className="App" >
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt='logo' />
//       {/* <Timer start="0" /> */}
//       {/* <Clicker /> */}
//       {/* <Toggle /> */}
//       {/* <Form /> */}
//       {/* <API /> */}
//       <Routes />
//     </header>
//   </div>
// );
// }

// ReactFragment digunakan untuk membungkus return tenpa memasukkan div

// belajar membuat game tictactoe
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// App memakai class
class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Routes />
          {/* <img src={logo} className="App-logo" alt='logo' /> */}
          <Game />
          <Timer start="0" />
          <Clicker />
          <Toggle />
          <Form />
          <API />
        </header>
      </div>
    );
  }
}

export default App;
