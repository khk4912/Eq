// 익스플로러 체크

var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

  alert("익스플로러 브라우저는 보안상 접속하실수 없습니다.");
  <meta http-equiv='refresh' content='0;url=https://jap-kor-earthquake.github.io/Eq/IE-BAN.html'>
}

else {

  

}
