import React, {useState} from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom';
import "../styles/AddUpdate.css"

const Add = ({ appPost }) => {

    const history = useHistory();
    
    const [phoneInfo, setPhoneInfo] = useState({
        id: "",
        name: "",
        manufacturer: "",
        color: "",
        price: "",
        screen: "",
        processor: "",
        ram: "",
        imageFileName: "",
        description: ""
    })

    const handleInputChange = (event) => {
        setPhoneInfo({
            ...phoneInfo,
            [event.target.id] : event.target.value
        })
    }

    const submitInfo = (event) => {
        event.preventDefault()
        appPost(phoneInfo)
        history.push("/")
    }

    return (
        <div>
            <h1 className="titlePhones">Add</h1>
            <div className="formCentered">
                <Form className="formSize" onSubmit={submitInfo}>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="name" required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Manufacturer</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="manufacturer" required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation> 
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Color</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="color" required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Price</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="price" required/>
                    </InputGroup>
                    <InputGroup className="mb-2"onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Screen</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="screen" required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Processor</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="processor" required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Ram</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="ram" required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Image</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="imageFileName" placeholder="use external link"required/>
                    </InputGroup>
                    <InputGroup className="mb-2" onChange={handleInputChange} hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="formLabel">Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" rows={3} id="description" required/>
                    </InputGroup>
                    <Button type="submit">Add mobile</Button>
                </Form>
            </div>
        </div>
    )
}

export default Add