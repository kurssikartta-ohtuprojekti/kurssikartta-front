import React from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap'

export default class courseUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.get('https://kurssikartta-backend.herokuapp.com/update')
            .then(res => {
                if (res.status === 200) {
                    console.log(res.status)
                    this.setState(prevState => ({

                        isToggleOn: !prevState.isToggleOn
                    }));
                }
            })
    }

    render() {
        return (
            
            <Button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Päivitä kurssitietokanta' : 'Päivitetty'}
            </Button>
        
        )
    }
}