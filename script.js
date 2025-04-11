document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');

    // Kiểm tra xem có thông tin đăng nhập được lưu không
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Lấy giá trị từ form
        const email = emailInput.value;
        const password = passwordInput.value;
        const remember = rememberCheckbox.checked;

        // Lưu email nếu checkbox "Ghi nhớ tôi" được chọn
        if (remember) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }

        // Kiểm tra thông tin đăng nhập
        if (email === 'demo' && password === 'demo') {
            // Đăng nhập thành công
            console.log('Đăng nhập thành công!');
            
            // Chuyển hướng đến trang chính sau khi đăng nhập thành công
            // Có thể thay đổi 'home.html' bằng trang bạn muốn chuyển đến
            window.location.href = 'home.html';
        } else {
            // Đăng nhập thất bại
            console.log('Đăng nhập thất bại!');
            
            // Hiển thị thông báo lỗi
            alert('Thông tin tài khoản không chính xác');
            
            // Xóa mật khẩu để người dùng nhập lại
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    // Xử lý đăng nhập với Google
    document.querySelector('.google-btn').addEventListener('click', function() {
        alert('Đăng nhập với Google. Tính năng chúng tôi đang phát triển');
        // Thêm logic đăng nhập Google ở đây
    });

    // Xử lý đăng nhập với Facebook
    document.querySelector('.facebook-btn').addEventListener('click', function() {
        alert('Đăng nhập với Facebook. Tính năng chúng tôi đang phát triển');
        // Thêm logic đăng nhập Facebook ở đây
    });
}); 