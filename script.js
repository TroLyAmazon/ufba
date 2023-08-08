// Tạo một thời gian chờ ngẫu nhiên từ 1 đến 10 giây (trong miliseconds)
const randomTimeout = Math.floor(Math.random() * 6000) + 1000;

// Sử dụng setTimeout để chuyển hướng sau thời gian chờ ngẫu nhiên
setTimeout(function() {
    window.location.href = 'trangchu.html';
}, randomTimeout);
//Chữ Nhảy
splitting();
