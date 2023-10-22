import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { useBlockchainContext } from '../../context';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const Featurebox = () => {
    const [state, { translateLang }] = useBlockchainContext() as any;

    return (
        <div></div>
    );
};

export default Featurebox;
