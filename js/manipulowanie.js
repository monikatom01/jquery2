$(document).ready(function() {
    console.log($('.container p').text());
    
    $('.container p').text('lorem ipsum'); //zmienia tekst wszystkich p
    
    //wyciaga tekst ze wszystkich trafien selektora
    console.log($('.container p').text());
    
    //wyciaga html tylko z pierwszego trafienia selektora
    console.log($('.container p').html());
    
    //ustawia html we wszystkich trafieniach selektora
    $('.container p').html('<span>zieniono metoda .html()</span>');
    
    //jak w .text damy np <span> bedzie jako tekst ja do metody .html bedzie dodany element znacznik html
    
    // Metody dodawania nowej tresci 
        //append
        $('#dodaj').append('<p>Dodanie tresci metoda append()</p>');
        //preppend
        $('#dodaj').prepend('<p>Dodanie tresci metoda prepend()</p>');
        //before
        $('#dodaj').before('<p>Dodanie tresci metoda before()</p>');
        //after
        $('#dodaj').after('<p>Dodanie tresci metoda after()</p>');
    
    //Metody usuwajace tresci
        //empty -usuwa wnetrze selektora
        $('#dodaj').empty();
        //remove - usuwa caly selektor z potomkami 
        $('#dodaj').remove();
    
    //Metody css jak jedna watrosc to w () jak wiecej to jako obiekt w ({})
        $('.container p').css({
            fontSize : '20px',
            color: 'red'
        })
    
    //Metoda val()
        //bez parametru przyjmuje wartosc tylko pierwszego trafienia selektora
        console.log($('form input').val());
        // z argumentami ustawia wartosc wszystkim trafienio selektora    
        $('form input').val('lorem');
    

    //Dodawanie usuwanie klasy
        $('.container p').addClass('paragraf'); //wszystkim p w .container
    
    //Usuuwanie klasy
        $('.container p').removeClass('paragraf');
    
    
    
    
    
    
    
  
})
