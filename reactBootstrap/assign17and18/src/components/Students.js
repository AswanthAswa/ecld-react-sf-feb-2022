import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Student.css";
import {  useNavigate } from 'react-router-dom';
import { useAuth } from "../components/Auth";

import {Button ,Badge,Container,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Students = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(8);
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");
  const sortOptions = ["first_name", "country"];

  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    getComments(0, 8, 0);
  }, []);

  const handleLogout = () =>{
    
    auth.logout()
    navigate('/')
  }

  const getComments = (
    start,
    end,
    increase,
    optType = null,
    filterOrSortValue
  ) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSortValue("");
        axios
          .get(
            `https://dummy-serv.herokuapp.com/students?q=${value}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setItems(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
        break;
      case "sort":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        axios
          .get(
            `https://dummy-serv.herokuapp.com/students?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setItems(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
        break;
      case "filter":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        axios
          .get(
            `https://dummy-serv.herokuapp.com/students?gender=${filterOrSortValue}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setItems(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
        break;
      default:
        axios
          .get(
            `https://dummy-serv.herokuapp.com/students?q=${value}&_start=${start}&_end=${end}`
          )

          .then((response) => {
            setItems(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
    }
  };

  console.log(items);

  const handleSearch = (e) => {
    e.preventDefault();
    getComments(0, 8, 0, "search", value);
  
  };

  const handleSort = (e) => {
    let value = e.target.value;
    // console.log(value);
    setSortValue(value);
    getComments(0, 8, 0, "sort", value);
 
  };

  const handleFilter = (value) => {
    getComments(0, 8, 0, "filter", value);
    
  };

  const handleReset = () => {
    setOperation("");
    setValue("");
    setSortFilterValue("");
    setSortValue("");
    setCurrentPage(0);
    getComments(0, 8, 0);
  };

  const renderPagination = () => {
    if (items.length < 8 && currentPage === 0) return null;
    if (currentPage === 0) {
      return (
        <div>
          <button className="pageBtn1">1</button>
          <button
            className="pageBtn"
            onClick={() => getComments(8, 16, 1, operation, sortFilterValue)}
          >
            next
          </button>
        </div>
      );
    } else if (currentPage < pageLimit - 1 && items.length === pageLimit) {
      return (
        <div>
          <button
            className="pageBtn"
            onClick={() =>
              getComments(
                (currentPage - 1) * 8,
                currentPage * 8,
                -1,
                operation,
                sortFilterValue
              )
            }
          >
            prev
          </button>
          <button className="pageBtn1">{currentPage + 1}</button>
          <button
            className="pageBtn"
            onClick={() =>
              getComments(
                (currentPage + 1) * 8,
                (currentPage + 2) * 8,
                1,
                operation,
                sortFilterValue
              )
            }
          >
            next
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="pageBtn"
            onClick={() =>
              getComments(
                (currentPage - 1) * 8,
                currentPage * 8,
                -1,
                operation,
                sortFilterValue
              )
            }
          >
            prev
          </button>
          <button className="pageBtn1">{currentPage + 1}</button>
        </div>
      );
    }
  };

  return (
    <div className="main-div">
    <div className="logout"><Button id='logoutBtn' onClick={handleLogout}>Logout</Button> 
    </div>
    <div className="sort">
    <h4><Badge pill bg="secondary">Sort By:</Badge></h4>
    <select id="select"
      style={{ width: "15%", borderRadius: "5px", height: "35px" }}
      onChange={handleSort}
      value={sortValue}
    >
      <option >choose</option>
      {sortOptions.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  </div>
  <div className="filter">
    
  <Button
      className="btn-male"
      onClick={() => handleFilter("Male")}
    >
      Male
    </Button>
    <Button
      className="btn-female"
      onClick={() => handleFilter("Female")}
    >
      Female
    </Button>
  </div>

      <form className="input-search" onSubmit={handleSearch}>
      
        <input
          type="text"
          className="user-input"
          placeholder="Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
        
        <Button className="search-btn">Search</Button>
        <Button className="search-btn" onClick={handleReset}>Reset</Button>
        
        
      </form>
      
            <Container>
            <div  class="row "  >
            {items.map((item) => { 
              return (
             
              <div  class="col-xs col-sm-6 col-md-4 col-lg-3 p-1 ">
             
                  
            <Card className="students-card" key={item.id} style={{ width: '100%' ,height:'100%' }}>
              <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{item.first_name}</Card.Title>
              
                {item.email}
              
            </Card.Body>
  
            <Card.Body>
              <Link to={`${item.id}`}>More Details</Link>
            </Card.Body>
          </Card>
                 
                
              </div>
              
              );
            })}
            </div>
           
           </Container>
          
     

      <div className="pagination">{renderPagination()}</div>

      
    </div>
  );
};