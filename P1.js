﻿<!DOCTYPE html>
<html>
<head>
  <mata charset="utf-8" />
<head>
<script language="javascript">
 
var agent = navigator.userAgent.toLowerCase();
if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
    /*alert("Internet Explorer"); */
    function aa()
    {
    var objWSH = new ActiveXObject("WScript.Shell");
    var retval = objWSH.Run("C:\Program Files (x86)\WEATHERNEWS INC\The Last 10-Second\Last10Sec.exe",1,true);
    }
}
 
else if (agent.indexOf("chrome") != -1) {
  function aa()
  {
    /*alert("HAVE TO INSTALL."); */
    var objWSH = new ActiveXObject("WScript.Shell");
    var retval = objWSH.Run("C:\Program Files (x86)\WEATHERNEWS INC\The Last 10-Second\Last10Sec.exe",1,true);
  }
}
</script>
<body>
<input type="button" name="실행" onclick="aa();">
</body>
</html>