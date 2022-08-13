<!-- 阅展厅-预约展厅 -->
<template>
	<gui-page>
		<!-- 页面主体 -->
		<template v-slot:gBody>
			<view class="order">
				<form @submit="submit">
					<view class="gui-dark-bg-level-3 gui-padding-x">
						<view class="gui-form-item">
							<text class="gui-form-label gui-secondary-text">姓名</text>
							<view class="gui-form-body">
								<input type="text" class="gui-form-input" v-model.trim="formData.subscribeName" maxlength="10" name="subscribeName" placeholder="请输入姓名" />
							</view>
						</view>
						<view class="gui-form-item">
							<text class="gui-form-label gui-secondary-text">联系方式</text>
							<view class="gui-form-body">
								<input
									type="number"
									class="gui-form-input"
									v-model.trim="formData.subscribePhone"
									maxlength="11"
									name="subscribePhone"
									placeholder="请输入联系方式"
								/>
							</view>
						</view>
						<view class="gui-form-item">
							<text class="gui-form-label gui-secondary-text">预约时间</text>
							<view class="gui-form-body">
								<input type="text" class="gui-form-input" v-model.trim="formData.createTimeS" maxlength="100" name="createTimeS" placeholder="请输入预约时间" />
							</view>
						</view>
						<view class="gui-form-item">
							<text class="gui-form-label gui-secondary-text">预约人数</text>
							<view class="gui-form-body">
								<input
									type="number"
									class="gui-form-input"
									v-model.trim="formData.subscribePeople"
									maxlength="100"
									name="subscribePeople"
									placeholder="请输入预约人数"
								/>
							</view>
						</view>
						<view class="gui-form-item">
							<text class="gui-form-label">预约展厅</text>
							<view class="gui-form-body">
								<picker mode="selector" :range="list" range-key="exhibitionTitle" @change="pickerChange">
									<view class="gui-flex gui-row gui-nowrap gui-space-between gui-align-items-center">
										<text class="gui-text gui-secondary-text" v-if="list[listIndex]">{{ list[listIndex].exhibitionTitle }}</text>
										<text class="gui-text gui-secondary-text" v-if="!list[listIndex]">请选择</text>
										<text class="gui-form-icon gui-icons gui-text-center gui-color-gray">&#xe603;</text>
									</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="gui-flex gui-row gui-nowrap gui-justify-content-center gui-padding-x">
						<button type="default" class="gui-button gui-bg-primary gui-noborder" style="width:400rpx;margin-top:188rpx!important" formType="submit">
							<text class="gui-icons gui-color-white gui-button-text">提交</text>
						</button>
					</view>
				</form>
			</view>
		</template>
	</gui-page>
</template>
<script>
export default {
	data() {
		return {
			// 表单数据存储
			formData: {
				subscribeName: '',
				subscribePhone: '',
				createTimeS: '',
				subscribePeople: '',
				subscribeExhibtion: ''
			},
			// picker
			list: [],
			listIndex: 0
		};
	},
	methods: {
		validator: function(val) {
			return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(val);
		},
		getList: function() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/exhibition/listAll`,
				method: 'GET',
				success: res => {
					if (res.data.code === 200) {
						this.list = res.data.rows;
						this.formData.subscribeExhibtion = res.data.rows[0].exhibitionId;
					}
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		// picker 切换
		pickerChange: function(e) {
			console.log(e);
			this.listIndex = e.detail.value;
			this.formData.subscribeExhibtion = this.list[this.listIndex].exhibitionId;
		},
		saveInfo: function(obj) {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/subscribe/into`,
				method: 'POST',
				data: obj,
				success: res => {
					if (res.data.code === 200) {
						uni.showToast({
							title: '提交成功',
							icon: 'none',
							duration: 2000,
							complete: function(res) {
								uni.navigateTo({
									url: 'show'
								});
							}
						});
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		// 表单提交
		submit: function(e) {
			var fromData = e.detail.value;
			fromData.subscribeExhibtion = this.formData.subscribeExhibtion;
			console.log(fromData);
			if (!fromData.subscribeName) {
				uni.showToast({ title: '请输入姓名', icon: 'none' });
			} else if (!this.validator(fromData.subscribePhone)) {
				uni.showToast({ title: '请输入正确的手机号', icon: 'none' });
			} else if (!fromData.createTimeS) {
				uni.showToast({ title: '请输入预约时间', icon: 'none' });
			} else if (!fromData.subscribePeople) {
				uni.showToast({ title: '请输入预约人数', icon: 'none' });
			} else {
				this.saveInfo(fromData);
			}
		}
	},
	onLoad: function() {
		this.getList();
	}
};
</script>
<style scoped lang="scss">
.order {
	padding: 70rpx;
}
::v-deep .gui-form-item {
	display: flex;
	margin-bottom: 20px;
	.gui-form-body {
		background-color: #fafafa;
		.gui-form-input {
			padding-left: 20rpx;
		}
		uni-picker {
			padding: 10rpx;
		}
	}
}
::v-deep uni-button[type='default'] {
	background: linear-gradient(to right, #e3cb8a, #d6b565);
}
</style>
