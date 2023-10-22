import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    className?: any
    collectionDatas: any
    nftDatas: any
}

const SearchModal = ({className, collectionDatas, nftDatas}: Props) => {

    return (
       <div></div>
    );
}

const CollectionItem = (props: any) => {
    const { image, address, itemcount } = props;
    const navigate = useNavigate();

    return (
        <div></div>
    );
};

const NFTItem = (props: any) => {
    const { image, name, address, collectionAddress, tokenID } = props;
    const navigate = useNavigate();

    return (
        <div className="col-sm-12 col-md-4">
            <div
                className="search__item"
                onClick={() => navigate(`/ItemDetail/${collectionAddress}/${tokenID}`)}>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h6>{name.length > 9 ? name.slice(0, 8) + '...' : name}</h6>
                    <p>{address.slice(0, 4) + '...' + address.slice(-4)}</p>
                </div>
            </div>
        </div>
    );
};

export default SearchModal
