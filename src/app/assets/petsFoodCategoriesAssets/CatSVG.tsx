import { IIcon } from '@/app/types/Icon';
import React from 'react';



const CatSVG = ({width="53", height="54", color="white"}:IIcon) => {
    return (
        <svg width={width} height={height} viewBox="0 0 400 400" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M245.2 134.289C294.12 73.9855 219.025 82.2174 208.126 76.763C204.296 74.849 200.528 56.3705 192.005 60.6375C178.88 67.2036 179.995 101.383 178.571 112.785C177.798 118.991 169.133 127.877 166.285 134.289C161.739 144.521 156.744 156.692 148.393 169.402C140.043 182.113 122.592 191.967 113.857 201.681C76.682 243.002 92.6204 291.579 133.435 322.992C174.716 354.764 347.131 342.906 298.399 269.769" stroke="#000000" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M225.903 162.283C238.018 206.627 220.627 252.936 220.627 296.357C220.627 301.354 230.543 296.532 235.401 297.425" stroke="#000000" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M162.667 208.879C172.419 210.315 181.319 217.474 188.222 224.166C222.582 257.481 178.688 279.87 176.257 291.647C175.708 294.311 187.035 296.145 189.31 296.389" stroke="#000000" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M211.536 62.994C218.161 56.7795 219.425 67.6568 220.627 73.6378" stroke="#000000" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default CatSVG;