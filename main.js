window.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.feature-item, .gallery-images img');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < windowHeight - 60) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    };
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash && document.querySelector(this.hash)) {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            let valid = true;
            this.querySelectorAll('input[required], textarea[required], select[required]').forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ff5722';
                    valid = false;
                } else {
                    input.style.borderColor = '#ffb300';
                }
            });
            if (!valid) {
                e.preventDefault();
                alert('Mohon lengkapi semua data yang wajib diisi!');
            }
        });
    });
});