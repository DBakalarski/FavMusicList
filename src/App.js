import React from 'react';
import './App.scss';
import List from "./Components/List";
import Form from "./Components/Form"
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  state = {
    inputValue: "",
    musicList: []
  };

  componentDidMount() {
    const musicList = localStorage.getItem('musicList');
    if (musicList === null) return
    this.setState({ musicList: JSON.parse(musicList) });
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let id = uuidv4()
    if (this.state.inputValue === "") return;
    this.setState((prevState) => ({
      musicList: [...prevState.musicList, { id, title: this.state.inputValue, isBest: false }],
      inputValue: ""
    }));
    localStorage.setItem("musicList", JSON.stringify([...this.state.musicList, { id, title: this.state.inputValue, isBest: false }]))
  }

  handleDelete = (id) => {
    const reamainingItem = [...this.state.musicList].filter(item => item.id !== id);
    this.setState({ musicList: reamainingItem });
    localStorage.setItem("musicList", JSON.stringify(reamainingItem))
  }

  handleAddToFavourite = (id) => {
    const musicList = [...this.state.musicList]
    const deleteIndex = musicList.findIndex(item => item.id === id);
    musicList[deleteIndex].isBest = !musicList[deleteIndex].isBest
    this.setState({ musicList });
    localStorage.setItem("musicList", JSON.stringify(musicList))
  }

  render() {
    return (
      <div className="favMusicList">
        <Form
          onChange={this.handleChange}
          onSubmmit={this.handleSubmit}
          value={this.state.inputValue}
        />
        <List
          addFavourite={(id) => this.handleAddToFavourite(id)}
          remove={(id) => this.handleDelete(id)}
          data={this.state.musicList}
        />
      </div>
    );
  }
}

export default App;
