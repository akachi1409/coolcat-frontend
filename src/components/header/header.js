import React from "react";

import "./header.css";
class Header extends React.Component{
    render(){
        return(
            <section className="info info--left info--grey">
                <div className="inner-container text-and-image">
                    <div className="text">
                        <h3> What are Cool Cats?</h3>
                        <p>
                        Cool Cats are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!
                        </p>
                    </div>
                    <div className="image"><img alt="" src="https://www.coolcatsnft.com/static/media/cool-cats.f7654eb6.png"/></div>
                </div>
            </section>
        )
    }
}
export default Header;