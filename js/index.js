$(document).ready(function() {
    const x = "x"
    const o = "o"
    let count = 0;
    let o_win = 0;
    let x_win = 0;

    function who_win(){

        const w = parseInt($("#game_width").val());
        const h = parseInt($("#game_height").val());
        const ms = parseInt($("#game_poin").val()); //max score
        let os = 1; //o score
        let xs = 1; //x score
        for(var i=0; i< $('#game li').length; i +=w)
        {

            //find horizontal
            for(var a=i+1; a< i+1+w; a++)
            {
                if($( "#game li" ).eq(a).hasClass('o') && $( "#game li" ).eq(a-1).hasClass('o'))
                {
                    os++;
                }
                else{
                    os = 1;
                }
                if(os === ms)
                {
                    return o;
                }
                if($( "#game li" ).eq(a).hasClass('x') && $( "#game li" ).eq(a-1).hasClass('x'))
                {
                    xs++;
                }
                else{
                    xs = 1;
                }
                if(xs === ms)
                {
                    return x;
                }
            }
        }
        //find vertical
        for(var i=0; i< w; i++)
        {
            for(var a=i; a< w*h; a+=h)
            {
                if($( "#game li" ).eq(a).hasClass('o') && $( "#game li" ).eq(a+h).hasClass('o'))
                {
                    os++;
                }
                else{
                    os = 1;
                }

                if(os === ms)
                {
                    return o;
                }
                if($( "#game li" ).eq(a).hasClass('x') && $( "#game li" ).eq(a+h).hasClass('x'))
                {
                    xs++;
                }
                else{
                    xs = 1;
                }

                if(xs === ms)
                {
                    return x;

                }
            }
        }

        //find gradient 1
        for(var i=0; i< w; i++)
        {
            for(var a=0; a< ms; a++)
            {
                if($( "#game li" ).eq(i+(a*w+a)).hasClass('o'))
                {
                    os++;
                }
                else{
                    os = 1;
                }
                if($( "#game li" ).eq(i+(a*w+a)).hasClass('x'))
                {
                    xs++;
                }
                else{
                    xs = 1;
                }
            }

            if(os === ms+1)
            {
                return o;
            }else if(xs === ms+1)
            {
                return x;
            }

        }
        os = 1;
        //find gradient 2
        for(var i=w-1; i>= 0; i--)
        {
            if(i === ms-1 )
            {
                for(var a=0; a< ms; a++)
                {
                    if($( "#game li" ).eq(i+(a*w-a)).hasClass('o'))
                    {
                        os++;
                    }
                    else{
                        os = 1;
                    }

                    if($( "#game li" ).eq(i+(a*w-a)).hasClass('x'))
                    {
                        xs++;
                    }
                    else{
                        xs = 1;
                    }
                }
            }
            if(os === ms+1)
            {
                return o;
            }else if(xs === ms+1)
            {
                return x;
            }
            os=1;

        }
        return 0;
    }
    function reset_game(){
        let newboxes = "";
        const width = $("#game_width").val()
        const height = $("#game_height").val()
        if(width >= 10)
        {
            alert("width is too long");
            throw new Error("width is too long");
        }
        if(width <= 2 || height <= 2 )
        {
            alert("width/height is too long");
            throw new Error("width is too long");
        }
        $(".new_span").width(width*80+"px");
        for(let i=0; i<width*height; i++)
        {
            newboxes += "<li class=\"btn span1\">+</li>";
        }
        $("#game").html(newboxes);
        $("#game li").text("+");
        $("#game li").removeClass('disable')
        $("#game li").removeClass('o')
        $("#game li").removeClass('x')
        $("#game li").removeClass('btn-primary')
        $("#game li").removeClass('btn-info')
        count = 0
    }
    function btn_clicked(thiz){

        if (who_win() === x)
        {
            alert('X wins has won the game. Start a new game')
        }
        else if (who_win() === o)
        {
            alert('O has won the game. Start a new game')
            reset_game()
        }
        else if (count === $('#game li').length)
        {
            alert('Its a tie. It will restart.')
            reset_game()
            count = 0
        }
        else if ($(this).hasClass('disable'))
        {
            alert('Already selected')
        }
        else if (count%2 === 0)
        {
            count++
            thiz.text(o)
            thiz.addClass('disable o btn-primary')
            if (who_win() === o)
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
            thiz.text(x)
            thiz.addClass('disable x btn-info')
            if (who_win() === x)
            {
                alert('X wins')
                count = 0
                x_win++
                $('#x_win').text(x_win)
            }
        }

    }

    $('#game li').click(function(){
       btn_clicked( $(this));
    });
    $("#reset").click(function () {
        reset_game()
        $('#game li').click(function(){
            btn_clicked( $(this));
        });

    });
});
