// Telegram Bot Configuration
// Hướng dẫn cấu hình:
// 1. Tạo bot mới với @BotFather trên Telegram
// 2. Lấy Bot Token từ BotFather
// 3. Gửi tin nhắn cho bot của bạn
// 4. Truy cập: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
// 5. Tìm chat.id trong response

const TELEGRAM_CONFIG = {
  // Token bot từ BotFather
  BOT_TOKEN: "8703732835:AAHDqPoBKkDrUOfwI2krB3uMffnjQhVKgig",

  // Chat ID của bạn
  CHAT_ID: "5611281520",

  // URL API Telegram (không cần thay đổi)
  API_URL: "https://api.telegram.org/bot",
};

// Export để sử dụng trong script.js
window.TELEGRAM_CONFIG = TELEGRAM_CONFIG;
