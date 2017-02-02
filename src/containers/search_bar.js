import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            term: ''
        };
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        //fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return(
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    type="text" 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                    Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state) {
    
}

function mapDispatchToProps(dispatch) {
    //puts fetchWeather action as property on container - this action is called on form submission
    return bindActionCreators({fetchWeather}, dispatch);
}



export default connect(null, mapDispatchToProps)(SearchBar);