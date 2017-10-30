import React, { Component } from 'react';
import {connect} from 'react-redux';

class Test extends Component {
    render() {
        return (
            <div>
                {this.props.test1}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        test1: state.test1
    }
}

export default connect(mapStateToProps, {})(Test);