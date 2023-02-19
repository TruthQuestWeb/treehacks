import React, { useState } from 'react';
import Footer from './footer';
import Result from './result';
import Example from './example';
import axios from 'axios';

const Home = () => {

  const [searchInput, setSearchInput] = useState('');
  // const requestOptions = {
  //   method: 'POST',
  //   body: JSON.parse({ url_link: searchInput })
  // }
  const [searchResults, setSearchResults] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // try {
    //   console.log(requestOptions)
    //   const response = await fetch('https://jllewis11--modal-serverless-api-fastapi-app.modal.run/search',requestOptions);
    //   const data = await response.json()
    //   setSearchResults(data);
    // } catch (error) {
    //   console.error(error);
    // }
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  
    axios
      .post('https://jllewis11--modal-serverless-api-fastapi-app.modal.run/search/', {
        url_link: searchInput
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  };

  return (
    <div>
      <span class="headline hl1">Breaking News:</span>
      <span class="founderh12">You can now check truthful summary with news URL below. Did You Try?</span>
      {/* <span class="headline hl1">Breaking News:</span><span class="headline hl11"> You can now check truthful summary with news URL below. Did You Try?</span> */}
      <br /><br /><br />
      <div class="searchcontainer">
        <form action='POST' onSubmit={handleSubmit} class="form">
          <input type="search" placeholder="Enter Your URL" class="search-field" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />

          <button type="submit" class="search-button">Search</button>
        </form>
      </div>
      {searchResults && <Result searchResults={searchResults}></Result>}
      <Example></Example>
      <Footer></Footer>
    </div>
  );
};

export default Home;