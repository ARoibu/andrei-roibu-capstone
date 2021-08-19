import React from 'react';
import axios from 'axios';
import {API_URL} from '../../util';
import CreateLog from '../../components/CreateLog/CreateLog';
import DisplayLog from '../../components/DisplayLog/DisplayLog';


class Log extends React.Component {
    state = {
        logs: []
    };

    componentDidMount() {
        axios.get(`${API_URL}/logs`)
        .then((response) => {
            this.setState({
                logs: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    componentDidUpdate() {
        axios.get(`${API_URL}/logs`)
        .then((response) => {
            this.setState({
                logs: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <main>
                <CreateLog/>
                <DisplayLog logs={this.state.logs}/>
            </main>
        );
    }
};

export default Log;