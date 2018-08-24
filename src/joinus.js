import React, { Component } from "react"
import centrumbadawcze from './images/centrumbadawczekrk.jpg';

class Joinus extends Component {
    render () {
        return (
            <div id="joinus" className="joinus">
                <div className="row join-bg">
                    <div className="col-xs-12 text-pad">
                        <div className="section-title-wrapper">
                            <h2 className="section-title">Dołącz do nas</h2>
                        </div>
                        <div className="section-content-wrapper mini-pad">
                            <p className="paragraph">Dołączając do zespołu Korporacyjnego Centrum Badawczego ABB, możesz
                                przekonać się, jak Twoja pasja, zaangażowanie i otwartość wpływają na rozwój technologii
                                i doskonalenie otaczającego nas świata.</p>
                        </div>
                        <div className="section-content-wrapper little-pad extra-pad">
                            <p className="paragraph">Jeśli jesteś absolwentką/absolwentem studiów inżynierskich, masz
                                doświadczenie w obszarach takich jak informatyka, energoelektronika, elektrotechnika lub
                                mechanika i chcesz pracować w jednym z najnowocześniejszych ośrodków R&D na świecie,
                                zapoznaj się z naszymi ofertami pracy dla specjalistów. Jeżeli jesteś w trakcie studiów
                                i pragniesz zdobyć doświadczenie, pracując w międzynarodowym środowisku, sprawdź nasze
                                oferty stażu.</p>
                        </div>
                    </div>
                    <button className="join-btn"><a
                        href="https://new.abb.com/jobs/pl/center#JobCountry=PL&JobCity=Krak%C3%B3w&JobFunction=0041&JobRole=any&JobText="
                        target="_blank">Zacznij z nami swoją karierę</a></button>
                </div>
            </div>
        )
    }
}

export default Joinus