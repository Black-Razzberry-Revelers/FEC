import React from 'react';

export default function Share() {
  const [clickShare, setClickShare] = React.useState(false);
  const url = 'https://github.com/Black-Razzberry-Revelers';
  const query = encodeURIComponent(url);
  const fblink = `https://www.facebook.com/sharer/sharer.php?u=${query}&amp;src=sdkpreparse`;
  const pinLink = `https://pinterest.com/pin-builder/?url=${url}`

  console.log(query);
  const handleClick = (e) => {
    e.preventDefault();
    setClickShare(true);
  };
  return (
    clickShare
      ? (
        <div className="sharePopup">
          Share this page
          <div
            data-layout="button_count"
            data-size="small"
            data-href={url}
          >
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={fblink}
            >
              Facebook
            </a>
            <a
              className="twitter-share-button"
              href="https://twitter.com/intent/tweet"
              data-size="small"
              rel="noreferrer"
              target="_blank"
            >
              <link rel="canonical" href={url} />
              Tweet
            </a>
            <a
              className="pinterest-share-button"
              href={pinLink}
              data-size="small"
              rel="noreferrer"
              target="_blank"
            >
              Pinterest
            </a>
          </div>
        </div>
      )
      : <button type="button" onClick={handleClick}>share</button>

  );
}
