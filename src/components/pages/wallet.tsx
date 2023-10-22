import React from 'react';
import { useWallet } from 'use-wallet';
import Footer from '../menu/footer';

export default function Wallet() {
    const wallet = useWallet();

    const HandleConnect = () => {
        wallet.connect();
    };

    return (
        <div></div>
    );
}
