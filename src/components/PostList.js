import React from 'react';
import styled from 'styled-components';
import Post from './Post';

/**
 * Styled Components
 */
const PostListBlock = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const PostListItem = styled.li`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

/**
 * Post List Component
 */
const PostList = () => {
  return (
    <PostListBlock>
      <PostListItem>
        <Post />
      </PostListItem>
    </PostListBlock>
  );
};

export default PostList;
