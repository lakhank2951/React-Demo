import { Table } from 'react-bootstrap';
import { Fragment } from 'react'
function Reusable(props) {
    return (
        <Fragment>
            <h2>Reusable Component - Array Listing With Map</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((user, index) => {
                            return (
                                user.age >= 30 ?
                                    <tr id={index} key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Table bordered>
                                                <tbody>
                                                    {
                                                        user.addres.map((address, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>{address.city}</td>
                                                                    <td>{address.pinCode}</td>
                                                                </tr>
                                                            )

                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </td>
                                    </tr> : null
                            )
                        })
                    }
                </tbody>
            </Table>
        </Fragment>
    )
}

export default Reusable;