import React, { useState } from 'react';
import Footer from './footer';
import Result from './result';
import Example from './example';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

  const [searchInput, setSearchInput] = useState('');
  // const requestOptions = {
  //   method: 'POST',
  //   body: JSON.parse({ url_link: searchInput })
  // }

  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [d, setD] = useState(false);
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
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    setIsLoading(true)
    setD(true)
    setIsError(true)

    axios
      .post('https://jllewis11--modal-serverless-api-fastapi-app.modal.run/summarize/', {
        url_link: searchInput
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log(res.data);
        setSearchResults(res.data);
        setIsLoading(false);

      })
      .catch((err) => {
        err != 200 ? setIsError(false) : setIsError(true);
        setIsLoading(false)
        console.log(isError)
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
      {
        d ? isLoading ?
          <figure>
            <center><img class="connectingMedia" src="https://media.tenor.com/hBr38cG4IzcAAAAi/homework-research.gif" /></center>
          </figure>
          :
          !isError ?
            <Example />
            :
            <div>
              <Container class="result">
                <Row>
                  <Col sm="12" lg="4">
                    <figure class="figure">
                      <center><img class="media" src="https://media.tenor.com/uSBT4JlcmCMAAAAi/free-press-heysp.gif" /></center>
                      <figcaption class="figcaption"></figcaption>
                    </figure>
                  </Col>
                  <Col sm="12" lg="8">
                    <span class="citation founderh11">"Don't under&shy;estimate the Force. I suggest you try it again, Luke."</span>
                    <p>{searchResults.choices[0].text}</p>
                  </Col>
                </Row>

                <br /><br /><span class="headline hl4"><center>References</center></span>
                <br /><br />
                <Row>
                  <Col sm="12" lg="3">
                    <a>Partially, but it also obeys your commands. Hey, Luke! May </a>
                  </Col>
                  <Col sm="12" lg="3">
                    <a>Partially, but it also obeys your commands. Hey, Luke! May the Force be with you. </a>
                  </Col>
                  <Col sm="12" lg="3">
                    <a>Partially, but it also obeys your commands. Hey, Luke! May the Force be with you. I have traced the Rebel spies to her. Now she is my only link to finding their secret base.</a>
                  </Col>
                  <Col sm="12" lg="3">
                    <a>Partially, but it also obeys your commands. Hey, Luke! May the Force be with you. I have traced the Rebel spies to her. Now she is my only link to finding their secret base.</a>
                  </Col>
                </Row>
              </Container>
            </div>
          // <Result />
          : <></>}
      <Footer></Footer>
    </div>
  );
};

export default Home;