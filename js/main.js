$(function(){

    let showPopup = function(){
        $('.popup-container').css('display', 'flex');
    };

    let closePopup = function(){
        $('.popup-container').css('display', 'none');
    };

    

    $('.close').on('click', function(){
        clearForm();
        closePopup();
    });
});