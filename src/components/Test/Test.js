import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeTest} from '../../ducks/reducer.js'

class Test extends Component {

    changeTest1 () {
        this.props.changeTest('I changed!');
    }

    render() {
        return (
            <div>
                {this.props.test1}
                <button onClick={()=> this.changeTest1()} >
                    Click Me!
                </button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        test1: state.test1
    }
}

export default connect(mapStateToProps, {changeTest})(Test);