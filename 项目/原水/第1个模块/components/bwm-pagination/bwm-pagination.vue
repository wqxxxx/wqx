<template>
	<view class="">
		<view class="box" v-if="nowPage > 0 && total > 0">

			<!-- 左箭头 -->
			<view class="item" @click="arrowleft(nowPage)" v-if="(showArrow && showArrowLeft) || alwaysShowArrow">
				<uni-icons type="arrowleft" size="15"></uni-icons>
			</view>

			<view class="item" :class="{itemActive: nowPage-1 == nowPage}" v-if="nowPage - 1 > 1" @click="click(1)">
				<view class="">
					1
				</view>
			</view>

			<!-- 左侧省略号 -->
			<view class="item" :class="{itemActive: nowPage-1 == nowPage}" v-if="nowPage - 1 > 2" @click="leftmore">
				<uni-icons type="more-filled" size="15"></uni-icons>
			</view>

			<!-- 激活页的前一页 -->
			<view class="item" :class="{itemActive: nowPage-1 == nowPage}" v-if="nowPage - 1 > 0" @click="click(nowPage-1)">
				<view class="">
					{{ nowPage-1 }}
				</view>
			</view>

			<!-- 激活页 -->
			<view class="item" :class="{itemActive: nowPage == nowPage}" v-if="nowPage <= num" @click="click(nowPage)">
				<view class="">
					{{ nowPage }}
				</view>
			</view>

			<!-- 激活页的后一页 -->
			<view class="item" :class="{itemActive: nowPage+1 == nowPage}" v-if="nowPage + 1 <= num " @click="click(nowPage+1)">
				<view class="">
					{{ nowPage + 1 }}
				</view>
			</view>

			<!-- 右侧省略号 -->
			<view class="item" v-if="num - nowPage - 2 >= 1" @click="rightmore">
				<uni-icons type="more-filled" size="15"></uni-icons>
			</view>

			<!-- 最后一页 -->
			<view class="item" v-if="num - nowPage - 2 >= 0" @click="click(num)">
				<view class="">
					{{ num }}
				</view>
			</view>

			<!-- 右箭头 -->
			<view class="item" @click="arrowright(nowPage)" v-if="(showArrow && showArrowRight) || alwaysShowArrow">
				<uni-icons type="arrowright" size="15"></uni-icons>
			</view>
		</view>

		<!-- 左侧剩余页数 -->
		<scroll-view v-if="laveLeftPageShow" class="scrollview" scroll-x="true">
			<view class="box">
				<view class="item" v-for="(item, index) in laveLeftPage" :key="index" @click="click(item)">
					<view class="">
						{{item}}
					</view>
				</view>
			</view>
		</scroll-view>

		<!-- 右侧剩余页数 -->
		<scroll-view v-if="laveRightPageShow" class="scrollview" scroll-x="true">
			<view class="box">
				<view class="item" v-for="(item, index) in laveRightPage" :key="index" @click="click(item)">
					<view class="">
						{{item}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			// 每页显示条目个数
			pageSize: {
				type: Number,
				default: 10
			},
			// 总数目
			total: {
				type: Number,
				default: 500
			},
			// 激活
			nowPage: {
				type: Number,
				default: 1
			},
			// 是否显示左右箭头
			showArrow: {
				type: Boolean,
				default: true
			},
			// 是否可以展开更多
			showMore: {
				type: Boolean,
				default: true
			},
			// 是否一直显示左右箭头
			alwaysShowArrow: {
				type: Boolean,
				default: false
			},
			// 是否开启重复点击
			repeatClick: {
				type: Boolean,
				default: false
			}
			
		},
		computed: {
			// 左侧剩余
			laveLeftPage() {
				let start = 2
				let end = this.nowPage - 1
				let arr = []
				if (end >= start) {
					for (let i = start; i < end; i++) {
						arr.push(i)
					}
				}
				return arr
			},

			// 右侧剩余
			laveRightPage() {
				let start = this.nowPage + 2
				let end = this.num
				let arr = []
				if (end >= start) {
					for (let i = start; i < end; i++) {
						arr.push(i)
					}
				}
				return arr
			},

			// 总页数
			num() {
				return Math.ceil(this.total / this.pageSize)
			}
		},
		data() {
			return {
				laveLeftPageShow: false, //左侧剩余显示
				laveRightPageShow: false, //右侧剩余显示
				showArrowRight: true,
				showArrowLeft: true
			}
		},
		methods: {
			// 隐藏剩余页数
			hideLave() {
				this.laveLeftPageShow = false
				this.laveRightPageShow = false
			},

			// 页码被选中
			click(page) {
				if(!this.repeatClick && (this.nowPage == page)){
					return
				}
				this.autoAhowArrow(page)
			},

			// 下一页
			arrowright(page) {
				if(page < this.num) {
					let nowPage = page + 1
					this.autoAhowArrow(nowPage)
				}
			},

			// 上一页
			arrowleft(page) {
				if(page > 1) {
					let nowPage = page - 1
					this.autoAhowArrow(nowPage)
				}
			},

			// 显示右侧更多
			rightmore() {
				if (this.showMore) {
					this.laveLeftPageShow = false
					this.laveRightPageShow = !this.laveRightPageShow
				}
			},

			// 显示左侧更多
			leftmore() {
				if (this.showMore) {
					this.laveRightPageShow = false
					this.laveLeftPageShow = !this.laveLeftPageShow
				}
			},
			
			// 自动显示左右箭头
			autoAhowArrow(nowPage) {
				if(nowPage <= 1) {
					this.showArrowLeft = false
					this.showArrowRight = true
				}else if(nowPage >= this.num) {
					this.showArrowLeft = true
					this.showArrowRight = false
				}else {
					this.showArrowLeft = true
					this.showArrowRight = true
				}
				this.$emit('change', nowPage, this.pageSize)
				this.hideLave()
			}
		
		}
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		// flex-wrap: wrap;

		.item {
			flex: 0 0 55rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 55rpx;
			height: 55rpx;
			background-color: #F1F1F1;
			border-radius: 25%;
			margin: 10rpx;
			color: #666666;
			border: 1px solid #999;
		}

		.item:active {
			background-color: #e0e0e0;
			color: #47A0FC;
		}

		.itemActive {
			background-color: #47A0FC;
			color: #fff;
			border-color: #47A0Fc;
		}
	}
	
	.scrollview {
		background-color: #F1F1F1;
		padding: 10rpx 20rpx;
		box-sizing: border-box;
	}
</style>
