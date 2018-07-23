$(document).ready(function() {
    
    console.log('123');
    
    console.log($('#first'));
    
    $('#first').css('background-color', 'red').hide(3000).show('slow');
    
//  $('#first::before').css('content','" "'); - nie da sie lapac pseudo elementow
    
    nazwa(); //wywolanie funkcji zdefiniowanej poza (ponizej)
})


function nazwa() {
    console.log('wywolanie funkcji nazwa');
}


