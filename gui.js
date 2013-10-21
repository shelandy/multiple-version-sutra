$(document).ready(function(){
        $('#s1').change(function() {
            $.ajax({
                type:"post", 
                data:{
                    json: JSON.stringify({
                        a : '鳩摩羅什版',
                        b : '菩提流支版',
                        c : '真諦版',
                        d : '達摩笈多版'
                        e : '玄奘版',
                        f : '義淨版',
                    })
                },
                url:"/echo/json/",
                dataType:"json",
                success:function(j){
                    $('#s2,#s3').empty();
                    $.each(j,function(v,k){
                        $('#s2').append(new Option(k,v));
                    });
                }
            });
    });
            $('#s2').change(function() {
            $.ajax({
                type:"post", 
                data:{
                    json: JSON.stringify({
                        c : '版本 1',
                        d : '版本 2'        
                    })
                },
                url:"/echo/json/",
                dataType:"json",
                success:function(j){
                    $('#s3').empty();
                    $.each(j,function(v,k){
                        $('#s3').append(new Option(k,v));
                    });
                }
            });
    });
});
