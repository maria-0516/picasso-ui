import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import { useBlockchainContext } from '../../context';


export default function CarouselCollection() {
    const navigate = useNavigate();
    const [state, {}] = useBlockchainContext() as any;

    const NFTItem = (props: any) => {
        const { title, coverImage, id, address, nftsCount } = props;

        const handle = () => {
            navigate(`/collection/${address}`);
        };

        return (
            <div key={id}>
                <div className="nft_coll" onClick={handle}>
                    <span>
                        <div className="nft_wrap">
                            <img src={coverImage} className="lazy img-fluid" alt="" />
                        </div>
                    </span>
                    <div className="nft_coll_title">
                        <button>{title.length > 10 ? title.slice(0, 10) + '...' : title}</button>
                    </div>
                    <div className="nft_coll_info">
                        <div>
                            <div>
                                <h4>{nftsCount} items</h4>
                                <p>Total Items</p>
                                <div className="spacer-10"></div>
                            </div>
                            <div>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
           
        </div>
    );
}
