// !function () {
    // var data = {
    //     tabs:{
    //         hots: '推荐',
    //         news: '资讯',
    //         shop: '购物',
    //         bbs: '社区',
    //         play: '影音',
    //         live: '生活',
    //         tool: '工具',
    //         it: 'IT'
    //     },
    //     sites: {
    //         hots: [
    //             {
    //                 imgId: 11,
    //                 url: 'http://www.zaobao.com',
    //                 title: '联合早报',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 12,
    //                 url: 'http://www.people.com.cn',
    //                 title: '人民网',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 13,
    //                 url: 'https://www.jd.com',
    //                 title: '京东',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 14,
    //                 url: 'https://taobao.com',
    //                 title: '淘宝',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 15,
    //                 url: 'https://www.jianshu.com',
    //                 title: '简书',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 16,
    //                 url: 'https://www.zhihu.com',
    //                 title: '知乎',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 21,
    //                 url: 'http://www.youku.com',
    //                 title: '优酷',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 22,
    //                 url: 'https://v.qq.com',
    //                 title: '腾讯视频',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 23,
    //                 url: 'https://translate.google.cn',
    //                 title: '谷歌翻译',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 24,
    //                 url: 'http://www.kuaidi100.com',
    //                 title: '快递100',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 25,
    //                 url: 'http://www.nicetool.net',
    //                 title: 'NiceTool',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 26,
    //                 url: 'https://email2.163.com',
    //                 title: '网易邮箱',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 31,
    //                 url: 'http://www.runoob.com',
    //                 title: '菜鸟教程',
    //                 img: ''
    //             }
    //         ],
    //         news: [
    //             {
    //                 imgId: 43,
    //                 url: 'http://www.zaobao.com',
    //                 title: '联合早报',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 11,
    //                 url: 'http://www.ftchinese.com',
    //                 title: 'FT中文网',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 13,
    //                 url: 'http://www.guancha.cn',
    //                 title: '观察者',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 14,
    //                 url: 'https://pit.ifeng.com',
    //                 title: '凤凰智库',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 12,
    //                 url: 'http://www.myzaker.com',
    //                 title: 'ZAKER',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 15,
    //                 url: 'http://www.people.com.cn',
    //                 title: '人民网',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 16,
    //                 url: 'http://www.cankaoxiaoxi.com',
    //                 title: '参考消息',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 22,
    //                 url: 'http://www.bbc.com',
    //                 title: 'BBC',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 23,
    //                 url: 'https://wallstreetcn.com',
    //                 title: '华尔街见闻',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 24,
    //                 url: 'http://news.qq.com',
    //                 title: '腾讯新闻',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 25,
    //                 url: 'http://news.163.com',
    //                 title: '网易新闻',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 26,
    //                 url: 'http://www.thepaper.cn',
    //                 title: '澎湃',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 31,
    //                 url: 'http://sports.sina.com.cn',
    //                 title: '新浪体育',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 32,
    //                 url: 'http://sports.sina.com.cn',
    //                 title: 'IT之家',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 42,
    //                 url: 'http://news.sohu.com',
    //                 title: '搜狐新闻',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 41,
    //                 url: 'https://www.guokr.com',
    //                 title: '果壳',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 34,
    //                 url: 'http://36kr.com',
    //                 title: '36氪',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 35,
    //                 url: 'http://www.ltaaa.com',
    //                 title: '龙腾网',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 44,
    //                 url: 'https://www.huxiu.com',
    //                 title: '虎嗅',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 33,
    //                 url: 'https://www.toutiao.com',
    //                 title: '今日头条',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 36,
    //                 url: 'http://www.huanqiu.com',
    //                 title: '环球时报',
    //                 img: ''
    //             }
    //         ],
    //         shop: [
    //             {
    //                 imgId: 11,
    //                 url: 'https://www.jd.com',
    //                 title: '京东',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 12,
    //                 url: 'https://taobao.com',
    //                 title: '淘宝',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 13,
    //                 url: 'https://www.amazon.cn',
    //                 title: '亚马逊',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 14,
    //                 url: 'http://www.dangdang.com',
    //                 title: '当当网',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 15,
    //                 url: 'https://www.xiaohongshu.com',
    //                 title: '小红书',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 16,
    //                 url: 'https://www.suning.com',
    //                 title: '苏宁易购',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 21,
    //                 url: 'http://www.manmanbuy.com',
    //                 title: '慢慢买',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 22,
    //                 url: 'https://www.gome.com.cn',
    //                 title: '国美',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 23,
    //                 url: 'https://www.vip.com',
    //                 title: '唯品会',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 24,
    //                 url: 'https://www.mogujie.com/',
    //                 title: '蘑菇街',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 25,
    //                 url: 'https://www.yhd.com',
    //                 title: '一号店',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 26,
    //                 url: 'https://2.taobao.com/',
    //                 title: '闲鱼',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 31,
    //                 url: 'http://www.zhuanzhuan.com',
    //                 title: '转转',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 32,
    //                 url: 'http://you.163.com',
    //                 title: '网易严选',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 33,
    //                 url: 'http://jumei.com',
    //                 title: '聚美优品',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 34,
    //                 url: 'http://www.vancl.com',
    //                 title: '凡客诚品',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 35,
    //                 url: 'https://www.etao.com',
    //                 title: '一淘',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 36,
    //                 url: 'https://www.mi.com',
    //                 title: '小米商城',
    //                 img: ''
    //             }
    //         ],
    //         bbs: [
    //             {
    //                 imgId: 11,
    //                 url: 'https://www.v2ex.com',
    //                 title: 'V2EX',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 12,
    //                 url: 'https://www.jianshu.com',
    //                 title: '简书',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 22,
    //                 url: 'https://www.zhihu.com',
    //                 title: '知乎',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 13,
    //                 url: 'https://tieba.baidu.com',
    //                 title: '百度贴吧',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 14,
    //                 url: 'http://bbs.tianya.cn',
    //                 title: '天涯社区',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 15,
    //                 url: 'https://www.douban.com',
    //                 title: '豆瓣',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 16,
    //                 url: 'http://www.mop.com',
    //                 title: '猫扑',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 21,
    //                 url: 'https://weibo.com',
    //                 title: '新浪微博',
    //                 img: ''
    //             }
    //         ],
    //         play: [
    //             {
    //                 imgId: 11,
    //                 url: 'http://www.youku.com',
    //                 title: '优酷',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 12,
    //                 url: 'https://v.qq.com',
    //                 title: '腾讯视频',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 13,
    //                 url: 'http://www.iqiyi.com',
    //                 title: '爱奇艺',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 14,
    //                 url: 'https://tv.sohu.com',
    //                 title: '搜狐视频',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 15,
    //                 url: 'http://www.le.com',
    //                 title: '乐视视频',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 16,
    //                 url: 'https://www.mgtv.com',
    //                 title: '芒果TV',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 21,
    //                 url: 'https://www.bilibili.com',
    //                 title: 'Bilibili',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 22,
    //                 url: 'http://www.acfun.cn',
    //                 title: 'AcFun',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 23,
    //                 url: 'https://www.douyu.com',
    //                 title: '斗鱼',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 24,
    //                 url: 'http://www.huya.com',
    //                 title: '虎牙',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 25,
    //                 url: 'https://www.panda.tv',
    //                 title: '熊猫直播',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 26,
    //                 url: 'http://www.longzhu.com',
    //                 title: '龙珠直播',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 31,
    //                 url: 'https://music.163.com',
    //                 title: '网易云音乐',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 32,
    //                 url: 'https://y.qq.com',
    //                 title: 'QQ音乐',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 33,
    //                 url: 'http://www.kugou.com',
    //                 title: '酷狗',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 34,
    //                 url: 'https://www.xiami.com',
    //                 title: '虾米',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 35,
    //                 url: 'http://www.yinyuetai.com',
    //                 title: '音悦Tai',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 36,
    //                 url: 'https://www.ximalaya.com',
    //                 title: '喜马拉雅FM',
    //                 img: ''
    //             }
    //         ],
    //         live: [
    //             {
    //                 imgId: 11,
    //                 url: 'https://translate.google.cn',
    //                 title: '谷歌翻译',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 12,
    //                 url: 'http://www.12306.cn',
    //                 title: '12306',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 13,
    //                 url: 'http://www.meishij.net',
    //                 title: '美食杰',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 14,
    //                 url: 'http://www.kuaidi100.com',
    //                 title: '快递100',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 15,
    //                 url: 'http://www.cwl.gov.cn',
    //                 title: '福彩',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 16,
    //                 url: 'https://www.58.com',
    //                 title: '58同城',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 21,
    //                 url: 'http://www.ganji.com',
    //                 title: '赶集网',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 22,
    //                 url: 'https://www.ctrip.com',
    //                 title: '携程',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 23,
    //                 url: 'https://www.qunar.com',
    //                 title: '去哪儿',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 24,
    //                 url: 'https://map.baidu.com',
    //                 title: '百度地图',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 25,
    //                 url: 'https://www.51240.com',
    //                 title: '便民查询',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 26,
    //                 url: 'https://www.zhaopin.com',
    //                 title: '智联招聘',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 31,
    //                 url: 'https://www.51job.com',
    //                 title: '前程无忧',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 32,
    //                 url: 'https://www.lagou.com',
    //                 title: '拉勾',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 33,
    //                 url: 'http://www.jiakaobaodian.com',
    //                 title: '驾考宝典',
    //                 img: ''
    //             }
    //         ],
    //         tool: [
    //             {
    //                 imgId: 11,
    //                 url: 'http://www.nicetool.net',
    //                 title: 'NiceTool',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 12,
    //                 url: 'https://123.w3cschool.cn/webtools',
    //                 title: '在线工具库',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 13,
    //                 url: 'https://tool.lu',
    //                 title: '在线工具',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 36,
    //                 url: 'http://24mail.chacuo.net',
    //                 title: '临时邮箱',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 14,
    //                 url: 'http://www.miyizi.com',
    //                 title: '米艺字',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 15,
    //                 url: 'https://cn.office-converter.com',
    //                 title: '文档转换',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 16,
    //                 url: 'https://uzer.me',
    //                 title: '云端应用',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 21,
    //                 url: 'http://tool.mkblog.cn',
    //                 title: '孟坤工具箱',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 22,
    //                 url: 'https://browserframe.com',
    //                 title: '图片加壳',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 23,
    //                 url: 'http://pan.baidu.com',
    //                 title: '百度云',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 24,
    //                 url: 'http://naotu.baidu.com',
    //                 title: '百度脑图',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 25,
    //                 url: 'https://cli.im',
    //                 title: '草料二维码',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 26,
    //                 url: 'https://www.qichacha.com',
    //                 title: '企查查',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 31,
    //                 url: 'https://www.tianyancha.com',
    //                 title: '天眼查',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 32,
    //                 url: 'https://email2.163.com',
    //                 title: '网易邮箱',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 35,
    //                 url: 'http://www.zhuanhuanqi.com/danwei/danwei.html',
    //                 title: '单位换算',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 33,
    //                 url: 'http://www.panduoduo.net',
    //                 title: '网盘搜索',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 34,
    //                 url: 'https://www.cilimao.me',
    //                 title: '磁力搜索',
    //                 img: ''
    //             }
    //         ],
    //         it: [
    //             {
    //                 imgId: 11,
    //                 url: 'http://www.w3school.com.cn',
    //                 title: 'W3school',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 12,
    //                 url: 'http://www.runoob.com',
    //                 title: '菜鸟教程',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 13,
    //                 url: 'http://www.51zxw.net',
    //                 title: '我要自学网',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 14,
    //                 url: 'https://www.liaoxuefeng.com',
    //                 title: '廖雪峰教程',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 15,
    //                 url: 'http://1nami.com',
    //                 title: '1纳米',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 16,
    //                 url: 'https://www.imooc.com',
    //                 title: '慕课网',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 21,
    //                 url: 'http://edu.51cto.com',
    //                 title: '51CTO学院',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 22,
    //                 url: 'https://www.codecademy.com',
    //                 title: 'Codecademy',
    //                 img: ''
    //             },
    //             {
    //                 imgId: 23,
    //                 url: 'http://www.fenby.com',
    //                 title: 'Fenby',
    //                 img: ''
    //             }
    //         ]
    //     },
    //     search:{
    //         baidu:{
    //             title: '百度',
    //             url: 'https://www.baidu.com',
    //             urlKw: 'https://www.baidu.com/s?wd=',
    //             logo: 'images/logo_baidu.png',
    //             icon: 'images/icon-search.png',
    //             position: '0 0'
    //         },
    //         google:{
    //             title: 'google',
    //             url: 'https://www.google.com',
    //             urlKw: 'https://www.google.com/search?q=',
    //             logo: 'images/logo_google.png',
    //             icon: 'images/icon-search.png',
    //             position: '-80px 0'
    //         },
    //         bing:{
    //             title: 'bing',
    //             url: 'https://cn.bing.com',
    //             urlKw: 'https://cn.bing.com/search?q=',
    //             logo: 'images/logo_bing.png',
    //             icon: 'images/icon-search.png',
    //             position: '-40px 0'
    //         },
    //         s360:{
    //             title: '360搜索',
    //             url: 'https://www.so.com',
    //             urlKw: 'https://www.so.com/s?q=',
    //             logo: 'images/logo_s360.png',
    //             icon: 'images/icon-search.png',
    //             position: '-60px 0'
    //         },
    //         sougou:{
    //             title: '搜狗',
    //             url: 'https://www.sogoucom',
    //             urlKw: 'https://www.sogou.com/web?query=',
    //             logo: 'images/logo_sougou.png',
    //             icon: 'images/icon-search.png',
    //             position: '-20px 0'
    //         },
    //         cili:{
    //             title: '磁力搜索',
    //             url: 'https://www.cilimao.me',
    //             urlKw: 'https://www.cilimao.me/search?word=',
    //             logo: 'images/logo_cili.png',
    //             icon: 'images/icon-search.png',
    //             position: '-100px 0'
    //         },
    //         yingshi:{
    //             title: '影视搜索',
    //             url: 'https://neets.cc',
    //             urlKw: 'https://neets.cc/search?key=',
    //             logo: '',
    //             icon: 'images/icon-search.png',
    //             position: '0 -20px'
    //         },
    //         wangpan:{
    //             title: '网盘搜索',
    //             url: 'https://www.panduoduo.net',
    //             urlKw: 'http://www.panduoduo.net/s/name/',
    //             logo: '',
    //             icon: 'images/icon-search.png',
    //             position: '-20px -20px'
    //         }
    //     }
    // };
    // var DEFAULT =   0;
    // var LOCAL = 1;
    // var OTHER = 2;
    //
    // var LOCATION_IP = 0;
    // var LOCATION_GEOG = 1;
    // var LOCATION_USER = 2;
    // var config = {
    //     settings:{
    //         sites:{
    //             src: DEFAULT,
    //             'default': {
    //                 url: 'http://dh.wwzc.cc/sites.json'
    //             },
    //             local: {
    //                 data: ''
    //             },
    //             other: {
    //                 url: 'http://dh.wwzc.cc/sites.json'
    //             }
    //         },
    //         search:{
    //             src: LOCAL,
    //             'default': {
    //                 url: 'http://dh.wwzc.cc/sites.json'
    //             },
    //             local: {
    //                 data: ''
    //             },
    //             other: {
    //                 url: 'http://dh.wwzc.cc/sites.json'
    //             }
    //         },
    //         weather:{
    //             show: true,
    //             location: LOCATION_IP,
    //             ip: {
    //                 city: '临沂'
    //             },
    //             geog: {
    //                 city: '山东'
    //             },
    //             user: {
    //                 city: '北京'
    //             }
    //         },
    //         theme: {
    //             src: OTHER,
    //             'default': {
    //                 select: 1
    //             },
    //             local: {
    //                 data: ''
    //             },
    //             other: {
    //                 url: 'http://dh.wwzc.cc/sites.json'
    //             }
    //         }
    //     }
    // };
    // 加载主题
    // !function () {
    //     // $('head').append('<link rel="stylesheet" href="css/theme-white.css">');
    // }();


    /**
     * 设置部分
     */
