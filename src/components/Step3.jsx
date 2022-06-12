import React, { Component } from 'react';
// _______________________________________________________________________________________________
import {TextField, Button, Typography, FormControl, Box, MenuItem, Select, InputLabel} from '@mui/material';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// _______________________________________________________________________________________________

import './breadcrumbs.css'
import './Styles.css'
import './css/Step3MediaQueries.css'

// _______________________________________________________________________________________________

export class Step3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          arrivalDateCheck: true,
          incomplete: []
        };
    } 

    continue = (e) => {
        e.preventDefault();
        if (this.props.values.firstName === "" || this.props.values.lastName === "" || this.props.values.age === "" || this.props.values.phone === "" || this.props.values.email === "" || this.props.values.arrivalDate === "" || this.props.values.nights === "" || this.props.values.travellingFrom === "" || this.props.values.adults === "" || this.props.values.children === "" || this.props.values.budgetPerPersonPerNight === "" || this.props.values.message === "" || this.props.values.terms === false) {
            this.props.nextStep(0)

            if (this.props.values.firstName === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "firstName"]})
            } else if (this.props.values.lastName === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "lastName"]})
            } else if (this.props.values.age === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "age"]})
            } else if (this.props.values.email === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "email"]})
            } else if (this.props.values.phone === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "phone"]})
            } else if (this.props.values.arrivalDate === "" || this.props.values.arrivalDate === null) {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "arrivalDate"]})
            } else if (this.props.values.nights === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "nights"]})
            } else if (this.props.values.travellingFrom === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "travellingFrom"]})
            } else if (this.props.values.adults === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "adults"]})
            } else if (this.props.values.children === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "children"]})
            } else if (this.props.values.budgetPerPersonPerNight === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "budgetPerPersonPerNight"]})
            } else if (this.props.values.message === "") {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "message"]})
            } else {
                let old = this.state.incomplete
                this.setState({incomplete: [...old, "terms"]})
            }

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

    removefirstNamefromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "firstName")]})
    }

    removeAgefromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "age")]})
    }

    removePhoneFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "phone")]})
    }

    removeNightsFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "nights")]})
    }

    removeLastNameFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "lastName")]})
    }

    removeEmailFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "email")]})
    }

    removeTravellingFromFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "travellingFrom")]})
    }

    removeAdultsFromFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "adults")]})
    }

    removeChildrenFromFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "children")]})
    }

    removeBudgetFromFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "budgetPerPersonPerNight")]})
    }

    removeMessageFromFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "message")]})
    }

    removeArrivalFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "arrivalDate")]})
    }

    removeTermsFromIncomplete = () => {
        let old = this.state.incomplete
        this.setState({incomplete: [...this.arrayRemove(old, "terms")]})
    }

    componentDidMount = () => {
        const actives = document.querySelectorAll('.active')
        const progress = document.getElementById('progress');
        const circles = document.querySelectorAll('.circle');
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
        if (this.props.values.terms === true) {
            this.props.setting('terms', false)
        }
    } 
    

    render() {
        const { values, handleChange, clicked } = this.props;

        return (
            <div className='body'>
                <div className="form step3form">
                    <div className="form-content step3formcontent">
                        <Typography id="heading" variant='h3'>CONTACT INFO</Typography>
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
                        <div className="contact-info">
                            <div className="left">
                                <div id="contantInfoInput">
                                    <TextField
                                        id="standard-textarea"
                                        label={this.state.incomplete.includes('firstName') ? "Please enter first Name" : "First Name"}
                                        placeholder="Enter your First Name"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange('firstName')}
                                        onClick={this.removefirstNamefromIncomplete}
                                        defaultValue={values.firstName}
                                        error={this.state.incomplete.includes('firstName') ? true : false}
                                    />
                                </div>
                                <div id="contantInfoInput">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={values.age}
                                                label={this.state.incomplete.includes('age') ? "Please select your age" : "Age"}
                                                onChange={handleChange('age')}
                                                onClick={this.removeAgefromIncomplete}
                                                error={this.state.incomplete.includes('age') ? true : false}
                                            >
                                            <MenuItem value={18}>18 years young</MenuItem>
                                            <MenuItem value={19}>19 years young</MenuItem>
                                            <MenuItem value={20}>20 years young</MenuItem>
                                            <MenuItem value={21}>21 years young</MenuItem>
                                            <MenuItem value={22}>22 years young</MenuItem>
                                            <MenuItem value={23}>23 years young</MenuItem>
                                            <MenuItem value={24}>24 years young</MenuItem>
                                            <MenuItem value={25}>25 years young</MenuItem>
                                            <MenuItem value={26}>26 years young</MenuItem>
                                            <MenuItem value={27}>27 years young</MenuItem>
                                            <MenuItem value={28}>28 years young</MenuItem>
                                            <MenuItem value={29}>29 years young</MenuItem>
                                            <MenuItem value={30}>30 years young</MenuItem>
                                            <MenuItem value={31}>31 years young</MenuItem>
                                            <MenuItem value={32}>32 years young</MenuItem>
                                            <MenuItem value={33}>33 years young</MenuItem>
                                            <MenuItem value={34}>34 years young</MenuItem>
                                            <MenuItem value={35}>35 years young</MenuItem>
                                            <MenuItem value={36}>36 years young</MenuItem>
                                            <MenuItem value={37}>37 years young</MenuItem>
                                            <MenuItem value={38}>38 years young</MenuItem>
                                            <MenuItem value={39}>39 years young</MenuItem>
                                            <MenuItem value={40}>40 years young</MenuItem>
                                            <MenuItem value={41}>41 years young</MenuItem>
                                            <MenuItem value={42}>42 years young</MenuItem>
                                            <MenuItem value={43}>43 years young</MenuItem>
                                            <MenuItem value={44}>44 years young</MenuItem>
                                            <MenuItem value={45}>45 years young</MenuItem>
                                            <MenuItem value={46}>46 years young</MenuItem>
                                            <MenuItem value={47}>47 years young</MenuItem>
                                            <MenuItem value={48}>48 years young</MenuItem>
                                            <MenuItem value={49}>49 years young</MenuItem>
                                            <MenuItem value={50}>50 years young</MenuItem>
                                            <MenuItem value={51}>51 years young</MenuItem>
                                            <MenuItem value={52}>52 years young</MenuItem>
                                            <MenuItem value={53}>53 years young</MenuItem>
                                            <MenuItem value={54}>54 years young</MenuItem>
                                            <MenuItem value={55}>55 years young</MenuItem>
                                            <MenuItem value={56}>56 years young</MenuItem>
                                            <MenuItem value={57}>57 years young</MenuItem>
                                            <MenuItem value={58}>58 years young</MenuItem>
                                            <MenuItem value={59}>59 years young</MenuItem>
                                            <MenuItem value={60}>60 years young</MenuItem>
                                            <MenuItem value={61}>61 years young</MenuItem>
                                            <MenuItem value={62}>62 years young</MenuItem>
                                            <MenuItem value={63}>63 years young</MenuItem>
                                            <MenuItem value={64}>64 years young</MenuItem>
                                            <MenuItem value={65}>65 years young</MenuItem>
                                            <MenuItem value={66}>66 years young</MenuItem>
                                            <MenuItem value={67}>67 years young</MenuItem>
                                            <MenuItem value={68}>68 years young</MenuItem>
                                            <MenuItem value={69}>69 years young</MenuItem>
                                            <MenuItem value={70}>70 years young</MenuItem>
                                            <MenuItem value={71}>71 years young</MenuItem>
                                            <MenuItem value={72}>72 years young</MenuItem>
                                            <MenuItem value={73}>73 years young</MenuItem>
                                            <MenuItem value={74}>74 years young</MenuItem>
                                            <MenuItem value={75}>75 years young</MenuItem>
                                            <MenuItem value={76}>76 years young</MenuItem>
                                            <MenuItem value={77}>77 years young</MenuItem>
                                            <MenuItem value={78}>78 years young</MenuItem>
                                            <MenuItem value={79}>79 years young</MenuItem>
                                            <MenuItem value={80}>80 years young</MenuItem>
                                            <MenuItem value={81}>81 years young</MenuItem>
                                            <MenuItem value={82}>82 years young</MenuItem>
                                            <MenuItem value={83}>83 years young</MenuItem>
                                            <MenuItem value={84}>84 years young</MenuItem>
                                            <MenuItem value={85}>85 years young</MenuItem>
                                            <MenuItem value={86}>86 years young</MenuItem>
                                            <MenuItem value={87}>87 years young</MenuItem>
                                            <MenuItem value={88}>88 years young</MenuItem>
                                            <MenuItem value={89}>89 years young</MenuItem>
                                            <MenuItem value={90}>90 years young</MenuItem>
                                            <MenuItem value={91}>91 years young</MenuItem>
                                            <MenuItem value={92}>92 years young</MenuItem>
                                            <MenuItem value={93}>93 years young</MenuItem>
                                            <MenuItem value={94}>94 years young</MenuItem>
                                            <MenuItem value={95}>95 years young</MenuItem>
                                            <MenuItem value={96}>96 years young</MenuItem>
                                            <MenuItem value={97}>97 years young</MenuItem>
                                            <MenuItem value={98}>98 years young</MenuItem>
                                            <MenuItem value={99}>99 years young</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div id="contantInfoInput">
                                    <TextField
                                        id="standard-textarea"
                                        label={this.state.incomplete.includes('phone') ? "Please enter your phone number" : "Phone number"}
                                        placeholder="Enter your phone number"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange('phone')}
                                        defaultValue={values.phone}
                                        error={this.state.incomplete.includes('phone') ? true : false}
                                        onClick={this.removePhoneFromIncomplete}
                                    />
                                </div>
                                <div id="contantInfoInput">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Nights</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={values.nights}
                                                label={this.state.incomplete.includes('nights') ? "Please enter number of nights" : "Nights"}
                                                onChange={handleChange('nights')}
                                                onClick={this.removeNightsFromIncomplete}
                                                error={this.state.incomplete.includes('nights') ? true : false}
                                            >
                                            <MenuItem value={1}>1 night</MenuItem>
                                            <MenuItem value={2}>2 nights</MenuItem>
                                            <MenuItem value={3}>3 nights</MenuItem>
                                            <MenuItem value={4}>4 nights</MenuItem>
                                            <MenuItem value={5}>5 nights</MenuItem>
                                            <MenuItem value={6}>6 nights</MenuItem>
                                            <MenuItem value={7}>7 nights</MenuItem>
                                            <MenuItem value={8}>8 nights</MenuItem>
                                            <MenuItem value={9}>9 nights</MenuItem>
                                            <MenuItem value={10}>10 nights</MenuItem>
                                            </Select>
                                            </FormControl>
                                    </Box>
                                </div>
                            </div>
                            <div className="right">
                                <div id="contantInfoInput">
                                    <TextField
                                        id="standard-textarea"
                                        label={this.state.incomplete.includes('lastName') ? "Please enter your last name" : "Last Name"}
                                        placeholder="Enter your Last Name"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange('lastName')}
                                        defaultValue={values.lastName}
                                        onClick={this.removeLastNameFromIncomplete}
                                        error={this.state.incomplete.includes('lastName') ? true : false}
                                    />
                                </div>
                                <div id="contantInfoInput">
                                    <TextField
                                        id="standard-textarea"
                                        label={this.state.incomplete.includes('email') ? "Please enter your email" : "Email"}
                                        placeholder="Enter your email"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange('email')}
                                        defaultValue={values.email}
                                        onClick={this.removeEmailFromIncomplete}
                                        error={this.state.incomplete.includes('email') ? true : false}
                                    />
                                </div>
                                <div id="contantInfoInputRight">
                                    <DatePickerComponent
                                        onClick={this.removeArrivalFromIncomplete}
                                        id='datePicker'
                                        placeholder='Pick Dates'
                                        format="dd-MM-yy"
                                        onChange={handleChange('arrivalDate')}
                                        value={values.arrivalDate}
                                    ></DatePickerComponent>
                                </div>
                                <div onClick={this.removeArrivalFromIncomplete} className={`myToolTip`} data-toggle="tooltip" data-placement="top" title="I don't have yet">
                                    <div onClick={clicked("arrivalDate", "I don't have yet")} id="flightOptionButton" class="form-check form-switch">
                                        <input class="form-check-input iDontHaveArivaldateYet" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                                <div id="contantInfoInput" className='travellingFrom'>
                                    <TextField
                                        id="standard-textarea"
                                        label={this.state.incomplete.includes('travellingFrom') ? "Where are you travelling from?" : "Travelling From"}
                                        placeholder="Travelling From"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange('travellingFrom')}
                                        defaultValue={values.travellingFrom}
                                        onClick={this.removeTravellingFromFromIncomplete}
                                        error={this.state.incomplete.includes('travellingFrom') ? true : false}
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            this.state.incomplete.includes('arrivalDate') && (this.props.values.arrivalDate === "" || this.props.values.arrivalDate === null) ?
                            <p class="h6" id="arrivalDateWarning"><small>Please select date</small></p> :
                            ""
                        }
                        <div id={`${this.state.incomplete.includes('arrivalDate') && (this.props.values.arrivalDate === "" || this.props.values.arrivalDate === null) ? "arrivalDateErrorMsgsMargin" : ""}`} className="contact-info-msgs">
                            <div className="three-info">
                                <div id="contantInfoInputMsgsBox">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">No. of Adults</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={values.adults}
                                                label="No. of Adults"
                                                onChange={handleChange('adults')}
                                                onClick={this.removeAdultsFromFromIncomplete}
                                                error={this.state.incomplete.includes('adults') ? true : false}
                                            >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div id="contantInfoInputMsgsBox">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">No. of Children</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={values.children}
                                                label="No. of Children"
                                                onChange={handleChange('children')}
                                                onClick={this.removeChildrenFromFromIncomplete}
                                                error={this.state.incomplete.includes('children') ? true : false}
                                            >
                                            <MenuItem value={0}>No Children</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div id="contantInfoInputMsgsBox">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Budget per person</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={values.budgetPerPersonPerNight}
                                                label="Budget per person"
                                                onChange={handleChange('budgetPerPersonPerNight')}
                                                onClick={this.removeBudgetFromFromIncomplete}
                                                error={this.state.incomplete.includes('budgetPerPersonPerNight') ? true : false}
                                            >
                                            <MenuItem value={"2000-4000"}>€ 2000-4000</MenuItem>
                                            <MenuItem value={"4000-6000"}>€ 4000-6000</MenuItem>
                                            <MenuItem value={"6000-10000"}>€ 6000-10000</MenuItem>
                                            <MenuItem value={"10000+"}>€ 10000+</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </div>
                        </div>
                        <div className="message">
                            <TextField
                                id="outlined-textarea"
                                label={this.state.incomplete.includes('message') ? "Tell us a little about your dream holiday in Valletta so that we can help you better" : "Tell us about your dream holiday in Valletta"}
                                placeholder="Message"
                                fullWidth
                                rows={5}
                                multiline
                                onChange={handleChange('message')}
                                defaultValue={values.message}
                                onClick={this.removeMessageFromFromIncomplete}
                                error={this.state.incomplete.includes('message') ? true : false}
                            />
                        </div>
                        <div className="message">
                            <TextField
                                id="outlined-textarea"
                                label="Special Requests"
                                placeholder="(ex. Wheelchair accessibility)"
                                fullWidth
                                rows={3}
                                multiline
                                onChange={handleChange('specialRequests')}
                                defaultValue={values.specialRequests}
                            />
                        </div>
                        {
                            this.state.incomplete.includes('terms') ?
                            <p class="h6" id="termsWarning"><small>Please read and agree to the T&C and Privacy Policy</small></p> :
                            ""
                        }
                        <div class="form-check">
                            <div className="termsCheck">
                                <input onClick={this.removeTermsFromIncomplete} class="form-check-input" onChange={clicked('terms', !values.terms)} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <a className='termsAndConditions'>
                                        I confirm that I have read and I agree with Very Valletta’s T&C and Privacy Policy.
                                    </a>
                                </label>
                            </div>
                            <div className="termsCheck">
                                <input class="form-check-input" onChange={clicked('newsLetter', !values.newsLetter)} type="checkbox" value="" id="flexCheckDefaultOffer" />
                                <label class="form-check-label" for="flexCheckDefaultOffer">
                                    <a className='termsAndConditions'>
                                        I’d like you to keep me posted with occasional Very Valletta news or offers.
                                    </a>
                                </label>
                            </div>
                        </div>
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

export default Step3;
