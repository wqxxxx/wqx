<template>
	<gui-page>
		<template v-slot:gBody>
			<!-- banner 图 -->
			<view style="width: 100%;">
				<gui-swiper
					:swiperItems="swiperItems2"
					@taped="taped"
					:width="750"
					:height="420"
					:spacing="0"
					:padding="0"
					borderRadius="0rpx"
					indicatorType="none"
					style="width: 100%;"
					imgMode="height"
				></gui-swiper>
			</view>
			<!-- 搜索 -->
			<view class="search" v-show="showSearch == 1">
				<input type="text" placeholder="搜索" v-model="search" @input="inputSearch($event, current)" style=" line-height:30px; height:30px; font-size: 28rpx;" />
			</view>
			<!-- 列表 -->
			<view :style="bgImg ? 'background-image:' + 'url(' + bgImg + ')' : ''">
				<view class="scroll">
					<image class="background" :src="backgroundImage[current]"></image>
					<!-- 切换卡 -->
					<view class="tab">
						<scroll-view scroll-x :scroll-into-view="'yy_' + current" class="scrollview">
							<view style="display:flex; flex-direction:row;">
								<view :id="'yy_' + index" @click="chooseItem(index, item)" class="toggle" v-for="(item, index) in arr" :key="index">
									<view v-if="index == current"><image class="scrollImage" :src="item.nav_img2"></image></view>
									<view v-else><image class="scrollImage" :src="item.nav_img1"></image></view>
								</view>
							</view>
						</scroll-view>
					</view>
					<!-- 内容列表 -->
					<view class="list">
						<template v-for="(item, index) in arr">
							<view v-if="current == index">
								<!-- 第一块：文章 -->
								<view v-if="item.nav_link == '文章'" style=" margin: 0 35rpx 15rpx;">
									<view class="oneModule" v-show="item1.showComment" v-for="item1 in web" :key="item1.id">
										<a :href="item1.linkurl == '' ? 'javascript:void(0)' : item1.linkurl"><image :src="item1.imgurl" class="left"></image></a>
										<view class="center">
											<a :href="item1.linkurl == '' ? 'javascript:void(0)' : item1.linkurl">
												<text class="content">{{ item1.title }}</text>
											</a>
											<view class="bottom">
												<image src="../static/time.png" class="timelogo"></image>
												<text class="time">{{ item1.release_time }}</text>
											</view>
										</view>
										<text class="right">></text>
									</view>
									<view v-if="this.web.length == num">暂无数据</view>
									<page-pagination
										:total="page.total"
										:pageSize="page.pageSize"
										:forceEllipses="true"
										:current-page="page.pageNum"
										@change="change"
										style="margin-top: 40rpx;"
									></page-pagination>
								</view>
								<!-- 第二块：图片 -->
								<view v-if="item.nav_link == '图片'" style="margin: 0 35rpx 15rpx;">
									<view class="twoModule" v-for="item2 in pic" :key="item2.id">
										<a :href="item2.linkurl == '' ? 'javascript:void(0)' : item2.linkurl">
											<image :src="item2.imgurl" style="height: 100%;display: block;"></image>
										</a>
										<h5 v-if="istitle == 1" style="margin-bottom: 25rpx; padding: 12rpx ; text-align: center; ">{{ item2.title }}</h5>
									</view>
								</view>
								<!-- 第三块：视频 -->
								<view v-if="item.nav_link == '视频'" style="margin: 0 35rpx 15rpx;">
									<view class="threeModule" v-for="item3 in video" :key="item3.id">
										<a v-if="item3.linkurl && item3.linkurl !== ''" :href="item3.linkurl">
											<image :src="item3.imgurl"></image>
											<text>{{ item3.title }}</text>
										</a>
										<a v-else-if="item3.videourl && item3.videourl !== ''" :href="item3.videourl">
											<image :src="item3.imgurl"></image>
											<text>{{ item3.title }}</text>
										</a>
										<a v-else href="javascript:void(0)">
											<image :src="item3.imgurl"></image>
											<text>{{ item3.title }}</text>
										</a>
									</view>
								</view>
							</view>
						</template>
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
			o_id: '',
			type: '',
			swiperItems2: [],
			current: 0,
			backgroundImage: [],
			arr: [], // 导航栏
			search: '',
			timer: null,
			num: 0,
			showSearch: '',
			bgImg: '',
			pic: [],
			video: [],
			web: [],
			istitle: 0,
			page: {
				total: 0,
				pageSize: 10, // 每页展示几条
				pageNum: 1 // 当前页
			}
		};
	},
	methods: {
		inputSearch: function(e, current) {
			clearTimeout(this.timer);
			this.num = 0;
			this.timer = setTimeout(() => {
				this.search = e.detail.value;
				// console.log(e.detail.value, current);
				let str = this.search;
				let len = this.web.length;
				for (var i = 0; i < len; i++) {
					if (this.web[i].title.indexOf(str) != -1) {
						this.web[i].showComment = true;
					} else {
						this.web[i].showComment = false;
						this.num++;
					}
				}
			}, 500);
		},

		chooseItem(e, item) {
			this.current = e;
			this.search = '';
			this.arr[e].list.forEach(item => (item.showComment = true));
			this.num = 0;
			if (item.nav_link == '视频') {
				this.type = item.videotype_id[e + 1];
				this.getVideo(this.o_id, this.type);
			}
			if (item.nav_link == '图片') {
				this.type = item.imagetype_id[e + 1];
				this.istitle = item.is_title[e + 1];
				this.getImg(this.o_id, this.type);
			}
			if (item.nav_link == '文章') {
				this.type = item.website_id[e + 1];
				this.getWeb(this.o_id, this.type, this.page.pageNum, this.page.pageSize);
			}
		},

		taped: function(e) {
			// console.log(e);
			if (this.swiperItems2[e].url) {
				window.open('https://' + this.swiperItems2[e].url);
			}
		},

		change(pageNum) {
			this.search = '';
			this.page.pageNum = pageNum;
			this.getWeb(this.o_id, this.type, this.page.pageNum, this.page.pageSize);
		},

		jsonDocment() {
			// fetch('./config.json?time=new Date().getTime()');
			fetch('./config.json?time=' + Date.now())
				.then(res => {
					return res.json();
				})
				.then(res => {
					let data = res.reception;
					console.log(data);

					if (data.bodyimagelist[0]) {
						this.bgImg = data.bodyimagelist[0].body_img;
					} else {
						this.bgImg = '';
					}

					this.o_id = data.o_id;

					if (data.navigationlist[0].nav_link == '视频') {
						this.type = data.navigationlist[0].videotype_id[1];
						this.getVideo(this.o_id, this.type);
					}
					if (data.navigationlist[0].nav_link == '图片') {
						this.type = data.navigationlist[0].imagetype_id[1];
						this.istitle = data.navigationlist[0].is_title[1];
						this.getImg(this.o_id, this.type);
					}
					if (data.navigationlist[0].nav_link == '文章') {
						this.type = data.navigationlist[0].website_id[1];
						this.getWeb(this.o_id, this.type, this.page.pageNum, this.page.pageSize);
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

					// 动态标题:
					uni.setNavigationBarTitle({
						title: data.project_name
					});

					// 是否搜索
					this.showSearch = data.is_search;

					//导航栏
					this.arr = data.navigationlist;
					// console.log(this.arr);
					let imgList = [];
					for (var i = 0; i < this.arr.length; i++) {
						imgList.push(this.arr[i].nav_bgimg3);
					}
					this.backgroundImage = imgList;
					// console.log(this.backgroundImage);
				});
		},

		// 图片类型接口:
		getImg(id, type) {
			// fetch(`http://company.xphadmin.com:9091/api/imagevideo/getApiImage?o_id=${id}&img_type_id=${type}`)
			fetch(`https://${window.location.host}/api/imagevideo/getApiImage?o_id=${id}&img_type_id=${type}`)
				.then(res => {
					return res.json();
				})
				.then(res => {
					// console.log(res.data);
					this.pic = res.data.list;
				});
		},

		// 文章类型接口:
		getWeb(id, type, pageNum, pageSize) {
			fetch(`https://${window.location.host}/api/article/getApi?o_id=${id}&website_id=${type}&pageNum=${pageNum}&pageSize=${pageSize}`)
				// fetch(`http://company.xphadmin.com:9091/api/article/getApi?o_id=${id}&website_id=${type}&pageNum=${pageNum}&pageSize=${pageSize}`)
				.then(res => {
					return res.json();
				})
				.then(res => {
					// console.log(res.data);
					this.page.total = res.total;
					this.web = res.data.list;
					this.web.forEach(item => (item.showComment = true));
					this.web.forEach(item => {
						item.release_time = item.release_time.substring(0, 10);
					});
				});
		},

		// 视频类型接口:
		getVideo(id, type) {
			fetch(`https://${window.location.host}/api/imagevideo/getApiVideo?o_id=${id}&img_type_id=${type}`)
				// fetch(`http://company.xphadmin.com:9091/api/imagevideo/getApiVideo?o_id=${id}&img_type_id=${type}`)
				.then(res => {
					return res.json();
				})
				.then(res => {
					// console.log(res.data);
					this.video = res.data.list;
				});
		}
	},
	onLoad: function() {
		this.jsonDocment();
	}
};
</script>
<style scoped lang="scss">
::v-deep uni-image > img {
	width: 100%;
	height: 100%;
	opacity: 1;
	position: relative;
}

