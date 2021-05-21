import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../styles/Phones.css"

const Phones = ({ phones, phonesFiltered, filteredPhones, clickInfo, appDelete }) => {

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        phonesFiltered = phones.filter((data) => data.name.toLocaleLowerCase().includes(value))
        filteredPhones(phonesFiltered)
    }

    const handleSelectFilter = (event) => {
        let value = event.target.value;
        if (value === "default"){
            phonesFiltered = phones
        }
        else{
            phonesFiltered = phones.filter((data) => data.manufacturer.includes(value))
        }
        filteredPhones(phonesFiltered)
        event.target.value = value
    }

    return (
        <div>
            <h1 className="titlePhones">Phone Catalog</h1>
            <div className="row">
                <input className="searchInput" placeholder="Search" type="text" onChange={(event) =>handleSearch(event)}/>
                <select className="form-select searchInput" onChange={(event) => handleSelectFilter(event)}>
                    <option value="default">Manufacturer</option>
                    {phones.map((phone)=>(
                        <option key={phone.id} value={phone.manufacturer}>{phone.manufacturer}</option>
                    ))}
                </select>
            </div>
            <div className="row">
                {phonesFiltered.map((phone) =>(
                    <div key={phone.id} className="col-md-3">
                        <Card className="cardPhone">
                            <img variant="top" src={phone.imageFileName} alt="phone_image" onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.shopify.com/s/files/1/0684/3433/t/6/assets/home__tile-18.jpg"}}/>
                            <Card.Body>
                                <Card.Title>{phone.name}</Card.Title>
                                <Card.Text>{phone.price} €</Card.Text>
                                <Button className="cardButton" variant="primary" onClick={clickInfo.bind(this, phone.id)}>More info</Button>
                                <Button className="cardButton" variant="danger" onClick={appDelete.bind(this, phone.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Phones

