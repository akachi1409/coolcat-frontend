import React from "react";

import "./navbar.css";

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            openTag:false
        }
    }
    alterOpenTag= ()=>{
        const {openTag} = this.state;
        this.setState({openTag:!openTag})
    }
    render(){
        return(
            <div>
                {this.state.openTag&&(
                    <div className="overlay">
                        <div className="news-modal hide">
                            <div className="news-modal-inner">
                                <button className="close-news">X</button>
                                <h1>Cool Cats News</h1>
                                <div className="news-block">
                                    <p>You really are nosey aren't you! Well I guess you found this secret message. Good for you!</p>
                                    <p>In the future, this will be a place for all current major news items for Cool Cats. Make sure to check back soon!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            
            <div className="dashboard-bar">
                <div className="inner-dashboard-bar inner-dashboard-bar-logged-out">
                    <div className="menu-section menu-left">
                        <a href="/">
                            <img className="logo" src="https://www.coolcatsnft.com/static/media/logo-white.1ca56638.png"/>
                        </a>
                        {
                            this.state.openTag?
                            <nav className="mega-menu show">
                                <ul>
                                <li className="heading">Cool Cats</li>
                                <li>
                                    <a href="/">
                                        <div className="img">
                                            <span className="cc-icons_chain"></span>
                                        </div>Home
                                    </a>
                                </li>
                                <li style={{display: "none"}}>
                                    <a href="/the-arcade">
                                        <div className="img">
                                            <span className="cc-icons_arcade"></span>
                                        </div>The Arcade
                                    </a>
                                </li>
                                <li>
                                    <a href="/gallery">
                                        <div className="img">
                                            <span className="cc-icons_gallery"></span>
                                        </div>Cat Gallery
                                    </a>
                                </li>
                                <li>
                                    <a href="/banner-builder">
                                        <div className="img">
                                            <span className="cc-icons_banner-builder"></span>
                                        </div>Banner Builder
                                    </a>
                                </li>
                                <li>
                                    <a href="/roadmap">
                                        <div className="img">
                                            <span className="cc-D"></span>
                                        </div>Roadmap
                                    </a>
                                </li>
                                <li>
                                    <a href="/story">
                                        <div className="img">
                                            <span className="cc-B"></span>
                                        </div>Story
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li className="heading">Information</li>
                                <li><a aria-current="page" className="is-active" href="/about">About</a></li>
                                <li><a href="/faqs">FAQs</a></li>
                                <li><a href="/team">The Team</a></li>
                                <li><a href="/careers">Careers</a></li>
                            </ul>
                            <ul style={{display: "none"}}>
                                <li className="heading">The Blog</li>
                                <li><a href="https://twitter.com/coolcatsnft" target="_blank">NFT Roundup</a></li>
                                <li><a href="https://twitter.com/coolcatsnft" target="_blank">Cryptocurrency</a></li>
                                <li><a href="https://twitter.com/coolcatsnft" target="_blank">Dev Blogs</a></li>
                                <li><a href="https://twitter.com/coolcatsnft" target="_blank">Art Blogs</a></li>
                            </ul>
                            <ul>
                                <li className="heading">Connect</li>
                                <li><a href="https://twitter.com/coolcatsnft" target="_blank">
                                    <div className="img"><span className="cc-icons_twitter"></span></div>Twitter</a>
                                </li>
                                <li><a href="https://discord.gg/coolcatsnft" target="_blank">
                                    <div className="img"><span className="cc-icons_discord"></span></div>Discord</a>
                                </li>
                                <li><a href="https://opensea.io/collection/cool-cats-nft" target="_blank">
                                    <div className="img"><span className="cc-icons_opensea"></span></div>OpenSea</a>
                                </li>
                                <li><a href="https://www.youtube.com/channel/UCg2TFGt5LqBOSkEfeoP_shQ" target="_blank">
                                    <div className="img"><span className="cc-icons_youtube"></span>
                                    </div>YouTube</a>
                                </li>
                                <li><a href="https://store.coolcatsnft.com/" target="_blank">
                                    <div className="img"><span className="cc-icons_shop"></span></div>Merch</a>
                                </li>
                            </ul>
                            <ul>
                                <li className="heading">Learn</li>
                                <li style={{display: "none"}}>
                                    <a href="https://www.google.com/" target="_blank"><div className="img">u</div>Paper Cats (User)</a>
                                </li>
                                <li style={{display: "none"}}><a href="https://www.google.com/" target="_blank">
                                    <div className="img">d</div>Paper Cats (Dev)</a>
                                </li>
                                <li><a href="https://coolcatsnft.medium.com/" target="_blank">
                                    <div className="img"><span className="cc-icons_medium"></span></div>Medium</a>
                                </li>
                            </ul>
                        </nav>:
                        <nav className="mega-menu ">
                            <ul>
                            <li className="heading">Cool Cats</li>
                            <li>
                                <a href="/">
                                    <div className="img">
                                        <span className="cc-icons_chain"></span>
                                    </div>Home
                                </a>
                            </li>
                            <li style={{display: "none"}}>
                                <a href="/the-arcade">
                                    <div className="img">
                                        <span className="cc-icons_arcade"></span>
                                    </div>The Arcade
                                </a>
                            </li>
                            <li>
                                <a href="/gallery">
                                    <div className="img">
                                        <span className="cc-icons_gallery"></span>
                                    </div>Cat Gallery
                                </a>
                            </li>
                            <li>
                                <a href="/banner-builder">
                                    <div className="img">
                                        <span className="cc-icons_banner-builder"></span>
                                    </div>Banner Builder
                                </a>
                            </li>
                            <li>
                                <a href="/roadmap">
                                    <div className="img">
                                        <span className="cc-D"></span>
                                    </div>Roadmap
                                </a>
                            </li>
                            <li>
                                <a href="/story">
                                    <div className="img">
                                        <span className="cc-B"></span>
                                    </div>Story
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li className="heading">Information</li>
                            <li><a aria-current="page" className="is-active" href="/about">About</a></li>
                            <li><a href="/faqs">FAQs</a></li>
                            <li><a href="/team">The Team</a></li>
                            <li><a href="/careers">Careers</a></li>
                        </ul>
                        <ul style={{display: "none"}}>
                            <li className="heading">The Blog</li>
                            <li><a href="https://twitter.com/coolcatsnft" target="_blank">NFT Roundup</a></li>
                            <li><a href="https://twitter.com/coolcatsnft" target="_blank">Cryptocurrency</a></li>
                            <li><a href="https://twitter.com/coolcatsnft" target="_blank">Dev Blogs</a></li>
                            <li><a href="https://twitter.com/coolcatsnft" target="_blank">Art Blogs</a></li>
                        </ul>
                        <ul>
                            <li className="heading">Connect</li>
                            <li><a href="https://twitter.com/coolcatsnft" target="_blank">
                                <div className="img"><span className="cc-icons_twitter"></span></div>Twitter</a>
                            </li>
                            <li><a href="https://discord.gg/coolcatsnft" target="_blank">
                                <div className="img"><span className="cc-icons_discord"></span></div>Discord</a>
                            </li>
                            <li><a href="https://opensea.io/collection/cool-cats-nft" target="_blank">
                                <div className="img"><span className="cc-icons_opensea"></span></div>OpenSea</a>
                            </li>
                            <li><a href="https://www.youtube.com/channel/UCg2TFGt5LqBOSkEfeoP_shQ" target="_blank">
                                <div className="img"><span className="cc-icons_youtube"></span>
                                </div>YouTube</a>
                            </li>
                            <li><a href="https://store.coolcatsnft.com/" target="_blank">
                                <div className="img"><span className="cc-icons_shop"></span></div>Merch</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="heading">Learn</li>
                            <li style={{display: "none"}}>
                                <a href="https://www.google.com/" target="_blank"><div className="img">u</div>Paper Cats (User)</a>
                            </li>
                            <li style={{display: "none"}}><a href="https://www.google.com/" target="_blank">
                                <div className="img">d</div>Paper Cats (Dev)</a>
                            </li>
                            <li><a href="https://coolcatsnft.medium.com/" target="_blank">
                                <div className="img"><span className="cc-icons_medium"></span></div>Medium</a>
                            </li>
                        </ul>
                        </nav>
                        }
                    </div>

                    <div class="menu-section menu-right">
                        <button class="button connect  login">Connect</button>
                        <button class="menu-button" type="button">
                            {
                                this.state.openTag?
                                <div class="open" onClick={()=>this.alterOpenTag()} id="hamburger">
                                    <span></span><span></span><span></span>
                                </div>:
                                <div class="" onClick={()=>this.alterOpenTag()} id="hamburger">
                                    <span></span><span></span><span></span>
                                </div>
                                
                            }
                            
                        </button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Navbar;