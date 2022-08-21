<script>
export default {
	onLaunch: function() {
		// #ifdef APP-PLUS
		plus.screen.lockOrientation('portrait-primary');
		const dom = weex.requireModule('dom');
		dom.addRule('fontFace', {
			fontFamily: 'graceIconfont',
			src: "url('/Grace6/font/grace.ttf')"
		});
		// #endif
	},
	onShow: function() {},
	onHide: function() {},
	globalData: {
		baseUrl: 'https://partyschool.jinlanzuan.com'
		// baseUrl: 'https://m.xphadmin.com/yuecheng-api'
		// baseUrl: 'http://192.168.31.120:8083'
	}
};
</script>
<style lang="scss">
/* 加载框架核心样式 */
@import './Grace6/css/grace.scss';
/* 加载深色模式适配样式 */
@import './Grace6/css/graceDark.scss';
/* 加载自定义样式 */
@import './custom/custom.scss';
/* 加载图标字体 - 条件编译模式 */
/* #ifdef APP-PLUS-NVUE */
.gui-icons {
	font-family: graceIconfont;
}
/* #endif */
/* #ifndef APP-NVUE */
page {
	background: white;
}
html,
body {
	max-width: 750px;
	min-width: 320px;
	margin: auto;
}
@media only screen and (max-width: 320px) {
	html {
		font-size: 13.6533px !important;
	}
}
@media only screen and (min-width: 750px) {
	html {
		font-size: 32px !important;
	}
}
/* #endif */
</style>
