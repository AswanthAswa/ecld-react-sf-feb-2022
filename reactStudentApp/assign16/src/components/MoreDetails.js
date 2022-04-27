import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const MoreDetails = () => {
  const { studId } = useParams();
  const [data, setData] = useState([]);

  const fetchStudent = () => {
    axios
      .get(`https://dummy-serv.herokuapp.com/students/${studId}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchStudent();
  });

  const navigate = useNavigate();
  const { first_name, email, gender, city, country, phone, avatar} = data;
  return (
    <div>
      <button className="navigate" onClick={() => navigate(-1)}>
        back
      </button>
      <div className="card-body-show">
        <img src={avatar} alt="" />
        <h2>{first_name}</h2>
        <h5>{email}</h5>
        <h5>{gender}</h5>
        <h5>{city}</h5>
        <h5>{country}</h5>
        <h5>{phone}</h5>
      </div>
    </div>
  );
};