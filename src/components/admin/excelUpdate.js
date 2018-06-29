import React from 'react'
import axios from 'axios';
import config from './../../utils/config'
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap'


export default class excelUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            excel: '',
        };

    }


    // Handler for update button
    handleClick() {
        const baseUrl = `${config}/update`
        axios.get(baseUrl)
            .then(res => {
                if (res.status === 200) {
                    // console.log(res.status)
                    this.setState(prevState => ({

                        isToggleOn: !prevState.isToggleOn
                    }));
                }
            })
    }

    excelId() {
        const baseUrl = `${config}/updateid`
        axios.get(baseUrl)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    this.setState({ excel: res.data });
                }
            })
    }

    updateAdress() {

        if (this.state.excel !== '') {
            const baseUrl = `${config}/updateadress`
            const info = { id: this.state.excel, authorization: this.props.user.token }
            axios.post(baseUrl, info)
                .then(res => {
                    if (res.status === 200) {
                        // console.log(res.status)
                        this.setState(prevState => ({

                            isToggleOn: !prevState.isToggleOn
                        }));
                    }
                })
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }


    render() {
        return (
            <div>
                <h2 className="loginHeader">Vaihda excel-tiedoston osoitetta</h2>

                <form onSubmit="">
                    <FormGroup>
                        <ControlLabel>Tiedoston id:</ControlLabel>
                        <FormControl
                            className="excelInput"
                            value={this.state.excel}
                            onChange={this.handleChange}
                            name="excel"
                        />

                        <Button className="excelSubmit" bsStyle="warning" onClick={this.updateAdress} id='login'>{this.state.isToggleOn ? 'Vaihda id' : 'Vaihdettu'}</Button>

                    </FormGroup>
                </form>
            </div>

        )
    }
}