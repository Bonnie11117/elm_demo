/**
 * Sticky Search Box on Scroll
 * ---------------------------
 * Works on both PC and Mobile
 * - Uses `onscroll` event
 * - Detects scroll position and screen width
 * - Makes the search box sticky when scrolling past 12% of viewport width
 */

window.onload = function () {
  const searchBox = document.getElementById('fixedBox');

  document.onscroll = function () {
    // Scroll position: handles both PC and mobile
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Viewport width
    const viewportWidth = document.documentElement.clientWidth;

    // Threshold = 12% of viewport width
    const threshold = viewportWidth * 0.12;

    // Toggle position based on scroll
    if (scrollTop > threshold) {
      Object.assign(searchBox.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1000'
      });
    } else {
      searchBox.style.position = 'static';
    }
  };
};
