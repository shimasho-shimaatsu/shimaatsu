// This is a JavaScript file

// $(function(){
//     var hhh = document.getElementById("ht");
//     var kab = new Array();
//     var jk = new Array();
//     var flg= new Array();
//     
//     //五十音
//     for(var g=1; g<45; g++){
//         if(localStorage.getItem("chec" + g + "_checked")==1){
//             kab[g] = localStorage.getItem("goju"+g);
//             hhh.innerHTML += localStorage.getItem("goju"+g) + "<br/>";
//         }
//     }
//     
//     hhh.innerHTML += "<br/><br/>";
//     
//     //ジャンル
//     for(var i=1; i<45; i++){
//         jk[i] = localStorage.getItem("janre"+i);
//         if(localStorage.getItem("heck" + i + "_checked") == 1){
//             for(var k=1; k<45; k++){
//                 if(localStorage.getItem("chec" + k + "_checked")==1){
//                     if(kab[k]==jk[i]){
//                         flg[i]=1;
//                     }else{
//                         flg[i]=0;
//                     }
//                 }
//             }
//             if(flg[i] == 0){
//                 hhh.innerHTML += localStorage.getItem("janre"+i) + "<br/>";
//             }
//         }
//     };
// });



$(function() {
    var lov;
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
            
            lov = $.csv()(data);
            
            var hhh = document.getElementById("ht");
            var kab = new Array();
            var jk = new Array();
            var flg= new Array();
            
            //五十音
            for(var g=1; g<45; g++){
                if(localStorage.getItem("chec" + g + "_checked")==1){
                    kab[g] = localStorage.getItem("goju"+g);
                    hhh.innerHTML += "<br/><h4>・" + localStorage.getItem("goju"+g) + "</h4><br/>　<a href='http://maps.google.com/maps?saddr=&daddr=" + lov[g][2] + "&dirflg=w'>ルート</a><br/>";
                }
            }
            
            hhh.innerHTML += "<br/><br/>";
    
            //ジャンル
            for(var i=1; i<45; i++){
                jk[i] = localStorage.getItem("janre"+i);
                flg[i]=0;
                if(localStorage.getItem("heck" + i + "_checked") == 1){
                    for(var k=1; k<45; k++){
                        if(localStorage.getItem("chec" + k + "_checked")==1){
                            if(kab[k]==jk[i]){
                                flg[i]=1;
                            }else{
                                flg[i]=0;
                            }
                        }
                    }
                    if(flg[i] == 0){
                        for(var t=1; t<45; t++){
                            if(jk[i]==lov[t][1]){
                                hhh.innerHTML += "<br/><h4>・" + localStorage.getItem("janre"+i) + "</h4><br/>　<a href='http://maps.google.com/maps?saddr=&daddr=" + lov[t][2] + "&dirflg=w'>ルート</a><br/>";
                            }
                        }
                    }
                }
            }
            
            hhh.innerHTML += "<br/><br/><br/><br/>";
            
        }
    });
});