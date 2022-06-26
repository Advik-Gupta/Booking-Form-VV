import React, { Component } from 'react';
import Step1 from './Step1';
import Step2A from './Step2A'
import Step2B from './Step2B'
import Step3 from './Step3'
import Step4 from './Step4'

export class UserForm extends Component {
    state = {
        step: 1,
        type: '',

        // Type A
        hotel: '',
        // Type B
        holidayType: [],
        interests: [],
        // Common
        date: '',
        flightNumer: '',
        transfersRequired: false,
        transferOption: '',

        // Contact Info
        firstName: '',
        lastName: "",
        age: '',
        email: '',
        phone: '',
        arrivalDate: '',
        nights: '',
        travellingFrom: '',
        adults: '',
        children: '',
        budgetPerPersonPerNight: '',
        message: '',
        specialRequests: '',
        terms: false,
        newsLetter: false,
        phonePrefix: '',
    }

    // Remove from aaray func
    arrayRemove = (arr, value) => { 
        return arr.filter(function(ele){ 
            return ele !== value; 
        });
    }

    // Proceed to next step
    nextStep = (value=1) => {
        const { step } = this.state;
        this.setState({
        step: step + value
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
        step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    // Handle fields change
    handlePhonePrefixChange = (code) => {
        this.setState({ 'phonePrefix': code });
    };

    // Handle fields change
    clickedChoices = (input, value) => e => {
        const obj = this.state[input];
        if (!obj.includes(value)) {
            this.setState({ [input]: [ ...obj, value] });
        } else {
            const newObj = this.arrayRemove(obj, value)
            this.setState({ [input]: [...newObj] })
        }
        
    };

    // Handle clicks
    clicked = (input, value) => e => {
        this.setState({ [input]: value });
    };

    // Handle setting
    setting = (input, value) => {
        this.setState({ [input]: value });
    };
    
    render() {
        const { step } = this.state;
        const { type, hotel, holidayType, interests, lastName, date, flightNumer, transfersRequired, transferOption, firstName, age, email, phone, phonePrefix, arrivalDate, nights, travellingFrom, adults, children, budgetPerPersonPerNight, message, specialRequests, terms, newsLetter} = this.state;
        const values = { step, type, hotel, holidayType, interests, lastName, date, flightNumer, transfersRequired, transferOption, firstName, age, email, phone, phonePrefix, arrivalDate, nights, travellingFrom, adults, children, budgetPerPersonPerNight, message, specialRequests, terms, newsLetter};
        
        switch (step) {
            case 1:
                return (
                    <Step1 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        clicked={this.clicked}
                        values={values}
                    />
                )

            case 2:
                if (type === 'accommodationAndTransfersOnly') {
                    return (
                        <Step2A
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            clicked={this.clicked}
                            values={values}
                            setting={this.setting}
                        />
                    )
                } else {
                    return (
                        <Step2B
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            clickedChoices={this.clickedChoices}
                            clicked={this.clicked}
                            values={values}
                            setting={this.setting}
                        />
                    )
                }

            case 3: //contact info
                return (
                    <Step3 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handlePhonePrefixChange={this.handlePhonePrefixChange}
                        clicked={this.clicked}
                        values={values}
                        setting={this.setting}
                    />
                )

            case 4: //submit
                return (
                    <Step4 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        clicked={this.clicked}
                        values={values}
                    />
                )
        
            default:
                break;
        }
    }
}

export default UserForm;
