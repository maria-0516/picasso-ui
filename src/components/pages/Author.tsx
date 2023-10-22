import React, { useState, useMemo, useLayoutEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import { FaCog, FaShareAlt, FaTwitter, FaFacebook, FaCopy } from 'react-icons/fa';

import MyNFT from '../components/mynfts';
import SaledNFTs from '../components/salednft';
import Acitivity from './Activity';
import Footer from '../menu/footer';
import { createGlobalStyle } from 'styled-components';
import Jazzicon from 'react-jazzicon';
import { useBlockchainContext } from '../../context';
import { copyToClipboard } from '../../utils';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: "#212428";
  }
`;

export default function Author() {
    const { address } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [state] = useBlockchainContext() as any;
    const [openMenu, setOpenMenu] = useState('forsale');
    const [openShare, setOpenShare] = useState(false);
    const [copyStatus, setCopyStatus] = useState('Copy');
    const [ownFlag, setOwnFlag] = useState(false);

    useLayoutEffect(() => {
        if (address === state.auth.address) setOwnFlag(true);
        else setOwnFlag(false);
    }, [address, state.auth.address]);

    const activitiesData = useMemo(() => {
        return state.activities.filter((item: any) => {
            if (item.userAddress === address) {
                return item;
            }
        });
    }, [address, state.activities]);

    const HandleCopy = () => {
        copyToClipboard(process.env.REACT_APP_DOMAIN + location.pathname)
            .then((res) => {
                console.log('copied');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const HandleAddressCopy = () => {
        copyToClipboard(address)
            .then((res) => {
                setCopyStatus('Copied');

                setTimeout(() => {
                    setCopyStatus('Copy');
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div></div>
    );
}
