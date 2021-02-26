import React from 'react';

import './search-panel.css'

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(evt) {
        const term = evt.target.value;
        // Новый синтаксис, тоже самое что и term: term
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    
    render(){
        
        return (
            <input 
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={this.onUpdateSearch}
            ></input>
        )
    }
}

