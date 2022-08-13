<!-- 越党校-交流论坛-发布 -->
<template>
	<gui-page>
		<template v-slot:gBody>
			<view class="school-forum-refer">
				<form @submit="submit">
					<view style="padding: 30rpx;">
						<view class="gui-flex gui-row gui-wrap">
							<gui-tags text="标题:" :customClass="['gui-color-black']"></gui-tags>
							<input type="text" placeholder="请输入标题" maxlength="100" v-model.trim="interflowTitle" />
						</view>
						<view class="gui-flex gui-row gui-wrap"><gui-tags text="正文:" :customClass="['gui-color-black']"></gui-tags></view>
						<textarea
							style="width:650rpx; padding:20rpx;background-color: red;"
							maxlength="200"
							v-model.trim="interflowContent"
							class="gui-textarea gui-bg-white gui-dark-bg-level-3"
							placeholder="请输入描述"
						></textarea>
					</view>
					<view style="width: 100%;height: 7rpx;background-color: #F7F7F7;"></view>
					<view class="gui-bg-white gui-dark-bg-level-3" style="padding: 30rpx 50rpx;">
						<gui-upload-images
							@change="change"
							ref="uploadimgcom"
							fileName="file"
							@uploaded="uploaded"
							:uploadServerUrl="uploadUrl"
							:maxFileNumber="5"
						></gui-upload-images>
					</view>
					<view class="gui-bg-primary gui-color-white demo-sub-btn gui-block submit" @tap="submit">{{ subtxt }}</view>
				</form>
			</view>
		</template>
	</gui-page>
</template>
<script>
const api = getApp().globalData.baseUrl;
export default {
	data() {
		return {
			type: 0,
			uploadUrl: api + '/yuecheng/interflow/image',
			interflowTitle: '',
			interflowContent: '',
			needPploadedImgs: [],
			subtxt: '发布'
		};
	},
	onLoad: function(option) {
		console.log(option);
		this.type = option.type;
		// 模拟 api 加载默认图片
		// 不需要默认值删除此函数即可
		setTimeout(() => {
			this.$refs.uploadimgcom.setItems([]);
		}, 1000);
	},
	methods: {
		// 记录选择图片时的待提交数据
		change: function(e) {
			this.needPploadedImgs = e;
		},
		// 提交动态
		// 过程说明 :
		// 点击提交按钮 > 首先执行组件的上传函数 > 上传成功后获得已经上传的图片数据 > 提交给后端 api 记录整个内容
		submit: function() {
			// 阻止重复提交
			if (this.subtxt != '发布') {
				return;
			}
			// 判断图片选择数量
			if (this.interflowTitle == '') {
				uni.showToast({ title: '请填写标题', icon: 'none' });
				return;
			}
			if (this.interflowContent == '') {
				uni.showToast({ title: '请填写正文', icon: 'none' });
				return;
			}
			if (this.needPploadedImgs.length < 1) {
				uni.showToast({ title: '请选择图片', icon: 'none' });
				return;
			}
			this.subtxt = '提交中，请稍候 ...';
			this.$refs.uploadimgcom.upload();
			// 代码执行到这里，组件开始执行上传工作
			// uni-app 上传api 一次上传一个图片
			// 组件会一个一个循环上传
			// 上传完毕后会触发组件的 uploaded 事件
			// uploaded 事件意味着上传工作完毕
			// 事件会携带上传完成的图片数据 [数组格式]
		},
		// 图片上传完毕执行 uploaded 函数
		uploaded: function(uploadedImgs) {
			// console.log('图片上传完毕，开始提交数据');
			// console.log(uploadedImgs);
			let imgArr = [];
			for (var i = 0; i < uploadedImgs.length; i++) {
				imgArr.push(uploadedImgs[i].url);
				uploadedImgs[i].url = api + uploadedImgs[i].url;
			}
			// // 组合数据给后端 api 提交
			var sendData = {
				interflowTitle: this.interflowTitle,
				interflowContent: this.interflowContent,
				interflowImage: imgArr.join(','),
				interflowType: this.type,
				userId: JSON.parse(localStorage.getItem('wxInfoSchool1')).id
			};
			// 至此数据以及收集完毕
			// 请自己完成数据提交工作
			uni.request({
				url: api + '/yuecheng/interflow/addInterFlow',
				method: 'POST',
				data: sendData,
				success: res => {
					if (res.data.code == 200) {
						uni.showToast({
							title: '发布成功',
							icon: 'none',
							duration: 2000,
							complete: function(res) {
								imgArr = [];
								this.subtxt = '发布';
								(this.interflowTitle = ''),
									(this.interflowContent = ' '),
									(this.needPploadedImgs = []),
									uni.navigateTo({
										url: 'school-forum'
									});
							}
						});
					} else {
						this.subtxt = '发布';
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				}
			});
		}
	}
};
</script>
<style scoped lang="scss">
.school-forum-refer {
	::v-deep .gui-color-black {
		height: 60rpx !important;
		line-height: 60rpx !important ;
		span {
			font-size: 33rpx;
			font-family: Source Han Sans CN;
			font-weight: 500;
			color: #777777;
			vertical-align: bottom;
		}
	}
	::v-deep uni-input {
		height: 60rpx !important;
		line-height: 60rpx !important;
		width: calc(100% - 130rpx);
		vertical-align: bottom;
		font-size: 28rpx;
	}
	::v-deep .uni-textarea-textarea {
		background-color: #fafafa;
	}
	.submit {
		width: 370rpx;
		font-size: 30rpx;
		margin: auto;
		padding: 20rpx;
		text-align: center;
		border-radius: 60rpx;
		margin-top: 100rpx;
		background: linear-gradient(to right, #e3cb8a, #d6b565);
	}
}
</style>
