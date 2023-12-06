/*
‼️规则完全免费，仅供学习交流，🈲️商业用途

[rewrite_local]
^https://video-beats-api.360in.com/v1/user/vip url script-response-body mou.js
[mitm] 

https://video-beats-api.360in.com/v1/user/vip
hostname = video-beats-api.360in.com
https://video-beats-api.360in.com/v1/juice/gift
//hostname :www.xiaoxiongyouhao.com
index.php
{
  "vip" : "no",
  "expire" : 0
}{
  "vip" : "month",
  "expire" : 1691241106
}


//重写链接：^https:\/\/www\.xiaoxiongyouhao\.com\/api\/vip\/index\.php
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip ='/v1/user/vip';

if (url.indexOf(vip) != -1) {
    obj.vip = "forever",
    obj.expire = 1691241107,
    body = JSON.stringify(obj);
}
$done({body});
