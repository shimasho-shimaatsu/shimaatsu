

//お気に入りを管理するlocalStorage用変数
var at1=0,at2=0,at3=0,at4=0,at5=0,at6=0,at7=0,at8=0,at9=0,at10=0;
var at11=0,at12=0,at13=0,at14=0,at15=0,at16=0,at17=0,at18=0,at19=0,at20=0;
var at21,at22,at23,at24,at25,at26,at27,at28,at29,at30;
var at31,at32,at33,at34,at35,at36,at37,at38,at39,at40;
var at41,at42,at43,at44,at45,at46,at47,at48,at49,at50;
var at51,at52,at53,at54,at55,at56;


//ハートがタップされたら（お気に入り）
function te1(at1){
    at1=localStorage.getItem("heck1_checked");  //取得したlocalStorageの値をat1へ
    if(at1==1){ //at1=1だったら（すでにお気に入り登録されていたら）
        at1=0;
        document.getElementById('check1').src='img/wht.png';    //ハートを白抜きにする
    }
    else{   //お気に入り登録されていなかったら
        at1=1;
        document.getElementById('check1').src='img/wht2.png';   //ハートに色をつける
    }
    localStorage.setItem("heck1_checked",at1);  //localStorageに変更した値を保存
}
function te2(at2){
    at2=localStorage.getItem("heck2_checked");
    if(at2==1){
        at2=0;
        document.getElementById('check2').src='img/wht.png';
    }
    else{
        at2=1;
        document.getElementById('check2').src='img/wht2.png';
    }
    localStorage.setItem("heck2_checked",at2);
}
function te3(at3){
    at3=localStorage.getItem("heck3_checked");
    if(at3==1){
        at3=0;
        document.getElementById('check3').src='img/wht.png';
    }
    else{
        at3=1;
        document.getElementById('check3').src='img/wht2.png';
    }
    localStorage.setItem("heck3_checked",at3);
}
function te4(at4){
    at4=localStorage.getItem("heck4_checked");
    if(at4==1){
        at4=0;
        document.getElementById('check4').src='img/wht.png';
    }
    else{
        at4=1;
        document.getElementById('check4').src='img/wht2.png';
    }
    localStorage.setItem("heck4_checked",at4);
}
function te5(at5){
    at5=localStorage.getItem("heck5_checked");
    if(at5==1){
        at5=0;
        document.getElementById('check5').src='img/wht.png';
    }
    else{
        at5=1;
        document.getElementById('check5').src='img/wht2.png';
    }
    localStorage.setItem("heck5_checked",at5);
}
function te6(at6){
    at6=localStorage.getItem("heck6_checked");
    if(at6==1){
        at6=0;
        document.getElementById('check6').src='img/wht.png';
    }
    else{
        at6=1;
        document.getElementById('check6').src='img/wht2.png';
    }
    localStorage.setItem("heck6_checked",at6);
}
function te7(at7){
    at7=localStorage.getItem("heck7_checked");
    if(at7==1){
        at7=0;
        document.getElementById('check7').src='img/wht.png';
    }
    else{
        at7=1;
        document.getElementById('check7').src='img/wht2.png';
    }
    localStorage.setItem("heck7_checked",at7);
}
function te8(at8){
    at8=localStorage.getItem("heck8_checked");
    if(at8==1){
        at8=0;
        document.getElementById('check8').src='img/wht.png';
    }
    else{
        at8=1;
        document.getElementById('check8').src='img/wht2.png';
    }
    localStorage.setItem("heck8_checked",at8);
}
function te9(at9){
    at9=localStorage.getItem("heck9_checked");
    if(at9==1){
        at9=0;
        document.getElementById('check9').src='img/wht.png';
    }
    else{
        at9=1;
        document.getElementById('check9').src='img/wht2.png';
    }
    localStorage.setItem("heck9_checked",at9);
}
function te10(at10){
    at10=localStorage.getItem("heck10_checked");
    if(at10==1){
        at10=0;
        document.getElementById('check10').src='img/wht.png';
    }
    else{
        at10=1;
        document.getElementById('check10').src='img/wht2.png';
    }
    localStorage.setItem("heck10_checked",at10);
}
function te11(at11){
    at11=localStorage.getItem("heck11_checked");
    if(at11==1){
        at11=0;
        document.getElementById('check11').src='img/wht.png';
    }
    else{
        at11=1;
        document.getElementById('check11').src='img/wht2.png';
    }
    localStorage.setItem("heck11_checked",at11);
}
function te12(at12){
    at12=localStorage.getItem("heck12_checked");
    if(at12==1){
        at12=0;
        document.getElementById('check12').src='img/wht.png';
    }
    else{
        at12=1;
        document.getElementById('check12').src='img/wht2.png';
    }
    localStorage.setItem("heck12_checked",at12);
}
function te13(at13){
    at13=localStorage.getItem("heck13_checked");
    if(at13==1){
        at13=0;
        document.getElementById('check13').src='img/wht.png';
    }
    else{
        at13=1;
        document.getElementById('check13').src='img/wht2.png';
    }
    localStorage.setItem("heck13_checked",at13);
}
function te14(at14){
    at14=localStorage.getItem("heck14_checked");
    if(at14==1){
        at14=0;
        document.getElementById('check14').src='img/wht.png';
    }
    else{
        at14=1;
        document.getElementById('check14').src='img/wht2.png';
    }
    localStorage.setItem("heck14_checked",at14);
}
function te15(at15){
    at15=localStorage.getItem("heck15_checked");
    if(at15==1){
        at15=0;
        document.getElementById('check15').src='img/wht.png';
    }
    else{
        at15=1;
        document.getElementById('check15').src='img/wht2.png';
    }
    localStorage.setItem("heck15_checked",at15);
}
function te16(at16){
    at16=localStorage.getItem("heck16_checked");
    if(at16==1){
        at16=0;
        document.getElementById('check16').src='img/wht.png';
    }
    else{
        at16=1;
        document.getElementById('check16').src='img/wht2.png';
    }
    localStorage.setItem("heck16_checked",at16);
}
function te17(at17){
    at17=localStorage.getItem("heck17_checked");
    if(at17==1){
        at17=0;
        document.getElementById('check17').src='img/wht.png';
    }
    else{
        at17=1;
        document.getElementById('check17').src='img/wht2.png';
    }
    localStorage.setItem("heck17_checked",at17);
}
function te18(at18){
    at18=localStorage.getItem("heck18_checked");
    if(at18==1){
        at18=0;
        document.getElementById('check18').src='img/wht.png';
    }
    else{
        at18=1;
        document.getElementById('check18').src='img/wht2.png';
    }
    localStorage.setItem("heck18_checked",at18);
}
function te19(at19){
    at19=localStorage.getItem("heck19_checked");
    if(at19==1){
        at19=0;
        document.getElementById('check19').src='img/wht.png';
    }
    else{
        at19=1;
        document.getElementById('check19').src='img/wht2.png';
    }
    localStorage.setItem("heck19_checked",at19);
}
function te20(at20){
    at20=localStorage.getItem("heck20_checked");
    if(at20==1){
        at20=0;
        document.getElementById('check20').src='img/wht.png';
    }
    else{
        at20=1;
        document.getElementById('check20').src='img/wht2.png';
    }
    localStorage.setItem("heck20_checked",at20);
}
function te21(at21){
    at21=localStorage.getItem("heck21_checked");
    if(at21==1){
        at21=0;
        document.getElementById('check21').src='img/wht.png';
    }
    else{
        at21=1;
        document.getElementById('check21').src='img/wht2.png';
    }
    localStorage.setItem("heck21_checked",at21);
}
function te22(at22){
    at22=localStorage.getItem("heck22_checked");
    if(at22==1){
        at22=0;
        document.getElementById('check22').src='img/wht.png';
    }
    else{
        at22=1;
        document.getElementById('check22').src='img/wht2.png';
    }
    localStorage.setItem("heck22_checked",at22);
}
function te23(at23){
    at23=localStorage.getItem("heck23_checked");
    if(at23==1){
        at23=0;
        document.getElementById('check23').src='img/wht.png';
    }
    else{
        at23=1;
        document.getElementById('check23').src='img/wht2.png';
    }
    localStorage.setItem("heck23_checked",at23);
}
function te24(at24){
    at24=localStorage.getItem("heck24_checked");
    if(at24==1){
        at24=0;
        document.getElementById('check24').src='img/wht.png';
    }
    else{
        at24=1;
        document.getElementById('check24').src='img/wht2.png';
    }
    localStorage.setItem("heck24_checked",at24);
}
function te25(at25){
    at25=localStorage.getItem("heck25_checked");
    if(at25==1){
        at25=0;
        document.getElementById('check25').src='img/wht.png';
    }
    else{
        at25=1;
        document.getElementById('check25').src='img/wht2.png';
    }
    localStorage.setItem("heck25_checked",at25);
}
function te26(at26){
    at26=localStorage.getItem("heck26_checked");
    if(at26==1){
        at26=0;
        document.getElementById('check26').src='img/wht.png';
    }
    else{
        at26=1;
        document.getElementById('check26').src='img/wht2.png';
    }
    localStorage.setItem("heck26_checked",at26);
}
function te27(at27){
    at27=localStorage.getItem("heck27_checked");
    if(at27==1){
        at27=0;
        document.getElementById('check27').src='img/wht.png';
    }
    else{
        at27=1;
        document.getElementById('check27').src='img/wht2.png';
    }
    localStorage.setItem("heck27_checked",at27);
}
function te28(at28){
    at28=localStorage.getItem("heck28_checked");
    if(at28==1){
        at28=0;
        document.getElementById('check28').src='img/wht.png';
    }
    else{
        at28=1;
        document.getElementById('check28').src='img/wht2.png';
    }
    localStorage.setItem("heck28_checked",at28);
}
function te29(at29){
    at29=localStorage.getItem("heck29_checked");
    if(at29==1){
        at29=0;
        document.getElementById('check29').src='img/wht.png';
    }
    else{
        at29=1;
        document.getElementById('check29').src='img/wht2.png';
    }
    localStorage.setItem("heck29_checked",at29);
}
function te30(at30){
    at30=localStorage.getItem("heck30_checked");
    if(at30==1){
        at30=0;
        document.getElementById('check30').src='img/wht.png';
    }
    else{
        at30=1;
        document.getElementById('check30').src='img/wht2.png';
    }
    localStorage.setItem("heck30_checked",at30);
}
function te31(at31){
    at31=localStorage.getItem("heck31_checked");
    if(at31==1){
        at31=0;
        document.getElementById('check31').src='img/wht.png';
    }
    else{
        at31=1;
        document.getElementById('check31').src='img/wht2.png';
    }
    localStorage.setItem("heck31_checked",at31);
}
function te32(at32){
    at32=localStorage.getItem("heck32_checked");
    if(at32==1){
        at32=0;
        document.getElementById('check32').src='img/wht.png';
    }
    else{
        at32=1;
        document.getElementById('check32').src='img/wht2.png';
    }
    localStorage.setItem("heck32_checked",at32);
}
function te33(at33){
    at33=localStorage.getItem("heck33_checked");
    if(at33==1){
        at33=0;
        document.getElementById('check33').src='img/wht.png';
    }
    else{
        at33=1;
        document.getElementById('check33').src='img/wht2.png';
    }
    localStorage.setItem("heck33_checked",at33);
}
function te34(at34){
    at34=localStorage.getItem("heck34_checked");
    if(at34==1){
        at34=0;
        document.getElementById('check34').src='img/wht.png';
    }
    else{
        at34=1;
        document.getElementById('check34').src='img/wht2.png';
    }
    localStorage.setItem("heck34_checked",at34);
}
function te35(at35){
    at35=localStorage.getItem("heck35_checked");
    if(at35==1){
        at35=0;
        document.getElementById('check35').src='img/wht.png';
    }
    else{
        at35=1;
        document.getElementById('check35').src='img/wht2.png';
    }
    localStorage.setItem("heck35_checked",at35);
}
function te36(at36){
    at36=localStorage.getItem("heck36_checked");
    if(at36==1){
        at36=0;
        document.getElementById('check36').src='img/wht.png';
    }
    else{
        at36=1;
        document.getElementById('check36').src='img/wht2.png';
    }
    localStorage.setItem("heck36_checked",at36);
}
function te37(at37){
    at37=localStorage.getItem("heck37_checked");
    if(at37==1){
        at37=0;
        document.getElementById('check37').src='img/wht.png';
    }
    else{
        at37=1;
        document.getElementById('check37').src='img/wht2.png';
    }
    localStorage.setItem("heck37_checked",at37);
}
function te38(at38){
    at38=localStorage.getItem("heck38_checked");
    if(at38==1){
        at38=0;
        document.getElementById('check38').src='img/wht.png';
    }
    else{
        at38=1;
        document.getElementById('check38').src='img/wht2.png';
    }
    localStorage.setItem("heck38_checked",at38);
}
function te39(at39){
    at39=localStorage.getItem("heck39_checked");
    if(at39==1){
        at39=0;
        document.getElementById('check39').src='img/wht.png';
    }
    else{
        at39=1;
        document.getElementById('check39').src='img/wht2.png';
    }
    localStorage.setItem("heck39_checked",at39);
}
function te40(at40){
    at40=localStorage.getItem("heck40_checked");
    if(at40==1){
        at40=0;
        document.getElementById('check40').src='img/wht.png';
    }
    else{
        at40=1;
        document.getElementById('check40').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at40);
}
function te41(at41){
    at41=localStorage.getItem("heck41_checked");
    if(at40==1){
        at41=0;
        document.getElementById('check41').src='img/wht.png';
    }
    else{
        at41=1;
        document.getElementById('check41').src='img/wht2.png';
    }
    localStorage.setItem("heck41_checked",at41);
}
function te42(at42){
    at42=localStorage.getItem("heck42_checked");
    if(at42==1){
        at42=0;
        document.getElementById('check42').src='img/wht.png';
    }
    else{
        at42=1;
        document.getElementById('check42').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at42);
}
function te43(at43){
    at43=localStorage.getItem("heck43_checked");
    if(at43==1){
        at43=0;
        document.getElementById('check43').src='img/wht.png';
    }
    else{
        at43=1;
        document.getElementById('check43').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at43);
}
function te44(at44){
    at44=localStorage.getItem("heck44_checked");
    if(at44==1){
        at44=0;
        document.getElementById('check44').src='img/wht.png';
    }
    else{
        at44=1;
        document.getElementById('check44').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at44);
}
function te45(at45){
    at45=localStorage.getItem("heck45_checked");
    if(at45==1){
        at45=0;
        document.getElementById('check45').src='img/wht.png';
    }
    else{
        at45=1;
        document.getElementById('check45').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at45);
}
function te46(at46){
    at46=localStorage.getItem("heck46_checked");
    if(at46==1){
        at46=0;
        document.getElementById('check46').src='img/wht.png';
    }
    else{
        at46=1;
        document.getElementById('check46').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at46);
}
function te47(at47){
    at47=localStorage.getItem("heck47_checked");
    if(at47==1){
        at47=0;
        document.getElementById('check47').src='img/wht.png';
    }
    else{
        at47=1;
        document.getElementById('check47').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at47);
}
function te48(at48){
    at48=localStorage.getItem("heck48_checked");
    if(at48==1){
        at48=0;
        document.getElementById('check48').src='img/wht.png';
    }
    else{
        at48=1;
        document.getElementById('check48').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at48);
}
function te49(at49){
    at49=localStorage.getItem("heck49_checked");
    if(at49==1){
        at49=0;
        document.getElementById('check49').src='img/wht.png';
    }
    else{
        at49=1;
        document.getElementById('check49').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at49);
}
function te50(at50){
    at50=localStorage.getItem("heck50_checked");
    if(at50==1){
        at50=0;
        document.getElementById('check50').src='img/wht.png';
    }
    else{
        at50=1;
        document.getElementById('check50').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at50);
}
function te51(at51){
    at51=localStorage.getItem("heck51_checked");
    if(at51==1){
        at51=0;
        document.getElementById('check51').src='img/wht.png';
    }
    else{
        at51=1;
        document.getElementById('check51').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at51);
}
function te52(at52){
    at52=localStorage.getItem("heck52_checked");
    if(at52==1){
        at52=0;
        document.getElementById('check52').src='img/wht.png';
    }
    else{
        at52=1;
        document.getElementById('check52').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at52);
}
function te53(at53){
    at53=localStorage.getItem("heck53_checked");
    if(at53==1){
        at53=0;
        document.getElementById('check53').src='img/wht.png';
    }
    else{
        at53=1;
        document.getElementById('check53').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at53);
}
function te54(at54){
    at54=localStorage.getItem("heck54_checked");
    if(at54==1){
        at54=0;
        document.getElementById('check54').src='img/wht.png';
    }
    else{
        at54=1;
        document.getElementById('check54').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at54);
}
function te55(at55){
    at55=localStorage.getItem("heck55_checked");
    if(at55==1){
        at55=0;
        document.getElementById('check55').src='img/wht.png';
    }
    else{
        at55=1;
        document.getElementById('check55').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at55);
}
function te56(at56){
    at56=localStorage.getItem("heck56_checked");
    if(at56==1){
        at56=0;
        document.getElementById('check56').src='img/wht.png';
    }
    else{
        at56=1;
        document.getElementById('check56').src='img/wht2.png';
    }
    localStorage.setItem("heck40_checked",at56);
}
//----------------------------------------------------------------------
//多分ローカルストレージのハートのON/OFFを管理しているFunction
//しかし、手作業で増やしているため今後改変が必要
//現状では、下記のコードをコピーして、検索「@@@@」置換「数字」を行うことで簡略化
// function te@@@@(at@@@@){
//     at@@@@=localStorage.getItem("heck@@@@_checked");
//     if(at@@@@==1){
//         at@@@@=0;
//         document.getElementById('check@@@@').src='img/wht.png';
//     }
//     else{
//         at@@@@=1;
//         document.getElementById('check@@@@').src='img/wht2.png';
//     }
//     localStorage.setItem("heck40_checked",at@@@@);
// }
//----------------------------------------------------------------------


