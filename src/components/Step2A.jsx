import React, { Component } from 'react';
// _______________________________________________________________________________________________
import {TextField, Button, Typography} from '@mui/material';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
// _______________________________________________________________________________________________

import './breadcrumbs.css'
import './Styles.css'
import './css/Step2AMediaQueries.css'

// _______________________________________________________________________________________________

export class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isSelected: '',
          transferSelection: this.props.values.transferOption,
          hotelType: this.props.values.hotel,
          flightNumerCheck: true,
          choices: this.props.values.holidayType,
          interests: this.props.values.interests,
          value: [null, null],
          incomplete: []
        };
    }   

    continue = (e) => {
        e.preventDefault();
        if (this.props.values.hotel === "" || this.props.values.date === "" || this.props.values.flightNumer === "") {
            this.props.nextStep(0);
            if (this.props.values.hotel === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "hotel"]})
            } else if (this.props.values.date === "" || this.props.values.date === null) {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "date"]})
            } else {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "flightNumber"]})
            }
        } else if (this.props.values.transfersRequired === true && this.props.values.transferOption === "") {
            this.props.nextStep(0)
            let old = this.state.incomplete
            this.setState({incomplete: [...old, "transferOption"]})
        } else {
            this.props.nextStep(1);
        }
    };

    goBack = () => {
        this.props.prevStep()
    }

    // Remove from aaray func
    arrayRemove = (arr, value) => { 
        return arr.filter(function(ele){ 
            return ele !== value; 
        });
    }

    removeHotelFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "hotel")]})
    }

    removeDateFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "date")]})
    }

    removeFNFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "flightNumber")]})
    }

    removeTOFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "transferOption")]})
    }

   choicesMethod = (input, value) => e => {
        const obj = this.state[input];
        if (obj.includes(value)) {
            const newObj = this.arrayRemove(obj, value)
            this.setState({ [input]: [...newObj] })
        } else {
            this.setState({ [input]: [ ...obj, value] });
        }
    };

    componentDidMount = () => {
        const actives = document.querySelectorAll('.active')
        const progress = document.getElementById('progress');
        const circles = document.querySelectorAll('.circle');
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
        if (this.props.values.transfersRequired === true) {
            this.props.setting('transfersRequired', false)
            this.props.setting('transferOption', '')
        }
    } 
    

    render() {
        const { values, clicked, handleChange } = this.props;

        return (
            <div className='body'>
                <div className="form step2Aform">
                    <div className="form-content step2formcontent">
                        <Typography id="heading" variant='h3'>ACCOMMODATIONS AND TRANSFERS ONLY</Typography>
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
                        <p id='margin3em' className="lead">{`${values.firstName} which hotel do you prefer:`}</p>
                        {
                            this.state.incomplete.includes('hotel') ?
                            <p class="h6" id="h6"><small>Please select at least one of the options</small></p> :
                            ""
                        }
                        <div onClick={this.removeHotelFromIncomplete} className="cards">
                            <div onClick={clicked('hotel', 'LuxuryBoutiqueHotel')} className={`card Step2A ${this.state.hotelType === 'LuxuryBoutiqueHotel' ? "selected" : ""}`}>
                                <img onClick={() => this.setState({ hotelType: "LuxuryBoutiqueHotel" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028378/Booking%20Form%20Images/Step%203A/Step3A-Hotel-LuxuryBoutiqueHotel_uvoi3d.jpg" className="card-img-top" alt="..." />
                                <div onClick={() => this.setState({ hotelType: "LuxuryBoutiqueHotel" })} className="card-body">
                                    <p className="card-text">Luxury Boutique Hotel</p>
                                </div>
                            </div>
                            <div onClick={clicked('hotel', 'QualityBoutiqueHotel')} className={`card Step2A ${this.state.hotelType === 'QualityBoutiqueHotel' ? "selected" : ""}`}>
                                <img onClick={() => this.setState({ hotelType: "QualityBoutiqueHotel" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028380/Booking%20Form%20Images/Step%203A/Step3A-Hotel-QualityBoutiqueHotel_stlzcn.jpg" className="card-img-top" alt="..." />
                                <div onClick={() => this.setState({ hotelType: "QualityBoutiqueHotel" })} className="card-body">
                                    <p className="card-text">Quality Boutique Hotel</p>
                                </div>
                            </div>
                            <div onClick={clicked('hotel', 'ComfortBoutiqueHotel')} className={`card Step2A ${this.state.hotelType === 'ComfortBoutiqueHotel' ? "selected" : ""}`}>
                                <img onClick={() => this.setState({ hotelType: "ComfortBoutiqueHotel" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028378/Booking%20Form%20Images/Step%203A/Step3A-Hotel-ComfortBoutiqueHotel_oqwd5e.jpg" className="card-img-top" alt="..." />
                                <div onClick={() => this.setState({ hotelType: "ComfortBoutiqueHotel" })} className="card-body">
                                    <p className="card-text">Comfort Boutique Hotel</p>
                                </div>
                            </div>
                            <div onClick={clicked('hotel', 'Self-CateringEstablishment')} className={`card Step2A ${this.state.hotelType === 'Self-CateringEstablishment' ? "selected" : ""}`}>
                                <img onClick={() => this.setState({ hotelType: "Self-CateringEstablishment" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028382/Booking%20Form%20Images/Step%203A/Step3A-Hotel-Self-CateringEstablishment_aiyjae.jpg" className="card-img-top" alt="..." />
                                <div onClick={() => this.setState({ hotelType: "Self-CateringEstablishment" })} className="card-body">
                                    <p className="card-text">Self-catering Establishment</p>
                                </div>
                            </div>
                        </div>

                        {
                            this.state.incomplete.includes('date') && (this.props.values.date === "" || this.props.values.date === null) ?
                            <p class="h6" id="dateWarningUpper"><small>Please select dates:</small></p> :
                            ""
                        }
                        <div className="dateAndFlight">
                            <div className="dates">
                                <p id='datePick' className="lead">
                                    Dates of your stay:
                                </p>
                                <DateRangePickerComponent
                                    id='dateRangePicker'
                                    placeholder='Dates of your stay'
                                    format="dd-MM-yy"
                                    onChange={handleChange('date')}
                                    onClick={this.removeDateFromIncomplete}
                                    value={values.date}
                                ></DateRangePickerComponent>
                            </div>
                            <div className="flight">
                                <p id="flightText" className="lead">
                                    Enter Flight No.
                                </p>
                                <TextField
                                    id="standard-textarea"
                                    label="Flight no."
                                    placeholder="Enter your flight no."
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange('flightNumer')}
                                    onClick={this.removeFNFromIncomplete}
                                    value={values.flightNumer}
                                    helperText={`${this.state.incomplete.includes("flightNumber") ? "Please enter your flight number." : ""}`}
                                    error={this.state.incomplete.includes("flightNumber") ? true : false}
                                />
                                <div onClick={this.removeFNFromIncomplete} className={`myToolTip`} data-toggle="tooltip" data-placement="top" title="I don't have yet">
                                    <div onClick={clicked("flightNumer", "I don't have yet")} id="flightOptionButton" class="form-check form-switch">
                                        <input class="form-check-input iDontHaveYet" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.incomplete.includes('date') && (this.props.values.date === "" || this.props.values.date === null) ?
                            <p class="h6" id="dateWarning"><small>Please select dates</small></p> :
                            ""
                        }
                        <div className="transferOption">
                            <p id="transferOption" className="lead">
                                Do you need transfers?
                            </p>
                            <div id="transferOptionButton" class="form-check form-switch">
                                <input onChange={clicked('transfersRequired', !values.transfersRequired)} class="form-check-input important" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                        {
                            values.transfersRequired ?
                            <div className="tranfers">
                                <p id={`${this.state.incomplete.includes('transferOption') ? "removeMarginBottom" : ""}`} className="lead">{`${values.firstName} which transfer option do you prefer:`}</p>
                                {
                                    this.state.incomplete.includes('transferOption') ?
                                    <p class="h6 noMargintop" id="addMarginBottom"><small>Please select at least one of the options</small></p> :
                                    ""
                                }
                                <div onClick={this.removeTOFromIncomplete} className="cards">
                                    <div id='scaledYBig' onClick={clicked('transferOption', 'comfort')} className={`card transferCardTop Step2A ${this.state.transferSelection === 'comfort' ? "selected" : ""}`}>
                                        <img onClick={() => this.setState({ transferSelection: "comfort" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647853217/Booking%20Form%20Images/Step%203A/Comfort-VeryValletta_hz8rdr.jpg" className="card-img-top" alt="..." />
                                        <div onClick={() => this.setState({ transferSelection: "comfort" })} className="card-body">
                                            <p className="card-text">Comfort</p>
                                        </div>
                                    </div>
                                    <div id='scaledYBig' onClick={clicked("transferOption", 'executive')} className={`card transferCardTop Step2A ${this.state.transferSelection === 'executive' ? "selected" : ""}`}>
                                        <img onClick={() => this.setState({ transferSelection: "executive" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647853216/Booking%20Form%20Images/Step%203A/Executive-VeryValletta_rhxxn5.jpg" className="card-img-top" alt="..." />
                                        <div onClick={() => this.setState({ transferSelection: "executive" })} className="card-body">
                                            <p className="card-text">Executive</p>
                                        </div>
                                    </div>
                                    <div id='scaledYBig' onClick={clicked("transferOption", 'luxury')} className={`card transferCard Step2A ${this.state.transferSelection === 'luxury' ? "selected" : ""}`}>
                                        <img onClick={() => this.setState({ transferSelection: "luxury" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647853216/Booking%20Form%20Images/Step%203A/Luxury-VeryValletta_egso0u.jpg" className="card-img-top" alt="..." />
                                        <div onClick={() => this.setState({ transferSelection: "luxury" })} className="card-body">
                                            <p className="card-text">Luxury</p>
                                        </div>
                                    </div>
                                    <div id='scaledYBig' onClick={clicked("transferOption", 'minivan')} className={`card transferCard Step2A ${this.state.transferSelection === 'minivan' ? "selected" : ""}`}>
                                        <img onClick={() => this.setState({ transferSelection: "minivan" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028385/Booking%20Form%20Images/Step%203A/Step3A-Transfers-MiniVan_m2da0r.jpg" className="card-img-top" alt="..." />
                                        <div onClick={() => this.setState({ transferSelection: "minivan" })} className="card-body">
                                            <p className="card-text">MiniVan</p>
                                        </div>
                                    </div>
                                    <div id='scaledYBig' onClick={clicked("transferOption", 'electric')} className={`card transferCard Step2A ${this.state.transferSelection === 'electric' ? "selected" : ""}`}>
                                        <img onClick={() => this.setState({ transferSelection: "electric" })} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647852701/Booking%20Form%20Images/Step%203A/Electric-VeryValletta_lnkcve.jpg" className="card-img-top" alt="..." />
                                        <div onClick={() => this.setState({ transferSelection: "electric" })} className="card-body">
                                            <p className="card-text">Electric</p>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div className="nothing">

                            </div>   
                        }
                        <div className="buttons">
                            <Button onClick={this.goBack} id={`${values.step === 1 ? "hide-prev" : ""}`} variant="outlined">&larr; Back</Button>
                            <Button id="next" variant="outlined" onClick={this.continue}>Next &rarr;</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step1;
