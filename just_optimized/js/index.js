// JavaScript Document
$(document).ready(function() {

    function x_won() {
        if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
            return true;
        }
         else{
            return false
        }
    }
    function o_won() {
        if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
        {
            return true;
        }
        else{
            return false
        }
    }

    function reset_game() {
        $("#game li").text("+");
        $("#game li").removeClass('disable')
        $("#game li").removeClass('o')
        $("#game li").removeClass('x')
        $("#game li").removeClass('btn-primary')
        $("#game li").removeClass('btn-info')
    }

    const x = "x"
    const o = "o"
    let count = 0;
    let o_win = 0;
    let x_win = 0;
    $('#game li').click(function(){

        if (o_won())
        {
            alert('O has won the game. Start a new game')
            reset_game()
        }
        else if (x_won())
        {
            alert('X wins has won the game. Start a new game')
            reset_game()
        }
        else if (count == 9)
        {
            alert('Its a tie. It will restart.')
            reset_game()
            count = 0
        }
        else if ($(this).hasClass('disable'))
        {
            alert('Already selected')
        }
        else if (count%2 == 0)
        {
            count++
            $(this).text(o)
            $(this).addClass('disable o btn-primary')
            if (o_won())
            {
                alert('O wins')
                count = 0
                o_win++
                $('#o_win').text(o_win)
            }
        }
        else
        {
            count++
            $(this).text(x)
            $(this).addClass('disable x btn-info')
            if (x_won())
            {
                alert('X wins')
                count = 0
                x_win++
                $('#x_win').text(x_win)
            }
        }

    });
    $("#reset").click(function () {
        reset_game()
        count = 0
    });
});


