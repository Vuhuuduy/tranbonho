const messages = [
  "Nhớ nhớ nhớ em!"
];

function generateRandomNotifications() {
  const notificationCount = 100;
  const music = document.getElementById('backgroundMusic');
  if (music.paused) {
    music.play();

    for (let i = 0; i < notificationCount; i++) {
      setTimeout(() => {
        const notification = document.createElement('div');
        notification.className = 'notification';

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        notification.innerHTML = `
          <div class="notification-header">
            <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
            <span>Tràn ngập bộ</span>
          </div>
          <p>${randomMessage}</p>
        `;

        const x = Math.random() * (window.innerWidth - 240);
        const y = Math.random() * (window.innerHeight - 160);
        notification.style.left = `${x}px`;
        notification.style.top = `${y}px`;

        document.body.appendChild(notification);
      }, i * 200);
    }
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.transition = 'all 0.5s ease-in-out'; // Thêm hiệu ứng chuyển động
  notification.style.left = '10px'; // Góc trái (có thể chỉnh sang phải)
  notification.style.top = `${window.innerHeight - 180}px`; // Xuống góc dưới
  notification.style.opacity = '0.6'; // Làm mờ nhẹ để giống "thu nhỏ"

  // Tùy chọn: Xóa sau hiệu ứng nếu muốn
  setTimeout(() => {
    notification.remove();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = 'Tặng nhóc YNhi ';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText;
  document.body.appendChild(footer);
});


function createFallingHearts() {
  const heartsContainer = document.querySelector('.hearts-container');
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000); // Xóa trái tim sau 5 giây
}

// Tạo trái tim rơi mỗi 300ms
setInterval(createFallingHearts, 300);
