import React, { Component } from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Spinner} from 'react-bootstrap'
import axios from 'axios'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

import Appbar from './components/Appbar'
import Phones from './components/Phones';
import Add from './components/Add';
import Update from './components/Update';

const url = 'https://apirest-phonecatalog.herokuapp.com/phones'

class App extends Component {

  state = {
    phones: [],
    phonesFiltered: [],
    showModal: false,
    phone: "",
    id: "",
    loading: false
  }

  // Functions
  clickInfo = (id) => {
    const phone = this.state.phones.filter((e)=> e.id === id)
    this.setState({id: id})
    this.setState({phone: phone[0]})
    this.setState({showModal: true})
  }

  handleClose = () => {
    this.setState({showModal: false})
  }

  filteredPhones = (data) => {
    this.setState({phonesFiltered: data})
  }

  // API petitions
  appGet=()=>{
    this.setState({loading: true})
    axios.get(url).then(response=>{
      this.setState({ loading: false})
      this.setState({ phones: response.data })
      this.setState({ phonesFiltered: response.data })
    }).catch(error=>{
      console.log(error.message)
    })
  }

  appPost=(data)=>{
    axios.post(url, data).then(response=>{
      console.log(response.data)
      this.appGet()
    })
  }

  appPut=(data)=>{
    data.id = this.state.id
    console.log(data)
    axios.put(url, data).then(response=>{
      console.log(response.data)
      this.appGet()
    })
  }

  appDelete=(id)=>{
    axios.delete(url, {data: {id: id}}).then(response=>{
      console.log(response.data)
      this.appGet()
    })
  }

  componentDidMount(){
    this.appGet()
  }

  // RENDER
  render(){
    if (this.state.loading){
      return (
      <div className="App">
        <div className="spinner">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </div>
      )
    }
    else {
      return (
        <Router>
          <div className="App">

            <Appbar/>

            <Switch>
              <Route path="/" exact>
                <Phones phones={this.state.phones} phonesFiltered={this.state.phonesFiltered} filteredPhones={this.filteredPhones} clickInfo={this.clickInfo} appDelete={this.appDelete}/>
              </Route>
              <Route path="/add">
                <Add appPost={this.appPost}/>
              </Route>
              <Route path="/update">
                <Update phone={this.state.phone} appPut={this.appPut}/>
              </Route>
            </Switch>

          {/* Modal */}
            <Modal
              show={this.state.showModal}
              onHide={this.handleClose}
              backdrop="static"
              keyboard={false}
              className="modalCard"
            >
              <Modal.Header closeButton>
                <Modal.Title className="modalTitle">{this.state.phone.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modalBody">
                <img src={this.state.phone.imageFileName} alt="phone_image" onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.shopify.com/s/files/1/0684/3433/t/6/assets/home__tile-18.jpg"}}></img>
                <ul>
                  <ol><b>Manufacturer:</b> {this.state.phone.manufacturer}</ol>
                  <ol><b>Color:</b> {this.state.phone.color}</ol>
                  <ol><b>Screen size:</b> {this.state.phone.screen}"</ol>
                  <ol><b>Processor:</b> {this.state.phone.processor}</ol>
                  <ol><b>Ram:</b> {this.state.phone.ram} GB</ol>
                </ul>
                <h6>{this.state.phone.description}</h6>
              </Modal.Body>
              <Modal.Footer className="modalFooter">
                <Link to="/update" onClick={this.handleClose}><Button variant="info">Update</Button></Link>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Router>
      );
    }
  }
}

export default App;
