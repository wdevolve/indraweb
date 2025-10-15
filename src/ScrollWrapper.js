import { useEffect } from 'react';

export default function ScrollWrapper({ children }) {
useEffect(() => {
  const loadScripts = async () => {
    // Ensure jQuery is loaded
    if (!window.jQuery) {
      const jqueryScript = document.createElement('script');
      jqueryScript.src = '/lib/jquery.min.js';
      document.body.appendChild(jqueryScript);
      await new Promise((res) => (jqueryScript.onload = res));
    }

    // Load easing plugin
    const easingScript = document.createElement('script');
    easingScript.src = '/lib/jquery.easing.min.js';
    document.body.appendChild(easingScript);
    await new Promise((res) => (easingScript.onload = res));

    // Load scrollSpeed plugin
    const scrollSpeedScript = document.createElement('script');
    scrollSpeedScript.src = '/lib/jQuery.scrollSpeed.js';
    scrollSpeedScript.onload = () => {
      const $ = window.jQuery;
      if ($ && typeof $.scrollSpeed === 'function') {
        $.scrollSpeed(100, 3200, 'easeOutCubic');
      } else {
        console.warn('scrollSpeed plugin not loaded correctly.');
      }
    };
    document.body.appendChild(scrollSpeedScript);
  };

  loadScripts();
}, []);

  return <>{children}</>;
}
