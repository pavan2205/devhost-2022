import '../../styles/variables.css'
import './Landing.css'
// import './Nav.css';
// import navLogo from '../../assets/nav-logo.png';
// import Container from '../Container/Container.js';
import lanlogo from '../../assets/lanlog.png'
// import landingbg from '../../assets/devhost-landing.png'
import Container from '../Container/Container';



function Landingpage() {
  return (
    <section className='landing'>
      <div className='landing-bg-color'>
        <Container>
          <div className='landing-bg'>
            <div className='landing-transparent-bg'>
              <div className='landing-section'>
                <div className='landing-content'>
                  <img className="lan-logo" src={lanlogo} alt="devhost 2022 landing logo" />
                  <p className='tagline'>
                    Student Developers Meet
                  </p>
                  <p className='dates'>
                    July 14'th - July 16'th
                  </p>
                  <div className='btns'>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScs-UeEtvNAWTlbPGJxRy_ZNOB0Wzutr9mtUc0olLRiqmkfDA/viewform" target="_blank" rel="noreferrer"><button className='landing-button'>Register Now</button></a>
                    {/* <button className='landing-button red-button'>Register Now</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className='landing-info'>
          <div className='centre-landing-info'>
            <div className='event-info'>
              <h2>Insightful Talks</h2>
              <p>
              Hear what the experts have to share about a wide range of concepts and technologies. Know more about the recent trends, initiatives, innovations and much more. Expand your knowledge and stand a chance to interact with experts from various technical fields.
              </p>
            </div>
            <div className='event-info ew'>
              <h2>Exciting Workshops</h2>
              <p>
              There’s no better way to master a technical skill than to actually get coding. Come join us in a series of talks and workshop exploring various domains. The talks and workshop involve hands-on learning along with discussion and interaction on a given topic.
              </p>
            </div>
            <div className='event-info'>
              <h2>Fun Icebreakers</h2>
              <p>
              A virtual trivia could be just what your social (distancing) life needs. Stand a chance to win exciting prizes by answering questions that test your knowledge on subjects both practical and ridiculously random topics!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}



function Landing() {
  return (
    <Landingpage />
  );
}

export default Landing;
