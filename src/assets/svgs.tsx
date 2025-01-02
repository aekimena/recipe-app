import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const Container = ({
  children,
  size,
}: {
  children: JSX.Element;
  size?: number;
}) => {
  return (
    <View style={{height: size ?? 20, width: size ?? 20}}>{children}</View>
  );
};

export const SearchOutline = ({color, size}: Props) => {
  return (
    <Container size={size}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox={`0 0 20 20`}
        stroke-width="1.5"
        stroke={color ?? '#000000'}
        class="size-6">
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </Svg>
    </Container>
  );
};

export const HomeOutline = ({size, color}: Props) => {
  return (
    <Container size={size}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={color ?? 'currentColor'}
        class="size-6">
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </Svg>
    </Container>
  );
};

export const BookmarkOutline = ({size, color}: Props) => {
  return (
    <Container size={size}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={color ?? 'currentColor'}
        class="size-6">
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </Svg>
    </Container>
  );
};

export const BellOutline = ({size, color}: Props) => {
  return (
    <Container size={size}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={color ?? 'currentColor'}
        class="size-6">
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </Svg>
    </Container>
  );
};

export const UserOutline = ({size, color}: Props) => {
  return (
    <Container size={size}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={color ?? 'currentColor'}
        class="size-6">
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </Svg>
    </Container>
  );
};
