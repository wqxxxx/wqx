<!-- 阅展厅-看展 -->
<template>
	<view class="show-hall">
		<text class="title">云上看展</text>
		<view class="list">
			<view class="item" v-for="(item, index) in list" :key="index">
				<a :href="item.exhibitionUrl">
					<image :src="api + item.exhibitionImage" alt=""></image>
					<text>{{ item.exhibitionTitle }}</text>
				</a>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			api: getApp().globalData.baseUrl
		};
	},
	methods: {
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
		this.getList();
	}
};
</script>

<style scoped lang="scss">
.show-hall {
	padding: 40rpx 50rpx;
	.title {
		font-size: 35rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: #3d3d3d;
		padding: 10rpx;
		border-bottom: 4rpx solid #d6b264;
	}
	.list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 40rpx;
		.item {
			width: 48%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 50rpx;
			text-align: center;
			image {
				width: 305rpx;
				height: 200rpx;
				margin-bottom: 10rpx;
				border-radius: 30rpx;
			}
		}
	}
}
</style>
