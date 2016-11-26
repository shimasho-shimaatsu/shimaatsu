$(function(){
  var map=document.getElementById(map);

  var deflat = 34.830156;
  var deflng = 138.173407;

  //------------------------------------------------------------------------------------------------------位置情報取得処理

  //位置情報を取得
  function get_location() {
      if (navigator.geolocation) {
          // 現在の位置情報取得を実施 正常に位置情報が取得できると、successCallbackがコールバックされます。
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
          initMap(deflat, deflng);
      }
  }

  // ( 2 )位置情報が正常に取得されたら
  function successCallback(pos) {
      var Potition_latitude = pos.coords.latitude;
      var Potition_longitude = pos.coords.longitude;

      // 位置情報が取得出来たらGoogle Mapを表示する
      initMap(Potition_latitude, Potition_longitude);
  }

  function errorCallback(error) {
      initMap(deflat, deflng);
  }

  // ( 3 )Google Map API を使い、現在地マーカーを追加
  function initMap(x, y) {
      // Geolocationで取得した座標を代入
      var myLatLng = {
          lat: Number(x),
          lng: Number(y)
      };

      map = new google.maps.Marker({
        position:myLatLng,
        map:map,
        title:'now'
      });
  }

  // document.getElementById("visitlist").innerText="aaa";
});
