import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Student.css";
export const Students = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(6);
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");
  const sortOptions = ["first_name", "country"];

  useEffect(() => {
    getComments(0, 6, 0);
  }, []);

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
    getComments(0, 6, 0, "search", value);
  
  };

  const handleSort = (e) => {
    let value = e.target.value;
    // console.log(value);
    setSortValue(value);
    getComments(0, 6, 0, "sort", value);
 
  };

  const handleFilter = (value) => {
    getComments(0, 6, 0, "filter", value);
    
  };

  const handleReset = () => {
    setOperation("");
    setValue("");
    setSortFilterValue("");
    setSortValue("");
    setCurrentPage(0);
    getComments(0, 6, 0);
  };

  const renderPagination = () => {
    if (items.length < 6 && currentPage === 0) return null;
    if (currentPage === 0) {
      return (
        <div>
          <button className="pageBtn1">1</button>
          <button
            className="pageBtn"
            onClick={() => getComments(6, 12, 1, operation, sortFilterValue)}
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
                (currentPage - 1) * 6,
                currentPage * 6,
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
                (currentPage + 1) * 6,
                (currentPage + 2) * 6,
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
                (currentPage - 1) * 6,
                currentPage * 6,
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
    <div>
    <div className="sort">
    <h4>Sort By:</h4>
    <select
      style={{ width: "15%", borderRadius: "5px", height: "35px" }}
      onChange={handleSort}
      value={sortValue}
    >
      <option>choose</option>
      {sortOptions.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  </div>
  <div className="filter">
    
    <button
      className="btn btn-success"
      onClick={() => handleFilter("Male")}
    >
      Male
    </button>
    <button
      className="btn btn-danger"
      onClick={() => handleFilter("Female")}
    >
      Female
    </button>
  </div>

      <form className="input-search" onSubmit={handleSearch}>
      
        <input
          type="text"
          className="user-input"
          placeholder="Student Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn">Search</button>
        <button className="search-btn" onClick={handleReset}>Reset</button>
       
      </form>

      <div className="students-container">
        {items.map((item) => {
          return (
            <div className="student-container" key={item.id}>
                  <img src={item.picture} alt="" />
                  <h2>{item.first_name}</h2>
                  <h5>{item.email}</h5>
                  <Link to={`${item.id}`}>More Details</Link>
               
            </div>
          );
        })}
      </div>
      <div className="pagination">{renderPagination()}</div>

      
    </div>
  );
};