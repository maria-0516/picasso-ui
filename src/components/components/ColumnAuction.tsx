import React, { useEffect, useState } from 'react';

import moment from 'moment';
import { useBlockchainContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import Action from '../../service';
import { toBigNum } from '../../utils';
import { toast } from 'react-toastify';

const DateTimeField = require('@1stquad/react-bootstrap-datetimepicker')

interface Props {
    id: any 
    collection: any
}

export default function Responsive({id, collection}: Props) {
    return (
        <>
           
        </>
    );
}
