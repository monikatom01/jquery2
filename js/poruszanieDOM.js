$(document).ready(function() {
    
    //metoda find()
//    $('.container').find('a').css('color', 'green'); //znajduje a w divie z classa cont
    
    //metoda each()
    $('.container').find('a').each(function(index, element) {
        console.log(index + ' ' + element);
    })
    
    
})