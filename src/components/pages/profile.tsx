import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import axios from 'axios';
import { useBlockchainContext } from '../../context';
import { copyToClipboard } from '../../utils';
import Jazzicon from 'react-jazzicon';
import { toast } from 'react-toastify';

const SocialTab = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const SocialItemTab = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    gap: 10px;
`;

export default function Profile() {
    return (
        <div></div>
    )
}
