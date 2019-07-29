import React from 'react';
// import logo from './logo.svg';
import View from "./components/BootstrapView"
import ClickCard from "./components/ClickCard"
import Wrapper from "./components/Wrapper"
import clickObjects from "./clickObjects.json"


class App extends React.Component {
  state={
    clickObjects,
    score:  0,
    highScore: 0,
    correct: "Start clicking to begin",
    win: false,
    clicked:[]
  }

 randomize = () => Math.random() > .5 ? -1 : 1

spursClicked = spursClick => {
if(this.state.clicked.indexOf(spursClick) === -1){
let score = this.state.clicked.length + 1,
    clicked = score === this.state.clickObjects.length ? []: [...this.state.clicked,spursClick]
    
    this.setState({
      clickObjects: this.state.clickObjects.sort(this.randomize),
      clicked: clicked,
      score: score,
      highScore: Math.max(this.state.highScore, score),
      correct:"You guessed right!",
      win: score === this.state.clickObjects.length
    })
  console.log(this.state)
  // console.log("score " + score)
  // console.log("clicked " + clicked)
}
else if(this.state.score === this.state.clickObjects.length - 1 ) {
    
  this.setState({
    clickObjects: this.state.clickObjects.sort(this.randomize),
    correct:"YOU WIN! Let's see if you can do it again!",
    score:  0,
    win: false,
    clicked:[]
  })
}
else {
  this.setState({
    clickObjects: this.state.clickObjects.sort(this.randomize),
    clicked: [],
    score: 0,
    correct: "Bummer you lost.... Start clicking again to see if you can do better.",
    win: false
  })
  console.log("lose")
  console.log(this.state)
}
}

render(){
  return (<>
<View 
score = {this.state.score}
highScore={this.state.highScore}
correctClick={this.state.correct}
/>

<Wrapper>
      {this.state.clickObjects.map(spursClick =>
      <ClickCard
        spursClicked={this.spursClicked}
        clicked={this.state.clicked}
        id = {spursClick.id}
        key = {spursClick.id}
        image={spursClick.image}
      />
  )}
    </Wrapper>

    {/* Footer */}

<footer className="page-footer font-small blue pt-4">
<div className="footer-copyright text-center py-3">Kpassaglia 2019:
    <a href="https://github.com/kpassaglia/ClickyGame"> GitHub.com</a>
  </div>
</footer>
    </>
  );
}
};

export default App;
