import React from 'react'
import axios from 'axios';
import config from './../../utils/config'
import { ControlLabel, Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap'


export default class excelUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            excel: '',
        };

        this.updateAdress = this.updateAdress.bind(this);
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
            <div className="excelHeader">
                <h2>Vaihda kurssilista-tiedoston osoitetta</h2>

                <form>
                    <FormGroup>
                        <ControlLabel>Tiedoston id:</ControlLabel>
                        <FormControl
                            className="excelInput"
                            value={this.state.excel}
                            onChange={this.handleChange}
                            name="excel"
                        />

                        <HelpBlock>
                            Tiedoston id:n saa avoinna olevan Google Sheetsin osoitteesta, 'https://docs.google.com/spreadsheets/d/<b>ID</b>/edit'.
                        </HelpBlock>
                        <HelpBlock>
                            <b>Huomioi</b>, että tiedoston pitää olla 'published to the web', jotta se on lukukelpoinen. (File -> Publish to the web..)
                        </HelpBlock>
                        <HelpBlock>
                            Lista haetaan tiedoston ensimmäisestä sivusta.
                        </HelpBlock>
                        <Button className="excelSubmit" bsStyle="warning" onClick={this.updateAdress} id='login'>{this.state.isToggleOn ? 'Vaihda id' : 'Vaihdettu'}</Button>

                    </FormGroup>
                </form>
            </div>

        )
    }
}