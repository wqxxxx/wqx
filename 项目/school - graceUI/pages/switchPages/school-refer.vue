<!-- 越党校-心得/作业提交 -->
<template>
	<gui-page>
		<!-- 页面主体 -->
		<template v-slot:gBody>
			<view>
				<form @submit="submit">
					<view class="gui-margin-top gui-padding-x"><text class="gui-h6 gui-secondary-text"></text></view>
					<view style="height:28rpx;"></view>
					<view class="gui-bg-white gui-dark-bg-level-3 gui-padding-x">
						<!-- 课程选择 -->
						<view class="gui-form-item gui-border-b">
							<text class="gui-form-label gui-secondary-text">课程选择</text>
							<picker mode="selector" :range="course" range-key="courseName" @change="courseChange" :value="courseIndex">
								<view class="gui-flex gui-row gui-nowrap gui-space-between gui-align-items-center">
									<text class="gui-text gui-secondary-text">{{ course[courseIndex].courseName }}</text>
									<text class="gui-form-icon gui-icons gui-text-center gui-color-gray">&#xe603;</text>
								</view>
							</picker>
						</view>
						<!-- 作业期数 -->
						<view class="gui-form-item gui-border-b">
							<text class="gui-form-label gui-secondary-text">作业期数</text>
							<picker mode="selector" :range="periods" range-key="periodsName" @change="periodsChange">
								<view class="gui-flex gui-row gui-nowrap gui-space-between gui-align-items-center">
									<text class="gui-text gui-secondary-text">{{ periods[periodsIndex].periodsName }}</text>
									<text class="gui-form-icon gui-icons gui-text-center gui-color-gray">&#xe603;</text>
								</view>
							</picker>
						</view>
						<!-- 学员选择 -->
						<view class="gui-form-item gui-border-b">
							<text class="gui-form-label gui-secondary-text">学员选择</text>
							<picker mode="selector" :range="student" range-key="studentName" @change="studentChange">
								<view class="gui-flex gui-row gui-nowrap gui-space-between gui-align-items-center">
									<text class="gui-text gui-secondary-text">{{ student[studentIndex].studentName }}</text>
									<text class="gui-form-icon gui-icons gui-text-center gui-color-gray">&#xe603;</text>
								</view>
							</picker>
						</view>

						<!-- 作业上传 -->
						<view class="gui-form-item gui-border-b ">
							<text class="gui-form-label gui-secondary-text">作业上传</text>
							<view class="gui-margin-top gui-bg-gray gui-text-center refer" @tap="chooseImg">
								<text class="gui-text-small gui-color-blue">点击这里选择文件</text>
								<text class="totalname">{{ total }}</text>
							</view>
						</view>
					</view>
					<!-- 作业描述 -->
					<view class="gui-margin-top gui-padding-x"><text class="gui-h6 gui-secondary-text" style="height: 28rpx;">作业描述</text></view>
					<view style="height:28rpx;"></view>
					<view class="gui-bg-white gui-dark-bg-level-3 gui-padding-x">
						<view style="padding-top:8rpx;"><text class="gui-text-small gui-color-gray"></text></view>
						<view style="padding:15rpx 0;">
							<textarea
								v-model="formData.workDescribe"
								name="workDescribe"
								placeholder="说点什么..."
								class="gui-textarea gui-bg-gray gui-dark-bg-level-1 textareasize"
								maxlength="500"
								@input="sumfontnum"
							></textarea>
						</view>
						<view class="fontnumbox">
							<text>最多输入500个字</text>
							一一
							<text>{{ fontnum }}/500</text>
						</view>
					</view>
					<!-- 提交按钮 -->
					<view class="gui-margin-top gui-flex gui-row gui-nowrap gui-justify-content-end gui-padding-x">
						<button type="default" class="gui-button gui-bg-primary gui-noborder sub" formType="submit">
							<text class="gui-icons gui-color-white gui-button-text ">作业提交</text>
						</button>
					</view>
					<view style="height:60rpx;"></view>
				</form>
			</view>
		</template>
	</gui-page>
