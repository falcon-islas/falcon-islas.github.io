$(function(){
    var box1 = $('.box1');
    var box2 = $('.box2');

    function LeftToRight(){
        if(box2.html() == ''){
            //Get content from box1 and put it into box2
            //Empty out box1
            box2.html( box1.html() );
            box1.html( '' );

        }
    }

    $('#LeftToRight').click( LeftToRight );

    function RightToLeft(){
        if(box1.html()== ''){
            box1.html( box2.html() );
            box2.html( '' );
        }
    }

    $('#RightToLeft').click(RightToLeft);
})
