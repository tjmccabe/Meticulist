import React from 'react';
import LoginBar from './login_bar';
import Footer from './footer'
import { throttle } from 'throttle-debounce';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    }

    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.listenForScroll()
  }

  componentWillUnmount() {
    this.throttled.cancel();
  }

  listenForScroll() {
    this.throttled = throttle(300, () => check_if_scrolled());
    $(document).on('scroll', this.throttled);

    function check_if_scrolled() {
      let pixelsFromTop = $(window).scrollTop();

      pixelsFromTop > 70 ? $('.login-bar').addClass('scrolled') : (
        $('.login-bar').removeClass('scrolled')
      )
    }
  }

  handleInput(e) {
    this.setState({email: e.target.value})
  }

  handleSubmit(e) {
    const {email} = this.state;
    
  }

  render() {
    const {email} = this.state;

    return(
      <div id="splash">
        <LoginBar />
        <section id="hero">
          <div className='container'>
            <div className="hero-text">
              <h1>
                  Meticulist lets you work together to accomplish more.
              </h1>
              <p>
                  Meticulist gives your projects visual structure. 
                  Our boards, lists, and cards can help you 
                  organize and prioritize your life.
              </p>
              <form
                onSubmit={this.handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleInput}
                />
                <button className="sign-up-button">
                  Sign Up - It's Free!
                </button>
              </form>
            </div>
            <img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/coworkers.png" alt="coworkers" />
          </div>
        </section>
        <section id="collaborate">
          <div className='container'>

          </div>
        </section>
        <section id="see-how">
          <div className='container'>
          </div>
        </section>
        <section id="get-started">
          <div className='container'>
            <h1>Start Planning Today</h1>
            <p>
              Sign up and become one of the dozens of people around
              the world using Meticulist to get more done.
            </p>
            <button className="sign-up-button">
              Get Started - It's Free!
            </button>
          </div>
        </section>
        <hr/>
        <Footer/>
      </div>
    )
  }
}

export default Splash;