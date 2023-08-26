let j = 0;
seq = [];
$(document).on("keydown", main);
let i = 0;
let off = true;

$(".container > div").click((event) => {
    let i = seq.length - 1;
    if (seq.length === 0 || j > i){
        $("body").css("background-color", "red");
        setTimeout(() => {
            $("body").css("background-color", "navy");
        }, 500);
        playSound();

        lost();
        return;
    }
    if (j <= i){
        if (seq[j] === $(event.target).attr("id").slice(0,1)){
            $(event.target).addClass("lighten");
            setTimeout(() => {
                $(event.target).removeClass("lighten");
            }, 500);
            j++;
            if (j > i){
                setTimeout(main, 1000);
            }
            return;
        }else{
            $("body").css("background-color", "red");
            setTimeout(() => {
                $("body").css("background-color", "navy");
            }, 500);
            $(event.target).addClass("lighten");
            setTimeout(() => {
                $(event.target).removeClass("lighten");
            }, 500);
            playSound();
            lost();
            return;
        }


    }
})

function main(){
    if (off){
        $(document).off("keydown");
        off = false;
    }
    j = 0;
        let n = Math.floor(Math.random()* 4);
        switch (n){
            case 0:
                $("#green").addClass("lighten");
                seq.push("g");
                var audio = new Audio("./sounds/green.mp3");
                audio.play();
                setTimeout(() => {
                    $("#green").removeClass("lighten");
                }, 500);
                changeHeading(seq.length);

                break;
            case 1:
                $("#red").addClass("lighten");
                seq.push("r");
                var audio = new Audio("./sounds/red.mp3");
                audio.play();
                setTimeout(() => {
                    $("#red").removeClass("lighten");
                }, 500);
                changeHeading(seq.length);

                break;
            case 2:
                $("#yellow").addClass("lighten");
                seq.push("y");
                var audio = new Audio("./sounds/yellow.mp3");
                audio.play();
                setTimeout(() => {
                    $("#yellow").removeClass("lighten");
                }, 500);
                changeHeading(seq.length);

                break;
            case 3:
                $("#blue").addClass("lighten");
                seq.push("b");
                var audio = new Audio("./sounds/blue.mp3");
                audio.play();
                setTimeout(() => {
                    $("#blue").removeClass("lighten");
                }, 500);
                changeHeading(seq.length);
                break;
    }
   
}

function playSound(){
    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
}

function changeHeading(s) {
    $("h1").text("Level " + s);
}

function lost(){
    $("h1").text("Game Over, Press Any Key to Restart");
    j = 0;
    removeAll();
    $(document).on("keydown", main);
    off = true;
}

function removeAll(){
    let len = seq.length;
    for (let v = 0; v < len; v++){
        seq.pop();
    }
}