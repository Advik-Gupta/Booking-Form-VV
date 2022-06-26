import React, { Component } from 'react';
// _______________________________________________________________________________________________
import {TextField, Button, Typography} from '@mui/material';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
// _______________________________________________________________________________________________

import './breadcrumbs.css'
import './Styles.css'
import './css/Step2BMediaQueries.css'

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
        if (this.props.values.hotel === "" || this.props.values.date === "" || this.props.values.flightNumer === "" || this.props.values.interests.length === 0 || this.props.values.holidayType.length === 0) {
            this.props.nextStep(0)
            
            if (this.props.values.holidayType.length === 0) {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "holidayType"]})
            } else if (this.props.values.interests.length === 0) {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "interests"]})
            } else if (this.props.values.hotel === "") {
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

    removeHolidayTypeFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "holidayType")]})
    }

    removeInterestsFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "interests")]})
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
        }
    } 
    

    render() {
        const { values, clicked, handleChange, clickedChoices } = this.props;

        return (
            <div className='body'>
                <div className="form step2Bform">
                    <div className="form-content step2Bformcontent">
                        <Typography id="heading" variant='h3'>FULL ON EXPERIENCE</Typography>
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
                        <p id='margin3em' className="lead">{`${values.firstName} what type of holiday In Valletta are you dreaming of:`}</p>
                        {
                            this.state.incomplete.includes('holidayType') ?
                            <p class="h6" id="h6"><small>Please select at least one of the options</small></p> :
                            ""
                        }
                        <div onClick={this.removeHolidayTypeFromIncomplete} className="cards choices">
                            <div onClick={clickedChoices('holidayType', 'romantic getaway')} className={`card Step2A ${this.state.choices.includes('romantic getaway') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'romantic getaway')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1648458329/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/RomanticGetaway-VeryValletta_1_uan45w.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'romantic getaway')} className="card-body">
                                    <p className="card-text">Romantic Getaway</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'family vacation')} className={`card nmt Step2A ${this.state.choices.includes('family vacation') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'family vacation')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028392/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Step3B-TypeOfHoliday-FamilyVacation_cliu71.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'family vacation')} className="card-body">
                                    <p className="card-text">Family Vacation</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'luxurious treat')} className={`card Step2A ${this.state.choices.includes('luxurious treat') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'luxurious treat')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647855871/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/LuxuriousTreat-VeryValletta_qpk24b.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'luxurious treat')} className="card-body">
                                    <p className="card-text">Luxurious Treat</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'relaxing break')} className={`card Step2A ${this.state.choices.includes('relaxing break') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'relaxing break')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028396/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Step3B-TypeOfHoliday-RelaxingBreak_fkjavg.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'relaxing break')} className="card-body">
                                    <p className="card-text">Relaxing Break</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'business')} className={`card nmt Step2A ${this.state.choices.includes('business') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'business')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647857802/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Business-VeryValletta_1_qqqpzw.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'business')} className="card-body">
                                    <p className="card-text">Business</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'cultural exploration')} className={`card nmt Step2A ${this.state.choices.includes('cultural exploration') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'cultural exploration')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647855871/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/CulturalExploration-VeryValletta_uw4re2.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'cultural exploration')} className="card-body">
                                    <p className="card-text">Cultural Exploration</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'pre or post cruise')} className={`card Step2A ${this.state.choices.includes('pre or post cruise') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'pre or post cruise')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028395/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Step3B-TypeOfHoliday-PreorPostCruise_yb2ga3.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'pre or post cruise')} className="card-body">
                                    <p className="card-text">Pre or Post Cruise</p>
                                </div>
                            </div>  
                            <div onClick={clickedChoices('holidayType', 'foodie')} className={`card nmt Step2A ${this.state.choices.includes('foodie') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'foodie')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028390/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Step3B-TypeOfHoliday-Foodie_x0lszf.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'foodie')} className="card-body">
                                    <p className="card-text">Foodie</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'sustainable')} className={`card Step2A ${this.state.choices.includes('sustainable') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'sustainable')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028397/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Step3B-TypeOfHoliday-Sustainable_ep2zhj.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'sustainable')} className="card-body">
                                    <p className="card-text">Sustainable</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'honeymoon and weddings')} className={`card Step2A ${this.state.choices.includes('honeymoon and weddings') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'honeymoon and weddings')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647855870/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Honeymoon_Weddings-VeryValletta_nl5hz2.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'honeymoon and weddings')} className="card-body">
                                    <p className="card-text">Honeymoon/Weddings</p>
                                </div>
                            </div> 
                            <div onClick={clickedChoices('holidayType', 'mindfulness and yoga')} className={`card Step2A ${this.state.choices.includes('mindfulness and yoga') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'mindfulness and yoga')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647855871/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Mindfulness_Yoga-VeryValletta_e867l2.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'mindfulness and yoga')} className="card-body">
                                    <p className="card-text">Mindfulness & Yoga</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('holidayType', 'other')} className={`card Step2A ${this.state.choices.includes('other') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('choices', 'other')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028395/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/type/Step3B-TypeOfHoliday-Other_fjapxm.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('choices', 'other')} className="card-body">
                                    <p className="card-text">Other</p>
                                </div>
                            </div>   
                        </div>
                        
                        <p className="lead">{`${values.firstName} tell me a little about your interests:`}</p>
                        {
                            this.state.incomplete.includes('interests') ?
                            <p class="h6 downMargin" id="h6"><small>Please select at least one of the options</small></p> :
                            ""
                        }
                        <div onClick={this.removeInterestsFromIncomplete} className="cards interests">
                            <div onClick={clickedChoices('interests', 'art exhibitions')} className={`card interestsCards nmtt ${this.state.interests.includes('art exhibitions') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('interests', 'art exhibitions')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1647855678/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/ArtExhibitions-VeryValletta_f5izgx.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('interests', 'art exhibitions')} className="card-body">
                                    <p className="card-text">Art Exhibitions</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('interests', 'gastronomy')} className={`card interestsCards nmtt ${this.state.interests.includes('gastronomy') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('interests', 'gastronomy')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028387/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/Step3B-InterestedIn-Gastronomy_d6zihp.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('interests', 'gastronomy')} className="card-body">
                                    <p className="card-text">Gastronomy</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('interests', 'walking tours')} className={`card interestsCards ${this.state.interests.includes('walking tours') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('interests', 'walking tours')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1648458200/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/WalkingTours-VeryValletta_1_qoaw9g.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('interests', 'walking tours')} className="card-body">
                                    <p className="card-text">Walking Tours</p>
                                </div>
                            </div>
                            <div onClick={clickedChoices('interests', 'theatre and opera')} className={`card interestsCards ${this.state.interests.includes('theatre and opera') ? "selected" : ""}`}>
                                <img onClick={this.choicesMethod('interests', 'theatre and opera')} src="https://res.cloudinary.com/advik-gupta/image/upload/v1645028389/Booking%20Form%20Images/Step%203B%20-%20What%20are%20you%20interested%20in/Step3B-InterestedIn-TheatreAndOpera_blrkql.jpg" className="card-img-top" alt="..." />
                                <div onClick={this.choicesMethod('interests', 'theatre and opera')} className="card-body">
                                    <p className="card-text">Theatre and Opera</p>
                                </div>
                            </div>
                        </div>

                        <p className="lead">{`${values.firstName} which hotel do you prefer:`}</p>
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
                                    <div id='scaledYBig' onClick={clicked("transferOption", 'executive')} className={`card transferCardTop  Step2A ${this.state.transferSelection === 'executive' ? "selected" : ""}`}>
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
