/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/EqkInfoService/getEqkMsg'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'b2GRB41kH6MZnAd3KB7kISb2aGBOXUIzJCVnQwKuVwgr0HOnmXh7HnLpG%2B1bcWmC2nlyDzKQfAZx345pihi70Q%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('b2GRB41kH6MZnAd3KB7kISb2aGBOXUIzJCVnQwKuVwgr0HOnmXh7HnLpG%2B1bcWmC2nlyDzKQfAZx345pihi70Q%3D%3D'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /**/
queryParams += '&' + encodeURIComponent('fromTmFc') + '=' + encodeURIComponent('20200801'); /**/
queryParams += '&' + encodeURIComponent('toTmFc') + '=' + encodeURIComponent('20200802'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');
