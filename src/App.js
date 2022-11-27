import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';

// //belajar STATE
// class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { start: parseInt(props.start) };
//   }

//   //lifecycle
//   componentDidMount() {
//     this.interval = setInterval(
//       () => this.increase(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   increase() {
//     // mengupdate state time setiap detik
//     this.setState({
//       start: parseInt(this.state.start) + 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.start} Detik</h1>
//       </div>
//     );
//   }
// }

// // belajar event pakai function
// function Clicker() {
//   function handleClick(e) {
//     alert('Berhasil klik Yeay!')
//     e.preventDefault()
//   }
//   return (
//     <a href='http://eazycchi.my.id' onClick={handleClick}>Klik disini</a>
//   )
// }

// // belajar event pakai class
// class Toggle extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toggleStatus: true
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(state => ({
//       toggleStatus: !state.toggleStatus
//     }))
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.toggleStatus ? 'ON' : 'OFF'}
//       </button>
//     )
//   }
// }


// // belajar membuat form
// class Form extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       todoItem: '',
//       items: []
//     }
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState({
//       // items: this.state.items.concat([this.state.todoItem])
//       // atau
//       items: [...this.state.items, this.state.todoItem],
//       todoItem: ''
//     })
//   }

//   handleChange = (e) => {
//     this.setState({
//       todoItem: e.target.value
//     })
//     console.log(this.state.todoItem)
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input value={this.state.todoItem} onChange={this.handleChange} />
//           <button>Tambah</button>
//         </form>
//         <List items={this.state.items} />
//       </div>
//     );
//   }
// }

// function List(props) {
//   return (
//     <ul>
//       {
//         props.items.map((item, index) =>
//           <li key={index}>{item}</li>
//         )
//       }
//     </ul>
//   );
// }



function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt='logo' />
        {/* <Timer start="0" /> */}
        {/* <Clicker /> */}
        {/* <Toggle /> */}
        {/* <Form /> */}
      </header>
    </div>
  );
}

export default App;
