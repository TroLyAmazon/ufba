// Tạo một thời gian chờ ngẫu nhiên từ 5 đến 10 giây (trong miliseconds)
const randomTimeout = Math.floor(Math.random() * 6000) + 5000;

// Sử dụng setTimeout để chuyển hướng sau thời gian chờ ngẫu nhiên
setTimeout(function() {
    window.location.href = 'webchinhthuc/index.html';
}, randomTimeout);
