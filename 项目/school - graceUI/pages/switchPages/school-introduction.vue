<!-- 越党校-简介 -->
<template>
	<view class="top">
		<view class="toptitle">党校介绍</view>
		<view class="margin-top"><image src="../../static/school-introduction/1.png" class="img"></image></view>
		<view style="margin-top:33rpx">
			<text class="fontone">
				中共绍兴市越城区委党校成立于2019年10月15日，为越城区委直属的全额拨款正科级事业单位，是区委区政府哲学社会科学研究机构和重要智库，是负责培训党政领导干部、国家公务员和进行党的思想理论建设的重要部门。学校位于越城区城南大道1459号，占地3500平方米。
			</text>
		</view>
		<view class="gui-flex gui-row">
			<view style="width: 50%; padding-right: 27rpx;">
				<text class="fontone">
					校内建有设施完备的报告厅、教研室、党员活动室、党性教育基地、党校书房等学术场所和部分体育生活设施。全校现有教职工15人，硕士研究生4人，中级及以上专业技术人员5人，拥有正高级专业技术岗位，是一所富有生机、充满活力的新兴红色学府。
				</text>
			</view>
			<view class="gui-flex gui-column" style="width: 46%; margin-top: 15rpx;">
				<image src=" ../../static/school-introduction/2.png" class="imgtwo"></image>
				<image src="../../static/school-introduction/3.png" class="imgsan"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped>
.top {
	margin: 0 53rpx 15rpx 39rpx;
}

.toptitle {
	font-size: 45rpx;
	margin-top: 47rpx;
	padding-bottom: 15rpx;
	border-bottom: 1rpx solid black;
	text-align: center;
}
.margin-top {
	margin-top: 58rpx;
}

.img {
	width: 658rpx;
	height: 338rpx;
}

.fontone {
	text-indent: 65rpx;
	text-align: justify;
	display: block;
	font-size: 26rpx;
	line-height: 48rpx;
	letter-spacing: 2.5rpx;
}
.imgtwo {
	width: 303rpx;
	height: 195rpx;
	margin-bottom: 27rpx;
}
.imgsan {
	width: 303rpx;
	height: 195rpx;
}
</style>
