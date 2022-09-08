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
					v-if="isImg == 1"
				></gui-swiper>
			</view>

			<view class="outer">
				<!-- <view class="bg" :style="bgImg ? 'background-image:' + 'url(' + bgImg + ')' : ''"> -->
				<view class="list" v-for="(item, index) in list">
					<view class="main">
						<view class="title">{{ item.title }}</view>
						<view class="mainText"><view class="mainContent" v-html="item.text_text"></view></view>
					</view>
					<view class="sign">></view>
				</view>
				<!-- </view> -->
			</view>
		</template>
	</gui-page>
</template>
<script>
export default {
	data() {
		return {
			swiperItems2: [],
			isImg: 1,
			oid: '',
			list: [],
			typeid: ''
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

					// 标题:
					uni.setNavigationBarTitle({
						title: data.project_name
					});

					// if (data.bodyimagelist[0]) {
					// 	this.bgImg = data.bodyimagelist[0].body_img;
					// } else {
					// 	this.bgImg = '';
					// }

					if (data.bannerlist.length !== 0) {
						this.isImg = 1;
					} else {
						this.isImg = 0;
					}

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

					this.oid = data.o_id;
					this.typeid = data.texttype_id;
					if (this.typeid !== '') {
						this.getData(this.oid, this.typeid);
					}
				});
		},

		getData(id, typeid) {
			fetch(`http://${window.location.host}/api/textcontent/getApi?o_id=${id}&text_type_id=${typeid}`)
				// fetch(`http://company.xphadmin.com:9091/api/textcontent/getApi?o_id=${id}&text_type_id=${typeid}`)
				.then(res => {
					return res.json();
				})
				.then(res => {
					console.log(res.data.list);
					this.list = res.data.list;

					// this.list.forEach(item => {
					// 	let arr = item.text_text.split(/[\r\n]+/);
					// 	this.list.forEach(item => (item.text = arr));
					// });
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

.outer {
	margin: 30rpx 25rpx 0;
	// .bg {
	// min-height: calc(100vh - 484rpx);
	// }
	.list {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
		border-bottom: 1px solid gray;
		align-items: center;
		.main {
			.title {
				font-size: 30rpx;
				margin-bottom: 10rpx;
			}
			.mainText {
				font-size: 25rpx;
				color: darkgray;
				margin-bottom: 20rpx;
				.mainContent {
					margin-bottom: 5rpx;
				}
			}
		}
		.sign {
			margin-left: 15rpx;
			margin-right: 10rpx;
		}
	}
}
</style>
