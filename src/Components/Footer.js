import React from "react";
import '../styles/footer.css';

function Footer() {
    return( 
        <div className="footer flex flex-1 flex-row bg-black justify-center items-center p-4">
            <div className="flex flex-col flex-1">
                <p>Contact</p>
                <a href="">Tel: 0620102188</a>
                <a href="">Mail: contact@puzzlelove.fr</a>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <p>Copyright © 2024 Puzzle | Propulsé par Puzzle</p>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
                <p>Informations légales</p>
                <a href="">Mentions légales</a>
                <a href="">Politique de confidentialité</a>
            </div>
        </div>
    )
}

export default Footer;