var global = {};
    // 初使化
    !function () {
        // 添加数组indexOf支持
        addIndexOf();
        global.$header = $('#header');
        global.$search  = $('#search');
        global.$input = $('#input');
        global.$searchList = global.$search.find('>.list');
        global.$searchSelectList = global.$search.find('.select-list');
        global.$searchBy = $('#searchBy');
        global.$settings = $('#settings');
        var config = getConfig();
        var sitesData = getSites(config.settings.sites);
        var searchData = getSearch(config.settings.search);
        // 选择当前搜索引擎
        selSearchBy(config.settings.searchBy.id, searchData);
        // 添加搜索引擎
        setSearch(searchData);
        // 添加数据tab栏
        setTabs(sitesData);
        // 添加首先显示的
        addData('hots', sitesData);
        // 请求热搜关键词
        topSearch();
        // 展示天气数据
        if(config.settings.header.show && config.settings.header.show == 'true'){
            setWeather(config.settings.weather);
        }
        // 显示/隐藏header
        setHeader(config.settings.header);



        // tab栏切换
        global.sitesTabTimer = null;
        $('#table').on('mouseenter', '.tabs', function () {
            global.sitesTabTimer && clearTimeout(global.sitesTabTimer);
            var that = this;
            global.sitesTabTimer = setTimeout(function () {
                $('#table>ul>li').removeClass('show');
                addData($(that).parent().addClass('show').attr('id'), sitesData);
            }, 300);
        })
            .on('mouseleave', '.tabs', function () {
            clearTimeout(global.sitesTabTimer);
        });
        // 点击设置列表项事件
        global.$header.find('[data-setting="list"]').on('click', 'a', function () {
            setConfig(config, {
                sitesData: sitesData,
                searchData: searchData
            });
            setConfig = function () {};
            var target = $(this).attr('data-li');
            var $settings = $('#settings');
            $settings.find('[data-select="tabs"]').find('[data-target="' + target + '"]').addClass('active').siblings('li').removeClass('active');
            $settings.removeClass('hide').find('[data-options="select"]').children('div').removeClass('show').filter('[data-option="' + target + '"]').addClass('show');
        });

        // 显示/隐藏header
        global.$header.find('[data-show="true"]').on('click', function () {
            $(this).removeClass('show');
            global.$header.removeClass('top').find('[data-show="false"]').addClass('show');
            config.settings.header.show = 'true';
            // 展示天气数据
            setWeather(config.settings.weather);
            saveConfig(config, false);
        });
        global.$header.find('[data-show="false"]').on('click', function () {
            $(this).removeClass('show');
            global.$header.addClass('top').find('[data-show="true"]').addClass('show');
            config.settings.header.show = 'false';
            saveConfig(config, false);
        });



        // 点击删除输入内容
        global.$search.find('.input .del').on('click', function () {
            global.$input.val('').focus();
            $(this).css('visibility', 'hidden');
        });
        // 关键字列表滚动时事件
        // global.$searchList.find('ul').on('scroll', function () {
        //     global.$searchList.off('mouseenter','li');
        //     setTimeout(function () {
        //         global.$searchList.on('mouseenter', 'li', function () {
        //             $(this).addClass('hover').siblings().removeClass('hover');
        //         })
        //     },100);
        // });

        // 输入内容事件
        global.$input.on('input', inputChange)
            .on('propertychange', inputChange)
            // 关键词列表隐藏
            .on('blur', function () {
                global.$searchList.removeClass('show');
            })
            // 输入框按下特殊按键
            .on('keydown', function (e) {
                // var $input = $(':input[name="kw"]');

                if (e.keyCode == 13) {
                    var kw = global.$input.val() || global.$input.attr('placeholder');
                    saveKw(kw);
                    open(searchData[config.settings.searchBy.id].urlKw + encodeURI(kw), '_blank');
                }else if(e.keyCode == 40 || e.keyCode == 38){
                    // 移除输入内容改变事件ie8及以下
                    global.$input.off('propertychange');
                    var $listItem = global.$searchList.find('li');
                    var listIndex = 0;
                    var scrollTop = $listItem.parent().scrollTop();
                    var $hover = $listItem.filter('.hover');
                    var $currentHover = $();
                    var listHeight = $listItem.height();
                    // var inputVal = global.$input.val();
                    if(e.keyCode == 40){
                        if($hover.length > 0 && $hover.is('.search>.list li:last-child')){
                            $listItem.removeClass('hover');
                            scrollTop = 0;
                        }else{
                            if($hover.length > 0 && $hover.is('.search>.list li')){
                                $hover.removeClass('hover').next().addClass('hover');
                            }else{
                                $listItem.removeClass('hover').first().addClass('hover');
                            }
                            $currentHover = $listItem.filter('.hover');
                            listIndex = $listItem.index($currentHover);
                            if(scrollTop < listHeight * (listIndex - 9)){
                                scrollTop = listHeight * (listIndex - 9);
                            }else{
                                if(listIndex == 0){
                                    scrollTop = 0;
                                }
                            }
                        }

                        // $listItem.parent().scrollTop($listItem.height() * (listIndex - 9));
                        // if(listIndex > 9){
                        //     console.log($listItem.height())
                        // }

                        // $('.search>.list').on('mouseenter', 'li', function () {
                        //         $(this).addClass('hover').siblings().removeClass('hover');
                        //     })
                    }else if(e.keyCode == 38){
                        if($hover.length > 0 && $hover.is('.search>.list li:first-child')){
                            $listItem.removeClass('hover');
                            // scrollTop = 0;
                        }else {
                            if ($hover.length > 0 && $hover.is('.search>.list li')) {
                                $hover.removeClass('hover').prev().addClass('hover');
                            } else {
                                $listItem.removeClass('hover').last().addClass('hover');
                            }
                            $currentHover = $listItem.filter('.hover');
                            listIndex = $listItem.index($currentHover);
                            if (scrollTop > listHeight * listIndex) {
                                scrollTop = listHeight * listIndex;
                            } else {
                                if (listIndex == $listItem.length - 1) {
                                    scrollTop = listHeight * (listIndex - 9);
                                }
                            }
                        }
                    }
                    $listItem.parent().scrollTop(scrollTop);
                    preventAndStop(e,true,false);
                    global.$input.val($currentHover.find('a span').text() || $currentHover.find('a').text() || global.inputVal);
                    var $searchListDel = global.$search.find('.input .del');
                    if (global.$input.val().length > 0) {
                        $searchListDel.css('visibility', 'visible');
                    } else {
                        $searchListDel.css('visibility', 'hidden');
                    }
                    // console.log(global.$input.val())
                    global.$input.on('propertychange', inputChange);
                }
            })
            // 输入框获得焦点事件
            .on('focus', function () {
                global.$searchSelectList.addClass('hide');
            })
            // 点击输入框事件
            .on('click', function (e) {
                if ($(this).val() == '') {
                    // if ( e && e.preventDefault ){
                    //     e.stopPropagation();
                    //     e.preventDefault();  //支持DOM标准的浏览器
                    //
                    // } else {
                    //     window.event.returnValue = false;  //IE
                    //     window.event.cancelBubble = true;
                    //
                    // }
                    var kwText = localSave('kw');
                    if (!kwText) {
                        return false;
                    }
                    var arrKw = JSON.parse(kwText);
                    // var className = $('.search .input .select>s').attr('class');
                    var html = '';
                    for (var i = 0; i < arrKw.length; i++) {
                        html += '<li><a target="_blank" href="' + searchData[config.settings.searchBy.id].urlKw + encodeURI(arrKw[i]) + '"><span>' + arrKw[i] + '</span><s class="del" title="删除">×</s></a></li>'
                    }
                    // $('.search .list>ul').html(html).removeClass('hide');
                    // $('.search .list').addClass('show').children('ul').html(html);
                    global.$searchList.find('>ul').html(html);
                }
                if(global.$searchList.find('li').length > 0){
                    global.$searchList.addClass('show');
                }
            });


        // 点击删除关键词事件
        global.$searchList.on('mousedown', '.del', function (e) {
            if (e.button == 2){
                return false;
            }
            preventAndStop(e,true,true);
            // console.log($(this).parent().find('span').text())
            delKw($(this).parent().find('span').text());
            $(this).parent().parent().remove();
        })
        // 防止输入框失去焦点事件
        //     .on('mousedown', function (e) {
        //         e.preventDefault();
        //     })

        //     点击搜索列表项事件
            .on('mousedown', 'a', function (e) {
                if (e.button == 2){
                    return false;
                }
                var kw = $(this).children('span').text() || $(this).text();
                // if ($(this).children('span').length > 0) {
                //     saveKw($(this).children('span').text());
                // } else {
                //     saveKw($(this).text());
                // }
                preventAndStop(e,true,true);
                open(searchData[config.settings.searchBy.id].urlKw + encodeURI(kw), '_blank');
                saveKw(kw);
            })
            // 进入关键词列表事件
            .on('mouseenter', 'li', function () {
                $(this).addClass('hover').siblings().removeClass('hover');
            })
            // 关键字列表滚动时事件
            .find('ul').on('scroll', function () {
            global.$searchList.off('mouseenter','li');
            setTimeout(function () {
                global.$searchList.on('mouseenter', 'li', function () {
                    $(this).addClass('hover').siblings().removeClass('hover');
                })
            },100);
        });
        // 输入获得焦点事件
        // $(window).on('focus', function () {
        //     $(':input[name="kw"]').focus();
        // });
        // 点击搜索按钮
        $('#btnSearch').on('click', function () {
            var kw = global.$input.val() || global.$input.attr('placeholder');
            saveKw(kw);
            open(searchData[config.settings.searchBy.id].urlKw + encodeURI(kw), '_blank');
        });
        // 点击搜索图标事件
        global.$searchBy.on('click', function () {
            global.$searchSelectList.removeClass('hide');
        });
        // 选择搜索引擎事件
        global.$searchSelectList.on('click', 'li', function () {
            var className = $(this).children('s').attr('class');
            if (searchData[className].urlKw && searchData[className].urlKw.length > 0) {
                // searchBy = searchData[className].urlKw;
                // $('#searchBy').attr({
                //     style: 'background-position:' + searchData[className].position,
                //     'data-url': searchData[className].urlKw
                // });
                // if (!searchData[className].logo) {
                //     $('.main>.logo img').css('display', 'none');
                //     // $('.main>.logo').html('<h1>'+data[className].title+'</h1>');
                //     $('.main>.logo h1').css('display', 'block').text(searchData[className].title);
                // } else {
                //     $('.main>.logo h1').css('display', 'none');
                //     $('.main>.logo img').attr('src', searchData[className].logo).css('display', 'inline-block');
                // }
                // $('.main>.logo>a').attr('href', searchData[className].url);
                // $('.search .select-list').addClass('hide');
                selSearchBy(className, searchData);
                config.settings.searchBy.id = className;
                saveConfig(config, false);
            } else {
                setToast('配置错误');
                return false;
            }

        })
        // 离开引擎列表事件
            .on('mouseleave', function () {
                $(this).addClass('hide');
            });

        // 输入内容改变处理函数
        global.keyupTimer = null;
        global.inputVal = '';
        function inputChange(){
            global.keyupTimer && clearTimeout(global.keyupTimer);
            global.inputVal = $(this).val();
            var $searchListDel = global.$search.find('.input .del');
            if (global.inputVal.length > 0) {
                $searchListDel.css('visibility', 'visible');
            } else {
                $searchListDel.css('visibility', 'hidden');
                global.$searchList.removeClass('show').html('<ul></ul>');
                return false;
            }
            // var that = this;
            global.keyupTimer = setTimeout(function () {
                $.getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?', {wd: global.inputVal,ie:'utf-8'}, function (data) {
                    // $('.search>.list').removeClass('hide').children('ul').html('');
                    // var className = $('.search .input .select>s').attr('class');
                    // data = {q:"我",p:false,s:["我和两个他","我叫mt4","我是大侦探","我不是药神","我的英雄学院","我是至尊","我们不一样","我的微信连三界"]};
                    var html = '';
                    for (var i = 0; i < data.s.length; i++) {
                        html += '<li><a target="_blank" href="' + searchData[config.settings.searchBy.id].urlKw + encodeURI(data.s[i]) + '">' + data.s[i] + '</a></li>';
                        // $('.search .list>ul').append($(html));

                        // html+='<li><a href="">1321</a></li>'
                        // $('.search .list>ul').append('<li><a target="_blank" href="' + searchData[config.settings.searchBy.id].urlKw + encodeURI(data.s[i]) + '">' + data.s[i] + '</a></li>')
                    }
                    if(html == ''){
                        global.$searchList.removeClass('show').html('<ul></ul>');
                    }else{
                        // $('.search .list>ul').parent().addClass('show');
                        global.$searchList.html('<ul>'+html+'</ul>').addClass('show');
                        // setTimeout(function () {
                        //
                        //     $('.search .list').addClass('show').css('display','block')
                        // },1000)
                    }
                });
            }, 200);
        };
    }();

    // 获取配置内容
    function getConfig() {
        var config = localSave('config');
        if (!config) {
            $.ajax({
                async: false,
                type: 'GET',
                url: 'config.json',
                dataType: 'json',
                success: function (data) {
                    config = data;
                    localSave('config', JSON.stringify(config));
                },
                error: function () {
                    setToast('配置数据错误');
                    return false;
                }
            });
            return config;
        } else {
            return JSON.parse(config);
        }
    }

    // 获取站点内容
    function getSites(sitesCfg) {
        var sites = null;
        if ('url' in sitesCfg[sitesCfg.src]) {
            $.ajax({
                async: false,
                type: 'GET',
                url: sitesCfg[sitesCfg.src].url,
                dataType: 'json',
                success: function (data) {
                    sites = data;
                },
                error: function () {
                    setToast('配置数据错误');
                    return false;
                }
            });
            return sites;
        } else if ('data' in sitesCfg[sitesCfg.src]) {
            sites = localSave('sites');
            if (!sites) {
                $.ajax({
                    async: false,
                    type: 'GET',
                    url: 'sites.json',
                    dataType: 'json',
                    success: function (data) {
                        sites = data;
                        localSave('sites', JSON.stringify(sites));
                    },
                    error: function () {
                        setToast('配置数据错误');
                        return false;
                    }
                });
                return sites;
            } else {
                return JSON.parse(sites);
            }
        }
        // localSave('config', JSON.stringify(config));
    }

    // 获取搜索内容
    function getSearch(searchCfg) {
        var search = null;
        if ('url' in searchCfg[searchCfg.src]) {
            $.ajax({
                async: false,
                type: 'GET',
                url: searchCfg[searchCfg.src].url,
                dataType: 'json',
                success: function (data) {
                    search = data;
                },
                error: function () {
                    setToast('配置数据错误');
                    return false;
                }
            });
            return search;
        } else {
            search = localSave('search');
            if (!search) {
                $.ajax({
                    async: false,
                    type: 'GET',
                    url: 'search.json',
                    dataType: 'json',
                    success: function (data) {
                        search = data;
                        localSave('search', JSON.stringify(search));
                    },
                    error: function () {
                        setToast('配置数据错误');
                        return false;
                    }
                });
                return search;
            } else {
                return JSON.parse(search);
            }
        }
        // localSave('config', JSON.stringify(config));
    }

    // 添加搜索引擎
    function setSearch(searchData) {
        var html = '';
        for (var key in searchData) {
            var style = '';
            if (!searchData[key].position) {
                style = 'background-position:0 0;background-size:20px 20px';
            } else {
                style = 'background-position:' + searchData[key].position;
            }
            html += '<li><s class="' + key + '" style="background-image:url(' + searchData[key].icon + ');' + style + '" data-url="' + searchData[key].urlKw + '" data-position="' + searchData[key].position + '"></s><span>' + searchData[key].title + '</span></li>';
        }
        global.$searchSelectList.append(html);
    };

    // 选择当前搜索引擎
    function selSearchBy(id, searchData) {
        // var className = $(this).children('s').attr('class');
        // console.log(searchData[id].urlKw)
        // searchBy = searchData[id].urlKw;
        // global.$searchBy.attr({
        //     style: 'background-position:' + searchData[id].position
        //     'data-url': searchData[id].urlKw
        // });
        global.$searchBy.css('backgroundPosition',searchData[id].position);
        var $logo = $('.main>.logo');
        var $logoImg = $logo.find('img');
        var $logoH1 = $logo.find('h1');;
        if (!searchData[id].logo) {
            $logoImg.css('display', 'none');
            $logoH1.css('display', 'block').text(searchData[id].title);
        } else {
            $logoH1.css('display', 'none');
            $logoImg.attr({
                src: searchData[id].logo,
                alt: searchData[id].title
            }).css('display', 'inline-block');
        }
        $logo.find('>a').attr('href', searchData[id].url);
        global.$searchSelectList.addClass('hide');
        $('head [rel="shortcut icon"]').attr('href', searchData[id].url + '/favicon.ico');
    }

    // 添加数据tab栏
    function setTabs(sitesCfg) {
        var html = '';
        for (var key in sitesCfg.tabs) {
            html += '<li id="' + key + '"><span class="tabs">' + sitesCfg.tabs[key] + '</span><div><ul class="sites clear"></ul></div></li>';
        }
        $('#table>ul').append($(html));
    };

    // 添加数据函数
    function addData(key, sitesData) {
        if ($('#' + key + ':not(.finish) .sites').length > 0) {
            var html = '';
            for (var i = 0; i < sitesData.sites[key].length; i++) {
                // var posiY = Math.floor(sitesData.sites[key][i].imgId % 100 / 10) * -20 + 20;
                // var posiX = sitesData.sites[key][i].imgId % 10 * -20 + 20;
                // var style = 'background-image:url(images/icon-' + key + '.png);background-position:' + posiX + 'px ' + posiY + 'px';
                var style = '';
                if (sitesData.sprites[key] && sitesData.sprites[key].length > 0) {
                    style = 'background-image:url(' + sitesData.sprites[key] + ');background-position:' + sitesData.sites[key][i].position;
                }
                if (sitesData.sites[key][i].img && sitesData.sites[key][i].img.length > 0) {
                    style = 'background-image:url(' + sitesData.sites[key][i].img + ');background-size:20px 20px';
                }
                var title = '';
                if (sitesData.sites[key][i].intro && sitesData.sites[key][i].intro.length > 0) {
                    title = sitesData.sites[key][i].intro;
                }
                html += '<li title="' + title + '"><a target="_blank" href="' + sitesData.sites[key][i].url + '"><s style="' + style + '"></s><span>' + sitesData.sites[key][i].title + '</span></a></li>';
            }
            $('#' + key).addClass('finish').addClass('show').find('.sites').append($(html));
            addSitesCss();// 站点列表最后一列css支持
        }
    };

    // 请求热搜关键词
    function topSearch() {
        $.getJSON('top_search.json', function (data) {
            global.$input.attr('placeholder', data[Math.floor(Math.random() * data.length)]);
            // 添加placeholder支持
            setPlaceholder();
        });
    };

    // 展示天气数据
    function setWeather(weatherCfg) {
        if (weatherCfg.show == 'true' && !global.$header.find('.weather').hasClass('finish')) {
            showWeather(weatherCfg);
            global.$header.find('.weather').on('mouseenter', function () {
                global.weatherTimer && clearInterval(global.weatherTimer);
            })
                .on('mouseleave', function () {
                    global.weatherTimer = setInterval(weatherAnimat, 3000);
                });
        }
    }

    function showWeather(weatherCfg) {
        // var city = '北京';
        // switch (weatherCfg.location) {
        //     case LOCATION_IP:
        //         city = config.settings.weather.ip.city;
        //         break;
        //     case LOCATION_GEOG:
        //         city = config.settings.weather.geog.city;
        //         break;
        //     case LOCATION_USER:
        //         city = config.settings.weather.user.city;
        //         break;
        // }
        var city = weatherCfg[weatherCfg.location].city || '北京';
        $('[data-city="city"]').text(city);
        // 天气信息获取
        $.getJSON('https://dh.wwzc.cc/weather.php', {city: city}, function (rep) {
            var todayImg0 = rep.data.weather.content.today.img[0];
            var todayCurrenttemp = rep.data.weather.content.currenttemp;
            var todayPm25 = rep.data.weather.content.today.pm25;
            var todayCondition = rep.data.weather.content.today.condition;
            var todayAqi = '优';

            var tomorrowImg0 = rep.data.weather.content.tomorrow.img[0];
            var tomorrowCurrenttemp = rep.data.weather.content.tomorrow.temp;
            var tomorrowPm25 = rep.data.weather.content.tomorrow.pm25;
            var tomorrowCondition = rep.data.weather.content.tomorrow.condition;
            var tomorrowAqi = '优';
            if (todayPm25 > 250) {
                todayAqi = '严重污染';
            } else if (todayPm25 > 150) {
                todayAqi = '重度污染';
            } else if (todayPm25 > 115) {
                todayAqi = '中度污染';
            } else if (todayPm25 > 75) {
                todayAqi = '轻度污染';
            } else if (todayPm25 > 35) {
                todayAqi = '良';
            }
            if (tomorrowPm25 > 250) {
                tomorrowAqi = '严重污染';
            } else if (tomorrowPm25 > 150) {
                tomorrowAqi = '重度污染';
            } else if (tomorrowPm25 > 115) {
                tomorrowAqi = '中度污染';
            } else if (tomorrowPm25 > 75) {
                tomorrowAqi = '轻度污染';
            } else if (tomorrowPm25 > 35) {
                tomorrowAqi = '良';
            }
            global.$header.find('[data-weather-today="img"]').attr({
                src: todayImg0,
                alt: todayCondition,
                title: todayCondition
            });
            global.$header.find('[data-weather-today="temp"]').text(todayCurrenttemp);
            // global.$header.find('[data-weather-today="pm25"]').text(todayPm25);
            global.$header.find('[data-weather-today="aqi"]').text(todayAqi);

            global.$header.find('[data-weather-tomorrow="img"]').attr({
                src: tomorrowImg0,
                alt: tomorrowCondition,
                title: tomorrowCondition
            });
            global.$header.find('[data-weather-tomorrow="temp"]').text(tomorrowCurrenttemp);
            // global.$header.find('[data-weather-tomorrow="pm25"]').text(tomorrowPm25);
            global.$header.find('[data-weather-tomorrow="aqi"]').text(tomorrowAqi);
            // 天气动画
            global.weatherTimer = setInterval(weatherAnimat, 3000);
            global.$header.find('[data-weather-show]').removeClass('hide');
            global.$header.find('.weather').addClass('finish');
        })
    };
    
    // 天气动画函数
    global.weatherAnimatJquery = {
        tomorrow: $('.weather .tomorrow'),
        today: $('.weather .today')
    };
    function weatherAnimat() {
        if (global.weatherAnimatJquery.tomorrow.hasClass('current')) {
            setTimeout(function () {
                global.weatherAnimatJquery.tomorrow.removeClass('current');
            }, 1000);
        } else {
            global.weatherAnimatJquery.tomorrow.addClass('current');
        }
        if (global.weatherAnimatJquery.today.hasClass('current')) {
            setTimeout(function () {
                global.weatherAnimatJquery.today.removeClass('current');
            }, 1000)
        } else {
            global.weatherAnimatJquery.today.addClass('current').css('zIndex', 2);
            setTimeout(function () {
                global.weatherAnimatJquery.today.css('zIndex', 0);
            }, 2000);
        }
    }
    // 设置header
    function setHeader(headerCfg) {
        if (headerCfg.show == 'true') {
            global.$header.removeClass('top');
            global.$header.find('[data-show="true"]').removeClass('show');
            global.$header.find('[data-show="false"]').addClass('show');
        } else {
            global.$header.addClass('top');
            global.$header.find('[data-show="false"]').removeClass('show');
            global.$header.find('[data-show="true"]').addClass('show');
        }
    }

    // 读取设置配置信息
    function setConfig(config, data) {
        setConfigSites(config.settings.sites, data.sitesData);
        setConfigSearch(config.settings.search, data.searchData);
        setConfigWeather(config.settings.weather);
        setConfigTheme(config.settings.theme);
        // var $settings = $('#settings');
        // tab栏切换
        global.$settings.find('[data-select="tabs"]').on('click', 'li', function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            global.$settings.find('[data-options="select"]').children('div').removeClass('show').filter('[data-option="' + $(this).attr('data-target') + '"]').addClass('show');
        });
        // 关闭设置
        global.$settings.find('[data-close]').on('click', function () {
            global.$settings.addClass('hide');
        });
        // 站点选择数据方式事件
        global.$settings.find(':radio[name="sitesrc"]').on('change', function () {
            // 方法一
            // var src = 'default';
            // switch ($(this).attr('id')){
            //     case 'src_sites_default':
            //         src = 'default';
            //         break;
            //     case 'src_sites_local':
            //         src = 'local';
            //         break;
            //     case 'src_sites_other':
            //         src = 'other';
            //         break;
            // }
            // 方法二
            var src = $(this).attr('id').split('_').pop();
            global.$settings.find('[data-sites]').removeClass('show').filter('[data-sites="' + src + '"]').addClass('show');
        });
        // 搜索选择数据方式事件
        global.$settings.find(':radio[name="search"]').on('change', function () {
            var src = $(this).attr('id').split('_').pop();
            global.$settings.find('[data-search]').removeClass('show').filter('[data-search="' + src + '"]').addClass('show');
        });
        // 天气选择数据方式事件
        global.$settings.find(':radio[name="weather"]').on('change', function () {
            if ($(this).attr('id') == 'weather_false') {
                global.$settings.find('[data-option="weather"]>div:not(:last-child):not(:first-child)').removeClass('show');
            } else {
                // var location = LOCATION_IP;
                // switch ($(':radio[name="location"]:checked').attr('id')){
                //     case 'location_ip':
                //         location = LOCATION_IP;
                //         break;
                //     case 'location_geog':
                //         location = LOCATION_GEOG;
                //         break;
                //     case 'location_user':
                //         location = LOCATION_USER;
                //         break;
                // }
                var location = $(':radio[name="location"]:checked').attr('id').split('_').pop();
                global.$settings.find('[data-option="weather"]>div:not(:last-child):not(:first-child)').addClass('show')
                    .filter('[data-weather]').removeClass('show').filter('[data-weather="' + location + '"]').addClass('show');
            }
        });
        // 位置选择数据方式事件
        global.$settings.find(':radio[name="location"]').on('change', function () {
            // var location = LOCATION_IP;
            // switch ($(this).attr('id')){
            //     case 'location_ip':
            //         location = LOCATION_IP;
            //         break;
            //     case 'location_geog':
            //         location = LOCATION_GEOG;
            //         break;
            //     case 'location_user':
            //         location = LOCATION_USER;
            //         break;
            // }
            var location = $(this).attr('id').split('_').pop();
            if (location == 'ip') {
                global.$settings.find('[data-weather-ip-tips]').text('获取中');
                $.getJSON('https://dh.wwzc.cc/get_ip.php?v=' + (new Date()).getTime(), function (res) {
                    if (res.code == 0) {
                        global.$settings.find('[data-weather-ip-tips]').text('成功');
                        global.$settings.find('[data-weather-ip]').val(res.data.city);
                    } else {
                        global.$settings.find('[data-weather-ip-tips]').text('失败');
                    }
                });
            } else if (location == 'geog') {
                getGeog();
            }
            global.$settings.find('[data-weather]').removeClass('show').filter('[data-weather="' + location + '"]').addClass('show');
        });
        // 主题选择数据方式事件
        global.$settings.find(':radio[name="theme"]').on('change', function () {
            // var src = DEFAULT;
            // switch ($(this).attr('id')){
            //     case 'theme_default':
            //         src = DEFAULT;
            //         break;
            //     case 'theme_local':
            //         src = LOCAL;
            //         break;
            //     case 'theme_other':
            //         src = OTHER;
            //         break;
            // }
            var src = $(this).attr('id').split('_').pop();
            global.$settings.find('[data-theme]').removeClass('show').filter('[data-theme="' + src + '"]').addClass('show');
        });
        // 设置保存事件
        global.$settings.find('[data-sites-save]').on('click', function () {
            var src = global.$settings.find(':radio[name="sitesrc"]:checked').attr('id').split('_').pop();
            var value = global.$settings.find('[data-sites-' + src + ']').val();
            config.settings.sites.src = src;
            if ('url' in config.settings.sites[src]) {
                config.settings.sites[src].url = value;
            } else if ('data' in config.settings.sites[src]) {
                if (vSites(value)) {
                    saveSites(value);
                } else {
                    setToast('配置保存失败');
                    return false;
                }
            }
            saveConfig(config, true);
        });
        // 搜索保存事件
        global.$settings.find('[data-search-save]').on('click', function () {
            var src = global.$settings.find(':radio[name="search"]:checked').attr('id').split('_').pop();
            var value = global.$settings.find('[data-search-' + src + ']').val();
            config.settings.search.src = src;
            if ('url' in config.settings.search[src]) {
                config.settings.search[src].url = value;
            } else if ('data' in config.settings.search[src]) {
                if (vSearch(value)) {
                    saveSearch(value);
                } else {
                    setToast('配置保存失败');
                    return false;
                }
            }
            saveConfig(config, true);
        });
        // 天气保存事件
        global.$settings.find('[data-weather-save]').on('click', function () {
            var weatherShow = global.$settings.find(':radio[name="weather"]:checked').attr('id').split('_').pop();
            var location = global.$settings.find(':radio[name="location"]:checked').attr('id').split('_').pop();
            var value = global.$settings.find('[data-weather-' + location + ']').val();
            config.settings.weather.show = weatherShow;
            config.settings.weather.location = location;
            config.settings.weather[location].city = value;
            saveConfig(config, true);
        });
    }

    // 读取站点设置配置信息
    function setConfigSites(sitesCfg, sitesData) {
        // var src = sitesCfg.src;
        // switch (sitesCfg.src) {
        //     case 'default': {
        //         $('#src_sites_default').attr('checked', 'true');
        //         break;
        //     };
        //     case 'local': {
        //         $('#src_sites_local').attr('checked', 'true');
        //         break;
        //     }
        //     case 'other': {
        //         $('#src_sites_other').attr('checked', 'true');
        //         break;
        //     }
        // }
        // var $settings = $('#settings');
        global.$settings.find('[data-sites-local]').val(JSON.stringify(sitesData));
        global.$settings.find('[data-sites-default]').val(sitesCfg['default'].url);
        global.$settings.find('[data-sites-other]').val(sitesCfg.other.url);
        $('#src_sites_' + sitesCfg.src).attr('checked', 'true');
        global.$settings.find('[data-sites]').removeClass('show').filter('[data-sites="' + sitesCfg.src + '"]').addClass('show');
    }

    // 读取搜索引擎设置配置信息
    function setConfigSearch(searchCfg, searchData) {
        // $settings = $('#settings');
        global.$settings.find('[data-search-local]').val(JSON.stringify(searchData));
        global.$settings.find('[data-search-default]').val(searchCfg['default'].url);
        global.$settings.find('[data-search-other]').val(searchCfg.other.url);
        $('#src_search_' + searchCfg.src).attr('checked', 'true');
        global.$settings.find('[data-search]').removeClass('show').filter('[data-search="' + searchCfg.src + '"]').addClass('show');
    }

    // 读取天气设置配置信息
    function setConfigWeather(weatherCfg) {
        // $settings = $('#settings');
        $('#weather_' + weatherCfg.show).attr('checked', true);
        global.$settings.find('[data-weather-ip]').val(weatherCfg.ip.city);
        global.$settings.find('[data-weather-geog]').val(weatherCfg.geog.city);
        global.$settings.find('[data-weather-user]').val(weatherCfg.user.city);
        $('#location_' + weatherCfg.location).attr('checked', 'true');
        if (weatherCfg.show == 'true') {
            global.$settings.find('[data-option="weather"]>div').addClass('show').filter('[data-weather]').removeClass('show').filter('[data-weather="' + weatherCfg.location + '"]').addClass('show');
        }
        // if (weatherCfg.show == 'false') {
        //     $settings.find('[data-option="weather"]>div:not(:last-child):not(:first-child)').removeClass('show');
        // }
    }

    // 读取主题设置配置信息
    function setConfigTheme(themeCfg) {
        $('#theme_' + themeCfg.src).attr('checked', 'true');
        global.$settings.find('[data-theme]').removeClass('show').filter('[data-theme="' + themeCfg.src + '"]').addClass('show');
    }

    // 地理定位
    function getGeog() {
        var $dataWeatherGeogTips = global.$settings.find('[data-weather-geog-tips]');
        var $dataWeatherGeog = global.$settings.find('[data-weather-geog]');
        $dataWeatherGeogTips.text('获取中');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                    $.getJSON('https://api.map.baidu.com/geocoder/v2/?ak=LjQMvqTu71wsnzIcjAQKIWykPN1S9uQ7&callback=?&location=' + position.coords.latitude + ',' + position.coords.longitude + '&output=json&pois=1', function (res) {
                        //addressComponent => {city: "广州市", district: "天河区", province: "广东省", street: "广州大道", street_number: "中922号-之101-128"}
                        $dataWeatherGeogTips.text('成功');
                        $dataWeatherGeog.val(res.result.addressComponent.district.replace(/[区,县,市,省]$/, ''));
                    });
                },
                function (error) {
                    $dataWeatherGeogTips.text('失败');
                    $dataWeatherGeog.val('');
                });
        } else {
            $dataWeatherGeogTips.text('失败');
            $dataWeatherGeog.val('');
        }
    }

    // toast
    global.toastTimer = null;
    function setToast(text) {
        var $toast = $('#toast');
        if (text) {
            $toast.addClass('show').find('[data-toast-text]').text(text);
            global.toastTimer && clearTimeout(global.toastTimer);
            global.toastTimer = setTimeout(function () {
                $toast.removeClass('show');
            }, 2000);
        } else {
            $toast.removeClass('show');
        }
    }

    // 配置数据有效性判断
    function vConfig(config) {
        try {
            var flag = true;
            JSON.stringify(config);
            if ('url' in config.settings.sites[config.settings.sites.src]) {
                $.ajax({
                    async: false,
                    type: 'GET',
                    url: config.settings.sites[config.settings.sites.src].url,
                    dataType: 'text',
                    success: function (res) {
                        if (!vSites(res)) {
                            flag = false;
                        }
                    },
                    error: function () {
                        flag = false;
                    }
                });
                if (!flag) {
                    return false;
                }
            } else if ('data' in config.settings.sites[config.settings.sites.src]) {

            } else {
                return false;
            }
            if ('url' in config.settings.search[config.settings.search.src]) {
                $.ajax({
                    async: false,
                    type: 'GET',
                    url: config.settings.search[config.settings.search.src].url,
                    dataType: 'text',
                    success: function (res) {
                        if (!vSearch(res)) {
                            flag = false;
                        }
                    },
                    error: function () {
                        flag = false;
                    }
                });
                if (!flag) {
                    return false;
                }
            } else if ('data' in config.settings.search[config.settings.search.src]) {

            } else {
                return false;
            }
            if (config.settings.weather.show == 'true') {
                $.ajax({
                    async: false,
                    type: 'GET',
                    url: 'https://dh.wwzc.cc/weather.php',
                    data: {city: config.settings.weather[config.settings.weather.location].city},
                    dataType: 'json',
                    success: function (res) {
                        if (!res.data.weather.content.today.pm25) {
                            flag = false;
                        }
                    },
                    error: function () {
                        flag = false;
                    }
                });
                if (!flag) {
                    return false;
                }
            } else if (config.settings.weather.show == 'false') {

            } else {
                return false;
            }
            if (!(config.settings.header.show == 'true' || config.settings.header.show == 'false')) {
                return false;
            }

            return true;
        } catch (e) {
            return false;
        }
    }

    // 站点数据有效性判断
    function vSites(sitesDataText) {
        try {
            var sitesData = JSON.parse(sitesDataText);
            for (var key in sitesData.tabs) {
                if (sitesData.sites[key]) {
                    for (var i in sitesData.sites[key]) {
                        if (sitesData.sites[key][i].title.length < 1) {
                            return false;
                        }
                    }
                } else {
                    return false;
                }

            }
            return true;
        } catch (e) {
            return false;
        }
    }

    // 搜索数据有效性判断
    function vSearch(searchDataText) {
        try {
            var searchData = JSON.parse(searchDataText);
            for (var key in searchData) {
                if (searchData[key].title.length < 1 || searchData[key].urlKw.length < 1) {
                    return false;
                }
            }
            return true;
        } catch (e) {
            return false;
        }

    }

    // 保存站点数据
    function saveSites(data) {
        try {
            // data = JSON.parse(data);
            localSave('sites', data);
            return true;
        } catch (e) {
            return false;
        }
    }

    // 保存搜索数据
    function saveSearch(data) {
        try {
            // data = JSON.parse(data);
            localSave('search', data);
            return true;
        } catch (e) {
            return false;
        }
    }

    // 保存配置
    function saveConfig(config, vBool) {
        if (vBool) {
            if (!vConfig(config)) {
                setToast('配置保存失败');
                return false;
            }
        }
        localSave('config', JSON.stringify(config));
        setToast('配置已保存');
        return true;
    }

    // 保存关键词
    function saveKw(kw) {
        var localKw = localSave('kw') || '[]';
        var arrKw = JSON.parse(localKw);
        var index = arrKw.indexOf(kw);
        if (index != -1) {
            arrKw.splice(index, 1);
        }
        arrKw.unshift(kw);
        localSave('kw', JSON.stringify(arrKw));
    }

    // 阻止默认行为
    function preventAndStop(e, boolPrevent, boolStop) {
        if(boolPrevent){
            if ( e && e.preventDefault ){
                e.preventDefault();  //支持DOM标准的浏览器
            } else {
                window.event.returnValue = false;  //IE
            }
        }
        if(boolStop){
            if ( e && e.stopPropagation ){
                e.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        }

    }
    // 添加数组indexOf支持
    function addIndexOf(){
        if(!Array.indexOf)
        {
        	Array.prototype.indexOf = function(obj)
        	{
        		for(var i=0; i<this.length; i++)
        		{
        			if(this[i]==obj)
        			{
        				return i;
        			}
        		}
        		return -1;
        	}
        }
    }
    // 添加placeholder支持
    function setPlaceholder() {
        if(!('placeholder' in document.createElement('input'))){
            // $(':input [name="kw"]').attr('placeholder');
            var $placeHolder = global.$search.find('[data-input="placeholder"]');
            // var $input = $('.search :input[name="kw"]');
            $placeHolder.addClass('show');
            $placeHolder.text(global.$input.attr('placeholder'))
                .on('click', function () {
                    global.$input.click().focus();
                });
            global.$input.on('keyup', setPlaceHolder)
                .on('propertychange', setPlaceHolder);
            function setPlaceHolder() {
                if(global.$input.val().length > 0){
                    $placeHolder.removeClass('show');
                }else {
                    $placeHolder.addClass('show');
                }
            }
            // $(':input[placeholder]').each(function(index, element) {
            //     var self = $(this), txt = self.attr('placeholder');
            //     self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
            //     var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left'), fontSize = self.css('font-size');
            //     var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:h, lineHeight:h+'px', fontSize:fontSize, paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
            //     self.on('focusin', function () {
            //         holder.hide();
            //     }).on('focusout', function () {
            //         if(!self.val()){
            //             holder.show();
            //         }
            //     });
            //     holder.click(function(e) {
            //         holder.hide();
            //         self.focus();
            //     });
            // });
        }
    };

    // 站点列表最后一列css支持
    function addSitesCss() {
        if(!$.support.cssFloat){//ie8及以下
            $('.main .table .sites li:nth-child(6n)').css('marginRight', 0);
        }
    }
    // 删除关键字
    function delKw(kw) {
        var localKw = localSave('kw') || '[]';
        var arrKw = JSON.parse(localKw);
        var index = arrKw.indexOf(kw);
        if(index != -1){
            arrKw.splice(index, 1);
            localSave('kw', JSON.stringify(arrKw));
        }
    }

    // 存储
    function localSave(key, val) {
        if (typeof(localStorage) == "undefined") {
            localStorage = (new (function () {
                var maxage = 60 * 60 * 24 * 1000;
                var path = '/';

                var cookie = getCookie();

                function getCookie() {
                    var cookie = {};
                    var all = document.cookie;
                    if (all === "")
                        return cookie;
                    var list = all.split("; ");
                    for (var i = 0; i < list.length; i++) {
                        var cookies = list[i];
                        var p = cookies.indexOf("=");
                        var name = cookies.substring(0, p);
                        var value = cookies.substring(p + 1);
                        cookie[name] = value;
                    }
                    return cookie;
                }

                var keys = [];
                for (var key in cookie)
                    keys.push(key);

                this.length = keys.length;

                this.key = function (n) {
                    if (n < 0 || n >= keys.length)
                        return null;
                    return keys[n];
                };

                this.setItem = function (key, value) {
                    if (!(key in cookie)) {
                        keys.push(key);
                        this.length++;
                    }

                    cookie[key] = value;
                    var cookies = key + "=" + value;
                    if (maxage)
                        cookies += "; max-age=" + maxage;
                    if (path)
                        cookies += "; path=" + path;

                    document.cookie = cookies;
                };

                this.getItem = function (name) {
                    return cookie[name] || null;
                };

                this.removeItem = function (key) {
                    if (!(key in cookie))
                        return;

                    delete cookie[key];

                    for (var i = 0; i < keys.length; i++) {
                        if (keys[i] === key) {
                            keys.splice(i, 1);
                            break;
                        }
                    }
                    this.length--;

                    document.cookie = key + "=; max-age=0";
                };

                this.clear = function () {
                    for (var i = 0; i < keys.length; i++)
                        document.cookie = keys[i] + "; max-age=0";
                    cookie = {};
                    keys = [];
                    this.length = 0;
                };
            })());
        }
        // 是的! 支持 localStorage  sessionStorage 对象!
        if (key == '') {
            localStorage.clear();
            return true;
        } else {
            if (val !== undefined) {
                localStorage.setItem(key, val);
                return true;
            } else {
                if (val == '') {
                    localStorage.removeItem(key);
                    return true;
                } else {
                    return localStorage.getItem(key);
                }
            }
        }

        // } else {
        //     // 抱歉! 不支持 web 存储。
        //     return false;
        // }
    }
// }();
