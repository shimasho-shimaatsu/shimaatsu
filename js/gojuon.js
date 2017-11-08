// This is a JavaScript file

$(function() {
    var target = '#a';
    var aa;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
            
            aa = $.csv()(data);
            
            var a = document.getElementById("a");
            
           for(var x=1; x < 9; x++){
              
            a.innerHTML += "<br/><h4><a href='" + aa[x][7] + "'>" + aa[x][1] + "</a></h4>ジャンル：" + aa[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + aa[x][2] + "&dirflg=w'>"　+ aa[x][2] + "</a><br/>営業時間：" + aa[x][8] + "<br/>定休日：" + aa[x][9] + "<br/>電話番号：" + aa[x][3] + "<br/>" + aa[x][5] + "<br/><br/>";
            }
        }
    });
});


$(function() {
    var target = '#ka';
    var kk;
    var k;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
 
            // csvを配列に格納
            kk = $.csv()(data);
 
            // 挿入するHTMLを作成
            //insert=csvList[10][3];
            
            // 上書きパターン
             //$(target).html(insert);
            
            k = document.getElementById("ka");  
            
           // k.innerHTML = "<a href='" + kk[12][7] + "'>" + kk[12][1] + "</a>";
            
            for(var x=9; x < 17; x++){
              
            k.innerHTML += "<br/><h4><a href='" + kk[x][7] + "'>" + kk[x][1] + "</a></h4>ジャンル：" + kk[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr="+ kk[x][2] + "&dirflg=w'>"  + kk[x][2] + "</a><br/>営業時間：" + kk[x][8] + "<br/>定休日：" + kk[x][9] + "<br/>電話番号：" + kk[x][3] + "<br/>" + kk[x][5] + "<br/><br/>";
            }
        }
    });
});


$(function() {
    var target = '#sa';
    var ss;
    var s;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
 
            // csvを配列に格納
            ss = $.csv()(data);
 
            // 挿入するHTMLを作成
            //insert=csvList[10][3];
            
            // 上書きパターン
             //$(target).html(insert);
            
            s = document.getElementById("sa");  
            
           // k.innerHTML = "<a href='" + kk[12][7] + "'>" + kk[12][1] + "</a>";
            
            for(var a=17; a < 27; a++){
              
            s.innerHTML += "<br/><h4><a href='" + ss[a][7] + "'>" + ss[a][1] + "</a></h4>ジャンル：" + ss[a][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ss[a][2] + "&dirflg=w'>" + ss[a][2] + "</a><br/>営業時間：" + ss[a][8] + "<br/>定休日：" + ss[a][9] + "<br/>電話番号：" + ss[a][3] + "<br/>" + ss[a][5] + "<br/><br/>";
            }
        }
    });
});


$(function() {
    var target = '#ta';
    var tt;
    var t;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
 
            // csvを配列に格納
            tt = $.csv()(data);
 
            // 挿入するHTMLを作成
            //insert=csvList[10][3];
            
            // 上書きパターン
             //$(target).html(insert);
            
            t = document.getElementById("ta");  
            
           // k.innerHTML = "<a href='" + kk[12][7] + "'>" + kk[12][1] + "</a>";
            
            for(var a=27; a < 29; a++){
              
            t.innerHTML += "<br/><h4><a href='" + tt[a][7] + "'>" + tt[a][1] + "</a></h4>ジャンル：" + tt[a][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + tt[a][2] + "&dirflg=w'>"  + tt[a][2] + "</a><br/>営業時間：" + tt[a][8] + "<br/>定休日：" + tt[a][9] + "<br/>電話番号：" + tt[a][3] + "<br/>" + tt[a][5] + "<br/><br/>";
            }
        }
    });
});


$(function() {
    var target = '#na';
    var nn;
    var n;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
 
            // csvを配列に格納
            nn = $.csv()(data);
            
            n = document.getElementById("na");  
            
            for(var a=29; a < 32; a++){
              
            n.innerHTML += "<br/><h4><a href='" + nn[a][7] + "'>" + nn[a][1] + "</a></h4>ジャンル：" + nn[a][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + nn[a][2] + "&dirflg=w'>" + nn[a][2] + "</a><br/>営業時間：" + nn[a][8] + "<br/>定休日：" + nn[a][9] + "<br/>電話番号：" + nn[a][3] + "<br/>" + nn[a][5] + "<br/><br/>";
            }
        }
    });
});