//devicereadyイベント
if(typeof device === 'undefined'){
    document.addEventListener("deviceready", onDeviceReady, false);
}else{
    onDeviceReady();
}
function onDeviceReady() {
    //alert('これは常に呼ばれるし、ちゃんと deviceready な状態');
    console.log("PhoneGap is ready");
}

//配列
var cc = new Array();
if(at1==""){
    at1 = 0;
}
$(function() {
for(var i=1;i < 57;i++){
	cc[i] = new Array();
    }
});

//衣類
$(function() {
    var cl;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            cl = $.csv()(data);
            var c = document.getElementById("cloth");
            
            for(var x=1; x < 2; x++){
                if(cl[x][7]!=""){
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                        c.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + cl[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + cl[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + cl[x][2] + "&dirflg=w'>" + cl[x][2] + "</a><br/>営業時間：" + cl[x][9] + "<br/>定休日：" + cl[x][10] + "<br/>電話番号：<a hlef='tel:" + cl[x][3] + "'>" + cl[x][3] + "</a><br/>" + cl[x][6]+ "</a><br/>サービス内容<br/>" + cl[x][5]+ "<br/><br/>";
                    }
                    else{
                        c.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + cl[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + cl[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + cl[x][2] + "&dirflg=w'>" + cl[x][2] + "</a><br/>営業時間：" + cl[x][9] + "<br/>定休日：" + cl[x][10] + "<br/>電話番号：<a hlef='tel:" + cl[x][3] + "'>" + cl[x][3] + "</a><br/>" + cl[x][6] + "</a><br/>サービス内容<br/>" + cl[x][5]+ "<br/><br/>";
                    }
                }
                else{
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                        c.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + cl[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + cl[x][2] + "&dirflg=w'>" + cl[x][2] + "</a><br/>営業時間：" + cl[x][9] + "<br/>定休日：" + cl[x][10] + "<br/>電話番号：<a hlef='tel:" + cl[x][3] + "'>" + cl[x][3] + "</a><br/>" + cl[x][6] + "<br/>"+  cl[x][6] + "</a><br/>サービス内容<br/>" + cl[x][5]+ "<br/><br/>";
                    }
                    else{
                        c.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + cl[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + cl[x][2] + "&dirflg=w'>" + cl[x][2] + "</a><br/>営業時間：" + cl[x][9] + "<br/>定休日：" + cl[x][10] + "<br/>電話番号：<a hlef='tel:" + cl[x][3] + "'>" + cl[x][3] + "</a><br/>" + cl[x][6] + "<br/>"+  cl[x][6] + "</a><br/>サービス内容<br/>" + cl[x][5]+ "<br/><br/>";
                    }
                }
                $(".h4"+x).css({"float": "left","marginLeft":"0%"});
                $("#no"+x).css({"clear": "both"});
            
                //ローカルストレージ（チェックボックス）
                localStorage.setItem("janre"+x,cl[x][1]);
                cc[x][0] = localStorage.getItem("janre"+x);
                cc[x][1] = localStorage.getItem("heck" + x + "_checked");
           }
        }
    });
});

//飲食
$(function() {
    var ea;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            ea = $.csv()(data);
            var e = document.getElementById("eat");
            
            for(var x=2; x < 18; x++){
                if(ea[x][7]!=""){
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                         e.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" +ea[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + ea[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ea[x][2] + "&dirflg=w'>" + ea[x][2] + "</a><br/>営業時間：" + ea[x][9] + "<br/>定休日：" + ea[x][10] + "<br/>電話番号：<a hlef='tel:" + ea[x][3] + "'>" + ea[x][3] + "</a><br/>" + ea[x][6]+ "</a><br/>サービス内容<br/>" + ea[x][5]+ "<br/><br/>";
                    }
                    else{
                         e.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + ea[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + ea[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ea[x][2] + "&dirflg=w'>" + ea[x][2] + "</a><br/>営業時間：" + ea[x][9] + "<br/>定休日：" + ea[x][10] + "<br/>電話番号：<a hlef='tel:" + ea[x][3] + "'>" + ea[x][3] + "</a><br/>" + ea[x][6]+ "</a><br/>サービス内容<br/>" + ea[x][5]+ "<br/><br/>";
                    }
                }
                else{
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                       e.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + ea[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ea[x][2] + "&dirflg=w'>" + ea[x][2] + "</a><br/>営業時間：" + ea[x][9] + "<br/>定休日：" + ea[x][10] + "<br/>電話番号：<a hlef='tel:" + ea[x][3] + "'>" + ea[x][3] + "</a><br/>" + ea[x][6] + "<br/>"+  ea[x][6] + "</a><br/>サービス内容<br/>" + ea[x][5]+ "<br/><br/>";
                    }
                    else{
                        e.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + ea[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ea[x][2] + "&dirflg=w'>" + ea[x][2] + "</a><br/>営業時間：" + ea[x][9] + "<br/>定休日：" + ea[x][10] + "<br/>電話番号：<a hlef='tel:" + ea[x][3] + "'>" + ea[x][3] + "</a><br/>" + ea[x][6] + "<br/>"+  ea[x][6] + "</a><br/>サービス内容<br/>" + ea[x][5]+ "<br/><br/>";
                    }
                }
                $(".h4"+x).css({"float": "left","marginLeft":"0%"});
                $("#no"+x).css({"clear": "both"});
            
                //ローカルストレージ（チェックボックス）
                localStorage.setItem("janre"+x,ea[x][1]);
                cc[x][0] = localStorage.getItem("janre"+x);
                cc[x][1] = localStorage.getItem("heck" + x + "_checked");
           }
        }
    });
});

