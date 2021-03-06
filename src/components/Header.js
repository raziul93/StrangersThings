import React from 'react';

import {Auth} from "../components";

import {clearToken} from "../api";

const Header = ({
  isLoggedIn,
  setIsLoggedIn,
  setPostList,
  setUserPostsOnly,
  postList}) => {
  return <div id='header'>
    {isLoggedIn ? (
      <>
      <h1>Welcome to Stranger's Things!</h1>
      <button
        onClick={() => {
        clearToken();
        setIsLoggedIn(false);
        setUserPostsOnly(false);
      }}>LOG OUT</button>
      </>
    ) : (
      <>
      <h1>Stranger's Things</h1>
      <Auth
        setIsLoggedIn={setIsLoggedIn}
        postList={postList}
        setPostList={setPostList}
        isLoggedIn={isLoggedIn} />
      </>
    )}
  </div>
}

export default Header;