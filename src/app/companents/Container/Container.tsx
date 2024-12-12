import React, { ReactNode } from 'react';
import "../Container/Container.css"

interface IContainer {
    children: ReactNode,
}

const Container:React.FC<IContainer> = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default Container;