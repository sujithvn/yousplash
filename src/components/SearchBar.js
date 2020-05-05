import React from 'react';


class SearchBar extends React.Component {
    state = {term: "God"};

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSub(this.state.term);
    }

    render(){
        return (
            <div className="search-bar ui segment" >
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label> Search Images/Video</label>
                        <div className="ui action input">
                            <input type="text" placeholder="God" value={this.state.term} onChange={this.onInputChange}/>
                            <button className="ui button" onClick={ this.onFormSubmit }>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;