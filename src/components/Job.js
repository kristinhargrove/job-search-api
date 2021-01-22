import React from 'react';
import './Jobs.css'
import '../App.css'
import axios from 'axios';

import JobsListItem from './JobsListItem'

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            jobs: []
        }
    }

    componentDidMount() {
        axios.get('/api/jobs')
            .then(({ data }) => {
                this.setState({jobs:data})
            }
            )
    }

    render() {
        
        const jobsJSX = this.state.jobs.map((job, index) => (
             <JobsListItem key = {index} {...job} />
        ))
        
        return (
            <div>
            <div className="App">
                <header className="App-header">
                <h1 className = "App-title">Jobs in Atlanta</h1>
                <p className="App-subtitle">Click to explore jobs</p>
                </header>
            </div>
            <div className="Jobs"> 
                {jobsJSX}
            </div>
            </div>
        );
    }
}
export default Job;