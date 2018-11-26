import React from 'react';
import { Component } from 'react';
import Table from './Table.js';


class App extends Component {
    
        state = {
            characters: [
                {
                    'name': 'Charlie',
                    'job': 'Janitor'
                },
                {
                    'name': 'Mac',
                    'job': 'Bouncer'
                },
                {
                    'name': 'Dee',
                    'job': 'Aspring actress'
                },
                {
                    'name': 'Dennis',
                    'job': 'Bartender'
                }
            ]
        };
    
        removeCharacter = index => {
            const { characters } = this.state;
        
            this.setState({
                characters: characters.filter((character, i) => { 
                    return i !== index;
                })
            });
        }
        
        render (){
        
        return (
            // const { characters } = this.state;
            <div className="container">
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter} 
                />
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
