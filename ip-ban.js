<script language="JavaScript">

netscape = (navigator.appName.indexOf("Netscape") != -1);
version4 = (navigator.appVersion.indexOf("4.") != -1);

if (netscape && version4) {
ip = "" + java.net.InetAddress.getLocalHost().getHostAddress();
if (ip.indexOf("218.147.155.11") >= -1){
alert("IP BAN ERROR CODE:001");
history.go(-1);
}
}