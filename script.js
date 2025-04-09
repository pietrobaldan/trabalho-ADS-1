// 1. Modal de boas-vindas (apenas na index)
window.addEventListener('load', () => {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/' || path.endsWith('/index')) {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div id="welcome-modal">
                <div class="modal-content">
                    <h2>Bem-vindo ao site do <span class="nome-verde">Eminem</span>!</h2>
                    <p>Explore as músicas, álbuns e curiosidades sobre a carreira dele.</p>
                    <button id="close-modal">Fechar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const closeModal = document.getElementById('close-modal');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });
    }
});


// 2. Confirmação ao enviar o formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // impede envio real
            alert('Obrigado por responder o questionário!');
            this.reset(); // limpa o formulário
        });
    }
});

// 3. Botão "Voltar ao topo"
document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.createElement('button');
    topBtn.id = "topBtn";
    topBtn.title = "Voltar ao topo";
    topBtn.textContent = "↑";
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 4. Menu hambúrguer
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });
    }
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
