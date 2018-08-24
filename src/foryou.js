import React, { Component } from "react"
import konkurs from './images/konkursabb.jpg';
import kolonaukowe from './images/kolonaukowe.jpg';
import fundacja from './images/fundacjaabb.jpg';
import targipracy from './images/targipracy.jpg';

class Foryou extends Component {

    render () {
        return (
            <div id="foryou" className="foryou">
                <div className="row">
                    <div className="col-sm-6 col-xs-12 text-pad">
                        <div className="section-title-wrapper">
                            <h2 className="section-title">Dla Ciebie</h2>
                        </div>
                    </div>
                    <div className="section-content-wrapper">
                        <div className="col-sm-6 col-md-12 mini-pad extra-pad text-pad">
                            <p className="paragraph">
                                Uczestniczymy w różnego rodzaju inicjatywach, aby wspierać lokalne społeczności oraz
                                czerpać przyjemność z możliwości dzielenia się wiedzą na bardzo szeroką skalę.
                            </p>
                        </div>
                    </div>
                    <div className="foryou-posts">
                        <div className="col-sm-6 col-md-4 box-pad">
                            <a href="https://new.abb.com/pl/o-nas/technologie/korporacyjne-centrum-badawcze-abb/inicjatywy/konkurs-o-nagrode-abb-edycja-2018-2019"
                               target="_blank">
                                <div className="post-wrapp">
                                    <img src={konkurs} alt="Konkurs o nagrodę ABB" className="img-responsive"/>
                                        <div className="post-description"><p className="box-parahraph">Konkurs o nagrodę
                                            ABB</p></div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 box-pad">
                            <div className="post-wrapp">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/qmTWa0J9Grs?rel=0"
                                            allowFullScreen></iframe>
                                </div>
                                <div className="post-description"><p className="box-parahraph">Dzień otwarty dla kobiet
                                    inżynierów</p></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 box-pad">
                            <a href="https://new.abb.com/pl/o-nas/technologie/korporacyjne-centrum-badawcze-abb/kolo-naukowe-abb"
                               target="_blank">
                                <div className="post-wrapp">
                                    <img src={kolonaukowe} alt="Konkurs o nagrodę ABB" className="img-responsive"/>
                                        <div className="post-description"><p className="box-parahraph">Koło naukowe</p>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 box-pad">
                            <div className="post-wrapp">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/zoowSDkdPK4?rel=0"
                                            allowFullScreen></iframe>
                                </div>
                                <div className="post-description"><p className="box-parahraph">Akademia ABB</p></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 box-pad">
                            <a href="https://new.abb.com/pl/kariera/rozwoj-zawodowy/studenci/fundacja-dormanna"
                               target="_blank">
                                <div className="post-wrapp">
                                    <img src={fundacja} alt="Konkurs o nagrodę ABB" className="img-responsive"/>
                                        <div className="post-description"><p className="box-parahraph">Fundacja im.
                                            Jürgena Dormanna</p></div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 box-pad">
                            <div className="post-wrapp">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/nTl1NTkXO3c?rel=0"
                                            allowFullScreen></iframe>
                                </div>
                                <div className="post-description"><p className="box-parahraph">Festiwal Nauki w
                                    Krakowie</p></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 box-pad">
                            <div className="post-wrapp">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/rkEmRyWXldA?rel=0"
                                            allowFullScreen></iframe>
                                </div>
                                <div className="post-description"><p className="box-parahraph">Małopolska Noc
                                    Naukowców</p></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 box-pad">
                            <div className="post-wrapp">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/iA_OCduZsss?rel=0"
                                            allowFullScreen></iframe>
                                </div>
                                <div className="post-description"><p className="box-parahraph">Uniwersytet Dzieci</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 box-pad">
                            <a href="https://new.abb.com/pl/kariera/rozwoj-zawodowy/studenci/targi-pracy"
                               target="_blank">
                                <div className="post-wrapp">
                                    <img src={targipracy} alt="Konkurs o nagrodę ABB" className="img-responsive"/>
                                        <div className="post-description"><p className="box-parahraph">Inżynierskie
                                            Targi Pracy</p></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Foryou