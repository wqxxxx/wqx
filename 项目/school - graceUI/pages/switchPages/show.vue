<!-- 阅展厅首页 -->
<template>
	<gui-page>
		<template v-slot:gBody>
			<!-- 轮播图 -->
			<view style="width: 100%;">
				<gui-swiper
					:swiperItems="swiperItems2"
					:width="750"
					:height="500"
					:spacing="0"
					:padding="0"
					borderRadius="0rpx"
					imgMode="height"
					:indicatorBarHeight="200"
					style="width: 100%;"
				></gui-swiper>
			</view>
			<!-- 导航 -->
			<view class="gui-grid gui-bg-white gui-padding" style="width: 88%;">
				<view class="gui-grid-item grid4" @tap="tapHall">
					<image class="gui-grid-icon-img" src="../../static/show/watch.png" style="height: 2.2rem;width: 2.7rem;"></image>
					<text class="gui-grid-text gui-primary-text">云上看展</text>
				</view>
				<view class="gui-grid-item grid4" @tap="tapBooking">
					<image class="gui-grid-icon-img" src="../../static/show/booking.png" style="height: 2.2rem;width: 2.7rem;"></image>
					<text class="gui-grid-text gui-primary-text">预约展厅</text>
				</view>
			</view>
			<!-- 云上看展 -->
			<div class="gui-flex gui-space-between gui-align-items-center title" v-if="list.length > 0">
				<text class="tit">云上展览</text>
				<text @click="tapHall">更多>></text>
			</div>
			<view class="gui-flex gui-space-between gui-wrap list">
				<view class="item" v-for="(item, index) in list" :key="index">
					<a :href="item.exhibitionUrl">
						<image :src="api + item.exhibitionImage" alt=""></image>
						<text>{{ item.exhibitionTitle }}</text>
					</a>
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
			list: [],
			api: getApp().globalData.baseUrl
		};
	},
	methods: {
		tapBooking: function() {
			uni.navigateTo({
				url: 'show-booking'
			});
		},
		tapHall: function() {
			uni.navigateTo({
				url: 'show-hall'
			});
		},
		getInfo: function() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/home/listOne?address=3`,
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
		getList: function() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/exhibition/listAll`,
				method: 'GET',
				success: res => {
					if (res.data.code === 200) {
						this.list = res.data.rows;
					}
				},
				fail: err => {
					console.log(err);
				}
			});
		}
	},
	onLoad: function() {
		this.getInfo();
		this.getList();
	}
};
</script>

<style scoped lang="scss">
.gui-grid {
	margin-top: -60rpx;
	margin: -80rpx auto;
	padding-left: 0.03rem;
	z-index: 2;
	border-radius: 10px;
	box-shadow: -0.4rem 0.2rem 0.4rem #bcbcbc;
}

.grid4 {
	width: 160rpx;
}

.gui-h5 {
	border-bottom: 1px solid #ff9538;
	padding: 0 0.4rem 0.2rem;
}

.gui-list-title-text {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 13rem;
}
::v-deep .gui-swiper-card {
	width: 100% !important;
	height: 560rpx !important;
	.gui-swiper-card-image {
		width: 100% !important;
		height: 560rpx !important;
	}
}
::v-deep .gui-indicator-dots {
	width: 100% !important;
	height: 200rpx !important;
	.gui-indicator-dot {
		width: 20rpx !important;
		height: 20rpx !important;
	}
}
.title {
	padding: 0rpx 50rpx;
	margin-top: 100rpx;
	font-size: 24rpx;
	font-family: Source Han Sans CN;
	font-weight: 400;
	color: #3d3d3d;
	.tit {
		font-size: 35rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: #3d3d3d;
		padding: 10rpx;
		border-bottom: 4rpx solid #d6b264;
	}
}
.list {
	padding: 0rpx 50rpx;
	.item {
		width: 48%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 20rpx 40rpx;
		box-sizing: border-box;
		image {
			width: 305rpx;
			height: 200rpx;
			margin-bottom: 10rpx;
			border-radius: 30rpx;
		}
	}
}
</style>
