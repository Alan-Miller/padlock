import React, { Component } from 'react';

class ExtraResources extends Component {

    componentDidMount() {
        this.props.setRoute('extra_resources');
    }

    render() {
        return (
            <div className="ExtraResources">
                here are extra resources
            </div>
        )
    }
}

export default ExtraResources;