//雑貨
$(function() {
    var ma;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            ma = $.csv()(data);
            var m = document.getElementById("magazine");
            
            for(var x=18; x < 24; x++){
                if(ma[x][7]!=""){
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                        m.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + ma[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ma[x][2] + "&dirflg=w'>" + ma[x][2] + "</a><br/>営業時間：" + ma[x][9] + "<br/>定休日：" + ma[x][10] + "<br/>電話番号：<a hlef='tel:" + ma[x][3] + "'>" + ma[x][3] + "</a><br/>" + ma[x][6]+ "</a><br/>サービス内容<br/>" + ma[x][5]+ "<br/><br/>";
                    }
                    else{
                        m.innerHTML +=  "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + ma[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ma[x][2] + "&dirflg=w'>" + ma[x][2] + "</a><br/>営業時間：" + ma[x][9] + "<br/>定休日：" + ma[x][10] + "<br/>電話番号：<a hlef='tel:" + ma[x][3] + "'>" + ma[x][3] + "</a><br/>" + ma[x][6]+ "</a><br/>サービス内容<br/>" + ma[x][5]+ "<br/><br/>";
                    }
                }
                else{
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                        m.innerHTML +=  "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + ma[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ma[x][2] + "&dirflg=w'>" + ma[x][2] + "</a><br/>営業時間：" + ma[x][9] + "<br/>定休日：" + ma[x][10] + "<br/>電話番号：<a hlef='tel:" + ma[x][3] + "'>" + ma[x][3] + "</a><br/>" + ma[x][6] + "<br/>"+  ma[x][6] + "</a><br/>サービス内容<br/>" + ma[x][5]+ "<br/><br/>";
                    }
                    else{
                        m.innerHTML +=  "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + ma[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + ma[x][2] + "&dirflg=w'>" + ma[x][2] + "</a><br/>営業時間：" + ma[x][9] + "<br/>定休日：" + ma[x][10] + "<br/>電話番号：<a hlef='tel:" + ma[x][3] + "'>" + ma[x][3] + "</a><br/>" + ma[x][6] + "<br/>"+  ma[x][6] + "</a><br/>サービス内容<br/>" + ma[x][5]+ "<br/><br/>";
                    }
                }
                $(".h4"+x).css({"float": "left","marginLeft":"0%"});
                $("#no"+x).css({"clear": "both"});
            
                //ローカルストレージ（チェックボックス）
                localStorage.setItem("janre"+x,ma[x][1]);
                cc[x][0] = localStorage.getItem("janre"+x);
                cc[x][1] = localStorage.getItem("heck" + x + "_checked");
           }
        }
    });
});

