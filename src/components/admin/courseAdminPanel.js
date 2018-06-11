import React from 'react'
import {Button} from 'react-bootstrap'
import './courseAdminPanel.css'
import AddForm from './addForm';
export default class CourseAdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return(
            <div>
                {this.props.course.name}
                
                <div className="controlWrapper">
                    <div style={{gridArea:"l"}}>
                        <Button onClick={this.props.courseMovementHandler} name='left' id={this.props.course.code} style={{width: 60, height: 60}}>Left</Button>
                    </div>
                    <div style={{gridArea:"r"}}>
                        <Button onClick={this.props.courseMovementHandler} name='right' id={this.props.course.code} style={{width: 60, height: 60}}>Right</Button>
                    </div>
                    <div style={{gridArea:"u"}}>
                        <Button onClick={this.props.courseMovementHandler} name='up' id={this.props.course.code} style={{width: 60, height: 60}}>Up</Button>
                    </div>
                    <div style={{gridArea:"d"}}>
                        <Button onClick={this.props.courseMovementHandler} name= 'down' id={this.props.course.code} style={{width: 60, height: 60}}>Down</Button>
                    </div>
                    <div style={{gridArea:"ul"}}>
                        <Button onClick={this.props.courseMovementHandler} name='upLeft' id={this.props.course.code} style={{width: 60, height: 60}}></Button>
                    </div>
                    <div style={{gridArea:"ur"}}>
                        <Button onClick={this.props.courseMovementHandler} name='upRight' id={this.props.course.code} style={{width: 60, height: 60}}></Button>
                    </div>
                    <div style={{gridArea:"dl"}}>
                        <Button onClick={this.props.courseMovementHandler} name='downLeft' id={this.props.course.code} style={{width: 60, height: 60}}></Button>
                    </div>
                    <div style={{gridArea:"dr"}}>
                        <Button onClick={this.props.courseMovementHandler} name='downRight' id={this.props.course.code} style={{width: 60, height: 60}}></Button>
                    </div>
                </div>
                    
                    <p>New Coordinates:</p>
                    <AddForm style={{float: 'left'}}
                            courseCode={this.props.course.code}
                            formName='newCoords'
                            yCoord={this.state.yCoord}
                            xCoord={this.state.xCoord} 
                            handleChange={this.handleCoordFieldChange}
                            handleSubmit={this.props.courseMovementHandler}
                    />
                    
                    <Button id={this.props.course.code} style={{marginTop: 6, float: 'down'}} onClick={this.props.deleteCourseHandler} bsStyle="danger">Poista</Button>

            </div>
        )
    }
    
}