import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBlockchainContext } from '../../context';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';

interface Props {
    data: any
}

const NFTList = ({data}: Props) => {
    const navigate = useNavigate();
    const [state, { getCurrency }] = useBlockchainContext() as any;
    const [renderCount, setRenderCount] = useState(10);
    const [hasMore, setHasMore] = useState(false);

    const NFTs = useMemo(() => {
        if (!data) {
            return [];
        }
        let result = data.slice(0, renderCount);
        if (result.length === data.length) setHasMore(false);
        else setHasMore(true);
        return result;
    }, [data, renderCount]);

    const handleItem = (item: any) => {
        navigate(`/ItemDetail/${item.collectionAddress}/${item.tokenID}`);
    };

    return (
       <div></div>
    );
}

export default NFTList