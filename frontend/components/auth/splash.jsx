import React from 'react';
import LoginBar from './login_bar';
import Footer from './footer'
import { withRouter } from 'react-router-dom';
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
    e.preventDefault()
    const {email} = this.state;
    this.props.history.push(`/signup?email=${email}`)
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
            </div>
            <img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/coworkers.png" alt="coworkers" />
          </div>
          <form
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <input
              id="splash-input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={this.handleInput}
            />
            <button className="sign-up-button">
              Sign Up - It's Free!
                </button>
          </form>
        </section>
        <section id="collaborate">
          <div className='container'>
            <img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/expense-tracking.png" alt="tracking" />
            <div className="collaborate-text">
              <h1>Information at a glance</h1>
              <p>
                Track your nittiest and grittiest details by adding descriptions,
                due dates, and comments directly to Meticulist cards.
              </p>
            </div>
          </div>
        </section>
        <section id="relax">
          <div className='container'>
            <div className="relax-text">
              <h1>Peace of mind</h1>
              <p>
                Rest easy and let us keep track of your projects and tasks
                for you, freeing your mind up for more important things.
              </p>
            </div>
            <img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/waiting.png" alt="tracking" />
          </div>
        </section>
        <section id="get-started">
          <div className='container'>
            <h1>Start Meticulisting Today</h1>
            <p>
              Sign up and become one of the dozens of people around the{" "}
              <span className="strike">world</span>{" "}
              <span className="strike">country</span>{" "}
              local area using Meticulist to get things done.
            </p>
            <button
              className="sign-up-button down-button"
              onClick={() => this.props.history.push("/signup")}
            >
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

export default withRouter(Splash);