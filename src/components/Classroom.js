import React, { Component } from 'react';

class Classroom extends Component {

    componentDidMount() {
        this.props.setRoute('classroom');
    }

    render() {
        return (
            <div className="Classroom">
                here is classroom stuff
            </div>
        )
    }
}

export default Classroom;