import { Link } from 'gatsby';
import { lighten } from 'polished';
import React from 'react';
import { colors } from 'styles/colors';
import { makeEndings } from 'utils/makeEndings';

import styled from '@emotion/styled';
import { ReadNextProps } from '@types';

export const ReadNextCard = ({ relatedPosts, currentPageSlug, tags, pageContext }: ReadNextProps) => {
  // filter out current post and limit to 3 related posts
  const related = relatedPosts.edges.filter(post => post.node.slug !== currentPageSlug).slice(0, 3);
  return (
    <ReadNextCardArticle className="read-next-card">
      <header className="read-next-card-header">
        <ReadNextCardHeaderTitle>
          <span>Еще в:</span>{' '}
          <Link to={`/tags/${tags[0].slug}/`}>{tags[0].tagName}</Link>
        </ReadNextCardHeaderTitle>
      </header>
      <ReadNextCardContent className="read-next-card-content">
        <ul>
          {related.map(post => {
            return (
              <li key={post.node.title}>
                <H4>
                  <Link to={`/${post.node.slug}`}>{post.node.title}</Link>
                </H4>
                <ReadNextCardMeta className="read-next-card-meta">
                  <p>
                    <time dateTime={post.node.updatedAt.toString()}>{post.node.updatedAt.toString()}</time> - {post.node.body.childMarkdownRemark.timeToRead} мин.
                    чтения
                  </p>
                </ReadNextCardMeta>
              </li>
            );
          })}
        </ul>
      </ReadNextCardContent>
      <ReadNextCardFooter className="read-next-card-footer">
        <Link to={`/tags/${tags[0].slug}/`}>
          Еще {makeEndings(relatedPosts.totalCount)} →
        </Link>
      </ReadNextCardFooter>
    </ReadNextCardArticle>
  );
};

const H4 = styled.h4`
:hover {
  text-decoration: underline;
}
`;

const ReadNextCardArticle = styled.article`
  position: relative;
  flex: 0 1 326px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 25px 50px;
  padding: 25px;
  /* background: linear-gradient(
    color(var(--darkgrey) l(+2%)),
    color(var(--darkgrey) l(-5%))
  ); */
  background: linear-gradient(
    ${lighten('0.02', colors.darkgrey)},
    ${lighten('-0.05', colors.darkgrey)}
  );
  border-radius: 3px;

  a {
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    text-decoration: none;
  }

  @media (max-width: 1170px) {
    flex: 1 1 261px;
    margin-bottom: 5vw;
  }

  @media (max-width: 650px) {
    flex: 1 1 auto;
    margin: 0 25px;
    padding: 0;
    background: none;
  }
`;

const ReadNextCardHeaderTitle = styled.h3`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  line-height: 1em;
  font-weight: 300;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-weight: 500;
  a {
    text-transform: uppercase;
    color: ${colors.blue};
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ReadNextCardContent = styled.div`
  font-size: 1.7rem;

  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 20px 0;
    border-bottom: rgba(255, 255, 255, 0.1);
  }

  li:last-of-type {
    padding-bottom: 5px;
    border: none;
  }

  h4 {
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.35em;
    font-weight: 600;
  }

  li a {
    display: block;
    color: #fff;
    opacity: 0.8;
  }

  li a:hover {
    opacity: 1;
  }
`;

const ReadNextCardMeta = styled.div`
  margin-top: 2px;
  font-size: 1.2rem;
  line-height: 1.4em;
  font-weight: 400;

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const ReadNextCardFooter = styled.footer`
  position: relative;
  margin: 40px 0 5px;

  a {
    padding: 7px 12px 8px 14px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.3rem;
    border-radius: 999px;
    transition: all 0.35s ease-in-out;
  }

  a:hover {
    /* border-color: var(--yellow); */
    border-color:  #36a6e2;
    color:  #36a6e2;
    text-decoration: none;
  }
`;
