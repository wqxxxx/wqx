<!-- 越党校-交流论坛 -->
<template>
	<gui-page>
		<template v-slot:gBody>
			<view><image src="../../static/school-forum/header.png" style="width: 100%; height: 210rpx;"></image></view>
			<!-- 分类导航 -->
			<view class="gui-padding-x" style="margin-bottom: 40rpx;">
				<!-- tab栏切换动态改变激活样式 -->
				<view class="nav">
					<view class="nav-list" v-for="(item, index) in list" :key="item.id" @tap="changeAct(id, item)">
						<!-- 激活样式名字是红色 判断act==index 和act==item.id都行-->
						<view :class="[act == index ? 'name' : '']">{{ item.name }}</view>
					</view>
				</view>
				<!-- 内容的改变 -->
				<view class="fater">
					<view class="content bord" v-for="(item, index) in data" :key="item.id">
						<view class="flowtitle">{{ item.interflowTitle }}</view>
						<view class="flowcontent" v-html="item.interflowContent"></view>
						<!-- 图片区 -->

						<view class="pic">
							<!-- <gui-image :src="api + item1" style="width: 180rpx;height:180rpx"></gui-image> -->
							<image :src="api + item1" class="image" v-for="(item1, index1) in item.interflowImage" :key="index1"></image>
						</view>
						<!-- 评论 -->
						<view v-for="item2 in item.listComment" class="gui-flex gui-row listcoment">
							<view class="gui-flex gui-column" style="margin-right: 10rpx;">
								<!-- <image :src="item2.avatar" style="width: 60rpx;height: 60rpx;"></image> -->
								<text>{{ item2.Nickname }}:</text>
							</view>
							<view>
								<text>{{ item2.comment1.commentContent }}</text>
							</view>
						</view>
						<view class="gui-flex gui-row gui-margin-top gui-space-around" style="padding-bottom:48rpx; ">
							<!-- 评论按钮 -->
							<view class="gui-flex gui-justify-content-center" @tap="tapComment(item.interflowId, index)">
								<image src="../../static/school-forum/msg.png" class="pic2"></image>
								<text class="text2">{{ item.commentSum }}</text>
							</view>
							<!-- 点赞按钮 -->
							<view class="gui-flex gui-justify-content-center" @tap="tapFlowLike(item.interflowId, index)">
								<image :src="item.likesState == 1 ? '../../static/school-forum/active.png' : '../../static/school-forum/white.png'" class="pic2"></image>
								<text class="text2">{{ item.interflowLike }}</text>
							</view>
						</view>
						<!-- 增加评论 -->
						<view style="margin:0 50rpx;" v-show="item.showComment">
							<form @submit="submit">
								<view class="gui-flex gui-row gui-align-items-center ">
									<image src="../../static/msg.png" class="p3"></image>
									<input type="text" placeholder="请评论" maxlength="200" class="text3" v-model="form.comment" />
									<button class="btn" formType="submit">确定</button>
								</view>
							</form>
						</view>
					</view>
				</view>
				<!-- + -->
				<view style="position: fixed; z-index: 999999; right:10rpx; bottom: 400rpx;" @tap="refer">
					<image src="../../static/school-forum/+.png" style="width: 80rpx;height: 80rpx;"></image>
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
			list: [
				{
					id: 0,
					name: '校园版块'
				},
				{
					id: 1,
					name: '党政版块'
				},
				{
					id: 2,
					name: '生活版块'
				},
				{
					id: 3,
					name: '课程分享'
				}
			],
			//切换卡内容
			content: [],
			data: [],
			showComment: false,
			api: getApp().globalData.baseUrl,
			comment: '',
			form: {
				comment: '',
				interflowId: '',
				openid: 'oEkIz1ShAllHIFtDyEC1zC9_7dWA'
			}
		};
	},

	onLoad: function() {
		// localStorage.setItem(
		// 	'wxInfoSchool1',
		// 	JSON.stringify({
		// 		id: 2,
		// 		openid: 'oazaR6vLF84J5GkhTIh53nlj_tBc',
		// 		nickname: 'wqx',
		// 		avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/8EoZ4O9n12kLRDXKHVltSFtDYFL6pTPMewzuYCD2VialxkQhSVuuB7abpezdAA2y1YFFoBdwZLfURrb0eQJsvwA/132'
		// 	})
		// );
		if (!JSON.parse(localStorage.getItem('wxInfoSchool1'))) {
			var code = this.getUrlParam('code');
			var url = encodeURIComponent(window.location.href);
			if (code == null || code === '') {
				window.location.href =
					'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxce27b563db618734&redirect_uri=' +
					url +
					'&response_type=code&scope=snsapi_userinfo&state=state#wechat_redirect';
			} else {
				this.code = code;
				console.log(code);
				//console.log(this.api);
				this.getWxInfo_data(code);
			}
		} else {
			this.onShow();
			this.getForum(JSON.parse(localStorage.getItem('wxInfoSchool1')).id, 0);
		}
	},

	methods: {
		// 处理网址参数函数
		getUrlParam(name) {
			var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
			var url = window.location.href.split('#')[0];
			var search = url.split('?')[1];
			if (search) {
				var r = search.substr(0).match(reg);
				if (r !== null) return unescape(r[2]);
				return null;
			} else {
				return null;
			}
		},
		//跳发布
		refer: function() {
			console.log(this.act);
			uni.navigateTo({
				url: 'school-forum-refer?type=' + this.act
			});
		},
		// 评论
		tapComment: function(id, index) {
			if (this.data[index].showComment == true) {
				this.data[index].showComment = false;
			} else {
				this.data[index].showComment = true;
			}
			this.form.interflowId = id;
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/interflow/listComment?interflowId=${id}`,
				method: 'GET',
				success: res => {
					console.log(res.data.data);
					this.comment = res.data.data;
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		// 点赞
		tapFlowLike: function(interflowId, index) {
			let id = JSON.parse(localStorage.getItem('wxInfoSchool1')).id;
			console.log(interflowId);

			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/interflow/like?InterflowId=${interflowId}&id=${id}`,
				method: 'GET',
				success: res => {
					console.log(res);
					this.getForum(JSON.parse(localStorage.getItem('wxInfoSchool1')).id, this.act);
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		//提交
		submit: function(e) {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/comment/addComment`,
				method: 'POST',
				data: {
					commentContent: this.form.comment,
					interflowId: this.form.interflowId,
					openid: this.form.openid
				},
				success: res => {
					console.log(res);
					this.form.comment = '';
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		//切换版块
		changeAct(id, item) {
			// 激活样式是当前点击的对应下标--list中对应id
			this.act = item.id;
			this.getForum(JSON.parse(localStorage.getItem('wxInfoSchool1')).id, item.id);

			// 可以根据点击事件改变内容
			this.content = item;
		},
		onShow() {
			// 页面默认显示的是list列表中第一条数据
			this.content = this.data;
		},
		// 版块
		getForum(id, item) {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/interflow/listAll?interflowType=${item}&id=${id}`,
				method: 'GET',
				success: res => {
					this.data = res.data.data;
					console.log(this.data);
					let api = getApp().globalData.baseUrl;
					for (var i = 0; i < this.data.length; i++) {
						if (this.data[i].interflowImage) {
							this.data[i].interflowImage = this.data[i].interflowImage.split(',');
							this.data[i].showComment = false;
						}
					}
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		getWxInfo_data(item) {
			uni.request({
				url: `${this.api}/wxuser/login?code=${item}`,
				method: 'GET',
				success: res => {
					localStorage.setItem('wxInfoSchool1', JSON.stringify(res.data.data.user));
					this.onShow();
					this.getForum(JSON.parse(localStorage.getItem('wxInfoSchool1')).id, 0);
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
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	line-height: 100rpx;
	font-size: 30rpx;
	letter-spacing: 2rpx;
}

.nav-list {
	height: 100%;
	opacity: 0.9;
}

.nav-list .name::before {
	content: '';
	display: inline-block;
	margin-right: 8rpx;
	left: 0;
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

.flowtitle {
	padding-bottom: 8rpx;
	font-size: 32rpx;
	font-weight: 600;
	padding-top: 38rpx;
}
.flowcontent {
	font-size: 18rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	word-wrap: break-word;
	word-break: normal;
}
.pic {
	display: flex;
	margin-top: 20rpx;
}

.image {
	height: 150rpx;
	width: 20%;
	margin: 2.5%;
	border-radius: 15rpx;
	object-fit: cover;
}

.listcoment {
	margin: 20rpx 0;
	font-size: 20rpx;
}

.pic2 {
	width: 24rpx;
	height: 24rpx;
}

.text2 {
	font-size: 25rpx;
	padding-left: 8rpx;
}

.p3 {
	width: 30rpx;
	height: 30rpx;
	padding-right: 10rpx;
}

.text3 {
	font-size: 20rpx;
}
.btn {
	padding: 0 20rpx;
	height: 40rpx;
	font-size: 10rpx;
	line-height: 40rpx;
}
</style>
