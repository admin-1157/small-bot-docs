const nav = require('./themeConfig/nav.js');
// const sidebar = require('./themeConfig/sidebar.js');

// 主题配置
module.exports = {
  nav, // 顶部导航栏
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: 'ReadSmall/small-bot-docs', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  editLinks: true, // 启用编辑链接
  docsDir: 'docs', // 编辑的文件夹
  docsBranch: 'master', // 编辑的分支
  editLinkText: '帮助我们改善此页面',
  searchPlaceholder: "搜索一下",

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框
  updateBar: { // 最近更新栏
    showToArticle: false, // 显示到文章页底部，默认true
  },
  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: '小念', // 必需
    link: 'https://github.com/ReadSmall', // 可选的
  }, 
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    iconfontCssFile: '//at.alicdn.com/t/c/font_3565646_ejrtev8gcms.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/ReadSmall',
      },
      {
        iconClass: 'icon-shequ',
        title: '官方频道',
        link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1W6qRMB&businessType=9&from=246610&biz=ka',
      },
      {
        iconClass: 'icon-aixinjuanzeng',
        title: '爱发电',
        link: 'https://afdian.net/@nian-bot',
      },
    ],
  },
  footer: { // 页脚信息
    createYear: 2022, // 博客创建年份
    copyrightInfo:
        '小念同学 | ' +
        '| MIT License' + 
        '<br /><div style="width:300px;margin:0 auto; padding:20px 0;">' + 
        '<a href="http://beian.miit.gov.cn/" target="_blank">赣ICP备2021009205号-3</a><br />'+
        '<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36082702000206" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">' +
        '<img src="./beian.png" style="float:left;"/>' + 
        '<p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">赣公网安备 36082702000206号</p>' + 
        '</a>' + 
        '</div>',
  },
}