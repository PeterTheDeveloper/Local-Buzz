import React, { useState, useEffect } from 'react';
import { Favorite, Chat } from 'grommet-icons';

function Post({
  postId,
  userId,
  title,
  category,
  tag,
  postBody,
  date,
  location,
  likes,
  setIsLoading,
  setError,
}) {
  const d = new Date(date.replace(' ', 'T'));
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const newDate = `${mo} ${da}, ${ye}`;
  const postDataContext = {
    postId,
    postBody,
  };

  const simplebody = postDataContext.postBody.substring(0, 150);

  const [userData, setUserData] = useState([]);

  const viewPostRedirect = (postId) => {
    window.location.href = `/viewPost/${postDataContext.postId}`;
  };

  useEffect(() => {
    function getAllUserData() {
      console.log(userId);
      fetch(`/api/user/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data[0]);
        })
        .catch(() => {
          const err = 'Sorry there was an error, please try again';
          setError(err);
        });
    }

    getAllUserData();
    setIsLoading(false);
  }, []);

  return (
    <section className="PostComponent" onClick={viewPostRedirect}>
      <div className="userAvatarDiv">
        <img className="userAvatar" src={userData.avatar} />
      </div>
      <div className="postBodyDiv">
        {/* UserInfo */}
        <div className="postUserInfo">
          <p>
            <span className="name">{userData.name}</span>
          </p>
          <p className="username">{userData.username}</p>
        </div>

        {/* Post body and title */}
        <div className="mainPostDiv">
          <p className="postTitle">{title}</p>
          <p className="postBody">
            {simplebody}
            ...
          </p>
        </div>
        {/* Category Tags  Time Created and Location */}
        <div className="postFilter">
          <p>
            <span className="tag">{tag}</span>
            {' '}
            ·
            {' '}
            <span className="catagory">{category}</span>
          </p>
        </div>

        <div className="postCreatedInfo">
          <p>
            <span className="time">{newDate}</span>
            {' '}
            ·
            {' '}
            <span className="location">{location}</span>
          </p>
        </div>
        {/* Likes and Comments */}

        <div className="postInteractionInfo">
          <p>
            <span className="likes">
              {likes}
              {' '}
              <Favorite color="#ff58bc" />
            </span>

            <span className="comments">
              {1}
              {' '}
              <Chat color="#57e021" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Post;
