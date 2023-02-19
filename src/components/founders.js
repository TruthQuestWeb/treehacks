import React from 'react';
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shwetha from '../img/shwetha.png';
import jerry from '../img/jerry.png';
import richard from '../img/richard.png';

const Founders = () => {
  return (
    <div>
      <Container class="result">
        <Row>
            <Col sm="3" lg="2">
              <h1 class="founderh11">WANTED:</h1>
            </Col>
            <Col sm="9" lg="10">
              <h1 class="founderh12">Three Students From San Jose State University were Selected for TreeHacks! and the Spartans are now searching them;</h1>
            </Col>
        </Row>
      </Container><br/>
      <Container class="result">
        <Row>
            <Col sm="12" lg="4">
            <div class="secondary-section">
              <div class="content">
                <figure class="founderfigure">
                  <center><img class="foundermedia"  src={jerry} /></center>
                  <figcaption class="founderfigcaption">"Jerry, Back in 2020 hanging around SJSU"</figcaption>
                </figure>
                <h4><center>Jerry Liu </center></h4>
                <h3><center>Backend Dev</center></h3>
                <p>He is a Graduate student pursuing a Master's degree in Computer Science at San Jose State University with a focus on Cloud Computing and Database Systems. Alongside their studies, they are a dedicated private tutor, imparting computer science knowledge to students from K-12 to college-level. With a strong academic background and practical experience, this individual is poised to make a significant impact in the field of computer science.
                <br/><a href="https://www.linkedin.com/in/jllewis11/" class="more">Connect in LinkedIn</a></p>
              </div>
            </div>
            </Col>
            <Col sm="12" lg="4">
            <div class="secondary-section">
              <div class="content">
                <figure class="founderfigure">
                  <center><img class="foundermedia"  src={shwetha} /></center>
                  <figcaption class="founderfigcaption">"Shwetha, Back in 2022 attending SJSU event"</figcaption>
                </figure>
                <h4><center>Shwetha Bhandary</center></h4>
                <h3><center>Full Stack Dev</center></h3>
                <p>She is currently pursuing a Master's degree in Computer Software Engineering at San Jose State University , specializing in Cloud Computing. With a strong background in software development, she has almost two years of experience working as a full-stack developer at Infosys for Cathay Pacific Airlines. Her dedication and expertise in the field make her a valuable asset to any team, and her passion for innovation drives her to constantly strive for excellence. 
                  <br/><a href="https://www.linkedin.com/in/shwetha-sb/" class="more">Connect in LinkedIn</a></p>
              </div>
            </div>
           </Col>
            <Col sm="12" lg="4">
            <div class="secondary-section">
              <div class="content">
                <figure class="founderfigure">
                  <center><img class="foundermedia"  src={richard} /></center>
                  <figcaption class="founderfigcaption">"Richard, just before he got into TreeHacks!"</figcaption>
                </figure>
                <h4><center>Richard Ky</center></h4>
                <h3><center>ML/AI Dev</center></h3>
                <p>He is currently pursuing a Bachelor's degree in Computer Science at San Jose State University. With a keen interest in the latest technological advancements, with research experience in cutting-edge fields such as artificial intelligence, machine learning, data science, and natural language processing. With a strong academic background and a desire to delve deeper into the world of computer science, this individual is sure to make a mark in their chosen field. 
                  <br/><a href="https://www.linkedin.com/in/richard-ky/" class="more">Connect in LinkedIn</a></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};
  
export default Founders;