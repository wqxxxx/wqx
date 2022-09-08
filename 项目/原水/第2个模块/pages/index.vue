<template>
	<gui-page>
		<template v-slot:gBody>
			<view style="width: 100%;">
				<gui-swiper
					:swiperItems="swiperItems2"
					@taped="taped"
					:width="750"
					:height="400"
					:spacing="0"
					:padding="0"
					borderRadius="0rpx"
					indicatorType="none"
					style="width: 100%;"
					imgMode="height"
				></gui-swiper>
			</view>
			<!-- 一排 -->
			<view v-if="type == 1" class="one">
				<view class="all">
					<view class="all-list" v-for="item in oneList">
						<a :href="item.linkurl == '' ? 'javascript:void(0)' : item.linkurl"><image :src="item.imgurl"></image></a>
						<view v-if="title == 1" class="title">
							<text v-if="title == 1">{{ item.title }}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 两排 -->
			<view v-else-if="type == 2" class="two">
				<view class="all">
					<view class="all-list" v-for="item in twoList">
						<a :href="item.linkurl == '' ? 'javascript:void(0)' : item.linkurl">
							<image :src="item.imgurl"></image>
							<text v-if="title == 1">{{ item.title }}</text>
						</a>
					</view>
				</view>
			</view>
			<!-- 三排 -->
			<view v-else-if="type == 3" class="three">
				<view class="all">
					<view class="all-list" v-for="item in threeList">
						<a :href="item.linkurl == '' ? 'javascript:void(0)' : item.linkurl">
							<image :src="item.imgurl"></image>
							<text v-if="title == 1">{{ item.title }}</text>
						</a>
					</view>
				</view>
			</view>
			<!-- 四排 -->
			<view v-else class="four">
				<view class="all">
					<view class="all-list" v-for="item in fourList">
						<a :href="item.linkurl == '' ? 'javascript:void(0)' : item.linkurl">
							<image :src="item.imgurl"></image>
							<text v-if="title == 1">{{ item.title }}</text>
						</a>
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
			type: '',
			swiperItems2: [],
			title: 0,
			oid: '',
			typeId: '',
			oneList: [],
			twoList: [],
			threeList: [],
			fourList: []
		};
	},
	methods: {
		taped: function(e) {
			console.log(e);
			if (this.swiperItems2[e].url) {
				window.open('https://' + this.swiperItems2[e].url);
			}
		},

		getJson() {
			fetch('./config.json?time=' + Date.now())
				.then(res => {
					return res.json();
				})
				.then(res => {
					let data = res.reception;
					console.log(data);

					this.title = data.is_title;
					this.oid = data.o_id;
					this.typeId = data.imagetype_id;

					this.type = data.sortType; // 几排显示
					if (this.type == 4) {
						this.getFour(this.oid, this.typeId);
					}
					if (this.type == 3) {
						this.getThree(this.oid, this.typeId);
					}
					if (this.type == 2) {
						this.getTwo(this.oid, this.typeId);
					}
					if (this.type == 1) {
						this.getOne(this.oid, this.typeId);
					}

					// 标题:
					uni.setNavigationBarTitle({
						title: data.project_name
					});

					// 导航图:
					let banner = data.bannerlist;
					// console.log(banner);
					banner.forEach((item, index) => {
						this.swiperItems2.push({
							img: item.banner_img,
							url: item.banner_link,
							opentype: 'click'
						});
					});
				});
		},

		getFour(oid, typeid) {
			fetch(`http://${window.location.host}/api/imagevideo/getApiImage?o_id=${oid}&img_type_id=${typeid}`)
				// fetch(`http://company.xphadmin.com:9091/api/imagevideo/getApiImage?o_id=${oid}&img_type_id=${typeid}`)
				.then(res => {
					return res.json();
				})
				.then(res => {
					console.log(res.data.list);
					this.fourList = res.data.list;
				});
		},
		getThree(oid, typeid) {
			// fetch(`http://company.xphadmin.com:9091/api/imagevideo/getApiImage?o_id=${oid}&img_type_id=${typeid}`)
			fetch(`http://${window.location.host}/api/imagevideo/getApiImage?o_id=${oid}&img_type_id=${typeid}`)
				.then(res => {
					return res.json();
				})
				.then(res => {
					console.log(res.data.list);
					this.threeList = res.data.list;
				});
		},
		getTwo(oid, typeid) {
			fetch(`http://${window.location.host}/api/imagevideo/getApiImage?o_id=${oid}&img_type_id=${typeid}`)
				// fetch(`http://company.xphadmin.com:9091/api/imagevideo/getApiImage?o_id=${oid}&img_type_id=${typeid}`)
				.then(res => {
					return res.json();
				})
				.then(res => {
					console.log(res.data.list);
					this.twoList = res.data.list;
				});
		},
		getOne(oid, typeid) {
			fetch(`http://${window.location.host}/api/imagevideo/getApiImage?o_id=${oid}&img_type_id=${typeid}`)
				// fetch(`http://company.xphadmin.com:9091/api/imagevideo/getApiImage?o_id=${oid}&img_type_id=${typeid}`)
				.then(res => {
					return res.json();
				})
				.then(res => {
					console.log(res.data.list);
					this.oneList = res.data.list;
				});
		}
	},
	onLoad() {
		this.getJson();
	}
};
</script>
<style scoped lang="scss">
::v-deep .gui-swiper-card {
	width: 100% !important;
	height: 400rpx !important;
	.gui-swiper-card-image {
		width: 100% !important;
		height: 400rpx !important;
	}
}

