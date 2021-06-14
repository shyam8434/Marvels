import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./main.css";
var apikey = "f1d1e4d3be4e3c1d8118df02cbbc39c5";
var hash = "b9db91fd5c70ea17c453aeb33e41fea8";
var timeout = null
const Main = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const handleOnSearch = (e) => {
    setSearchTxt(e.target.value);
    var url = `https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&hash=${hash}&ts=1`
    if(e.target.value) {
        url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${e.target.value}&apikey=${apikey}&hash=${hash}&ts=1`
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((result) => {
              setSearchedData(result.data.results);
            });
    }, 300)

  };
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&hash=${hash}&ts=1`
    )
      .then((resp) => resp.json())
      .then((result) => {
        setSearchedData(result.data.results);
      });
  }, []);
  return (
    <div className="main-container">
      <div className="main-header">MARVEL HEROES</div>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search your hero here ..."
          value={searchTxt}
          onChange={handleOnSearch}
        />
      </div>
      <div className="gallery-container">
        {searchedData.length ? (
          searchedData.map((data) => {
            return <Card data={data} />;
          })
        ) : (
          <div className="empty-container"> No Record Found </div>
        )}
      </div>
    </div>
  );
};

export default Main;
