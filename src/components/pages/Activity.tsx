import React, { useState, useMemo } from 'react';
import { useBlockchainContext } from '../../context';
import { Link } from 'react-router-dom';
import { styledText } from '../../utils';
import styled from 'styled-components';
import moment from 'moment';
import { BiPurchaseTag, BiX, BiCheckCircle } from 'react-icons/bi';
import Jazzicon from 'react-jazzicon';
import InfiniteScroll from 'react-infinite-scroll-component';

const StyledSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
`;

interface Props {
    activitiesData: any
}

const Acitivity = ({activitiesData}: Props) => {
    const [state, { getCurrency }] = useBlockchainContext() as any;
    const [renderCount, setRenderCount] = useState(6);
    const [hasMore, setHasMore] = useState(false);

    const activeData = useMemo(() => {
        var result = activitiesData.slice(0, renderCount);
        if (result.length === activitiesData.length) setHasMore(false);
        else setHasMore(true);
        return result;
    }, [activitiesData, renderCount]);

    return (
        <div></div>
    );
}

export default Acitivity