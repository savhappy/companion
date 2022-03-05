import { View, Text } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function CompanionIcon() {
  const svgMarkup = 'h';
  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width="270px" height="300px" />
  );

  return <SvgImage />;
}