::v-deep .gui-swiper-card {
	width: 100% !important;
	height: 420rpx !important;
	.gui-swiper-card-image {
		width: 100% !important;
		height: 420rpx !important;
	}
}

::v-deep .page-pagination .page-info {
	margin-top: -1rem;
}

.search {
	width: 70%;
	height: 55rpx;
	z-index: 400;
	position: relative;
	margin: -115rpx auto 60rpx;
	background-color: #fff;
	padding-left: 6rpx;
	text-align: center;
	border-radius: 40rpx;
}

.scroll {
	margin: -40rpx 30rpx 80rpx;
	position: relative;
	min-height: calc(100vh - 484rpx);
	width: 690rpx;
	.background {
		margin-top: 50rpx;
		width: 100%;
		position: absolute;
		height: 100%;
		border-radius: 18rpx;
		object-fit: cover;
	}
	.tab {
		margin-top: 15rpx;
		padding: 0 10rpx;
		.scrollview {
			width: 100%;
			margin-bottom: 20rpx;
			.toggle {
				font-size: 30rpx;
				white-space: nowrap;
				margin-right: 10rpx;
				.scrollImage {
					display: inline-block;
					width: 195rpx;
					height: 50rpx;
				}
			}
		}
	}
	.list {
		position: relative;
		.oneModule {
			height: 150rpx;
			margin-top: 27rpx;
			display: flex;
			margin-bottom: 25rpx;
			padding-bottom: 5rpx;
			border-bottom: 1rpx solid grey;
			.left {
				width: 170rpx;
				height: 135rpx;
				margin-right: 20rpx;
				border-radius: 18rpx;
			}
			.center {
				flex: 1;
				position: relative;
				.content {
					font-size: 22rpx;
					height: 44px;
					max-height: 44px;
					line-height: 22px;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.bottom {
					display: flex;
					align-items: center;
					position: absolute;
					bottom: 20rpx;
					.timelogo {
						width: 25rpx;
						height: 25rpx;
						margin-right: 10rpx;
					}
					.time {
						font-size: 20rpx;
						color: gray;
					}
				}
			}
			.right {
				margin: 10% -1% 10% 4%;
				color: gray;
			}
		}

		.twoModule {
			image {
				width: 100%;
			}
		}

		.threeModule {
			display: flex;
			flex-direction: column;
			margin-bottom: 10rpx;
			background-color: #fff;
			padding-bottom: 30rpx;
			border-radius: 10rpx;
			image {
				width: 100%;
				height: 300rpx;
				margin-bottom: 20rpx;
				border-radius: 10rpx 10rpx 0 0;
			}
			text {
				font-size: 32rpx;
				margin: 0 20rpx;
			}
		}
	}
}
</style>
