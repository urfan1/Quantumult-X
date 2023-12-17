/***********************************

> 應用名稱：理想家（永久vip破解）
> 軟件版本：0.0.0
> 下載地址：https://apps.apple.com/cn/app/%E5%8F%96%E5%90%8D%E5%AD%97%E5%85%B8-%E8%B5%B7%E5%90%8D%E8%A7%A3%E5%90%8D%E5%AE%9D%E5%85%B8/id1453636017
> 更新時間：2023-12-15
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣
> 脚本作者: 自由范
***********************

[rewrite_local]

^https://api.vistopia.com.cn/api/v2/user/profile url script-response-body https://raw.githubusercontent.com/urfan1/Quantumult-X/main/Lixiang.js

[mitm] 

hostname = api.vistopia.com.cn

***********************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/v2/user/profile';

if (url.indexOf(vip) != -1) {
    obj.data.user_file.vip_expire_date = 2088-12-18;
    obj.data.user_file.equity_txt = "2018";
    body = JSON.stringify(obj);
}
$done({body});