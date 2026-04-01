import React from "react";
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <div className="fiery">
                <div className="lessnefarious">
                    About
                </div>
            </div>
            <div className="center">
                Welcome to The Nefarious Machine.
                <br/>
                <br/>
                Here you may behold the insane, beautiful, and terrible machinations of its creator, the Mechanist. The Mechanist is formally educated in
                the field of computer science and has decided to use this knowledge for EVIL!!! A wide breadth of topics pique the Mechanist's interests, for
                the Mechanist does not tie themselves to one interest, skill, or passion. The Mechanist has dabbled in physical and digital art, music, writing,
                programming, and mad science.
                <br/>
                <br/>
                One day the Nefarious Machine will rule the world and the Mechanist's fingerprint will forever mark history. You cannot stop it, only prepare yourself
                for its inevitable reign of terror.
                <br/>
                <br/>
                <div className="subheading">Links</div>
                <br/>
                <Link to="https://github.com/Schmitt-Very-Cool">GitHub</Link>
                <br/>
                <Link to="https://the-nefarious-machine.itch.io/">itch.io</Link>
            </div>
        </div>
    );
}

export default AboutPage;