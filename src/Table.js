import  React, { Component } from 'react';
import TableHeader from './TableHeader.js';
import TableBody from './TableBody.js';

class Table extends Component {
    render (){
        const {characterData } = this.props;
        return(
            <table>
                <TableHeader />
                <TableBody  characterData={characterData}/>
            </table>  
        )
    }
}

export default Table;