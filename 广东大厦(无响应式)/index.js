$(function () {
    //房间数量加减
    var n = 1;
    $(".add").click(function (e) {
        n++;
        $("input[type='text']").val(n+"间");
    });
    $(".sub").click(function (e) {
        n--;
        if(n<=0){
            n=1;
        }
        $("input[type='text']").val(n+"间");
    });
    
    //轮播图-stop
    let timer;
    let offset=0;
    function autoPlay(){
        timer = setInterval(()=>{
            offset += -15;
            if(offset<=-1485){
                offset=0;
            }
            $(".imgSrc").css('marginBottom',offset);
        });
    }
    autoPlay();
})
