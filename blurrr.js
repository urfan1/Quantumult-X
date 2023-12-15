/***********************************

> 應用名稱：blurrr（永久vip破解）
> 軟件版本：0.0.0
> 下載地址：
> 更新時間：2023-12-15
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣
> 脚本作者: 自由范
***********************

[rewrite_local]

^https://video-beats-api.camera360.com/v1/user/vip url script-response-body https://raw.githubusercontent.com/urfan1/Quantumult-X/main/blurrr.js

[mitm] 

hostname = video-beats-api.camera360.com

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
