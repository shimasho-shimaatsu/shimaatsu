// function initMap() {
//       // Geolocation APIに対応している
//       if (navigator.geolocation) {
//         // 現在地を取得
//         navigator.geolocation.getCurrentPosition(
//           // 取得成功した場合
//           function(position) {
//             // 緯度・経度を変数に格納
//             var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//             // マップオプションを変数に格納
//             var mapOptions = {
//               zoom : 15,          // 拡大倍率
//               center : mapLatLng  // 緯度・経度
//             };
//             // マップオブジェクト作成
//             var map = new google.maps.Map(
//               document.getElementById("map"), // マップを表示する要素
//               mapOptions         // マップオプション
//             );
//             //　マップにマーカーを表示する
//             var marker = new google.maps.Marker({
//               map : map,             // 対象の地図オブジェクト
//               position : mapLatLng   // 緯度・経度
//             });
//           },
//           // 取得失敗した場合
//           function(error) {
//             // エラーメッセージを表示
//             switch(error.code) {
//               case 1: // PERMISSION_DENIED
//                 alert("位置情報の利用が許可されていません");
//                 break;
//               case 2: // POSITION_UNAVAILABLE
//                 alert("現在位置が取得できませんでした");
//                 break;
//               case 3: // TIMEOUT
//                 alert("タイムアウトになりました");
//                 break;
//               default:
//                 alert("その他のエラー(エラーコード:"+error.code+")");
//                 break;
//             }
//           }
//         );
//       // Geolocation APIに対応していない
//       } else {
//         alert("この端末では位置情報が取得できません");
//       }
// }

var ma;
var a;
var markerData;
var map;
var marker=[];
var here;
var infoWindow=[];
var mapLatLng;

