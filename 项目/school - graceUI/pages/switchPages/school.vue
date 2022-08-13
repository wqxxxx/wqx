<!-- 越党校首页 -->
<template>
	<gui-page>
		<template v-slot:gBody>
			<!-- 轮播图 -->
			<view style="width: 100%;">
				<gui-swiper :swiperItems="swiperItems2" :width="750" :spacing="0" :padding="0" borderRadius="0rpx" imgMode="height" style="width: 100%;"></gui-swiper>
			</view>
			<!-- 导航 -->
			<view class="gui-grid gui-bg-white gui-padding ">
				<view class="gui-grid-item grid4" @tap="tapNew">
					<image class="gui-grid-icon-img" src="../../static/school/1.png"></image>
					<text class="gui-grid-text gui-primary-text">校园新闻</text>
				</view>
				<view class="gui-grid-item grid4" @tap="tapIntroduction">
					<image class="gui-grid-icon-img" src="../../static/school/2.png"></image>
					<text class="gui-grid-text gui-primary-text">党校简介</text>
				</view>
				<view class="gui-grid-item grid4" @tap="tapForum">
					<image class="gui-grid-icon-img" src="../../static/school/3.png"></image>
					<text class="gui-grid-text gui-primary-text">交流论坛</text>
				</view>
				<view class="gui-grid-item grid4" @tap="tapRefer">
					<image class="gui-grid-icon-img" src="../../static/school/4.png"></image>
					<text class="gui-grid-text gui-primary-text">心得/作业提交</text>
				</view>
			</view>
			<!-- 校园新闻 -->
			<view class="gui-padding-new">
				<view class="gui-margin-top gui-flex gui-row gui-space-between gui-align-items-center" style="margin-bottom: 10rpx;">
					<text class="gui-lun">校园新闻</text>
					<text class="gui-block " @tap="more1">更多>></text>
				</view>
				<view class="gui-list lista">
					<view class="gui-list-items " v-for="(item, index) in new" :key="index">
						<view class="gui-list-body " style="padding-bottom: 5rpx; padding-top: 5rpx;">
							<view class="gui-list-title ">
								<a :href="item.newUrl" style="text-decoration:none;color: inherit;">
									<text class="gui-list-title-text-one">{{ item.newTitle }}</text>
								</a>
								<text class="gui-list-title-desc text-two" style="color: #B3B3B3 ;">{{ item.newTime }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 交流论坛 -->
			<view class="gui-padding-new">
				<view class=" gui-flex gui-row gui-space-between gui-align-items-center">
					<text class="gui-lun">交流论坛</text>
					<text class="gui-block" @tap="more2">更多>></text>
				</view>
				<view class="gui-list fater">
					<view class="gui-list-items bord" v-for="(item, index) in forum" :key="index">
						<view class=" gui-list-body ">
							<view class=" gui-list-title gui-flex gui-columns gui-align-items-start">
								<text class="gui-list-title-text-two" v-html="forum[index].interflowTitle"></text>
								<view class="gui-flex" style="margin: 20rpx 0;">
									<view class="gui-flex gui-align-items-center" style="padding-right: 25rpx;">
										<text style="font-size: 10rpx;padding-right:4rpx ;color:#B3B3B3 ;" class="fontone">{{ item.interflowState }}</text>
										<img src="../../static/msg.png" style="width:28rpx;height:28rpx;" />
									</view>
									<view class="gui-flex gui-align-items-center">
										<text style="font-size:10rpx; padding-right: 4rpx; color:#B3B3B3 " class="fontone">{{ item.interflowLike }}</text>
										<img src="../../static/like.png" style="width:28rpx;height:27rpx;" />
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
	</gui-page>
</template>
<script>
export default {
	data() {
		return {
			swiperItems2: [],
			new: [],
			forum: []
		};
	},
	methods: {
		tapNew: function() {
			uni.navigateTo({
				url: 'school-new'
			});
		},
		tapIntroduction: function() {
			uni.navigateTo({
				url: 'school-introduction'
			});
		},
		tapForum: function() {
			uni.navigateTo({
				url: 'school-forum'
			});
		},
		tapRefer: function() {
			uni.navigateTo({
				url: 'school-refer'
			});
		},
		more1: function() {
			uni.navigateTo({
				url: 'school-new'
			});
		},
		more2: function() {
			uni.navigateTo({
				url: 'school-forum'
			});
		},
		getInfo: function() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/home/listOne?address=0`,
				method: 'GET',
				success: res => {
					let data = res.data.data.homeImage;
					let arr = data.split(',');
					let b = [];
					Object.keys(arr).forEach(key => {
						let item = {
							img: `${getApp().globalData.baseUrl}` + arr[key]
						};
						b.push(item);
					});
					this.swiperItems2 = b;
					// console.log(this.swiperItems2);
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		getNew: function() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/news/listAllTop4`,
				method: 'GET',
				success: res => {
					//console.log(res.data.rows);
					this.new = res.data.rows;
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		getForum: function() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/interflow/listTop3`,
				method: 'GET',
				success: res => {
					let data = res.data.data;
					//console.log(data);
					this.forum = data;
				},
				fail: err => {
					console.log(err);
				}
			});
		}
	},
	onLoad: function() {
		this.getInfo();
		this.getNew();
		this.getForum();
	}
};
</script>

<style scoped lang="scss">
.gui-grid {
	padding: 40rpx 0;
	margin: -100rpx 24rpx 0 39rpx;
	z-index: 2;
	border-radius: 22rpx;
	box-shadow: -12rpx 6rpx 12rpx #bcbcbc;
}

.gui-lun {
	border-bottom: 1rpx solid #ff9538;
	padding: 0 12rpx 6rpx;
	font-size: 35rpx;
	margin-bottom: 10rpx;
}

.bord {
	border-bottom: 1rpx solid #bdbcb7;
	margin-bottom: 12rpx;
}

.fater > view:last-child {
	border-bottom: none;
}

::v-deep .gui-swiper-card {
	width: 100% !important;
	height: 524rpx !important;
	.gui-swiper-card-image {
		width: 100% !important;
		height: 524rpx !important;
	}
}

::v-deep .gui-indicator-dots {
	width: 100% !important;
	height: 250rpx !important;
	.gui-indicator-dot {
		width: 22rpx !important;
		height: 22rpx !important;
	}
}

::v-deep .gui-grid {
	width: 688rpx !important;
	height: 236rpx !important;
	padding: 20rpx 0 !important;
	display: flex !important;
	justify-content: space-around;
	align-items: center;
	.gui-grid-item {
		flex-shrink: 1 !important;
		display: flex !important;
		flex-direction: column !important;
		.gui-grid-text {
			white-space: nowrap;
		}
	}
}

::v-deep .gui-padding-new {
	margin: 20rpx 39rpx 0;
}

::v-deep .gui-block {
	font-size: 24rpx;
}

.gui-list-title-text-one {
	font-size: 25rpx !important;
	width: 450rpx;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	display: inline-block;
	-webkit-line-clamp: 1;
	word-break: break-all;
	color: #474747;
}

.gui-list-title-text-two {
	font-size: 25rpx !important;
}

.text-two {
	font-size: 18rpx !important;
}
::v-deep .lista {
	margin-left: -10rpx;
	padding-bottom: 5rpx;
	padding-top: 5rpx;
}

::v-deep .fater .bord .gui-list-body {
	margin-left: 10rpx;
	padding-bottom: 5rpx;
	padding-top: 5rpx;
}

.fontone {
	font-size: 19rpx !important;
}
</style>
