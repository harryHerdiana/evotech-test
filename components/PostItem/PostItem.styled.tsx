'use client';

import { styled } from 'styled-components';

export const PostItemWrapper = styled.div`
  width: 600px;
  border: 1px solid #f0efef;
  margin-bottom: 40px;
  padding: 0 10px;
`;

export const PostItemTitle = styled.h2`
  text-transform: uppercase;
  color: #565656;
  font-size: 16px;
  margin: 20px auto;
`;

export const PostItemExceprt = styled.div`
  font-size: 14px;
  color: #777;
  margin: 20px auto;
`;

export const PostItemLink = styled.span`
  font-size: 12px;
  :hover {
    color: #a5a5a5;
  }
  color: #2a6496;
`;

export const PostImageWrapper = styled.div`
  object-fit: contain;
  position: relative;
  width: 600px;
  height: 200px;
`;
