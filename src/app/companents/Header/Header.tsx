import React from 'react';
import Container from '../Container/Container';
import "../Header/Header.css"
import SearchSvg from '@/app/assets/headerAssets/SearchSvg';
import BasketSvg from '@/app/assets/headerAssets/BasketSvg';

const Header:React.FC = () => {
    return (
        <div >
            <div className='background-color' />
            <Container>
                <div className='all-header'>
                    <p className='header-title'>New Spring offer</p>
                    <div className='header-search-block'>
                        <input placeholder='Search anything...' className='search-input' type="text" />
                        <button className='search-button'>
                            <SearchSvg />
                        </button>
                    </div>
                    <div className='basket-svg-block'>
                    <BasketSvg />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;