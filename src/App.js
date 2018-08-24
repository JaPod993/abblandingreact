import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import _ from 'lodash';
import Navbar from './navbar.js';
import Header from './header.js';
import About from './about.js';
import Foryou from './foryou.js';
import Joinus from './joinus.js';
import Footer from './footer.js';


class App extends Component {
    componentDidMount() {
        $(function () {
            function resizeContent() {
                const heightArray = ['.box-pad','.box-parahraph'];

                heightArray.forEach(function(item) {
                    let maxHeight = 0;
                    let elemHeight = $(item);

                    elemHeight.css('height','auto');

                    elemHeight.each(function () {
                        if ($(this).height() > maxHeight) {
                            maxHeight = $(this).height();
                        }
                    });
                    elemHeight.height(maxHeight);
                });
            }

            $(document).ready(function(){
                resizeContent();
                $(window).resize(_.debounce(resizeContent,150));
            });

            $(document).on('click', 'a[href^="#"]', function (event) {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
            });
        });

    }

  render() {
    return (
      <div className="container-fluid outer-bg">
        <div className="container inner-bg">
            <Navbar/>
            <Header/>
            <About/>
            <Foryou/>
            <Joinus/>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
