import React, { Component } from 'react';
// _______________________________________________________________________________________________

import {TextField, Button, Typography} from '@mui/material';

// ______________________________________________________________________________________________

import './breadcrumbs.css'
import './Styles.css'
import './css/Step1MediaQueries.css'

// _______________________________________________________________________________________________

export class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isSelected: this.props.values.type,
          incomplete: []
        };
    }

    // Remove from aaray func
    arrayRemove = (arr, value) => { 
        return arr.filter(function(ele){ 
            return ele !== value; 
        });
    }

    continue = (e) => {
        e.preventDefault();
        if (this.props.values.firstName === "") {
            this.props.nextStep(0)
            let old = this.state.incomplete
            this.setState({incomplete: [...old, "firstName"]})
        } else if (this.props.values.type === "") {
            this.props.nextStep(0)
            let old = this.state.incomplete
            this.setState({incomplete: [...old, "type"]})
        } else {
            this.props.nextStep(1);
        }
    };

    removeFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "firstName")]})
    }

    removeCardsFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "type")]})
    }

    componentDidMount = () => {
        const actives = document.querySelectorAll('.active')
        const progress = document.getElementById('progress');
        const circles = document.querySelectorAll('.circle');
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    } 
    

    render() {
        const { values, handleChange, clicked } = this.props;

        return (
            <div className='body'>
                <div className="form step1form">
                    <div className="form-content">
                        <Typography id="heading" variant='h3'>Let's Start tailoring your stay</Typography>
                        <Typography id="para-text" variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam</Typography>
                        <div className="breadcrumb">
                            <div className="container">
                                <div className="progress-container">
                                <div className="progress" id="progress"></div>
                                    <div className={`circle circle1 ${values.step >= 1 ? 'active' : ''}`}>{values.step > 1 ? '✓' : '1'}</div>
                                    <div className={`circle circle2 ${values.step >= 2 ? 'active' : ''}`}>{values.step > 2 ? '✓' : '2'}</div>
                                    <div className={`circle circle3 ${values.step >= 3 ? 'active' : ''}`}>{values.step > 3 ? '✓' : '3'}</div>
                                    <div className={`circle circle4 ${values.step >= 4 ? 'active' : ''}`}>{values.step > 4 ? '✓' : '4'}</div>
                                </div>
                            </div>
                        </div>
                        <p id='margin3em' className="lead">
                            Based on your interests and preferences, we will propose a journey within 24 hours. First of all, may I have your name?
                        </p>
                        <div id="myInput">
                            <TextField
                                id="standard-textarea firstName"
                                label="First Name"
                                placeholder="Enter Your First Name"
                                fullWidth
                                variant="standard"
                                onChange={handleChange('firstName')}
                                onClick={this.removeFromIncomplete}
                                defaultValue={values.firstName}
                                helperText={`${this.state.incomplete.includes("firstName") ? "Please enter your first name." : ""}`}
                                error={this.state.incomplete.includes("firstName") ? true : false}
                            />
                        </div>
                        <p className={`lead ${this.state.incomplete.includes('type') ? "noMarginBottom" : ""}`}>Choose the option that best suites you:</p>
                        {
                            this.state.incomplete.includes('type') ?
                            <p class="h6"><small>Please select at least one of the options</small></p> :
                            ""
                        }
                        <div onClick={this.removeCardsFromIncomplete} className="cards between">
                            <div onClick={clicked('type', 'accommodationAndTransfersOnly')} className={`card step1cardselements ${this.state.isSelected === 'accommodationAndTransfersOnly' ? "selected" : ""}`}>
                                <img onClick={() => this.setState({ isSelected: "accommodationAndTransfersOnly" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028384/Booking%20Form%20Images/Step%202/Step2-AccomodationTransfersOnly_oss3xf.jpg" className="card-img-top" alt="..." />
                                <div onClick={() => this.setState({ isSelected: "accommodationAndTransfersOnly" })} className="card-body">
                                    <p className="card-text">I’m interested in accommodation and transfers only.</p>
                                </div>
                            </div>
                            <div  id="stepOneScale" onClick={clicked('type', 'fullOnExperience')} className={`card step1cardselements ${this.state.isSelected === 'fullOnExperience' ? "selected" : ""}`}>
                                <img onClick={() => this.setState({ isSelected: "fullOnExperience" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028385/Booking%20Form%20Images/Step%202/Step2-FullOnExperience_fohx88.jpg" className="card-img-top" alt="..." />
                                <div onClick={() => this.setState({ isSelected: "fullOnExperience" })} className="card-body">
                                    <p className="card-text">I’m interested in a Full-On experience.</p>
                                </div>
                            </div>  
                        </div>
                        <div className="buttons">
                            <Button id={`${values.step === 1 ? "hide-prev" : ""}`} variant="outlined">&larr; Back</Button>
                            <Button id="next nextStepStartPage" variant="outlined" onClick={this.continue}>Get Started &rarr;</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step1;
