if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/meet-up/sw.js', { scope: '/meet-up/' })})}