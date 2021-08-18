import React from 'react';
import axios from 'axios';
import CreateExercise from '../../components/CreateExercise/CreateExercise';
import DisplayExercise from '../../components/DisplayExercise/DisplayExercise';
import Hero from '../../components/Hero/Hero';
import {API_URL} from '../../util';
class Home extends React.Component {
    state = {
        category: '', 
        exercises: []
    }

    updateCategory = (category) => {
        console.log(category)
        this.setState({category: category})
    }

    componentDidMount() {
        axios.get(`${API_URL}/exercises`)
        .then((response) => {
            this.setState({
                exercises: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <main>
                <Hero />
                <CreateExercise updateCategory={this.updateCategory}/>
                <DisplayExercise />
            </main>
        );
    }
};

export default Home;

