"use client"
import React, { useState } from 'react';
import Container from '../Container/Container';
import "../Header/Header.css"
import SearchSvg from '@/app/assets/headerAssets/SearchSvg';
import BasketSvg from '@/app/assets/headerAssets/BasketSvg';
import Modal from '../RegistrationModal/RegistrationModal';

const Header:React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                    <button onClick={() => setIsModalOpen(true)}>Открыть модалку</button>

                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        {/* <div className='login-modal'>
                        <p className='login-title'>Войти</p>
                        <input className='login-input' placeholder='Логин' type="text" />
                        <input className='password-input' placeholder='Пароль' type="text" />
                        <button className='login-button'>Войти</button>
                        </div>
                        <p>У меня нет аккаунта</p> */}
                        <div className='all-registration-modal'>
                            <div className='left-login-content'>
                                <div>
                                    <p>Добро пожаловать</p>
                                    <p>Тут вы можете заказать самый лучший корм</p>
                                </div>
                            </div>
                            <div className='right-login-content'>
                                <p>Создать аккаунт</p>
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                                <button></button>
                            </div>
                        </div>
                     </Modal>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;