$(function() {
    var target = '#ha';
    var hh;
    var h;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
 
            // csvを配列に格納
            hh = $.csv()(data);
            
            h = document.getElementById("ha");  
            
            for(var a=32; a < 37; a++){
              
            h.innerHTML += "<br/><h4><a href='" + hh[a][7] + "'>" + hh[a][1] + "</a></h4>ジャンル：" + hh[a][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + hh[a][2] + "&dirflg=w'>"  + hh[a][2] + "</a><br/>営業時間：" + hh[a][8] + "<br/>定休日：" + hh[a][9] + "<br/>電話番号：" + hh[a][3] + "<br/>" + hh[a][5] + "<br/><br/>";
            }
        }
    });
});


$(function() {
    var target = '#ma';
    var mm;
    var m;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
 
            // csvを配列に格納
            mm = $.csv()(data);
            
            m = document.getElementById("ma");  
            
            for(var a=37; a < 39; a++){
              
            m.innerHTML += "<br/><h4><a href='" + mm[a][7] + "'>" + mm[a][1] + "</a></h4>ジャンル：" + mm[a][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + mm[a][2] + "&dirflg=w'>"  + mm[a][2] + "</a><br/>営業時間：" + mm[a][8] + "<br/>定休日：" + mm[a][9] + "<br/>電話番号：" + mm[a][3] + "<br/>" + mm[a][5] + "<br/><br/>";
            }
        }
    });
});


// $(function() {
//     var target = '#ya';
//     var hh;
//     var h;
//     var insert = '';
//     $.ajax({
//         url: './data/gojuon.csv',
//         success: function(data) {
//  
//             // csvを配列に格納
//             hh = $.csv()(data);
//             
//             h = document.getElementById("ya");  
//             
//             for(var a=54; a < 56; a++){
//               
//             h.innerHTML += "<br/><h4><a href='" + hh[a][7] + "'>" + hh[a][1] + "</a></h4>ジャンル：" + hh[a][14] + "<br/>住所：" + hh[a][2] + "<br/>営業時間：" + hh[a][3] + "<br/>定休日：" + hh[a][4] + "<br/>電話番号：" + hh[a][6] + "<br/>" + hh[a][8] + "<br/><br/>";
//             }
//         }
//     });
// });


$(function() {
    var target = '#ra';
    var hh;
    var h;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
 
            // csvを配列に格納
            hh = $.csv()(data);
            
            h = document.getElementById("ra");  
            
            for(var a=39; a < 43; a++){
              
            h.innerHTML += "<br/><h4><a href='" + hh[a][7] + "'>" + hh[a][1] + "</a></h4>ジャンル：" + hh[a][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + hh[a][2] + "&dirflg=w'>"  + hh[a][2] + "</a><br/>営業時間：" + hh[a][3] + "<br/>定休日：" + hh[a][4] + "<br/>電話番号：" + hh[a][6] + "<br/>" + hh[a][8] + "<br/><br/>";
            }
        }
    });
});

$(function() {
    var target = '#wa';
    var ww;
    var w;
    var insert = '';
    $.ajax({
        url: './data/aiueo.csv',
        success: function(data) {
 
            // csvを配列に格納
            ww = $.csv()(data);
            
            w = document.getElementById("wa");  
            
            for(var a=43; a <= 44; a++){
              
            w.innerHTML += "<br/><h4><a href='" + ww[a][7] + "'>" + ww[a][1] + "</a></h4>ジャンル：" + ww[a][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ww[a][2] + "&dirflg=w'>"  + ww[a][2]  + "</a><br/>営業時間：" + ww[a][3] + "<br/>定休日：" + ww[a][4] + "<br/>電話番号：" + ww[a][6] + "<br/>" + ww[a][8] + "<br/><br/>";
            }
        }
    });
});

