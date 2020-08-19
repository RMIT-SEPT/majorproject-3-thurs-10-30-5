import React, { Component } from "react";

class Footer extends Component{
    render() {
        return ( 
            <footer>
                <div class = "footerDiv1"> 
                    <h1> Contact us!</h1>
                    <p>Phone: 0787 872837 1023989</p>
                    <p>Email: placeholder@placeholder.com</p>
                </div>
                <div id = "footerDiv2"> 
                    <ul>
                        <li><h>Explore</h></li>
                        <li><a href = "#">Home</a></li>
                        <li><a href = "#">About us</a></li>
                        <li><a href = "#">FAQ</a></li>
                        <li><a href = "#">Contact</a></li>
                    </ul>
                </div>
                <div id = "footerDiv3">
                    
                    <ul>
                        <li> <h>Team Members</h></li>
                        <li> MATIC, Marcus (s3703981)</li>
                        <li>CAUCCI, Raymond (s3779722)</li>
                        <li>WESTON, Michael (s3541742)</li>
                        <li>NADALIN, Marco (s3782230)</li>
                        <li>PAPAHARISIS, Athanasios (s3372134)</li>
                    </ul>   
                </div>
                <div><p>© 2020 SEPT Team 5</p></div>
            </footer>
        );
    }
}

export default Footer;