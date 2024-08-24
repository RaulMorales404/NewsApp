import React from 'react';
import {SvgProps, Svg, Path} from 'react-native-svg';

function SvgHome({...props}: SvgProps) {
  if (!props.width) {
    props.width = 24;
  }
  if (!props.height) {
    props.height = 24;
  }
  return (
    <Svg width={32} fill="none" height={32} {...props}>
      <Path
        stroke={props.color || '#595D5F'}
        stroke-width={2}
        strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12M12 17.99v-3"
     />
    </Svg>
  );
}
export default React.memo(SvgHome);