import React from 'react';
import axios from 'axios';
import './Home.scss'
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
        this.setState({category: category}, () => {
            axios.get(`${API_URL}/exercises?category=${category}`)
            .then((response) => {
                console.log(response.data)
                this.setState({exercises: response.data})
            }).catch((e) => {console.log(e)})
        })
  
    }

    componentDidMount() {
        console.log(this.props.match.params);
        if (this.props.match.params.id) {
            this.updateCategory(this.props.match.params.id)
        }
    }

    render() {
        return(
            <main className='home'>
                <Hero className='home__hero' />
                <CreateExercise updateCategory={this.updateCategory}/>
                <DisplayExercise exercises={this.state.exercises}/>
            </main>
        );
    }
};

export default Home;

