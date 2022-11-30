import logo from './logo.svg';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import bakeryData from "./assets/bakery-data.json";
import { Card, Button, Col, Row, NavItem, NavDropdown, CloseButton, Navbar, Container } from 'react-bootstrap';
import './App.css';
import { useState, useEffect } from "react";
import BakeryItem from "./components/BakeryItem.js";
import Cart from "./components/Cart.js"


bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {
  //for the filter
  const [type, setType] = useState("All");
  const [restriction, setRestriction] = useState("All");
  const [sort, setSort] = useState("#default");

  const [filteredData, setFilteredData] = useState(bakeryData);
  //for the cart
  const [cart, setCart] = useState({});
  // const [cartprice,setCartPrice] = useState({})
  const [totalPrice, setTotalPrice] = useState(0);
  const Price = {"Oatmeal Cookies":2.5,"Coconut Macaroons":4,"Croissant":2.5,"Maple pecan croissant":3.5,
  "Cinnamon Apple Turnover":2.5, "Orange Muffins":4.5,"Blueberry Pound Cake":26,"Rosemary Ciabatta":4,"Classic French Brioche":13,
  "Cheesecake":40,"Strawberry Shortcake":37,"Pumpkin Pie":28};
  //for the "TYPE"
  const selectFilterType = eventKey => {
    //console.log(type)

    setType(eventKey);
    //setRestriction(eventKey);
  };
  useEffect(() => {
    // If (sort !== “all”) { setFilteredData(……. .sort) else { setFilteredData(… .fitler(restrictionFunc))}}
    if (sort !== "#default") {
      setFilteredData(bakeryData.filter(matchesFilterType).filter(matchesFilterRestriction).sort(matchesFilterSort))
    } else {
      setFilteredData(bakeryData.filter(matchesFilterType).filter(matchesFilterRestriction))
    }
  }, [type, restriction, sort])

  //for the "RESTRICTION"
  const selectFilterRestriction = eventKey => {
    //console.log(type)

    setRestriction(eventKey);
  };
  // useEffect(() => {
  //   setFilteredData(bakeryData.filter(matchesFilterRestriction))
  //   }, [restriction])

  //for the "SORT"
  const selectSort = eventKey => {
    console.log(eventKey)

    setSort(eventKey);
  };
  // useEffect(() => {
  //   setFilteredData(bakeryData.filter(mactesFilterSort))
  //   }, [sort])

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if (type === "All") {
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }

  }

  const matchesFilterRestriction = item => {
    if (restriction === "All") {
      return true
    } else if (item.restriction.includes(restriction)) {
      return true
    } else {
      return false
    }
  }

  const matchesFilterSort = (a, b) => {
    if (sort === "#default") {
      return 0
    } else if (sort === "#lowest") {
      // var sortedbakeryData = _.sortBy(bakeryData, 'price' );
      //sort((a, b) => a.value - b.value)
      // bakeryData.sort((a, b) => (a.price > b.price) ? 1 : -1)
      return (a.price > b.price) ? 1 : -1
    } else if (sort === "#highest") {
      // bakeryData.sort((a, b) => (a.price < b.price) ? 1 : -1)
      return (a.price < b.price) ? 1 : -1
    }
  }
  //   const selectSort = eventKey => {
  //     setType(eventKey)
  //     if (eventKey === "#highest") {
  //         return "highest to lowest"
  //     }
  //     return "lowest to highest"
  // }
  function addItem(item, price) {
    // const newCart = { ...cart };
    // console.log(item)
    // console.log(price)
    // if (typeof newCart[item] !== 'undefined') {
    //   newCart[item].i += 1;
    // } else {
    //   newCart[item] = {
    //     i: 1,
    //     price: price,
    //   }
    // }
    const newCart = { ...cart };

    // var index = newCart.findIndex(x => x.item === newCart[item])
    // console.log(index)
    newCart[item] = (newCart[item] || 0) + 1;	
    // newCartPrice[newCart[item].i] = price
    // if (newCart[item] == 'undefined'){
    //   console.log(newCartPrice[item])
    //   console.log(price)
    //   newCartPrice[item] = price;
    // }
    
    // console.log(newCart)

    setCart(newCart);

    setTotalPrice(totalPrice + price)
  }

  // function addItem(item, price) {
  //   // setCart([...cart, { name: name, price: price }]);
  //   // setTotalPrice(totalPrice + price);
  //   const newCart = { ...cart };		
  //   // increment existing count, otherwise, set item count to 1 
  //   newCart[item] = (newCart[item] || 0) + 1;	
  //   // set the state of the cart to the updated copy
  //   setCart(newCart);
  //   setTotalPrice(totalPrice + price)
  // }


  // As you can see I have been struggling with this part for A REALLY LONG time...
  //Many thanks to https://www.delftstack.com/howto/javascript/javascript-filter-object/

  Object.filter = (mainObject, filterFunction)=>
  Object.keys(mainObject)
        .filter( (ObjectKey)=>filterFunction(mainObject[ObjectKey]))
        .reduce( (result, ObjectKey)=> ( result[ObjectKey] = mainObject[ObjectKey], result ), {} );


  function removeItem(key, index) {
    var newCart = { ...cart };
    // console.log(newCart)
    // console.log(price)
    // if (newCart[item].i > 0) {
      console.log(newCart)
      console.log(Object.keys(newCart))
    newCart[key] = (newCart[key] || 0) - 1;	
    var newCart = Object.filter(newCart, (index)=> index >= 1 );
    console.log(newCart)
    setCart(newCart);
    setTotalPrice(totalPrice - Price[key]);
      // if (newCart[key] < 0){
      //   console.log("index if " + index)
      //   var nonzerocart = Object.values(newCart).filter( index => index > 0)
      //   console.log("key if " + nonzerocart[key])
      //   console.log("nonzero:" + nonzerocart)
      //   setCart(nonzerocart);
      // }else{
      //   newCart[key] = (newCart[key] || 0) - 1;	
      //   console.log("key else " + newCart[key])
      //   newCart = newCart
      //   setCart(newCart);
      //   setTotalPrice(totalPrice - Price[key]);
      // }

    // }
    // if (newCart[item].i <= 0){
    //   newCart[item] = (newCart[item] || 0) - 1; 
    // }
    // var newCart = [...cart];
    // let removedItem = newCart.splice(index, 1)
    // console.log(removedItem.price)


  }

  function resetCart() {
    setCart([]);
    setTotalPrice(0);
  }


  return (
<header>
    <div className="App" style = {{backgroundColor: "#F8F8FF"}}>
      <div>
        <img src = "images/logo.png" style = {{width:"40%"}}></img>
        {/* <h1 style={{color: "black", textAlign: "center",marginBottom: '1em'}}>My bakery</h1> */}
        {/* <hr></hr> */}
        {/* <Navbar bg="light">
        <Container>
          <Navbar.Brand>My Bakery</Navbar.Brand>
        </Container>
      </Navbar> */}
        <div className="content">
          <div className="sidebar" style={{ marginRight: '1em',  textAlign: "center", marginLeft:'1em',border: '1px solid rgba(0, 0, 0, 0.15)',borderRadius: "1"}} >
            {/* <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Item><b>Types:</b></Nav.Item>
              <Nav.Item><Nav.Link eventKey="All" onSelect={() => selectFilterType("All")} >All</Nav.Link></Nav.Item>

              <Nav.Item><Nav.Link eventKey="All" onSelect={() => selectFilterType("All")} >Bread</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Cake" onSelect={selectFilterType} >Cake</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Pastry" onSelect={selectFilterType}>Pastry</Nav.Link></Nav.Item>
            </Nav> */}
            <h4>Filter</h4>
            <Nav variant="pills" defaultActiveKey="All" className="flex-column" style={{ textAlign: "center" }} onSelect={(selectedKey) => selectFilterType(selectedKey)}>
              <Nav.Item><b>Types:</b></Nav.Item>
              <Nav.Item><Nav.Link eventKey="All" >All</Nav.Link></Nav.Item>

              <Nav.Item><Nav.Link eventKey="Bread" >Bread</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Cake" >Cake</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Pastry" >Pastry</Nav.Link></Nav.Item>
            </Nav>
            <br />
            <Nav variant="pills" defaultActiveKey="All" className="flex-column" style={{ textAlign: "center" }} onSelect={(selectedKey) => selectFilterRestriction(selectedKey)}>
              <Nav.Item><b>Dietary restriction:</b></Nav.Item>
              <Nav.Item><Nav.Link eventKey="All" >All</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Nut-free ">Nut-free</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Dairy-free ">Dairy-free</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Gluten-free " >Gluten-free</Nav.Link></Nav.Item>
            </Nav>

            <Nav className="mr-auto">
              <NavDropdown style={{ textAlign: "center" }} title="SORT BY" id="collasible-nav-dropdown" onSelect={(selectedKey) => selectSort(selectedKey)}>
                <NavDropdown.Item href="#default" >Popularity</NavDropdown.Item>
                <NavDropdown.Item href="#lowest" >Price: lowest to highest</NavDropdown.Item>
                <NavDropdown.Item href="#highest" >Price: highest to lowest</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
          <div className="cards" style={{ width: '60%' }}>
            {/* {bakeryData.map(item =><BakeryItem item={item}/>)} */}
            <Row xs={1} md={2} className="g-4">
              {filteredData.map((item,index) =>

                <BakeryItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  calories={item.calories}
                  type={item.type}
                  restriction={item.restriction}
                  image={item.image}
                  key={index}
                  addItem={addItem}></BakeryItem>

              )}
            </Row>

          </div>
          <div className="cart">
            <h5>Shopping Cart</h5>
            <br></br>
            {/* {(cart.length === 0) ? <h5>No Items Added Yet</h5> :  */}
            <div>
              <ul class="list-group">
                {/* {Object.keys(cart).map((key, index) => {
                  const count = cart[key];
                  return (
                    <p>*{count} {key} <CloseButton className="close" onClick={() => removeItem(key,index)}></CloseButton></p>
                  )
                })} */}

                {Object.keys(cart).map((key) => 
                  <Cart
                    cart = {cart}
                    name = {key}
                    count = {cart[key]}
                    total = {totalPrice}
                    removeItem = {removeItem}
                    resetCart = {resetCart}>
                  </Cart>
                )}
                {/* {cart.map((item, index) =>
                  <li key={item.name}>{item.name + " $ " + item.price + " "}
                    <CloseButton className="close" onClick={() => removeItem(index, item.price)}></CloseButton>
                  </li>)} */}
                {/* {cart.map((item, index) => (
                                    <li class="list-group-item" key={index}>
                                        {item.name}  ${item.price}/each
                                    </li>
                                ))} */}
              </ul>

              <p><b>Total:</b> ${totalPrice}</p>
              <Button variant="outline-success">Check Out</Button>{' '}
              <Button variant="outline-danger" onClick={() => resetCart()}>Reset Cart</Button>
              <br></br>

            </div>
          </div>

        </div>



      </div>
    </div>
    </header>
  );


}


export default App;


