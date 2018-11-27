import React from 'react';
import { Component } from 'react';
import Table from './Table.js';
import Form from './Form.js';


class App extends Component {
    
        state = {
            characters: []
        };
    
        removeCharacter = index => {
            const { characters } = this.state;
        
            this.setState({
                characters: characters.filter((character, i) => { 
                    return i !== index;
                })
            });
        }

        handleSubmit = character => {
            this.setState({characters: [...this.state.characters, character]});
        }
        
        render (){
        
        return (
            // const { characters } = this.state;
            <div className="container">
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter} 
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
    

    // render(){

    //     const characters = [
    //         {
    //             'name': 'Charlie',
    //             'job': 'Janitor'
    //         },
    //         {
    //             'name': 'Mac',
    //             'job': 'Bouncer'
    //         },
    //         {
    //             'name': 'Dee',
    //             'job': 'Aspring actress'
    //         },
    //         {
    //             'name': 'Dennis',
    //             'job': 'Bartender'
    //         }
    //     ];

    //     return (
    //         <div className="container">
    //             <Table  characterData = {characters} />
    //         </div>
    //     );     
    // }
}

export default App;
