import React from "react";

import "./yellow.css"

class Yellow extends React.Component{
    render(){
        return(
            <section class="info info--yellow">
                <div class="inner-container">
                    <div class="text">
                        <h3>Future of Cool Cats?</h3>
                        <p>Cool Cats are much more than an NFT art project. We have plans and hopes to build a Cool Cat ecosystem comprised of interactivity and utility, community rewards and growth, collaboration with brands, and much more! We want the community to help dictate and determine which features we should be focusing on next - so you guys will be heavily involved in the future of Cool Cats!</p>
                    </div>
                    <img alt="" class="under-a-rock" src="https://drive.google.com/uc?id=16vY65rYolJQLr-mO4sneGsG81iWQoxCj"/>
                    <a id="faq-section"></a>
                </div>
            </section>
        )
    }
}

export default Yellow;