$(function initMap() {
    $.ajax({
        url: './data/map.csv',
        success: function(data) {
            ma = $.csv()(data);
            
            markerData = [
                {name:ma[1][0],
                lat: 34.8518588,
                lng: 138.1753275,
                icon:'img/pin3.png'
                },
                {name:ma[2][0],
                lat: 34.8374023,
                lng: 138.1754439,
                icon:'img/pin3.png'
                },
                {name:ma[3][0],
                lat: 34.8347915,
                lng: 138.1729692,
                icon:'img/pin2.png'
                },
                {name:ma[4][0],
                lat: 34.8338333,
                lng: 138.1727053,
                icon:'img/pin5.png'
                },
                {name:ma[5][0],
                lat: 34.8332556,
                lng: 138.1728831,
                icon:'img/pin4.png'
                },
                {name:ma[6][0],
                lat: 34.8322335,
                lng: 138.1726526,
                icon:'img/pin1.png'
                },
                {name:ma[7][0],
                lat: 34.8326474,
                lng: 138.1722582,
                icon:'img/pin5.png'
                },
                {name:ma[8][0],
                lat: 34.8312809,
                lng: 138.1749217,
                icon:'img/pin2.png'
                },
                {name:ma[9][0],
                lat: 34.8313503,
                lng: 138.1749134,
                icon:'img/pin5.png'
                },
                {name:ma[10][0],
                lat: 34.8312892,
                lng: 138.1745107,
                icon:'img/pin5.png'
                },
                {name:ma[11][0],
                lat: 34.8320641,
                lng: 138.1748134,
                icon:'img/pin5.png'
                },
                {name:ma[12][0],
                lat: 34.8374023,
                lng: 138.1757522,
                icon:'img/pin3.png'
                },
                {name:ma[13][0],
                lat: 34.8330473,
                lng: 138.1761077,
                icon:'img/pin3.png'
                },
                {name:ma[14][0],
                lat: 34.8338444,
                lng: 138.17602443,
                icon:'img/pin2.png'
                },
                {name:ma[15][0],
                lat: 34.8324474,
                lng: 138.1771548,
                icon:'img/pin1.png'
                },
                {name:ma[16][0],
                lat: 34.8324474,
                lng: 138.1771548,
                icon:'img/pin2.png'
                },
                {name:ma[17][0],
                lat: 34.8322613,
                lng: 138.1791018,
                icon:'img/pin3.png'
                },
                {name:ma[18][0],
                lat: 34.8321919,
                lng: 138.1794851,
                icon:'img/pin4.png'
                },
                {name:ma[19][0],
                lat: 34.8321891,
                lng: 138.1803139,
                icon:'img/pin5.png'
                },
                {name:ma[20][0],
                lat: 34.8346055,
                lng: 138.1790407,
                icon:'img/pin4.png'
                },
                {name:ma[21][0],
                lat: 34.8352373,
                lng: 138.1776345,
                icon:'img/pin2.png'
                },
                {name:ma[22][0],
                lat: 34.8357164,
                lng: 138.2088849,
                icon:'img/pin2.png'
                },
                {name:ma[23][0],
                lat: 34.8354333,
                lng: 138.2279584,
                icon:'img/pin3.png'
                },
                {name:ma[24][0],
                lat: 34.8360943,
                lng: 138.2278945,
                icon:'img/pin5.png'
                },
                {name:ma[25][0],
                lat: 34.8372306,
                lng: 138.2355913,
                icon:'img/pin2.png'
                },
                {name:ma[26][0],
                lat: 34.9300835,
                lng: 138.0852025,
                icon:'img/pin4.png'
                },
                {name:ma[27][0],
                lat: 34.9424877,
                lng: 138.0757836,
                icon:'img/pin2.png'
                },
                {name:ma[28][0],
                lat: 34.9408657,
                lng: 138.0775335,
                icon:'img/pin4.png'
                },
                {name:ma[29][0],
                lat: 34.9353441,
                lng: 138.0669981,
                icon:'img/pin5.png'
                },
                {name:ma[30][0],
                lat: 34.944307,
                lng: 138.0757891,
                icon:'img/pin4.png'
                },
                {name:ma[31][0],
                lat: 34.8158022,
                lng: 138.2081656,
                icon:'img/pin4.png'
                },
                {name:ma[32][0],
                lat: 34.8132052,
                lng: 138.2161871,
                icon:'img/pin4.png'
                },
                {name:ma[33][0],
                lat: 34.8076892,
                lng: 138.2187785,
                icon:'img/pin4.png'
                },
                {name:ma[34][0],
                lat: 34.8046508,
                lng: 138.2229587,
                icon:'img/pin5.png'
                },
                {name:ma[35][0],
                lat: 34.8042036,
                lng: 138.2238837,
                icon:'img/pin5.png'
                },
                {name:ma[36][0],
                lat: 34.7947162,
                lng: 138.2338747,
                icon:'img/pin4.png'
                },
                {name:ma[37][0],
                lat: 34.801835,
                lng: 138.2436325,
                icon:'img/pin5.png'
                },
                {name:ma[38][0],
                lat: 34.8135351,
                lng: 138.1341098,
                icon:'img/pin2.png'
                },
                {name:ma[39][0],
                lat: 34.8261526,
                lng: 138.1370728,
                icon:'img/pin2.png'
                },
                {name:ma[40][0],
                lat: 34.8283935,
                lng: 138.1389531,
                icon:'img/pin5.png'
                },
                {name:ma[41][0],
                lat: 34.8308607,
                lng: 138.1290766,
                icon:'img/pin5.png'
                },
                {name:ma[42][0],
                lat: 34.8401013,
                lng: 138.133676,
                icon:'img/pin5.png'
                },
                {name:ma[43][0],
                lat: 34.8473418,
                lng: 138.1210574,
                icon:'img/pin4.png'
                },
                {name:ma[44][0],
                lat: 34.8568598,
                lng: 138.1149662,
                icon:'img/pin2.png'
                }
            ];
            
            
            if (navigator.geolocation) {
                // 現在地を取得
                    navigator.geolocation.getCurrentPosition(
                // 取得成功した場合
                function(position) {
                    // 緯度・経度を変数に格納
                    mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    a=1;
                    // // マップオブジェクト作成
                    // var map = new google.maps.Map(
                    //     document.getElementById("map"), // マップを表示する要素
                    //       mapOptions         // マップオプション
                    // );
                    // //　マップにマーカーを表示する
                    // var marker = new google.maps.Marker({
                    //   map : map,             // 対象の地図オブジェクト
                    //   position : mapLatLng   // 緯度・経度
                    // });
                    
                    map = new google.maps.Map(document.getElementById('map'), 
                    { // #sampleに地図を埋め込む
                        center: mapLatLng, // 地図の中心を指定
                        zoom: 16 // 地図のズームを指定
                    }
                    );
                    
                    //現在地表示
                    here = new google.maps.Marker({ // マーカーの追加
                            position: mapLatLng, // マーカーを立てる位置を指定
                            map: map ,// マーカーを立てる地図を指定
                            zIndex: 45,
                        });
                    var hukidasi = new google.maps.InfoWindow({ // 吹き出しの追加
                            content: '現在地' // 吹き出しに表示する内容
                        });
                    hukidasi.open(map,here);
                    
                    
                    for (var i = 0; i < 44; i++) {
                        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
                        marker[i] = new google.maps.Marker({ // マーカーの追加
                            position: markerLatLng, // マーカーを立てる位置を指定
                            map: map // マーカーを立てる地図を指定
                            //zIndex: 1,
                        });
                        marker[i].setOptions({
                            icon: {
                                url: markerData[i]['icon'],// マーカーの画像を変更
                                scaledSize: new google.maps.Size( 30, 30),
                            }
                        });
                        infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
                            content: markerData[i]['name'] + '<br/>' + '<a href="' + ma[i+1][2] + '">' + ma[i+1][2] + '</a><br/>営業時間：'+ ma[i+1][8] + '<br/>定休日：' + ma[i+1][9] + '<br/><a href="http://maps.google.com/maps?saddr=&daddr=' + ma[i+1][3] + '&dirflg=w">ルート検索</a>'// 吹き出しに表示する内容
                        });
                        markerEvent(i);
                    
                    }
              　},
                // 取得失敗した場合
                function(error) {
                    a=0;
                    // エラーメッセージを表示
                    switch(error.code) {
                        case 1: // PERMISSION_DENIED
                            alert("位置情報の利用が許可されていません");
                            break;
                        case 2: // POSITION_UNAVAILABLE
                            alert("現在位置が取得できませんでした");
                            break;
                        case 3: // TIMEOUT
                            alert("タイムアウトになりました");
                            break;
                        default:
                            alert("その他のエラー(エラーコード:"+error.code+")");
                            break;
                    }
                    
                    mapLatLng = new google.maps.LatLng(34.83, 138.17); // 緯度経度のデータ作成
                    map = new google.maps.Map(document.getElementById('map'), 
                    { // #sampleに地図を埋め込む
                        center: mapLatLng, // 地図の中心を指定
                        zoom: 14 ,// 地図のズームを指定
                    });
                    for (var i = 0; i < 44; i++) {
                        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
                        marker[i] = new google.maps.Marker({ // マーカーの追加
                            position: markerLatLng, // マーカーを立てる位置を指定
                            map: map // マーカーを立てる地図を指定
                            //zIndex: 1,
                        });
                        marker[i].setOptions({
                            icon: {
                                url: markerData[i]['icon'],// マーカーの画像を変更
                                scaledSize: new google.maps.Size( 30, 30),
                            }
                        });
                        infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
                            content: markerData[i]['name'] + '<br/>' + '<a href="' + ma[i+1][2] + '">' + ma[i+1][2] + '</a><br/>営業時間：'+ ma[i+1][8] + '<br/>定休日：' + ma[i+1][9] + '<br/><a href="http://maps.google.com/maps?saddr=&daddr="' + ma[i+1][3] + '&dirflg=w">ルート検索</a>'// 吹き出しに表示する内容
                        });
                        markerEvent(i);
                    
                    }
                    
                }
            );
            // Geolocation APIに対応していない
            } else {
                alert("この端末では位置情報が取得できません");
            }
            
            
            var u="";
            //geo = navigator.geolocation;
            // if(navigator.geolocation ){
            if(a==1){
            //     navigator.geolocation.watchPosition(
            //     function onSuccess( position ){
            //         mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // 緯度経度のデータ作成
                    //  map = new google.maps.Map(document.getElementById('map'), 
                    // { // #sampleに地図を埋め込む
                    //     center: mapLatLng, // 地図の中心を指定
                    //     zoom: 16 // 地図のズームを指定
                    // }
                    // );
                    // 
                    // //現在地表示
                    // here = new google.maps.Marker({ // マーカーの追加
                    //         position: mapLatLng, // マーカーを立てる位置を指定
                    //         map: map ,// マーカーを立てる地図を指定
                    //         zIndex: 45,
                    //     });
                    // var hukidasi = new google.maps.InfoWindow({ // 吹き出しの追加
                    //         content: '現在地' // 吹き出しに表示する内容
                    //     });
                    // hukidasi.open(map,here);
                     map += new google.maps.Map(document.getElementById('map'),{}); 
                    // for (var i = 0; i < 44; i++) {
                    //     markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
                    //     marker[i] = new google.maps.Marker({ // マーカーの追加
                    //         position: markerLatLng, // マーカーを立てる位置を指定
                    //         map: map // マーカーを立てる地図を指定
                    //         //zIndex: 1,
                    //     });
                    //     marker[i].setOptions({
                    //         icon: {
                    //             url: markerData[i]['icon'],// マーカーの画像を変更
                    //             scaledSize: new google.maps.Size( 30, 30),
                    //         }
                    //     });
                    //     infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
                    //         content: markerData[i]['name'] + '<br/>' + '<a href="' + ma[i+1][2] + '">' + ma[i+1][2] + '</a><br/>営業時間：'+ ma[i+1][8] + '<br/>定休日：' + ma[i+1][9] + '<br/><a href="http://maps.google.com/maps?saddr=&daddr="' + ma[i+1][3] + '&dirflg=w">ルート検索</a>'// 吹き出しに表示する内容
                    //     });
                    //     markerEvent(i); // マーカーにクリックイベントを追加
                        
                        
                        marker[i].setZIndex( i ) ;
                        hukidasi.setZIndex( 45 ) ;
                        
                    }
    //            }, 
            }
                
                // function onError(error){
                //     var errorMessage = {
                //         0: "原因不明のエラーが発生しました…。" ,
                //         1: "位置情報の取得が許可されませんでした…。" ,
                //         2: "電波状況などで位置情報が取得できませんでした…。" ,
                //         3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,};
                //     alert(errorMessage[error.code]);
                // if(a==0){
                //     //    document.getElementById("ten").innerHTML="ルート表示できません";
                //     mapLatLng = new google.maps.LatLng(34.83, 138.17); // 緯度経度のデータ作成
                //     map = new google.maps.Map(document.getElementById('map'), 
                //     { // #sampleに地図を埋め込む
                //         center: mapLatLng, // 地図の中心を指定
                //         zoom: 12 ,// 地図のズームを指定
                //     });
                //     
                //     for (var i = 0; i < 44; i++) {
                //         markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
                //         marker[i] = new google.maps.Marker({ // マーカーの追加
                //             position: markerLatLng, // マーカーを立てる位置を指定
                //             map: map // マーカーを立てる地図を指定
                //         });
                //         marker[i].setOptions({
                //             icon: {
                //                 url: markerData[i]['icon'],// マーカーの画像を変更
                //                 scaledSize: new google.maps.Size( 30, 30 ),
                //             }
                //         });
                //         infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
                //         content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
                //         });
                //         markerEvent(i); // マーカーにクリックイベントを追加
                //     }
                // }
    //        );
//            }
        
    });
});

//document.getElementById("map").innerHTML = a;
/*
var map;
var marker=[];
var infoWindow=[];
var markerData = [
     {name:a,
     lat: 34.974175,
     lng: 138.383249,
     icon:'icon/fassyon.png'
     }
    ];

function initMap() {
    // $.ajax({
    //     url: './data/map.csv',
    //     success: function(data) {
    //         ma = $.csv()(data);
    //     }
    // });
    
 // 地図の作成
    var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
    map = new google.maps.Map(document.getElementById('map'), 
    { // #sampleに地図を埋め込む
        center: mapLatLng, // 地図の中心を指定
        zoom: 15 ,// 地図のズームを指定
    });
    for (var i = 0; i < 6; i++) {
        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({ // マーカーの追加
        position: markerLatLng, // マーカーを立てる位置を指定
        map: map // マーカーを立てる地図を指定
        });
        infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
        content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
    });
    markerEvent(i); // マーカーにクリックイベントを追加
    }
}
*/



// マーカーにクリックイベントを追加
 function markerEvent(i) {
     marker[i].addListener('click', function(e) { // マーカーをクリックしたとき
        infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}