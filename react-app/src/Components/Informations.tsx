import React, { FC } from 'react';
import '../css/Rectangle.css'; // Assurez-vous d'importer votre fichier de styles CSS

interface RectangleProps {
    title: string;
    content: string;
    status: Boolean;
}

const Rectangle: FC<RectangleProps> = ({ status, account, funds }) => {
    return (
        <div className="rectangle-container">
            <h2 className="rectangle-title">Your Metamask Wallet Informations</h2>
            <div className="rectangle-content">
                {status ? <span className='title'><div className='active'>Active</div></span> : <span className='status-false'><div className='inactive'>Inactive</div></span>}
                <div className='title'>Account:</div>{account}
                <div className='title'>Funds (ETH):</div>{funds}
            </div>
        </div>
    );
}

export default Rectangle;
