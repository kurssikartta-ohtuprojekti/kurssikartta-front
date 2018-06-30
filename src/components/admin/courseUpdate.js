import React from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import config from './../../utils/config'
import './courseUpdate.css'
export default class courseUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    // Handler for update button
    handleClick() {
        const baseUrl = `${config}/update`

        const authorization = { authorization: this.props.user.token }

        axios.post(baseUrl, authorization)
            .then(res => {
                if (res.status === 200) {
                    // console.log(res.status)
                    this.setState(prevState => ({

                        isToggleOn: !prevState.isToggleOn
                    }));
                }
            })
    }

    render() {
        return (

            <Button className="courseUpdate" bsStyle='success' onClick={this.handleClick}>
                <span className="glyphicon glyphicon-refresh"></span>
                {this.state.isToggleOn ? ' Päivitä kurssitietokanta' : ' Päivitetty'}
            </Button>

        )
    }
}