import { View, Text } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MainPlusBtn() {
  const svgMarkup = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="375"
      viewBox="0 0 375 375"
      height="375"
      version="1.0"
    >
      <path fill="#FFF" d="M-37.5 -37.5H412.5V412.5H-37.5z" />
      <path fill="#FFF" d="M-37.5 -37.5H412.5V412.5H-37.5z" />
      <path fill="#FFF" d="M-37.5 -37.5H412.5V412.5H-37.5z" />
      <path
        fill="#17C3B2"
        d="M 187.542969 3.042969 C 85.648438 3.042969 3.042969 85.648438 3.042969 187.542969 C 3.042969 289.441406 85.648438 372.042969 187.542969 372.042969 C 289.441406 372.042969 372.042969 289.441406 372.042969 187.542969 C 372.042969 85.648438 289.441406 3.042969 187.542969 3.042969"
      />
      <path
        stroke-linecap="round"
        transform="matrix(4.50226 0 0 4.5 82.551 185.625)"
        fill="none"
        d="M 0.499711 0.00000270875 L 46.144317 0.00000270875"
        stroke="#FFF"
      />
      <path
        stroke-linecap="round"
        transform="matrix(0 -4.50226 4.5 0 187.498 288.697)"
        fill="none"
        d="M 0.500178 0.000399069 L 46.143917 0.000399069"
        stroke="#FFF"
      />
    </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="100px" height="75px" />;

  return <SvgImage />;
}
