import React, { Component } from 'react';
// _______________________________________________________________________________________________
import {Button} from '@mui/material';
// _______________________________________________________________________________________________

import './breadcrumbs.css'
import './Styles.css'

const months = {
    'Jan': '1',
    'Feb': '2',
    'Mar': '3',
    'Apr': '4',
    'May': '5',
    'Jun': '6',
    'Jul': '7',
    'Aug': '8',
    'Sep': '9',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
}

const axios = require('axios');

// _______________________________________________________________________________________________

export class Step2 extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep(1);
    };

    componentDidMount = () => {
        const actives = document.querySelectorAll('.active')
        const progress = document.getElementById('progress');
        const circles = document.querySelectorAll('.circle');
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
        console.log(this.props.values)

        const TransferDate = (date) => {
            if (date === "I don't have yet") {
                return "I don't have yet"
            } else {
                let newDate = date.slice(4, 15)
                let month = newDate.slice(0, 3)
                let day = newDate.slice(4,6)
                let year = newDate.slice(9)

                return `${day}-${months[month]}-${year}`
            }
        }

        let tripType = null;
        let holidayType = this.props.values.holidayType.join('\r\n');
        let tripInterest = this.props.values.interests.join('\r\n');
        let hotelType = null;
        let newsletterChoice = null;

        let fromDate = `${this.props.values.date[0]}`
        let toDate = `${this.props.values.date[1]}`
        let normalArrivalDate = `${this.props.values.arrivalDate}`

        if (this.props.values.type === "fullOnExperience") {
            tripType = "Full On Experience"
        } else {
            tripType = "Accommodation And Transfers Only"
        }

        if (this.props.values.hotel === "QualityBoutiqueHotel") {
            hotelType = "Quality Boutique Hotel"
        } else if (this.props.values.hotel === "LuxuryBoutiqueHotel") {
            hotelType = "Luxury Boutique Hotel"
        } else if (this.props.values.hotel === "ComfortBoutiqueHotel") {
            hotelType = "Comfort Boutique Hotel"
        } else {
            hotelType = "Self Catering Establishment"
        }

        if (holidayType === '') {
            holidayType = 'N/A'
        }

        if (tripInterest === '') {
            tripInterest = 'N/A'
        }

        if (this.props.values.newsLetter === true) {
            newsletterChoice = 'Yes'
        } else {
            newsletterChoice = 'No'
        }

        const data = {
            "8": tripType,
            "10": holidayType,
            "11": tripInterest,
            "13": hotelType,
            "16": this.props.values.firstName,
            "17": this.props.values.lastName,
            "18": `${TransferDate(fromDate)} - ${TransferDate(toDate)}`,
            "19": this.props.values.flightNumer,
            "20": `${this.props.values.age} years young`,
            "21": this.props.values.email,
            "22": this.props.values.phone,
            "23": `${TransferDate(normalArrivalDate)}`,
            "24": `${this.props.values.nights} nights`,
            "25": this.props.values.travellingFrom,
            "26": this.props.values.adults,
            "27": this.props.values.children,
            "28": `€ ${this.props.values.budgetPerPersonPerNight}`,
            "29": this.props.values.message,
            "30": this.props.values.specialRequests,
            "31": newsletterChoice,
            "form_id": "1"
          };

          console.log('Data', data)

          const config = {
            method: 'post',
            url: 'https://seal-app-mfc6k.ondigitalocean.app/tailoryourjourney',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify(data)
          };

          axios(config)
            .then(function (response) {
                console.log('Form Submitted');
            })
            .catch(function (error) {
                console.log(error);
            });
    } 
    //


    render() {
        const { values } = this.props;

        return (
            <div className='body'>
                <div className="form finalStepForm">
                    <div className="form-content last">
                        <div className="breadcrumb">
                            <div className="container">
                                <div className="progress-container">
                                <div className="progress" id="progress"></div>
                                    <div className={`circle circle1 ${values.step >= 1 ? 'active' : ''}`}>{values.step > 1 ? '✓' : '1'}</div>
                                    <div className={`circle circle2 ${values.step >= 2 ? 'active' : ''}`}>{values.step > 2 ? '✓' : '2'}</div>
                                    <div className={`circle circle3 ${values.step >= 3 ? 'active' : ''}`}>{values.step > 3 ? '✓' : '3'}</div>
                                    <div className={`circle circle4 ${values.step >= 4 ? 'active' : ''}`}>{values.step = 4 ? '✓' : '4'}</div>
                                </div>
                            </div>
                        </div>
                        <p className="display-6 lastText">
                        Thanks very much! Leave this with us, and we will get back to you within 24 hours.
                        </p>
                        <div className="buttons">
                            <Button id="hide-prev" variant="outlined">&larr; Back</Button>
                            <Button id="next" variant="outlined" onClick={() => {
                                window.location.replace("https://vv.wildfire.buzz")   
                            }} >Finished &rarr;</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step2;
