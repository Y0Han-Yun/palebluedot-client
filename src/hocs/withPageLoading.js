import React from 'react';

/**
 * Make sure this script exists and is loaded
 * <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
 * https://github.com/typekit/webfontloader#readme (documentation)
 * @param {Array} fontFamilies
 */
const loadWebFonts = fontFamilies => new Promise((resolve, reject) => {
  try {
    const WebFont = window.WebFont;
    const webFontOptions = {
      google: {
        families: fontFamilies
      },
      active: () => resolve()
    };
    WebFont.load(webFontOptions);
  }
  catch (err) {
    reject(err);
  }
});

/**
 * This is only for single image source
 * @param {String} src image url
 */
const loadImage = src => new Promise((resolve, reject) => {
  try {
    const image = new Image();
    image.onload = () => resolve();
    image.src = src;
  }
  catch (err) {
    reject(err);
  }
});

/**
 * Load multiple images
 * @param {Array[String]} sources
 */
const loadImages = sources => new Promise((resolve, reject) => {
  const promises = sources.map(src => loadImage(src));
  Promise.all(promises).then(() => resolve()).catch(err => reject(err));
});

const withPageLoading = WrappedComponent => class extends React.Component {

  render () {
    return <WrappedComponent loadImages={loadImages} loadFonts={loadWebFonts} {...this.props} />;
  }

};

export default withPageLoading;
