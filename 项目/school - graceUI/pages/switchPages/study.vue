<!-- 悦学习首页 -->
<template>
	<gui-page>
		<template v-slot:gBody>
			<!-- 轮播图 -->
			<view style="width: 100%;">
				<a @tap="getList">
					<gui-swiper :swiperItems="swiperItems2" :width="750" :spacing="0" :padding="0" borderRadius="0rpx" imgMode="height" style="width: 100%;"></gui-swiper>
				</a>
			</view>
			<!-- 书香校园 -->
			<view class="div">
				<view class="gui-flex gui-row gui-space-between gui-align-items-center ">
					<text class="left">书香校园</text>
					<text class="more" @tap="more">更多>></text>
				</view>
				<view class=" fater">
					<view class=" bord" v-for="(item, index) in book" :key="index">
						<view class=" gui-flex ">
							<view>
								<a :href="item.bookUrl"><image :src="book[index].bookImage" class="imgtu"></image></a>
							</view>
							<view class="gui-flex gui-column gui-justify-content-start gui-align-items-start right">
								<a :href="item.bookUrl" style="text-decoration:none;color: inherit ;">
									<text class="book">{{ item.bookName }}</text>
								</a>
								<text class="time">更新时间：{{ item.bookTime }}</text>
								<view class="people">
									<text style="color: #999999;">浏览人次</text>
									<text class="people2">{{ item.bookPeople }}次</text>
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
			book: []
		};
	},
	methods: {
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
		getList: function() {
			uni.navigateTo({
				url: 'study-list'
			});
		},
		more: function() {
			window.location.href = 'https://book.yunzhan365.com/bookcase/glic/index.html';
		},
		getBook: function() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/book/listAll`,
				method: 'GET',
				success: res => {
					console.log(res.data.rows);
					let data = res.data.rows;
					for (var i = 0; i < data.length; i++) {
						data[i].bookImage = `${getApp().globalData.baseUrl}` + data[i].bookImage;
					}
					this.book = data;
				},
				fail: err => {
					console.log(err);
				}
			});
		}
	},
	onLoad: function() {
		this.getInfo();
		this.getBook();
	}
};
</script>

<style scoped lang="scss">
::v-deep .gui-swiper-card {
	width: 100% !important;
	height: 504rpx !important;
	.gui-swiper-card-image {
		width: 100% !important;
		height: 504rpx !important;
	}
}
::v-deep .gui-indicator-dots {
	width: 100% !important;
	height: 50rpx !important;
	.gui-indicator-dot {
		width: 20rpx !important;
		height: 20rpx !important;
	}
}

.div {
	margin: 58rpx 40rpx 56rpx 68rpx;
}

.left {
	border-bottom: 1rpx solid #ff9538;
	padding: 0 17rpx 6rpx;
	font-size: 35rpx;
}

.right {
	margin-left: 22rpx;
}
.more {
	font-size: 24rpx;
}

.time {
	font-size: 19rpx;
	color: #999999;
	margin-top: 17rpx;
}
.imgtu {
	width: 142rpx;
	height: 210rpx;
}
.gui-list-title-text {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 13rem;
}

.book {
	font-size: 23rpx;
	margin-top: 14rpx;
}
.bord {
	border-bottom: 1rpx solid #bdbcb7;
	margin-bottom: 0.4rem;
	padding: 33rpx 6rpx 26rpx 19rpx;
}

.fater > view:last-child {
	border-bottom: none;
}

.people {
	margin-top: 95rpx;
	font-size: 19rpx;
}

.people2 {
	font-weight: 600;
	margin-left: 11rpx;
}
</style>
