import React from 'react';
import { useParams } from 'react-router-dom';
import ColumnAuction from '../components/ColumnAuction';
import Footer from '../menu/footer';
import { useBlockchainContext } from '../../context';

export default function Auction() {
    const { id, collection } = useParams();
    const [state, { translateLang }] = useBlockchainContext() as any;

    return (
        <div></div>
    );
}
