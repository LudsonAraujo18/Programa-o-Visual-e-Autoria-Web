const usuario = document.getElementById('Usuario');
const senha = document.getElementById('Senha');
const mensagem = document.getElementById('status');
const botaoSalvar = document.getElementById('salvar');
const botaoSair = document.getElementById('sair');

botaoSalvar.addEventListener('click', ()=>{
    const nome = usuario.value;
    const password = senha.value;
    const usuarioSalvo = localStorage.getItem('Usuario');
    const senhaSalva = localStorage.getItem('Senha');

    if(usuarioSalvo === nome && senhaSalva === password){
        mensagem.textContent = 'Bem vindo de volta !!!';
    } else{
        localStorage.setItem('Usuario', nome);
        localStorage.setItem('Senha', password);
        mensagem.textContent = 'Salvo';
    }
    usuario.value = "";
    senha.value = "";
});

botaoSair.addEventListener('click', () =>{
    localStorage.clear();
    usuario.value = "";
    senha.value = "";
});