<!-- 越党校-新闻 -->
<template>
	<gui-page>
		<template v-slot:gBody>
			<!-- 轮播图 -->
			<view style="width: 100%;">
				<gui-swiper :swiperItems="swiperItems2" :width="750" :spacing="0" :padding="0" borderRadius="0rpx" imgMode="height" style="width: 100%;"></gui-swiper>
			</view>
			<!-- 新闻列表 -->
			<view class="fater">
				<view class="gui-dark-bg-level-3 bord" style="padding: 30rpx 20rpx;" v-for="(list, index) in newList">
					<view class="gui-flex gui-justify-content-start ">
						<view class="right">
							<a :href="list.newUrl"><image class="pic" :src="newList[index].newImage"></image></a>
						</view>
						<view class="gui-flex gui-column" style="width: 57%;">
							<a :href="list.newUrl" class="atext">
								<text class="textone">{{ list.newTitle }}</text>
							</a>
							<text class="texttwo">{{ list.newContent }}</text>
							<view class=" flexone">
								<image src="../../static/time.png" class="img"></image>
								<text class="timesize">{{ list.newTime }}</text>
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
			newList: []
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
						let item = { img: `${getApp().globalData.baseUrl}` + arr[key] };
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
				url: `${getApp().globalData.baseUrl}/yuecheng/news/listAll`,
				method: 'GET',
				success: res => {
					console.log(res.data.rows);
					let data = res.data.rows;
					for (var i = 0; i < data.length; i++) {
						data[i].newImage = `${getApp().globalData.baseUrl}` + data[i].newImage;
					}
					this.newList = data;
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
.bord {
	border-bottom: 1rpx solid #b8b8b8;
}

.fater {
	margin: 10rpx 15rpx 15rpx;
}

.fater > view:last-child {
	border-bottom: none;
}

::v-deep .gui-swiper-card {
	width: 100% !important;
	height: 449rpx !important;
	.gui-swiper-card-image {
		width: 100% !important;
		height: 449rpx !important;
	}
}
::v-deep .gui-indicator-dots {
	width: 100% !important;
	height: 100rpx !important;
	.gui-indicator-dot {
		width: 20rpx !important;
		height: 20rpx !important;
	}
}

.pic {
	width: 231rpx;
	height: 183rpx;
}

.atext {
	margin-bottom: 13rpx;
	overflow: hidden;
	text-decoration: none;
	color: inherit;
	.textone {
		font-size: 31rpx;
	}
}

.texttwo {
	font-size: 22rpx;
	text-overflow: ellipsis;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
	word-wrap: break-word;
	word-break: normal;
	color: #797979;
}

.right {
	margin-right: 20rpx;
}

.flexone {
	margin-top: 45rpx;
	margin-right: -18rpx;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	.img {
		width: 26rpx;
		height: 26rpx;
	}
	.timesize {
		font-size: 20rpx;
		color: #3d3d3d;
		padding-left: 5rpx;
	}
}
</style>
