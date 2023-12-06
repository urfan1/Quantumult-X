/***********************************

> 應用名稱：blurrr（双vip破解）
> 軟件版本：0.0.0
> 下載地址：
> 更新時間：2022-07-24
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣
 
重写添加 

Url   ^https://video-beats-api.360in.com/v1/user/vip
类型   script-response-body 
脚本   *****.js

（js脚本放在手机本地圈x目录下的Scripts目录里面   文件重命名英文字母）

[rewrite_local]

^https:\/\/video-beats-api\.360in\.com\/v1\/user\/vip url script-response-body https://raw.githubusercontent.com/urfan1/Quantumult-X/main/blurrr.js

[mitm] 

hostname=video-beats-api.360in.com

***********************************/

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
