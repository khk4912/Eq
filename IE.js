// 익스플로러 체크

var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

  alert("본 웹 사이트는 익스플로러 브라우저 사용을 권장하지 않습니다.");

}