import React, {Component} from 'react';

class App extends Component {

    state = {response: 'No response yet!'}

    getHandler = () => {

        fetch('https://ad-snadbox.firebaseio.com/users/Wojciech.json').then(response => response.json())
            .then((json) => {
                this.setState({
                    response: JSON.stringify(json)
                })
            })
    }

    postHandler = () => {

        fetch ('https://ad-snadbox.firebaseio.com/users/Wojciech.json',
            {
                method: 'POST',
                body: JSON.stringify({

                    name: "Wojciech",
                    lastname: "Paluch",
                    active: false

                })

            }
        )
    }

        render()
        {
            return (
                <div>
                    <button onClick={this.getHandler}>Get Data from our endpoint</button>

                    <p>
                        {this.state.response}
                    </p>

                    <button onClick={this.postHandler}>Post Data from our endpoint</button>
                </div>
            );
        }
    }

    export
    default
    App;
