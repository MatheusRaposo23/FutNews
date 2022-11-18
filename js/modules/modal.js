export default function initModal(){
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoAbrir2 = document.querySelector('[data-modal="abrir2"');
    const botaoAbrir3 = document.querySelector('[data-modal="abrir3"');
    const botaoAbrir4 = document.querySelector('[data-modal="abrir4"');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    console.log(botaoAbrir);

    if(botaoAbrir && botaoAbrir2 && botaoAbrir3 && botaoAbrir4 && botaoFechar && containerModal){
        function toggleModal(event){
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }


        function cliqueForaModal(event){
            if(event.target === this){
                toggleModal(event);
            }
        }

        botaoAbrir.addEventListener('click', toggleModal);
        botaoAbrir2.addEventListener('click', toggleModal);
        botaoAbrir3.addEventListener('click', toggleModal);
        botaoAbrir4.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}