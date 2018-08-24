import React, { Component } from "react"
import fb from './images/fb.svg';
import tw from './images/twitter.svg';
import ln from './images/linkedin.svg';
import yt from './images/yt.svg';

class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="footer-wrapper">
                    <div className="row footer-bg">
                        <div className="col-xs-12 text-pad">
                            <div className="section-title-wrapper mini-pad">
                                <h2 className="footer-title">ABB Social Media</h2>
                            </div>
                            <div className="section-content-wrapper ">
                                <p className="paragraph footer-paragraph">Feel free to reach out to us via our social
                                    profiles</p>
                            </div>
                        </div>
                        <div className="social-icons-wrapp">
                            <a href="https://www.facebook.com/ABBPolska/?brand_redir=16524057261" target="_blank"><img className="social-img" src={fb} alt="fb"/></a>
                            <a href="https://twitter.com/ABBgroupnews" target="_blank"><img className="social-img" src={tw} alt="twitter"/></a>
                            <a href="https://www.linkedin.com/company/abb/" target="_blank"><img className="social-img" src={ln} alt="linkedin"/></a>
                            <a href="https://www.youtube.com/user/ABBPolska" target="_blank"><img className="social-img" src={yt} alt="youtube"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer