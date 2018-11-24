import React from 'react';
import styled from 'styled-components';

import { _media, _color } from '../base/constants';

import Img from 'gatsby-image';

/**
 * Styled Components
 */
const PostBlock = styled.div`
  border: 1px solid rgba(129, 129, 129, 0.3);
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const PostHeader = styled.div`
  z-index: 1;
  height: 28px;
  background: #e8e8e8;
  background: -moz-linear-gradient(top, #e8e8e8 0%, #b9b9b9 100%);
  background: -webkit-linear-gradient(top, #e8e8e8 0%, #b9b9b9 100%);
  background: linear-gradient(to bottom, #e8e8e8 0%, #b9b9b9 100%);
  opacity: 0.9;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 0 #adadad;
`;

const PostPoster = styled(Img)`
  display: block;
  max-width: 100%;
`;

const PostMain = styled.div`
  display: flex;
  align-items: stretch;
  padding: 20px 30px;

  ${_media.mobile`
    display: block;
  `}
`;

const PostHead = styled.div`
  flex: 0 0 200px;
  padding: 10px 15px 10px 0;
`;

const PostTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 12px;
  line-height: 18px;
  color: ${_color.primary};
  text-transform: uppercase;
`;

const PostDate = styled.div`
  font-size: 11px;
  line-height: 1;
`;

const PostContent = styled.div`
  flex: 1 1 0%;
  padding: 7px 0 10px 22px;
  border-left: 1px solid #e2e2e2;
`;

/**
 * Post Component
 */
const Post = ({ post }) => {
  return (
    <PostBlock>
      <PostHeader />
      <PostPoster fluid={post.frontmatter.image.childImageSharp.fluid} alt="" />
      <PostMain>
        <PostHead>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
        </PostHead>
        <PostContent>{post.excerpt}</PostContent>
      </PostMain>
    </PostBlock>
  );
};

export default Post;
