import React from "react";
import AppHeader from "./components/App-Header";
import AppCard from "./components/App-Card";
import friends from "./friends.json";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            highScore: 0,
            currentScore: 0,
            clickedFriends: []
        }
    }
    increment(id) {
        if(this.state.clickedFriends.indexOf(id) === -1) {
            let currentScore = this.state.currentScore + 1;
            let highScore = this.state.highScore;
            if(currentScore > highScore) {
                highScore = currentScore;
            }
            this.setState({
                currentScore: currentScore,
                highScore: highScore,
                clickedFriends: [id, ...this.state.clickedFriends]
            });
            
        } else {
            this.setState({
                currentScore: 0,
                clickedFriends: []
            });
        }
    }
    render() {
        return (
            <div className="bg-secondary">
                <AppHeader highScore={this.state.highScore} currentScore={this.state.currentScore}>
                    Cartoon Clicker
                </AppHeader>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="jumbotron text-center bg-light text-dark">
                    <h1>Hello!</h1>
                    <p>Welcome to the Cartoon Clicking Memory Game of your Dreams</p>
                    <hr />
                    </div>
                    {/* <button className="btn btn-primary" onClick={this.increment.bind(this)}>Score Up</button> */}
                    <div className="d-flex flex-wrap flex-row justify-content-center col-lg-10 mx-auto">
                        {
                            friends
                            .sort( () => 0.5 - Math.random() )
                            .map(x => <AppCard 
                                name={x.name}
                                imgSource={x.image}
                                location={x.location}
                                occupation={x.occupation}
                                id={x.id}
                                key={x.id}
                                guess={this.increment.bind(this)}
                            />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