a {
	text-decoration: none;
	outline: none;
	color: #000;
}

.one {
	.all {
		margin: 40rpx 50rpx 0;
		.all-list {
			width: 100%;
			margin-bottom: 30rpx;
			.title {
				width: 100%;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				font-size: 28rpx;
			}
			image {
				height: 230rpx;
				width: 100%;
				margin: 0 auto;
				border-radius: 15rpx;
			}
		}
	}
}

.two {
	padding-top: 10rpx;
	.all {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.all-list {
			width: 45%;
			margin-bottom: 20rpx;
			margin-top: 10rpx;
			&:nth-last-child(odd) {
				margin-right: 20rpx;
			}
			&:nth-last-child(even) {
				margin-left: 20rpx;
			}
			a {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				image {
					width: 100%;
					height: 170rpx;
				}
				text {
					margin-top: 5rpx;
					font-size: 22rpx;
				}
			}
		}
	}
}

.three {
	padding-top: 20rpx;
	.all {
		margin: 0 2rpx 0 22rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		.all-list {
			flex: 1;
			// height: 180rpx;
			margin: 0rpx 20rpx 30rpx 0;
			width: calc((100% - 60rpx) / 3);
			min-width: calc((100% - 60rpx) / 3);
			max-width: calc((100% - 60rpx) / 3);
			&:nth-child(3n) {
				margin-right: 0;
			}
			a {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image {
					width: 100%;
					height: 170rpx;
					border-radius: 20rpx;
				}
				text {
					margin-top: 5rpx;
					font-size: 24rpx;
				}
			}
		}
	}
}

.four {
	padding-top: 40rpx;
	.all {
		display: flex;
		flex-wrap: wrap;
		margin: 0 35rpx;
		justify-content: flex-start;
		.all-list {
			flex: 1;
			width: calc((100% - 20rpx) / 4);
			min-width: calc((100% - 20rpx) / 4);
			max-width: calc((100% - 20rpx) / 4);
			margin-bottom: 40rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			a {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image {
					width: 80rpx;
					height: 80rpx;
				}
				text {
					margin-top: 10rpx;
					font-size: 23rpx;
				}
			}
		}
	}
}
</style>
