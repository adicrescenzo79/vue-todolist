$(document).ready(function(){
  $('.move-old').click(function(){
    $('.next-todo').addClass('inactive');
    $('.old-todo').removeClass('inactive');
  })

  // FACCIO APPARIRE LA FORM  DI INSERIMENTO
  $('i.add').click(function(){
    $('.aggiunta').removeClass('inactive');
    $('input#nuovo').val();
    $('input#nuovo').focus();
  })

  $('input#nuovo').keyup(function(e){

    if(e.which == 27) {
      $('input#nuovo').parents('.aggiunta').addClass('inactive');
    } else if (e.which == 13) {
      var template = $('.todo li').clone();
      var nuovo = $(this).val();

      if (nuovo) {

        $('#nuovo').val('');

        template.children('span.title').text(nuovo);
      }

// WARNING: 
      // SPOSTAMENTO RIGA IN OLD
      var fatto = template.children('.icons').children('i.done');
      fatto.click(function(){
        var old = $(this).parents('li').clone();
        var oldTodos = $('.old-todo ul.todos');
        old.remove();
        oldTodos.append(old);

      })



      // MODIFICA RIGA
      var modifica = template.children('.icons').children('i.edit');

      modifica.click(function(){
        var title = $(this).parent('.icons').siblings('span.title');
        var valore = title.text();
        title.hide();
        $(this).parent('.icons').siblings('input#mod').val(valore).show();
        $('input#mod').focus();
        $(this).hide();

      })

      var modificato = template.children('input#mod');

      modificato.keyup(function(e){
        if (e.which == 13) {
          var valoreNew = $(this).val();
          var title = $(this).siblings('span.title');
          title.text(valoreNew).show();
          $(this).hide();
          $(this).siblings('.icons').children('i.edit').show();
        }
      })

      var todos = $('.next-todo ul.todos');
      todos.append(template);

      $('ul.todos').show();

      $('.aggiunta').addClass('inactive');


    }


  })






















});
