import React from 'react';
import LoginBar from './login_bar';
import { throttle } from 'throttle-debounce';

class Splash extends React.Component {
    componentDidMount() {
        this.listenForScroll()
    }

    componentWillUnmount() {
        this.throttled.cancel();
    }

    listenForScroll() {
        this.throttled = throttle(300, () => {
            check_if_scrolled();
        });

        $(document).on('scroll', this.throttled);

        function check_if_scrolled() {
            let pixelsFromTop = $(window).scrollTop();
            console.log(pixelsFromTop);

            if (pixelsFromTop > 100) {
                $('.login-bar').addClass('scrolled');
            } else {
                $('.login-bar').removeClass('scrolled');
            }
        }
    }

    render() {
        return(
            <div>
                <LoginBar />
                <section id="hero">
                    
                </section>
                <section id="collaborate">

                </section>
            </div>
        )
    }
}

export default Splash;