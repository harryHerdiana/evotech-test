'use client';

import { styled } from 'styled-components';

export const PostItemContent = styled.div`
  font-size: 14px;
  color: #777;
  margin: 20px auto;
  max-width: 600px;
  overflow-x: hidden;
  object-fit: contain;
  p {
    margin: 5px 0;
  }
  h1 {
    color: black;
    margin: 20px 0;
  }
  h2 {
    color: black;
    margin: 10px 0;
    object-fit: contain;
  }
  h2 img {
    object-fit: fill;
  }
  a {
    color: #2a6496;
  }
  li {
    list-style: circle;
  }
`;
