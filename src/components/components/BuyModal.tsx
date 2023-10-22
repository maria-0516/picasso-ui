import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import moment from 'moment';
import { useWallet } from 'use-wallet';
import { toast } from 'react-toastify';
import { useBlockchainContext } from '../../context';

const DateTimeField = require('@1stquad/react-bootstrap-datetimepicker')

interface Props {
    show: any
    setShow: any 
    correctItem: any
}

const BuyModal = ({show, setShow, correctItem}: Props) => {

    return (
       <div></div>
    );
}

export default BuyModal