//食品関連
$(function() {
    var fo;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            fo = $.csv()(data);
            var f = document.getElementById("food");
            
           for(var x=24; x < 35; x++){
                if(fo[x][7]!=""){
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                        f.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + fo[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + fo[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + fo[x][2] + "&dirflg=w'>" + fo[x][2] + "</a><br/>営業時間：" + fo[x][9] + "<br/>定休日：" + fo[x][10] + "<br/>電話番号：<a hlef='tel:" + fo[x][3] + "'>" + fo[x][3] + "</a><br/>" + fo[x][6]+ "</a><br/>サービス内容<br/>" + fo[x][5]+ "<br/><br/>";
                    }
                    else{
                        f.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + fo[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + fo[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + fo[x][2] + "&dirflg=w'>" + fo[x][2] + "</a><br/>営業時間：" + fo[x][9] + "<br/>定休日：" + fo[x][10] + "<br/>電話番号：<a hlef='tel:" + fo[x][3] + "'>" + fo[x][3] + "</a><br/>" + fo[x][6]+ "</a><br/>サービス内容<br/>" + fo[x][5]+ "<br/><br/>";
                    }
                }
                else{
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                        f.innerHTML += "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + fo[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + fo[x][2] + "&dirflg=w'>" + fo[x][2] + "</a><br/>営業時間：" + fo[x][9] + "<br/>定休日：" + fo[x][10] + "<br/>電話番号：<a hlef='tel:" + fo[x][3] + "'>" + fo[x][3] + "</a><br/>" + fo[x][6] + "<br/>"+  fo[x][6] + "</a><br/>サービス内容<br/>" + fo[x][5]+ "<br/><br/>";
                    }
                    else{
                        f.innerHTML +=  "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + fo[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + fo[x][2] + "&dirflg=w'>" + fo[x][2] + "</a><br/>営業時間：" + fo[x][9] + "<br/>定休日：" + fo[x][10] + "<br/>電話番号：<a hlef='tel:" + fo[x][3] + "'>" + fo[x][3] + "</a><br/>" + fo[x][6] + "<br/>"+  fo[x][6] + "</a><br/>サービス内容<br/>" + fo[x][5]+ "<br/><br/>";
                    }
                }
                $(".h4"+x).css({"float": "left","marginLeft":"0%"});
                $("#no"+x).css({"clear": "both"});
                
                //ローカルストレージ（チェックボックス）
                localStorage.setItem("janre"+x,fo[x][1]);
                cc[x][0] = localStorage.getItem("janre"+x);
                cc[x][1] = localStorage.getItem("heck" + x + "_checked");
            }
        }
    });
});

