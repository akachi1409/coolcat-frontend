import React from "react";

import "./main.css";

class Main extends React.Component{
    componentDidMount() {
        window.addEventListener('scroll', this.isScrolledIntoView);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isScrolledIntoView);
    }
    isScrolledIntoView() {
        var element = document.querySelector('.graph-bar');
        var position = element.getBoundingClientRect();

        // checking whether fully visible
        var graph1 = document.querySelector(".graph-bar.graph-bar-1")
        var graph2 = document.querySelector(".graph-bar.graph-bar-2")
        var graph3 = document.querySelector(".graph-bar.graph-bar-3")
        var graph4 = document.querySelector(".graph-bar.graph-bar-4")
        var graph5 = document.querySelector(".graph-bar.graph-bar-5")
        var graph6 = document.querySelector(".graph-bar.graph-bar-6")
        var graph7 = document.querySelector(".graph-bar.graph-bar-7")
        var graph8 = document.querySelector(".graph-bar.graph-bar-8")
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            graph1.style.height="420px"
            graph2.style.height="512px"
            graph3.style.height="365px"
            graph4.style.height="262px"
            graph5.style.height="205px"
            graph6.style.height="156px"
            graph7.style.height="104px"
            graph8.style.height="37px";
            // console.log('Element is fully visible in screen');
        }
        // checking for partial visibility
         if (position.top < window.innerHeight && position.bottom >= 0) {
            // console.log('Element is partially visible in screen');
         }
    }
    render(){
        return(
            <section className="info info--graph info-white">
                <div className="inner-container">
                    <img alt="" src="https://www.coolcatsnft.com/static/media/cool-cats-stat-cards.497a4b37.png"/>
                    <div className="graph-container">
                        <div className="graph-text">
                            <h3>How cool is my cat?</h3>
                            <p>For starters - all cats are cool, remember? That said, Cool Cats are worth between 3 and 10 points. These points are determined by which items your Cool Cat is made up of. Common items like a beanie or a hat are worth fewer points than more rare items like a computer head or an ape outfit.</p>
                            <p>The points of your Cool Cat can contribute to certain contests and raffles, but will be even more useful for breeding in Gen 2!</p>
                        </div>
                        <div className="graph show">
                            <div className="graph-section">
                                <div className="graph-bar graph-bar-1" >
                                    <span><b>3</b>pts</span><i>1,999 cats</i>
                                </div>
                                <div className="graph-bar graph-bar-2" >
                                    <span><b>4</b>pts</span>
                                    <i>2,600 cats</i>
                                </div>
                                <label>COOL</label>
                            </div>
                            <div className="graph-section">
                                <div className="graph-bar graph-bar-3" >
                                    <span><b>5</b>pts</span>
                                    <i>1,750 cats</i>
                                </div>
                                <div className="graph-bar graph-bar-4">
                                    <span><b>6</b>pts</span><i>1,250 cats</i>
                                </div>
                                <label>WILD</label>
                            </div>
                            <div className="graph-section">
                                <div className="graph-bar graph-bar-5">
                                    <span><b>7</b>pts</span><i>1,000 cats</i>
                                </div>
                                <div className="graph-bar graph-bar-6">
                                    <span><b>8</b>pts</span><i>750 cats</i>
                                </div>
                                <label>CLASSY</label>
                            </div>
                            <div className="graph-section">
                                <div className="graph-bar graph-bar-7">
                                    <span><b>9</b>pts</span><i>500 cats</i>
                                </div>
                                <div className="graph-bar graph-bar-8">
                                    <span><b>10</b>pts</span>
                                    <i>150 cats</i>
                                </div>
                                <label>EXOTIC</label>
                            </div>
                        </div>
                    </div>
                    <div className="text-and-text">
                        <div className="text">
                            <img alt="" src="https://www.coolcatsnft.com/static/media/cool-cats-question-mark.3c015863.png"/>
                            <h3>Why get a Cool Cat?</h3>
                            <p>Aside from participating in one the freaking coolest, curated but randomized NFT projects to date and getting a kick butt profile picture - you can help us evolve and build the future of Cool Cats. We’re giving back 20% of all ETH raised to the community (through contests, raffles, and more) - because we genuinely want Cool Cats to be a community driven and centric project. By getting a Cool Cat you have a voice in the community and can help guide the direction of the project. We’ll need help from you guys to determining specifics for future developments like breeding, next generation Cool Cats, the app, and much more!</p>
                        </div>
                        <div className="text">
                            <h3>Alright, how much?</h3>
                            <p>Cool Cats are priced at a flat rate (0.02 Ξ), and remember - Blue Cat Skin is exclusive to Gen 1!</p>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Main;