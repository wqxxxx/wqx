<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			const dom = weex.requireModule('dom');
			dom.addRule('fontFace', { 
				'fontFamily': "graceIconfont",
				'src': "url('/Grace6/font/grace.ttf')"
			});
			// #endif
		},
		onShow: function(){},
		onHide: function(){}
	}
</script>
<style lang="scss">
/* 加载框架核心样式 */
@import "./Grace6/css/grace.scss";
/* 加载深色模式适配样式 */
@import "./Grace6/css/graceDark.scss";
/* 加载自定义样式 */
@import "./custom/custom.scss";
/* 加载图标字体 - 条件编译模式 */
/* #ifdef APP-PLUS-NVUE */
.gui-icons{font-family:graceIconfont;}
/* #endif */
/* #ifndef APP-NVUE */
page{background:#F8F8F8;}
/* #endif */
</style>