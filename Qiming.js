/***********************************

> 應用名稱：起名宝典（永久vip破解）
> 軟件版本：0.0.0
> 下載地址：
> 更新時間：2023-12-15
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣
> 脚本作者: 自由范
***********************

[rewrite_local]

^https://www.qimingzidian.top/v01/user-info url script-response-body https://raw.githubusercontent.com/urfan1/Quantumult-X/main/Qiming.js

[mitm] 

hostname = www.qimingzidian.top

***********************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/v01/user-info';

if (url.indexOf(vip) != -1) {
    obj.data.is_vip = -1;,
    body = JSON.stringify(obj);
}
$done({body});
