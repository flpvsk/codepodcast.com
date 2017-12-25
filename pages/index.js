import React from 'react';
import Link from 'next/link'

const COLORS = {
  base03: '#002b36',
  base0: '#839496',
  base1: '#93A1A1',
  base3: '#fdf6e3',
  green: '#859900',
  magenta: '#d33682'
};


const theme = {
  background: COLORS.base03,
  text: COLORS.base1,
  link: COLORS.green,
  date: COLORS.magenta,
  header: COLORS.base0
};


const PostSummary = (props) => (
  <article className='postSummary'>
    <header className='postSummary__title'>
      <DecoratedLink
        href={props.href}>
          {props.title}
      </DecoratedLink>
    </header>
    <div className='postSummary__date'>{props.date}</div>
    <summary className='postSummary__summary'>
      {props.summary}
    </summary>

    <style jsx>{`
      .postSummary__date {
        color: ${theme.date}

      }

      .postSummary__summary {
        margin-top: 1.2em;
      }
    `}</style>
  </article>
);


const DecoratedLink = ({children}) => {
  return (
    <a className='decoratedLink'>
      <span className='decoratedLink__decoration'>[</span>
      <span className='decoratedLink__text'>{children}</span>
      <span className='decoratedLink__decoration'>]</span>

      <style jsx>{`
        .decoratedLink {
          text-decoration: none;
          text-decoration: none;
          cursor: pointer;
        }

        .decoratedLink:focus .decoratedLink__text,
        .decoratedLink:hover .decoratedLink__text {
          text-decoration: underline;
        }

        .decoratedLink__decoration {
          color: ${theme.text};
          user-select: none;
        }

        .decoratedLink__text {
          margin-right: 1em;
          margin-left: 1em;
          color: ${theme.link};
        }
      `}</style>
    </a>
  );
}


const postSummaries = [
  {
    title: 'Episode 6: Don\'t make me write UI!',
    date: '2016-04-01',
    summary: `
    Why is it so hard to write and maintain UI code? How can we make it
    easier? On one hand, we've talked with people who design UI APIs we
    all use. On the other, we've interviewed those who try to reinvent UI
    development.
    `
  },

  {
    title: 'Collateral for Episode 5: Type Systems',
    date: '2017-03-03',
    summary: `
    We've recently released an episode about type systems. To give you
    more context, I've refactored the script of the episode and added
    examples.
    `
  },

  {
    title: 'Bonus Episode: Edwin Brady on Dependent Types And Idris',
    date: '2017-03-03',
    summary: `
    Unabridged interview with Edwin Brady.
    `
  },
];


export default () => (

  <div className='page'>
    <h1 className='websiteName'>Code Podcast</h1>

    <menu className='mainMenu'>
      <ul className='mainMenu__list'>
        <li>
          <Link href='/about'>
            <DecoratedLink>about</DecoratedLink>
          </Link>
        </li>

        <li>
          <Link href='/social'>
            <DecoratedLink>social networks</DecoratedLink>
          </Link>
        </li>

        <li>
          <Link href='/rss'>
            <DecoratedLink>rss</DecoratedLink>
          </Link>
        </li>

        <li>
          <Link href='/light'>
            <DecoratedLink>light theme</DecoratedLink>
          </Link>
        </li>
      </ul>
    </menu>

    <section className='pageContent' title='main content'>
      <ul className='postList'>
          {
            postSummaries.map((post, i) => (
              <li key={i} className='postList__item'>
                <PostSummary
                  href='/x'
                  title={post.title}
                  date={post.date}
                  summary={post.summary} />
              </li>
            ))
          }
      </ul>
    </section>

    <style jsx>{`
      .page {
        max-width: 45em;
        padding-left: 2em;
      }

      .pageContent {
        margin-top: 4em;
      }

      .websiteName {
        font-size: 1em;
        font-weight: 400;
        padding: 0;
        margin-top: 40px;
        margin-bottom: 1.2em;
        color: ${theme.header};
      }

      .mainMenu {
        margin: 0;
        padding: 0;
      }

      .mainMenu__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
      }

      @media (max-width: 600px) {
        .mainMenu__list {
          flex-direction: column;
        }
      }

      .mainMenu li {
        padding: 0;
      }

      .postList {
        list-style: none;
        padding: 0;
        margin: 0;
      }


      .postList__item {
        padding: 0;
        margin-bottom: 2.8em;
      }
    `}</style>

    <style global jsx>{`
      body {
        font-family: 'Fira Code', monospace;
        font-size: 90%;
        background-color: ${theme.background};
        color: ${theme.text};
        width: 100%;
        margin: 0;
      }

      *, *:after, *:before {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
