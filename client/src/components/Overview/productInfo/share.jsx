import React from 'react';
import facebook from '../../../../dist/assets/icons8-facebook-48.png';
import twitter from '../../../../dist/assets/icons8-twitter-48.png';
import pinterest from '../../../../dist/assets/icons8-pinterest-48.png';

export default function Share() {
  const [clickShare, setClickShare] = React.useState(false);
  const url = 'https://github.com/Black-Razzberry-Revelers';
  const query = encodeURIComponent(url);
  const fblink = `https://www.facebook.com/sharer/sharer.php?u=${query}&amp;src=sdkpreparse`;
  const pinLink = `https://pinterest.com/pin-builder/?url=${url}`;

  const handleClick = (e) => {
    e.preventDefault();
    setClickShare(true);
  };
  return (
    clickShare
      ? (
        <>
          <div className="sharePopup modal-frame">
            Share this product
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
                <img alt="icon" src={facebook} />
              </a>
              <a
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet"
                data-size="small"
                rel="noreferrer"
                target="_blank"
              >
                <link rel="canonical" href={url} />
                <img alt="icon" src={twitter} />
              </a>
              <a
                className="pinterest-share-button"
                href={pinLink}
                data-size="small"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="icon" src={pinterest} />
              </a>
            </div>
          </div>
          <div
            className="modal-frame-overlay"
            role="button"
            aria-label="share-modal-overlay"
            tabIndex="0"
            onKeyDown={(e) => setClickShare(false)}
            onClick={(e) => setClickShare(false)}
          />
        </>
      )
      : <button type="button" onClick={handleClick} className="show-button">share</button>

  );
}
