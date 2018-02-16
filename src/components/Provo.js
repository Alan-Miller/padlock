import React, { Component } from 'react';

class Provo extends Component {

    componentDidMount() {
        this.props.setRoute('provo');
    }

    render() {
        return (
            <div className="Provo">
                here is provo stuff
            </div>
        )
    }
}

export default Provo;