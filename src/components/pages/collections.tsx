import React, { useState, useEffect } from 'react';
import Footer from '../menu/footer';
import { useNavigate } from 'react-router-dom';
import { useBlockchainContext } from '../../context';

export default function Collections() {
    const [state, { translateLang }] = useBlockchainContext() as any;
    const navigate = useNavigate();
    const [floorPrice, setFloorPrice] = useState(0);
    const [volumns, setVolumns] = useState([]);

    useEffect(() => {
        if (state.orderList.length !== 0) {
            let bump = 0;
            let bumpArr = [] as any;
            state.collectionNFT.map((collectionItem: any) => {
                const currentVolumn = state.orderList.filter((item: any) => {
                    return item.contractAddress === collectionItem && item.status === 'success';
                });

                currentVolumn.map((item: any) => {
                    bump += Number(item.price);
                });
                bumpArr.push(parseFloat(bump.toFixed(3)));
            });

            setVolumns(bumpArr);
        }
    }, [state.orderList]);

    useEffect(() => {
        let bump = [] as any;
        state.collectionNFT.map((collectionItem: any) => {
            let floorBump = [] as any;
            for (let i = 0; i < collectionItem.items.length; i++) {
                if (collectionItem.items[i].marketdata.price !== '') {
                    floorBump.push(Number(collectionItem.items[i].marketdata.price));
                }
            }
            floorBump.sort();
            if (floorBump.length === 0) bump.push(0);
            else bump.push(parseFloat(floorBump[0].toFixed(3)));
        });
        setFloorPrice(bump as any);
    }, [state.collectionNFT]);

    const handle = (address: any) => {
        navigate(`/collection/${address}`);
    };

    return (
        <div></div>
    );
}
