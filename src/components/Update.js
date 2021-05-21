import React, {useState} from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom';
import "../styles/AddUpdate.css"

const Update = ({ phone, appPut }) => {
    
    const history = useHistory();

    const [phoneInfo, setPhoneInfo] = useState({
        id: null,
        name: null,
        manufacturer: null,
        color: null,
        price: null,
        screen: null,
        processor: null,
        ram: null,
        imageFileName: null,
        description: null
    })

    const handleInputChange = (event) => {
        setPhoneInfo({
            ...phoneInfo,
            [event.target.id] : event.target.value
        })
    }

    const submitInfo = (event) => {
        event.preventDefault()
        appPut(phoneInfo)
        history.push("/")
    }

    return (
        <div>
            <h1 className="titlePhones">Update</h1>
            <div className="formCentered">
                <Form className="formSize" onSubmit={submitInfo}>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="name" defaultValue={phone.name} required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Manufacturer</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="manufacturer" defaultValue={phone.manufacturer} required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation> 
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Color</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="color" defaultValue={phone.color} required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Price</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="price" defaultValue={phone.price} required/>
                    </InputGroup>
                    <InputGroup className="mb-2"onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Screen</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="screen" defaultValue={phone.screen} required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Processor</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="processor" defaultValue={phone.processor} required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Ram</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="ram" defaultValue={phone.ram} required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Image</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="imageFileName" placeholder="use external link" defaultValue={phone.imageFileName} required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" rows={3} id="description" defaultValue={phone.description} required/>
                    </InputGroup>
                    <Button type="submit">Update mobile</Button>
                </Form>
            </div>
        </div>
    )
}

export default Update