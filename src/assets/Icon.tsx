import React from 'react';
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
  G,
  Circle,
  Ellipse,
  LinearGradient,
  ClipPath,
  Rect,
  Stop,
  LocalSvg,
  RadialGradient,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeComposite,
  FeBlend} from 'react-native-svg';

  export function IconAlert({...props}:SvgProps){
    return (
      <Svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M24 18v8m0 8h.02M20.58 7.72L3.64 36a4 4 0 003.42 6h33.88a4 4 0 003.42-6L27.42 7.72a4 4 0 00-6.84 0z"
          stroke="#ED9141"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }

  export function IconMail({...props}:SvgProps){
    return (
      <Svg
        width={60}
        height={60}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M18.333 5c0-.917-.75-1.667-1.666-1.667H3.333c-.916 0-1.666.75-1.666 1.667m16.666 0v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5m16.666 0L10 10.833 1.667 5"
          stroke="#ED9141"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }

  export function IconArrowLeft({...props}:SvgProps){
    return (
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M15.833 10H4.167m0 0L10 15.833M4.167 10L10 4.167"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }

  export function IconCloseEye({...props}:SvgProps){
      return (
        <Svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <G clipPath="url(#clip0_2011_179)">
            <Path
              d="M14.95 14.95A8.392 8.392 0 0110 16.667C4.167 16.667.833 10 .833 10A15.375 15.375 0 015.05 5.05m3.2-1.517a7.6 7.6 0 011.75-.2c5.833 0 9.167 6.667 9.167 6.667a15.412 15.412 0 01-1.8 2.658m-5.6-.891a2.5 2.5 0 11-3.534-3.534m-7.4-7.4l18.334 18.334"
              stroke="#ED9141"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_2011_179">
              <Path fill="#fff" d="M0 0H20V20H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      )
  }

  export function IconEye({...props}:SvgProps){
    return (
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G
          clipPath="url(#clip0_2011_176)"
          stroke="#ED9141"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M.833 10S4.167 3.333 10 3.333 19.167 10 19.167 10 15.833 16.667 10 16.667.833 10 .833 10z" />
          <Path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        </G>
        <Defs>
          <ClipPath id="clip0_2011_176">
            <Path fill="#fff" d="M0 0H20V20H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    )
  }