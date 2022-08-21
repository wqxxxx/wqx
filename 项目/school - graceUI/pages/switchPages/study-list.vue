<!-- 悦学习-习语 -->
<template>
	<gui-page>
		<template v-slot:gBody>
			<!-- 分类导航 -->
			<view class="gui-padding-x">
				<!-- tab栏切换动态改变激活样式 -->
				<scroll-view scroll-x :scroll-into-view="'yy_' + this.act">
					<view class="nav" style="display:flex;flex-direction:row;">
						<view class="nav-list" v-for="(item, index) in list" :key="item.bookTypeId" @tap="changeAct(item)" style="white-space: nowrap; padding: 10rpx;">
							<!-- 激活样式名字是红色 判断act==index 和act==item.id都行-->
							<view :class="[act == index ? 'name' : '']">{{ item.bookTypeName }}</view>
						</view>
					</view>
				</scroll-view>
				<!-- 内容的改变 -->
				<view class="fater">
					<view class="content bord gui-flex" v-for="(item, index) in data" :key="item.bookTypeId" style="margin-top: 40rpx;padding-bottom: 40rpx;">
						<!-- 弹窗 -->
						<view class="gui-list-items" @tap="open1(item.bookImage)"><image class="img" :src="data[index].bookImage"></image></view>

						<view class="gui-flex gui-column viemtile">
							<text class="textsize">{{ item.bookContent }}</text>
							<text class="one">{{ item.bookDigest }}</text>
						</view>
					</view>

					<!-- 居中弹出 -->
					<gui-popup ref="guipopup1">
						<image style="width:580rpx;" mode="widthFix" :src="pic"></image>
						<!-- 关闭按钮 -->
						<text class="gui-block demo-close gui-icons gui-color-white gui-absolute-rt" @tap.stop="close1">&#xe78a;</text>
					</gui-popup>
				</view>
			</view>
		</template>
	</gui-page>
</template>
<script>
export default {
	data() {
		return {
			// 默认激活样式是第一个
			act: 0,
			// 切换卡
			list: [],
			//切换卡内容
			content: [],
			data: [],
			pic: ''
		};
	},

	onLoad: function() {
		this.onShow();
		this.getTitle();
	},

	methods: {
		//居中弹出
		open1: function(e) {
			console.log(e);
			this.pic = e;
			this.$refs.guipopup1.open();
		},
		close1: function() {
			this.$refs.guipopup1.close();
		},
		changeAct(item) {
			// 激活样式是当前点击的对应下标--list中对应id
			this.act = item.bookTypeId - 1;
			this.getContent(item);

			// 可以根据点击事件改变内容
			this.content = item;
		},
		onShow() {
			// 页面默认显示的是list列表中第一条数据
			this.content = this.data;
		},
		getContent(item) {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/book/listAllType?bookType=${item.bookTypeId}`,
				method: 'GET',
				success: res => {
					let picdata = res.data.rows;
					//console.log(this.data);
					for (var i = 0; i < picdata.length; i++) {
						picdata[i].bookImage = `${getApp().globalData.baseUrl}` + picdata[i].bookImage;
					}
					this.data = picdata;
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		getTitle() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/bookType/listAll`,
				method: 'GET',
				success: res => {
					//console.log(res.data.rows);
					this.list = res.data.rows;
					this.getContent(this.list[0]);
				},
				fail: err => {
					console.log(err);
				}
			});
		}
	}
};
</script>

<style scoped>
.nav {
	height: 119rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	line-height: 119rpx;
	font-size: 31rpx;
	letter-spacing: 2rpx;
}

.viemtile {
	margin: 0 56rpx 0 40rpx;
}
.nav-list {
	height: 100%;
	opacity: 0.9;
}

.nav-list .name::before {
	content: '';
	display: inline-block;
	margin-right: 10rpx;
	width: 20rpx;
	height: 20rpx;
	background-color: rgb(223, 186, 124);
}

.fater > view:last-child {
	border-bottom: none;
}

.bord {
	border-bottom: 1rpx solid #404040;
}

.one {
	font-size: 19rpx;
	color: #656464;
	text-indent: 55rpx;
	display: inline-block;
	word-break: break-all;
	white-space: pre-wrap;
	text-align: justify;
	padding-top: 30rpx;
}

.textsize {
	padding-bottom: 0.2rpx;
	font-weight: 600;
	padding-top: 1.2rpx;
	font-size: 26rpx;
	text-indent: 55rpx;
	display: inline-block;
	word-break: break-all;
	white-space: pre-wrap;
}
.demo-close {
	width: 100rpx;
	height: 100rpx;
	line-height: 100rpx;
	opacity: 0.88;
	text-align: center;
	font-size: 58rpx;
}
.demo-lr {
	flex: 1;
	height: 200rpx;
}
.demo-lr-items {
	height: 120rpx;
	line-height: 120rpx;
	text-align: center;
	overflow: hidden;
}

.img {
	width: 168rpx;
	height: 287rpx;
}
</style>
