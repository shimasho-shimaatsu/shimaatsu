//空の配列宣言
var neighborhoods = [];
//var placename=[" "];

//CSVファイルの読み込み	
$(function() {
  var csvList;
  $.ajax({
    url: './data/shimaatudata.csv',
    success: function(data) {
    
      // csvを配列に格納
      csvList = $.csv()(data);
      
      // データを別配列に格納
      for (var i = 1; i < csvList.length-1; i++) {
        neighborhoods.push(new google.maps.LatLng(csvList[i][8],csvList[i][9]));
        //placename.push('"'+csvList[i][0]+'"');
      };
    }
  });
});

//マーカー用配列
var markers=[];


//GPSデータの取得

var message;
var map;

      // 位置情報取得
      function start_func(){
        get_location();       
      }
 
      // ( 1 )位置情報を取得します。
      function get_location(){
        document.getElementById("area_name").innerHTML
              = '位置情報取得します';
          if (navigator.geolocation) {
              // 現在の位置情報取得を実施 正常に位置情報が取得できると、
              // successCallbackがコールバックされます。
              navigator.geolocation.getCurrentPosition
               (successCallback,errorCallback);
          } else {
                message = "本ブラウザではGeolocationが使えません";
                document.getElementById("area_name").innerHTML
                      = message;
          }
      }
       // ( 2 )位置情報が正常に取得されたら
       function successCallback(pos) {
          var Potition_latitude = pos.coords.latitude;
          var Potition_longitude = pos.coords.longitude;
 
           // 位置情報が取得出来たらGoogle Mapを表示する
           initialize(Potition_latitude,Potition_longitude);
        }
 
      function errorCallback(error) {
        message = "位置情報が許可されていません";
       document.getElementById("area_name").innerHTML = message;
      }
 
      // ( 3 )Google Map API を使い、地図を読み込み
      function initialize(x,y) {
        document.getElementById("area_name").innerHTML
            = 'google map情報を取得中';
 
       // Geolocationで取得した座標を代入
        var myLatlng = new google.maps.LatLng(x,y);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
        }
        map = new google.maps.Map
           (document.getElementById("map"), mapOptions);
 
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Your position"
        });
         get_area_name(myLatlng);
      }
 



//複数マーカーを表示
function drop() {
  for (var i = 0; i < neighborhoods.length-1; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 100);
  }
}

//マーカーアニメーション制御
function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}

/* 複数マーカーに吹き出し
for (var i = 0; i < markers.length; i++) {
    markers[i].addListener('click', function() {
      placeinfowindow.open(map, markers[i]);
    });

    var html="<p>"+placename[i]+"</p>";
    var placeinfowindow = new google.maps.InfoWindow({
      content: html
    });
}
*/
