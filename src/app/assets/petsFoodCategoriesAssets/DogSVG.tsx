import { IIcon } from '@/app/types/Icon';
import React from 'react';

const DogSVG = ({width="44", height="55", color="white"}:IIcon) => {
    return (
        <svg width={width} height={height} viewBox="0 0 400 400" fill={color} xmlns="http://www.w3.org/2000/svg">
<path d="M74 211.658C99.0457 142.251 155.836 87.1314 226.717 108.765C276.177 123.861 255.428 151.992 274.648 170.486C285.492 178.829 314.933 167.631 322.548 178.047C329.28 187.259 324.416 204.065 322.548 215.097C315.179 258.597 265.313 265 223.065 265" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M325 194C321.518 187.392 313.572 181.214 304 176" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.242 181.22C129.728 194.908 90.9731 288.143 131.095 296.086C205.608 306.73 196.665 221.971 196.665 169" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M234 168V173" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    );
};

export default DogSVG;