// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calling Splitting()');
    Splitting();
});
// Tạo một thời gian chờ ngẫu nhiên từ 3 đến 15 giây (trong miliseconds)
const randomTimeout = Math.floor(Math.random() * 11000) + 3000;

// Đợi thời gian chờ ngẫu nhiên và sau đó chuyển hướng trang
    setTimeout(function() {
        window.location.href = 'trangchu.html';
    }, randomTimeout);