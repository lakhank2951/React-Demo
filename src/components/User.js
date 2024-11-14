import React from 'react';
import { Button } from "react-bootstrap";

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Test',
            count: 0
        }
    }

    componentDidMount() {
        console.log('calling only once')
    }
    
    componentDidUpdate(preProp, preState, snapshot) {
        console.log('state & prop update')

        // console.log(preState.count, this.state.count)
        // if(this.state.count === preState.count) {
        //     console.log('state & prop update')
        // }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextState.count);

        if (nextState.count === 5) {
            return true; 
        }
        return false;
    }
        
    componentWillUnmount() {
        console.log('component Destroyed');
    }

    render() {
        // console.log('call every time on state & prop')
        
        return (
            <div>
                <h1>User Class Component - {this.props.title}</h1>
                <h2>Name: {this.state.name}</h2>
                <Button onClick={() => this.setState({name: 'Lakhan'})}>Update Name</Button><br /><br />
                <Button onClick={() => this.setState({count: this.state.count + 1})}>Increment</Button><br /><br />

            </div>
        )
    }
}

export default User