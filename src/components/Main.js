import style from '../Main.module.css'
import { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import State from './State';
import User from './User';
import Props from './Props';
import Form from './Form';
import List from './List';
import Lifting from './Lifting';
import Memo from './Memo';
import Ref from './Ref'
import Forward from './Forward';
import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';
import HOC from './HOC';
import PreviousProp from './PreviousProp';
import StateWithObj from './StateWithObj';
import UseCustomCounterHook from './UseCustomCounterHook'
function Main() {
    let [changeProp, setProp] = useState({
        title: 'From App',
        email: 'test@test.com'
    })
    let [removeUser, setRemoveUser] = useState(true);
    let [liftUpTitle, setLiftUpTitle] = useState('App Lift Up');
    let inputRef = useRef(null);
    let [count, setCount] = useState(0)

    function updateFromChild(data) {
        setLiftUpTitle(data)
    }

    const { counter, increment, decrement } = UseCustomCounterHook(10)

    return (
        <>
            <Button onClick={() => localStorage.setItem('token', 'abcd')}>Login</Button>&nbsp;
            <Button onClick={() => localStorage.removeItem('token')}>Logout</Button><br/>
            --------------------------------------------------------------------------------------------------------------
            <h1>App Component</h1>
            <h2 style={{ color: "blue" }}>Inline CSS</h2>
            <h2 className='danger'>CSS Stylesheet</h2>
            <h2 className={style.green}>Module CSS</h2>
            <State />
            --------------------------------------------------------------------------------------------------------------
            {
                removeUser ? <User title={changeProp.title} /> : ''
            }
            <Button onClick={() => setProp({ title: 'Update Prop' })}>Update Prop</Button>
            <br /><br />
            <Button onClick={() => setRemoveUser(false)}>Remove User</Button>
            <br />
            --------------------------------------------------------------------------------------------------------------
            <Props title={changeProp.title} email={changeProp.email} />
            <Button onClick={() => setProp({ title: 'Changed State From App', email: 'abc@abc.com' })}>Change State</Button>
            <br />
            --------------------------------------------------------------------------------------------------------------
            <Form />
            --------------------------------------------------------------------------------------------------------------
            <List />
            --------------------------------------------------------------------------------------------------------------
            <h1>{liftUpTitle}</h1>
            <Lifting updateParentTitle={updateFromChild} />
            <br />
            --------------------------------------------------------------------------------------------------------------
            <Memo />
            <br />
            --------------------------------------------------------------------------------------------------------------
            <Ref />
            <br />
            --------------------------------------------------------------------------------------------------------------
            <Forward ref={inputRef} />&nbsp;
            <Button onClick={() => inputRef.current.value = '1000'}>Forward Value</Button>
            <br />
            --------------------------------------------------------------------------------------------------------------
            <Controlled />
            <br />
            --------------------------------------------------------------------------------------------------------------
            <Uncontrolled />
            <br />
            --------------------------------------------------------------------------------------------------------------
            <PreviousProp count={count}/>
            <Button onClick={() => setCount(Math.floor(Math.random() * 10))}>Change State</Button>
            <br />
            --------------------------------------------------------------------------------------------------------------
            <HOC />
            <br />
            --------------------------------------------------------------------------------------------------------------
            <StateWithObj />
            <br />
            --------------------------------------------------------------------------------------------------------------
            <h1>Custom HooK</h1>

            <h3>Counter: {counter}</h3>
            <Button onClick={increment}>Increment</Button> &nbsp; &nbsp;
            <Button onClick={decrement}>Decrement</Button>

        </>
    )
}

export default Main;