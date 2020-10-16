import React, { Component } from "react";
import Album from "../components/main/albums/UserAlbums";
// import styled from 'styled-components';

export default class AlbumPage extends Component {
  static path = "/albums/";
  render() {
    return <Album />;
  }
}

// const AlbumWrapper = styled.div`
// background-color: #F6F6F6;
// display: flex;
// flex-flow: column nowrap;
// height: 100vh;
// width: 100%;
// min-width: 1340px;
// overflow: hidden;
// justify-content: stretch;

// box-sizing: border-box;

// .scrollbar-container {
//   margin-left: 0
// }

// .central-content {
//   display: flex;
//   margin-left: auto;
//   margin-right: auto;
//   width: 100%;
//   padding-bottom: 40px;
// }
// `;
