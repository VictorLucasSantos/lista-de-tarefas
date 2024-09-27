$(document).ready(function(){
    $('#button-adicionar').click(function(e){
        e.preventDefault();

        // Pega o valor do input
        var tarefa = $('#input-tarefa').val();

        // Adiciona um novo item à lista
        $('#lista-tarefas').append(`<li >${tarefa}</li>`);

        // Limpa o campo de input
        $('#input-tarefa').val('');
    });

    // Aplica ou remove o efeito de linha riscada ao clicar na tarefa (delegation)
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });   
});