//その他
$(function() {
    var aa;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            aa = $.csv()(data);
            var a = document.getElementById("a");
            
            for(var x=35; x <= 56; x++){
                if(aa[x][7]!=""){
                    if(localStorage.getItem("heck" + x + "_checked")==1){
                      a.innerHTML +=  "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + aa[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + aa[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + aa[x][2] + "&dirflg=w'>" + aa[x][2] + "</a><br/>営業時間：" + aa[x][9] + "<br/>定休日：" + aa[x][10] + "<br/>電話番号：<a hlef='tel:" + aa[x][3] + "'>" + aa[x][3] + "</a><br/>" + aa[x][6]+ "</a><br/>サービス内容<br/>" + aa[x][5]+ "<br/><br/>";
                    }
                    else{
                        a.innerHTML +=  "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> <a href='javascript:void(0)' onclick='URLClick("+x+");' target='_system'>" + aa[x][1] + "</a></h4><div id='no"+x+"'></div>ジャンル：" + aa[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + aa[x][2] + "&dirflg=w'>" + aa[x][2] + "</a><br/>営業時間：" + aa[x][9] + "<br/>定休日：" + aa[x][10] + "<br/>電話番号：<a hlef='tel:" + aa[x][3] + "'>" + aa[x][3] + "</a><br/>" + aa[x][6]+ "</a><br/>サービス内容<br/>" + aa[x][5]+ "<br/><br/>";
                    }
            }
            else{
                if(localStorage.getItem("heck" + x + "_checked")==1){
                    a.innerHTML +=  "<br/><h4 class='h4" + x + "'><img src='img/wht2.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + aa[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + aa[x][2] + "&dirflg=w'>" + aa[x][2] + "</a><br/>営業時間：" + aa[x][9] + "<br/>定休日：" + aa[x][10] + "<br/>電話番号：<a hlef='tel:" + aa[x][3] + "'>" + aa[x][3] + "</a><br/>" + aa[x][6] + "<br/>"+  aa[x][6] + "</a><br/>サービス内容<br/>" + aa[x][5]+ "<br/><br/>";
                }
                else{
                    a.innerHTML +=  "<br/><h4 class='h4" + x + "'><img src='img/wht.png' width=10%  onclick='te" + x + "(at"+x+");' id = check" + x + " /> " + aa[x][1] + "</h4><div id='no"+x+"'></div>ジャンル：" + ma[x][14] + "<br/>住所：<a href='http://maps.google.com/maps?saddr=&daddr=" + aa[x][2] + "&dirflg=w'>" + aa[x][2] + "</a><br/>営業時間：" + aa[x][9] + "<br/>定休日：" + aa[x][10] + "<br/>電話番号：<a hlef='tel:" + aa[x][3] + "'>" + aa[x][3] + "</a><br/>" + aa[x][6] + "<br/>"+  aa[x][6] + "</a><br/>サービス内容<br/>" + aa[x][5]+ "<br/><br/>";
                }
            }
            $(".h4"+x).css({"float": "left","marginLeft":"0%"});
            $("#no"+x).css({"clear": "both"});
            //ローカルストレージ（チェックボックス）
            localStorage.setItem("janre"+x,aa[x][1]);
            cc[x][0] = localStorage.getItem("janre"+x);
            cc[x][1] = localStorage.getItem("heck" + x + "_checked");
        }
        }
    });
});

function URLClick(u) {
    var ur;
    $.ajax({
        url: './data/genre.csv',
        success: function(data) {
            ur = $.csv()(data);
            window.open(ur[u][7], '_system', 'location=yes');
        }
    });
    // window.open("https://www.google.co.jp/", '_system', 'location=yes');
    return false;
}

