import React from 'react';
import axios from 'axios';
import {API_URL} from '../../util';
import CreateLog from '../../components/CreateLog/CreateLog';
import DisplayLog from '../../components/DisplayLog/DisplayLog';
import './Log.scss'


class Log extends React.Component {
    state = {
        logs: []
    };

    onDelete = (id) => {
        axios.delete(`${API_URL}/delete/${id}`)
            .then(console.log('done'))
    }

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
            <main className='logspage'>
                <CreateLog/>
                <DisplayLog logs={this.state.logs} onDelete={this.onDelete}/>
            </main>
        );
    }
};

export default Log;