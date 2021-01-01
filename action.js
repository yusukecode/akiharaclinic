// ハンバーガーメニュー用変数
let outinMenu = document.getElementById('outinMenu');
let openMenu = document.getElementById('spMenu');
let closeMenu = document.getElementsByClassName('closeswitch');
let wsize = window.innerWidth;

// 上に戻るボタン用変数
let gohome = document.getElementById('gohome');
let ours = document.getElementById('ours');
let oursclientRect = ours.getBoundingClientRect();
let scrollswitch = 'off';
let wh = window.innerHeight;

// 文字サイズ変更ボタン用変数
let fontN = document.getElementById('fontN');
let fontB = document.getElementById('fontB');

// ハンバーガーメニューの開閉
openMenu.addEventListener('click',function(){
    outinMenu.style.display = 'block';
},false);

for(let i = 0;i < closeMenu.length;i++){
    closeMenu[i].addEventListener('click',function(){
        outinMenu.style.display = 'none';
    },false);
}

// リサイズによるハンバーガーメニューの制御
window.addEventListener('resize',function(){
    wsize = window.innerWidth;
    if(wsize > 768) {
        outinMenu.style.display = 'none';
    }
})

// 文字サイズ変更
fontN.addEventListener('click',function(){
    document.body.style.fontSize = 100 + '%';
},false);

fontB.addEventListener('click',function(){
    document.body.style.fontSize = 115 + '%';
},false);

// スクロールに応じて上に戻るボタンの出し入れ
window.onscroll = function () {

      var oursclientRect = ours.getBoundingClientRect();
      var wh = window.innerHeight;
  
      if (wh >= oursclientRect.top && scrollswitch === 'off') {
          gohome.style.opacity = 1;
          gohome.style.display = 'block';
          
      } else {
          scrollswitch = 'on';
          gohome.style.opacity = 0;
          setTimeout(() => {
            gohome.style.display = 'none';
            scrollswitch = 'off';
          }, 200);
      }
}