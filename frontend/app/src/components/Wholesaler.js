import React, { useEffect, useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";
// import TableScrollbar from 'react-table-scrollbar';
const Wholesaler = ({ showAlert }) => {

    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const [phone, setPhone] = useState('');
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const [address, setAddress] = useState('');
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const [gstno, setGstno] = useState('');
    const handleGstnoChange = (e) => {
        setGstno(e.target.value);
    }

    const [pincode, setPincode] = useState('');
    const handlePincodeChange = (e) => {
        setPincode(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/api/wholesaler/addwholesaler';
        const data = {
            wholesaler_name: name,
            wholesaler_phone: phone,
            wholesaler_email: email,
            wholesaler_address: address,
            wholesaler_gstno: gstno,
            wholesaler_pincode: pincode
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (result.status === 'success') {
            showAlert(result.message, result.status);
            cancelForm();
            getAllWholesaler();
        } else {
            showAlert(result.message, result.status);
        }
    }

    const [wholesalers, setWholesaler] = useState([]);

    const getAllWholesaler = async () => {
        const url = 'http://localhost:4000/api/wholesaler/getallwholesaler';
        const response = await fetch(url);
        const result = await response.json();
        setWholesaler(result.data);
    }

    const cancelForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setGstno('');
        setPincode('');
    }

    useEffect(() => {
        getAllWholesaler();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className="container">
                <h2 style={{ }}><center>Wholesaler details</center></h2>
                <div className='card'>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    {/* <div className="mb-1">
                                        <label htmlFor='wholesaler_name' className="form-label">Name</label>
                                        <input
                                            type="text"
                                            name='wholesaler_name'
                                            id='wholesaler_name'
                                            className="form-control"
                                            value={name}
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor='wholesaler_phone' className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            name='wholesaler_phone'
                                            id='wholesaler_phone'
                                            className="form-control"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor='wholesaler_address' className="form-label">Address</label>
                                        <input
                                            type="text-area"
                                            name='wholesaler_address'
                                            id='wholesaler_address'
                                            className="form-control"
                                            value={address}
                                            onChange={handleAddressChange}
                                        />
                                    </div> */}
                                     <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2"htmlFor='wholesaler_name'>
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type='text' name='wholesaler_name' id='wholesaler_name'placeholder="Name" 
                                    value={name}
                                    onChange={handleNameChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2" htmlFor='wholesaler_phone'>
                                    Phone
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" name='wholesaler_phone' id='wholesaler_phone' placeholder="Phone number" 
                                    value={phone}
                                    onChange={handlePhoneChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2"htmlFor='wholesaler_address'>
                                    Address
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control  type="text-area"
                                            name='wholesaler_address'
                                            id='wholesaler_address'
                                            className="form-control"
                                            placeholder='Address'
                                            value={address}
                                            onChange={handleAddressChange} />
                                </Col>
                            </Form.Group>
                                </div>
                                <div className='col-6'>
                                    {/* <div className="mb-1">
                                        <label htmlFor='wholesaler_email' className="form-label">Email id</label>
                                        <input
                                            type="email"
                                            name='wholesaler_email'
                                            id='wholesaler_email'
                                            className="form-control"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor='wholesaler_gstno' className="form-label">GST number</label>
                                        <input
                                            type="text"
                                            name='wholesaler_gstno'
                                            id='wholesaler_gstno'
                                            className="form-control"
                                            value={gstno}
                                            onChange={handleGstnoChange}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor='wholesaler_pincode' className="form-label">Pincode</label>
                                        <input
                                            type="text"
                                            name='wholesaler_pincode'
                                            id='wholesaler_pincode'
                                            className="form-control"
                                            value={pincode}
                                            onChange={handlePincodeChange}
                                        />
                                    </div> */}
                                       <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2" htmlFor='wholesaler_email'>
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email"
                                            name='wholesaler_email'
                                            id='wholesaler_email'
                                            className="form-control"
                                            placeholder='Email'
                                            value={email}
                                            onChange={handleEmailChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2"htmlFor='wholesaler_gstno'>
                                    Gst
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control    type="text"
                                            name='wholesaler_gstno'
                                            id='wholesaler_gstno'
                                            className="form-control"
                                            placeholder='Gst number'
                                            value={gstno}
                                            onChange={handleGstnoChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2"htmlFor='wholesaler_pincode'>
                                    Pincode
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control   type="text"
                                            name='wholesaler_pincode'
                                            id='wholesaler_pincode'
                                            className="form-control"
                                            placeholder='Pincode'
                                            value={pincode}
                                            onChange={handlePincodeChange} />
                                </Col>
                            </Form.Group>
                                    <div className='mb-1 justify-content-end' style={{textalign:'right'}}>
                                        <button type="submit" className="btn btn-primary" style={{marginLeft:'69%'}}>Submit</button>&nbsp;&nbsp;&nbsp;
                                        <button type="reset" className="btn btn-primary"  onClick={cancelForm}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Display Wholesaler details</center></h2>
                <div className='card' style={{height: '250px', overflowY: 'scroll'}} >
                
                    <table className="card-table table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email id</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {wholesalers.map((wholesaler) => (
                                <tr key={wholesaler._id}>
                                    <td>{wholesaler.name}</td>
                                    <td>{wholesaler.contact_details[0].mobile}</td>
                                    <td>{wholesaler.contact_details[0].email}</td>
                                    <td>
                                        <i className="bi bi-gear" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href='/'>Edit</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  
                    <div className="card-body">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wholesaler