</template>
<script>
export default {
	data() {
		return {
			fontnum: 0,
			// 表单数据存储
			formData: {
				workCourse: '',
				workPeriods: '',
				workStudent: '',
				workImage: '',
				workDescribe: ''
			},
			course: ['请选择'],
			courseIndex: 0,
			student: ['请选择'],
			studentIndex: 0,
			periods: ['请选择'],
			periodsIndex: 0,
			total: ''
		};
	},
	methods: {
		sumfontnum(e) {
			this.fontnum = e.detail.value.length;
		},
		//课程
		getCourse() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/course/listAll`,
				method: 'GET',
				success: res => {
					//console.log(res.data.rows);
					let data = res.data.rows;
					// this.course = data.map(item => item.courseName);
					this.course = data;
					this.formData.workCourse = this.course[0].courseName;
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		courseChange: function(e) {
			this.courseIndex = e.detail.value;
			this.formData.workCourse = this.course[this.courseIndex].courseName;
			console.log(this.formData.workCourse);
		},
		//期数
		getPeriods() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/periods/listAll`,
				method: 'GET',
				success: res => {
					//console.log(res.data.rows);
					let data = res.data.rows;
					// this.periods = data.map(item => item.periodsName);
					this.periods = data;
					this.formData.workPeriods = this.periods[0].periodsName;
					this.getStudent(this.periods[0].periodsId);
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		periodsChange: function(e) {
			this.periodsIndex = e.detail.value;
			let index = this.periodsIndex + 1;
			//console.log(index);
			this.getStudent(index);
			this.formData.workPeriods = this.periods[this.periodsIndex].periodsName;
			console.log(this.formData.workPeriods);
		},
		// 学员
		getStudent(item) {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/student/listAll?periodsId=${item}`,
				method: 'GET',
				success: res => {
					//console.log(res.data.rows);
					let data = res.data.rows;
					// this.student = data.map(item => item.studentName);
					this.student = data;
					this.formData.workStudent = this.student[0].studentName;
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		studentChange: function(e) {
			this.studentIndex = e.detail.value;
			this.formData.workStudent = this.student[this.studentIndex].studentName;
			console.log(this.formData.workStudent);
		},
		// 表单提交
		submit: function(e) {
			// 能够获得的表单数据 在 e 对象保存
			// 不支持表单直接获取的数据通过事件记录
			// 最终整理获得完整的表单记录
			var fromData = e.detail.value;
			fromData.workCourse = this.formData.workCourse;
			fromData.workPeriods = this.formData.workPeriods;
			fromData.workStudent = this.formData.workStudent;
			fromData.workImage = this.formData.workImage;
			fromData.workDescribe = this.formData.workDescribe;
			console.log(fromData);

			if (!fromData.workImage) {
				uni.showToast({ title: '请上传作业', icon: 'none' });
			} else {
				this.sub();
			}
		},

		sub: function() {
			uni.request({
				url: `${getApp().globalData.baseUrl}/yuecheng/work/add`,
				method: 'POST',
				data: {
					workCourse: this.formData.workCourse,
					workPeriods: this.formData.workPeriods,
					workStudent: this.formData.workStudent,
					workImage: this.formData.workImage,
					workDescribe: this.formData.workDescribe
				},
				success: res => {
					console.log(res);
					if (res.data.code == 200) {
						uni.showToast({
							title: '提交成功',
							icon: 'none',
							duration: 2000,
							complete: function(res) {
								uni.navigateTo({
									url: 'school'
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

		//文件上传
		chooseImg: function() {
			uni.chooseImage({
				success: chooseImageRes => {
					const tempFilePaths = chooseImageRes.tempFilePaths;
					// console.log(tempFilePaths[0]);
					uni.uploadFile({
						url: `${getApp().globalData.baseUrl}/yuecheng/interflow/image`,
						method: 'POST',
						filePath: tempFilePaths[0],
						name: 'file',
						// formData: {
						// 	user: 'test'
						// },
						success: uploadFileRes => {
							let imgUrl = JSON.parse(uploadFileRes.data).data[0].url;
							//console.log(imgUrl);
							let a = imgUrl.split('\/');
							let b = a[a.length - 1];
							this.total = b;
							console.log(b);
							this.formData.workImage = `${getApp().globalData.baseUrl}` + imgUrl;
							//console.log(this.formData.workImage);
						}
					});
				}
			});
		}
	},

	onLoad() {
		this.getCourse();
		this.getPeriods();
	}
};
</script>
<style scoped>
.textareasize {
	width: 100%;
}
.fontnumbox {
	font-size: 20rpx;
}

.sub {
	width: 200rpx;
}

.refer {
	margin-top: 0;
	padding: 25rpx;
}

.totalname {
	font-size: 10rpx;
}
</style>
