$(function() {
    var cl;
    var u="";
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            
            cl = $.csv()(data);
            
            var c = document.getElementById("cloth");
            
            
if( navigator.geolocation ){
    navigator.geolocation.watchPosition(
    function onSuccess( position ){
        var lat=position.coords.latitude;
        var lng=position.coords.longitude;
        });}
            
           for(var x=1; x < 3; x++){
              if(cl[x][7]!=""){
            //h.innerHTML += "<br/><h4><a href='" + hh[a][7] + "'>" + hh[a][1] + "</a></h4>ジャンル：" + hh[a][14] + "<br/>住所：" + hh[a][2] + "<br/>営業時間：" + hh[a][3] + "<br/>定休日：" + hh[a][4] + "<br/>電話番号：" + hh[a][6] + "<br/>" + hh[a][8] + "<br/><br/>";
            c.innerHTML += "<br/><h4><a href='" + cl[x][7] + "'>" + cl[x][1] + "</a></h4>ジャンル：" + cl[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + cl[x][2] + "&dirflg=w'>" + cl[x][2] + "</a><br/>営業時間：" + cl[x][8] + "<br/>定休日：" + cl[x][9] + "<br/>電話番号：<a hlef='tel:" + cl[x][14] + "'>" + cl[x][3] + "</a><br/>" + cl[x][6] + "<br/><br/>";
              }
              else{
                  c.innerHTML += "<br/><h4>" + cl[x][1] + "</h4>ジャンル：" + cl[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + cl[x][2] + "&dirflg=w'>" + cl[x][2] + "</a><br/>営業時間：" + cl[x][8] + "<br/>定休日：" + cl[x][9] + "<br/>電話番号：<a hlef='tel:" + cl[x][14] + "'>" + cl[x][3] + "</a><br/>" + cl[x][6] + "<br/><br/>";
            
              }
            
           }
        }
    });
});

$(function() {
    var ea;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            
            ea = $.csv()(data);
            
            var e = document.getElementById("eat");
            
           for(var x=3; x < 14; x++){
               if(ea[x][7]!=""){
                e.innerHTML += "<br/><h4><a href='" + ea[x][7] + "'>" + ea[x][1] + "</a></h4>ジャンル：" + ea[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr="+ea[x][2]+"&dirflg=w'>" + ea[x][2]+ "</a><br/>営業時間：" + ea[x][8] + "<br/>定休日：" + ea[x][9] + "<br/>電話番号：<a hlef='tel:" + ea[x][14] + "'>" + ea[x][3] + "</a><br/>" + ea[x][6] + "<br/><br/>";
               }
               else{
                   e.innerHTML += "<br/><h4>" + ea[x][1] + "</h4>ジャンル：" + ea[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr="+ea[x][2]+"&dirflg=w'>" + ea[x][2]+ "</a><br/>営業時間：" + ea[x][8] + "<br/>定休日：" + ea[x][9] + "<br/>電話番号：<a hlef='tel:" + ea[x][14] + "'>" + ea[x][3] + "</a><br/>" + ea[x][6] + "<br/><br/>";
               }
            }
        }
    });
});


$(function() {
    var ma;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            
            ma = $.csv()(data);
            
            var m = document.getElementById("magazine");
            
           for(var x=14; x < 20; x++){
              if(ma[x][7]!=""){
            m.innerHTML += "<br/><h4><a href='" + ma[x][7] + "'>" + ma[x][1] + "</a></h4>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ma[x][2] + "&dirflg=w'>" + ma[x][2] + "</a><br/>営業時間：" + ma[x][8] + "<br/>定休日：" + ma[x][9] + "<br/>電話番号：<a hlef='tel:" + ma[x][14] + "'>" + ma[x][3] + "</a><br/>" + ma[x][6] + "<br/><br/>";
            }
            else{
                m.innerHTML += "<br/><h4>" + ma[x][1] + "</h4>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ma[x][2] + "&dirflg=w'>" + ma[x][2] + "</a><br/>営業時間：" + ma[x][8] + "<br/>定休日：" + ma[x][9] + "<br/>電話番号：<a hlef='tel:" + ma[x][14] + "'>" + ma[x][3] + "</a><br/>" + ma[x][6] + "<br/><br/>";
            }
           }
        }
    });
});

$(function() {
    var fo;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            
            fo = $.csv()(data);
            
            var f = document.getElementById("food");
            
           for(var x=20; x < 31; x++){
              if(fo[x][7]!=""){
            f.innerHTML += "<br/><h4><a href='" + fo[x][7] + "'>" + fo[x][1] + "</a></h4>ジャンル：" + fo[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + fo[x][2] + "&dirflg=w'>" + fo[x][2] + "</a><br/>営業時間：" + fo[x][8] + "<br/>定休日：" + fo[x][9] + "<br/>電話番号：<a hlef='tel:" + fo[x][14] + "'>" + fo[x][3] + "</a><br/>" + fo[x][6] + "<br/><br/>";
            }
            else{
            f.innerHTML += "<br/><h4>" + fo[x][1] + "</h4>ジャンル：" + fo[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + fo[x][2] + "&dirflg=w'>" + fo[x][2] + "</a><br/>営業時間：" + fo[x][8] + "<br/>定休日：" + fo[x][9] + "<br/>電話番号：<a hlef='tel:" + fo[x][14] + "'>" + fo[x][3] + "</a><br/>" + fo[x][6] + "<br/><br/>";
            }
           }
        }
    });
});

$(function() {
    var aa;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            
            aa = $.csv()(data);
            
            var a = document.getElementById("a");
            
           for(var x=31; x <= 44; x++){
              if(aa[x][7]!=""){
            a.innerHTML += "<br/><h4><a href='" + aa[x][7] + "'>" + aa[x][1] + "</a></h4>ジャンル：" + aa[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + aa[x][2] + "&dirflg=w'>" + aa[x][2] + "</a><br/>営業時間：" + aa[x][8] + "<br/>定休日：" + aa[x][9] + "<br/>電話番号：<a hlef='tel:" + aa[x][14] + "'>" + aa[x][3] + "</a><br/>" + aa[x][6] + "<br/><br/>";
            }
            else{
                a.innerHTML += "<br/><h4>" + aa[x][1] + "</h4>ジャンル：" + aa[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + aa[x][2] + "&dirflg=w'>" + aa[x][2] + "</a><br/>営業時間：" + aa[x][8] + "<br/>定休日：" + aa[x][9] + "<br/>電話番号：<a hlef='tel:" + aa[x][14] + "'>" + aa[x][3] + "</a><br/>" + aa[x][6] + "<br/><br/>";
            }
           }
        }
    });
});