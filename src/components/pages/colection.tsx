import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRegCopy } from 'react-icons/fa';
import ColumnZero from '../components/ColumnZero';
import CoulmnOne from '../components/CoulmnOne';
import Footer from '../menu/footer';
import { useBlockchainContext } from '../../context';
import { copyToClipboard } from '../../utils';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Tab, Tabs } from 'react-bootstrap';
import Acitivity from './Activity';
import { toast } from 'react-toastify';

export default function Collection() {
    const navigate = useNavigate();
    const { collection } = useParams();
    const [state, _state] = useBlockchainContext() as any;
    const {translateLang} = _state as any
    const [correctItem, setCorrectItem] = useState<any>(null);
    const [owners, setOwners] = useState([]);
    const [avgAmount, setAvgAmount] = useState(0);
    const [floorPrice, setFloorPrice] = useState(0);
    const [volumn, setVolumn] = useState(0);
    const [option1, setOption1] = useState('OnSaled');

    useEffect(() => {
        if (state.orderList.length !== 0) {
            let bump = 0;
            const currentVolumn = state.orderList.filter((item: any) => {
                return item.contractAddress === collection && item.status === 'success';
            });
            currentVolumn.map((item: any) => {
                bump += Number(item.price);
            });
            setVolumn(parseFloat(bump.toFixed(3)));
        }
    }, [state.orderList]);

    useEffect(() => {
        if (!collection) return;
        let itemData;
        state.collectionNFT.map((item: any) => {
            if (item.address === collection) {
                itemData = item;
            }
        });
        if (!itemData) navigate('/collections');
        setCorrectItem(itemData);
    }, [collection]);

    useEffect(() => {
        if (correctItem !== null) {
            let bump = [] as any;
            let count = 0;
            let sum = 0;
            let floorBump = [] as number[];
            for (let i = 0; i < correctItem.items.length; i++) {
                if (bump.indexOf(correctItem.items[i].owner) === -1) {
                    bump.push(correctItem.items[i].owner);
                }
                if (correctItem.items[i].marketdata.price !== '') {
                    floorBump.push(Number(correctItem.items[i].marketdata.price || 0));
                    sum += Number(correctItem.items[i].marketdata.price);
                    count++;
                }
            }
            floorBump.sort();
            if (floorBump.length === 0) setFloorPrice(0);
            else setFloorPrice(parseFloat(floorBump[0].toFixed(3)));
            setOwners(bump);
            setAvgAmount(sum / count / 1000);
        }
    }, [correctItem]);

    const activitiesData = useMemo(() => {
        return state.activities.filter((item: any) => {
            if (item.contractAddress === collection) {
                return item;
            }
        });
    }, [collection, state.activities]);

    const handleaddressCopy = () => {
        copyToClipboard(correctItem.address)
            .then((res) => {
                // NotificationManager.success(translateLang('addresscopy_success'));
                toast(translateLang('addresscopy_success'), {position: "top-right", autoClose: 2000})
            })
            .catch((err) => {
                // NotificationManager.error(translateLang('operation_error'));
                toast(translateLang('operation_error'), {position: "top-right", autoClose: 2000})
            });
    };

    return (
       <div></div>
    );
}
