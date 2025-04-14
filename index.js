// Toggle Icon
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Slider
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        autoplay: {
            delay: 5000, // Tự động chạy sau 5 giây
            disableOnInteraction: false, // Dừng khi tương tác
            pauseOnMouseEnter: true
        },
    });
});

// More Click
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const desc = document.getElementById(targetId);
      
      desc.classList.toggle('line-clamp-5');
      desc.classList.toggle('expanded');
      
      if (desc.classList.contains('expanded')) {
        button.textContent = 'Rút gọn';
      } else {
        button.textContent = 'Xem thêm';
      }
    });
});

// Modal Đăng nhập
const openModalButtons = [document.getElementById('openModal'), document.getElementById('openModalMobile')];
const closeModal = document.getElementById('closeModal');
const authModal = document.getElementById('authModal');
const modalContent = authModal.querySelector('div');
const body = document.body;
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        authModal.classList.remove('hidden', 'opacity-0');
        authModal.classList.add('opacity-100');
        modalContent.classList.add('scale-100');
        body.style.overflow = 'hidden';
    });
});
function closeAuthModal() {
    authModal.classList.add('opacity-0');
    authModal.classList.remove('opacity-100');
    modalContent.classList.remove('scale-100');
    setTimeout(() => {
        authModal.classList.add('hidden');
        body.style.overflow = '';
    }, 300);
}
closeModal.addEventListener('click', closeAuthModal);
authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeAuthModal();
});
switchToRegister.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});
switchToLogin.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Modal logic cho Blackpink
document.querySelectorAll('[data-modal-target]').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Ngăn scroll ngoài
        setTimeout(() => {
            modal.querySelector('.opacity-0').classList.remove('opacity-0');
            modal.querySelector('.transition-opacity').classList.add('opacity-100');
        }, 10);
    });
});
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.fixed');
        modal.querySelector('.opacity-100').classList.remove('opacity-100');
        modal.querySelector('.transition-opacity').classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    });
});
document.querySelectorAll('.fixed').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.querySelector('.opacity-100').classList.remove('opacity-100');
            modal.querySelector('.transition-opacity').classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
});