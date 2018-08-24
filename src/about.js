import React, { Component } from "react"
import centrumbadawcze from './images/centrumbadawczekrk.jpg';

class About extends Component {
    render () {
        return (
            <div id="about" className="about">
                <div className="row">
                    <div className="col-xs-12 text-pad">
                        <div className="section-title-wrapper">
                            <h2 className="section-title">O nas</h2>
                        </div>
                    </div>
                    <div className="section-content-wrapper">
                        <div className="col-md-12 mini-pad text-pad">
                            <p className="paragraph">
                                <strong>Korporacyjne Centrum Badawcze ABB</strong> mieści się w samym sercu historycznej
                                części Krakowa, przy ulicy Starowiślnej, zaledwie kilka minut spacerem od Rynku
                                Głównego. <strong>Jest to jedno z siedmiu centrum badawczych ABB działających na
                                świecie</strong> i pierwsza tego rodzaju placówka koncernu, która powstała w Europie
                                Centralnej i Wschodniej. Decyzja o jej uruchomieniu zapadła w 1996 r., a Kraków, będący
                                miastem historycznym, a także jednym z największych ośrodków akademickich w kraju okazał
                                się najlepszą lokalizacją dla działania jednostki badawczej. Od początku swojej
                                działalności centrum zajmuje się opracowywaniem i rozwijaniem najnowszych technologii
                                dla przemysłu energetycznego i automatyki. Placówka ma na swoim koncie wiele
                                przełomowych rozwiązań m.in. w zakresie elektroenergetyki, diagnostyki,
                                energoelektroniki oraz automatyki.
                            </p>
                        </div>
                        <div className="col-xs-12 asset-pad movie-pad">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/2GlEY6ZjoKg?rel=0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6 mini-pad text-col-1">
                            <p className="paragraph">
                                W ciągu dwudziestu lat działalności centrum znacznie zwiększyło zaplecze badawcze,
                                laboratoria i powierzchnie biurowe. Obecnie centrum dysponuje ponad 25 laboratoriami
                                m.in. elektrycznymi, elektronicznym, energoelektronicznymi, wysokich napięć,
                                diagnostycznymi, mechanicznym, do badań materiałowych i nanotechnologii. Działalność
                                placówki stała się inkubatorem dla kolejnych inwestycji grupy ABB w Krakowie.
                            </p>
                        </div>
                        <div className="col-md-6 mini-pad text-col-2">
                            <p className="paragraph">
                                <strong>Realizujemy projekty w wielu obszarach badawczych m.in.:</strong> sieci i
                                systemy elektroenergetyczne, rozwój produktów średnich i wysokich napięć, automatyka
                                elektroenergetyczna, nowoczesne technologie materiałowe, innowacyjne technologie
                                wytwarzania, multifizyczne symulacje numeryczne, energoelektronika, elektronika, systemy
                                mobilne i wbudowane, komunikacja przemysłowa, diagnostyka i monitoring, analiza i
                                uczenie maszynowe, technologie informatyczne.
                            </p>
                        </div>
                        <div className="col-xs-12 asset-pad">
                            <div className="photo-wrapp">
                                <img src={centrumbadawcze} alt="Korporacyjne Centrum Badawcze ABB w Krakowie" className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About