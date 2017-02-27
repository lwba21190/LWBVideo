## LWBVideo ##

  LWBVideo是仿造腾讯视频做的一个视频网站，包括了腾讯视频的首页，电视剧，综艺，电影，体育五部分。整个项目利用前端ReactJS框架编写，后台使用的是Node.js。主要用于个人学习目的。
  
## 主要特性 ##
- 1，使用ES6语法；
- 2，前端使用ReactJS框架,后台使用NodeJS，使用js语法统一前后端；
- 3，使用webpack模块打包工具打包、压缩、管理项目；
- 4，高仿腾讯视频首页，电视剧，综艺，电影，体育五个页面（去广告）；

## 下载安装 ##

1. download源码

		git clone https://github.com/lwba21190/LWBVideo.git

2. 编译打包js，css文件

		cd LWBVideoWeb/client
		webpack --config webpack.config.js

3. 运行服务器

		cd ../
		node ./bin/www

4. 网页浏览器访问
	- 修改 /client/data/homeHeaderInfo.json 文件中的nav对象字段服务器地址
	- 浏览器输入http://localhost:5000
     
 
## License ##    
     
仅限于个人学习目的 
