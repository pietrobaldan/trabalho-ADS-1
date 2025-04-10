// 1. Modal de boas-vindas (só aparece na página index)
window.addEventListener('load', () => {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/' || path.endsWith('/index')) {
        // Cria um elemento de modal
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
        // Adiciona o modal ao corpo da página
        document.body.appendChild(modal);

        // Fecha o modal ao clicar no botão
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
            e.preventDefault(); // Impede o envio real do formulário
            alert('Obrigado por responder o questionário!');
            this.reset(); // Limpa todos os campos do formulário
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

    // Mostra o botão quando o usuário rolar a página para baixo
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    // Volta suavemente ao topo ao clicar
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 4. Menu hambúrguer (abre e fecha o menu em dispositivos móveis)
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active'); // Mostra ou esconde o menu
            menuIcon.classList.toggle('active'); // Anima o ícone
        });
    }
});

// Adiciona a classe "loaded" ao body quando a página termina de carregar
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
