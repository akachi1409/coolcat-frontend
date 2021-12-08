import React from "react";

import "./footer.css";

class Footer extends React.Component{
    render(){
        return(
            <section className="footer">
                <div className="inner-container">
                    <a href="/"><img src="https://www.coolcatsnft.com/static/media/footer-logo.03c26bbc.png" alt="Cool Cats NFT"/></a>
                    <ul className="share-buttons">
                        <li className="discord">
                            <a href="https://discord.com/invite/X6A4AXrKaR" target="_blank" rel="noreferrer">
                                <img src="https://www.coolcatsnft.com/static/media/discord.775b668a.png"/>
                            </a>
                        </li>
                        <li className="twitter">
                            <a href="https://twitter.com/coolcatsnft" target="_blank" rel="noreferrer">
                                <img src="https://www.coolcatsnft.com/static/media/twitter.e60aac4b.png"/>
                            </a>
                        </li>
                        <li className="medium">
                            <a href="https://coolcatsnft.medium.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.coolcatsnft.com/static/media/medium.837a9a85.png"/>
                            </a>
                        </li>
                        <li className="store">
                            <a href="https://store.coolcatsnft.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.coolcatsnft.com/static/media/cart.34baf74e.svg"/>
                            </a>
                        </li>
                    </ul>
                    <p className="copyright"></p>
                </div>
                <div className="terms-links">
                    <a href="/terms-and-conditions">Terms &amp; Conditions</a>&nbsp;|&nbsp;
                    <a href="/privacy-policy">Privacy Policy</a>&nbsp;|&nbsp;
                    <a href="/competition-rules">Competition Rules</a>
                </div>
                <p className="copyright-two">© 2021 Cool Cats LLC</p>
            </section>
        )
    }
}
export default Footer