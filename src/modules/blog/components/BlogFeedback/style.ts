import { css } from '@emotion/react';

export const style = css`
  background: #eee; /* For visibility of elements. */

  div.blog-feedback {
    background: #eeeeee;
    border-bottom: 1px solid #dddddd;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-color: rgb(221, 221, 221) rgb(221, 221, 221) rgb(221, 221, 221) rgb(204, 204, 204);
    border-image: initial;
    border-left: 0px;
    border-radius: 4px;
    border-right: 1px solid #dddddd;
    border-style: solid;
    border-top: 1px solid #dddddd;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-width: 0px;
    box-sizing: border-box;
    color: #222222;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 15px auto;
    padding: 10px 30px;
  }

  div.flex-box {
    box-sizing: border-box;
    color: #222222;
    display: flex;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
  }

  p.question.flex-full.flex-middle {
    box-sizing: border-box;
    color: #222222;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-family: Roboto, sans-serif;
    justify-content: center;
    line-height: 22px;
    margin: 0px;
    margin-bottom: 1rem;
    margin-top: 0px;
  }

  div.feedback-icon {
    bottom: 0px;
    box-sizing: border-box;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    left: 0px;
    line-height: 22px;
    margin: 0px;
    margin-left: 15px;
    padding: 10px 0px;
    position: relative;
    right: 0px;
    text-align: center;
    top: 0px;
    transition: all 0.2s ease 0s;
    z-index: 99;
  }

  div.feedback-icon:hover {
    color: #f04f24;
    transform: translateY(5px);
  }

  label.positive {
    align-items: center;
    bottom: 0px;
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
    justify-content: center;
    left: 0px;
    line-height: 22px;
    margin: 0px;
    position: relative;
    right: 0px;
    text-align: center;
    top: 0px;
  }

  svg.bi.bi-emoji-smile {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    display: block;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    overflow: hidden;
    text-align: center;
  }

  path {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    text-align: center;
  }

  [d='M4\.285\ 9\.567a\.5\.5\ 0\ 0\ 1\ \.683\.183A3\.498\ 3\.498\ 0\ 0\ 0\ 8\ 11\.5a3\.498\ 3\.498\ 0\ 0\ 0\ 3\.032-1\.75\.5\.5\ 0\ 1\ 1\ \.866\.5A4\.498\ 4\.498\ 0\ 0\ 1\ 8\ 12\.5a4\.498\ 4\.498\ 0\ 0\ 1-3\.898-2\.25\.5\.5\ 0\ 0\ 1\ \.183-\.683z'] {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    text-align: center;
  }

  .bi-emoji-smile
    [d='M7\ 6\.5C7\ 7\.328\ 6\.552\ 8\ 6\ 8s-1-\.672-1-1\.5S5\.448\ 5\ 6\ 5s1\ \.672\ 1\ 1\.5zm4\ 0c0\ \.828-\.448\ 1\.5-1\ 1\.5s-1-\.672-1-1\.5S9\.448\ 5\ 10\ 5s1\ \.672\ 1\ 1\.5z'] {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    text-align: center;
  }

  span {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    display: block;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    text-align: center;
  }

  :root
    > :nth-child(2)
    > :nth-child(4)
    > :nth-child(1)
    > :nth-child(4)
    > :nth-child(1)
    > :nth-child(3) {
    bottom: 0px;
    box-sizing: border-box;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    left: 0px;
    line-height: 22px;
    margin: 0px;
    margin-left: 15px;
    padding: 10px 0px;
    position: relative;
    right: 0px;
    text-align: center;
    top: 0px;
    transition: all 0.2s ease 0s;
    z-index: 99;
  }

  :root
    > :nth-child(2)
    > :nth-child(4)
    > :nth-child(1)
    > :nth-child(4)
    > :nth-child(1)
    > :nth-child(3):hover {
    color: #f04f24;
    transform: translateY(5px);
  }

  :root
    > :nth-child(2)
    > :nth-child(4)
    > :nth-child(1)
    > :nth-child(4)
    > :nth-child(1)
    > :nth-child(3)
    > :nth-child(1) {
    align-items: center;
    bottom: 0px;
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
    justify-content: center;
    left: 0px;
    line-height: 22px;
    margin: 0px;
    position: relative;
    right: 0px;
    text-align: center;
    top: 0px;
  }

  svg.bi.bi-emoji-frown {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    display: block;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    overflow: hidden;
    text-align: center;
  }

  .bi-emoji-frown
    [d='M8\ 15A7\ 7\ 0\ 1\ 0\ 8\ 1a7\ 7\ 0\ 0\ 0\ 0\ 14zm0\ 1A8\ 8\ 0\ 1\ 0\ 8\ 0a8\ 8\ 0\ 0\ 0\ 0\ 16z'] {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    text-align: center;
  }

  [d='M4\.285\ 12\.433a\.5\.5\ 0\ 0\ 0\ \.683-\.183A3\.498\ 3\.498\ 0\ 0\ 1\ 8\ 10\.5c1\.295\ 0\ 2\.426\.703\ 3\.032\ 1\.75a\.5\.5\ 0\ 0\ 0\ \.866-\.5A4\.498\ 4\.498\ 0\ 0\ 0\ 8\ 9\.5a4\.5\ 4\.5\ 0\ 0\ 0-3\.898\ 2\.25\.5\.5\ 0\ 0\ 0\ \.183\.683z'] {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    text-align: center;
  }

  .bi-emoji-frown
    [d='M7\ 6\.5C7\ 7\.328\ 6\.552\ 8\ 6\ 8s-1-\.672-1-1\.5S5\.448\ 5\ 6\ 5s1\ \.672\ 1\ 1\.5zm4\ 0c0\ \.828-\.448\ 1\.5-1\ 1\.5s-1-\.672-1-1\.5S9\.448\ 5\ 10\ 5s1\ \.672\ 1\ 1\.5z'] {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    text-align: center;
  }

  :root
    > :nth-child(2)
    > :nth-child(4)
    > :nth-child(1)
    > :nth-child(4)
    > :nth-child(1)
    > :nth-child(3)
    > :nth-child(1)
    > :nth-child(2) {
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    display: block;
    font-family: Roboto, sans-serif;
    line-height: 22px;
    margin: 0px;
    text-align: center;
  }

  @media (max-width: 1025px) {
    div.blog-feedback {
      overflow-x: unset;
    }

    div.flex-box {
      overflow-x: unset;
    }

    p.question.flex-full.flex-middle {
      overflow-x: unset;
    }

    div.feedback-icon {
      overflow-x: unset;
    }

    label.positive {
      overflow-x: unset;
    }

    svg.bi.bi-emoji-smile {
      overflow-x: unset;
    }

    path {
      overflow-x: unset;
    }

    [d='M4\.285\ 9\.567a\.5\.5\ 0\ 0\ 1\ \.683\.183A3\.498\ 3\.498\ 0\ 0\ 0\ 8\ 11\.5a3\.498\ 3\.498\ 0\ 0\ 0\ 3\.032-1\.75\.5\.5\ 0\ 1\ 1\ \.866\.5A4\.498\ 4\.498\ 0\ 0\ 1\ 8\ 12\.5a4\.498\ 4\.498\ 0\ 0\ 1-3\.898-2\.25\.5\.5\ 0\ 0\ 1\ \.183-\.683z'] {
      overflow-x: unset;
    }

    .bi-emoji-smile
      [d='M7\ 6\.5C7\ 7\.328\ 6\.552\ 8\ 6\ 8s-1-\.672-1-1\.5S5\.448\ 5\ 6\ 5s1\ \.672\ 1\ 1\.5zm4\ 0c0\ \.828-\.448\ 1\.5-1\ 1\.5s-1-\.672-1-1\.5S9\.448\ 5\ 10\ 5s1\ \.672\ 1\ 1\.5z'] {
      overflow-x: unset;
    }

    span {
      overflow-x: unset;
    }

    :root
      > :nth-child(2)
      > :nth-child(4)
      > :nth-child(1)
      > :nth-child(4)
      > :nth-child(1)
      > :nth-child(3) {
      overflow-x: unset;
    }

    :root
      > :nth-child(2)
      > :nth-child(4)
      > :nth-child(1)
      > :nth-child(4)
      > :nth-child(1)
      > :nth-child(3)
      > :nth-child(1) {
      overflow-x: unset;
    }

    svg.bi.bi-emoji-frown {
      overflow-x: unset;
    }

    .bi-emoji-frown
      [d='M8\ 15A7\ 7\ 0\ 1\ 0\ 8\ 1a7\ 7\ 0\ 0\ 0\ 0\ 14zm0\ 1A8\ 8\ 0\ 1\ 0\ 8\ 0a8\ 8\ 0\ 0\ 0\ 0\ 16z'] {
      overflow-x: unset;
    }

    [d='M4\.285\ 12\.433a\.5\.5\ 0\ 0\ 0\ \.683-\.183A3\.498\ 3\.498\ 0\ 0\ 1\ 8\ 10\.5c1\.295\ 0\ 2\.426\.703\ 3\.032\ 1\.75a\.5\.5\ 0\ 0\ 0\ \.866-\.5A4\.498\ 4\.498\ 0\ 0\ 0\ 8\ 9\.5a4\.5\ 4\.5\ 0\ 0\ 0-3\.898\ 2\.25\.5\.5\ 0\ 0\ 0\ \.183\.683z'] {
      overflow-x: unset;
    }

    .bi-emoji-frown
      [d='M7\ 6\.5C7\ 7\.328\ 6\.552\ 8\ 6\ 8s-1-\.672-1-1\.5S5\.448\ 5\ 6\ 5s1\ \.672\ 1\ 1\.5zm4\ 0c0\ \.828-\.448\ 1\.5-1\ 1\.5s-1-\.672-1-1\.5S9\.448\ 5\ 10\ 5s1\ \.672\ 1\ 1\.5z'] {
      overflow-x: unset;
    }

    :root
      > :nth-child(2)
      > :nth-child(4)
      > :nth-child(1)
      > :nth-child(4)
      > :nth-child(1)
      > :nth-child(3)
      > :nth-child(1)
      > :nth-child(2) {
      overflow-x: unset;
    }
  }
`;
