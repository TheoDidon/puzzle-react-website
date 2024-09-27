import React from "react";
import '../styles/footer.css';

function Footer() {
    return( 
        <div className="footer flex flex-1 flex-row bg-black justify-center items-center p-4">
            <div className="flex flex-col flex-1">
                <p>Contact</p>
                <a href="tel: 0620102188">Tel: 0620102188</a>
                <a href="mailto: contact@puzzlelove.fr">Mail: contact@puzzlelove.fr</a>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <p>Copyright © 2024 Puzzle | Propulsé par Puzzle</p>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
                <p>Informations légales</p>
                <a >Mentions légales</a>
                <a >Politique de confidentialité</a>
            </div>
        </div>
    )
}

export default Footer;

