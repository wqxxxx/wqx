import{r as e,g as a,z as t,n as i,o as s,c as l,w as o,a as u,b as r,t as n,m as c,j as d,I as m,i as f,ab as g,E as b,G as h,f as p}from"./index.43beff3c.js";import{r as x,_}from"./gui-page.6784618e.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";var D=y({data:()=>({formData:{subscribeName:"",subscribePhone:"",createTimeS:"",subscribePeople:"",subscribeExhibtion:""},list:[],listIndex:0}),methods:{validator:function(e){return/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(e)},getList:function(){e({url:`${a().globalData.baseUrl}/yuecheng/exhibition/listAll`,method:"GET",success:e=>{200===e.data.code&&(this.list=e.data.rows,this.formData.subscribeExhibtion=e.data.rows[0].exhibitionId)},fail:e=>{console.log(e)}})},pickerChange:function(e){console.log(e),this.listIndex=e.detail.value,this.formData.subscribeExhibtion=this.list[this.listIndex].exhibitionId},saveInfo:function(s){e({url:`${a().globalData.baseUrl}/yuecheng/subscribe/into`,method:"POST",data:s,success:e=>{200===e.data.code?t({title:"提交成功",icon:"none",duration:2e3,complete:function(e){i({url:"show"})}}):t({title:e.data.msg,icon:"none"})},fail:e=>{console.log(e)}})},submit:function(e){var a=e.detail.value;a.subscribeExhibtion=this.formData.subscribeExhibtion,console.log(a),a.subscribeName?this.validator(a.subscribePhone)?a.createTimeS?a.subscribePeople?this.saveInfo(a):t({title:"请输入预约人数",icon:"none"}):t({title:"请输入预约时间",icon:"none"}):t({title:"请输入正确的手机号",icon:"none"}):t({title:"请输入姓名",icon:"none"})}},onLoad:function(){this.getList()}},[["render",function(e,a,t,i,y,D){const I=d,V=m,v=f,w=g,P=b,T=h,S=x(p("gui-page"),_);return s(),l(S,null,{gBody:o((()=>[u(v,{class:"order"},{default:o((()=>[u(T,{onSubmit:D.submit},{default:o((()=>[u(v,{class:"gui-dark-bg-level-3 gui-padding-x"},{default:o((()=>[u(v,{class:"gui-form-item"},{default:o((()=>[u(I,{class:"gui-form-label gui-secondary-text"},{default:o((()=>[r("姓名")])),_:1}),u(v,{class:"gui-form-body"},{default:o((()=>[u(V,{type:"text",class:"gui-form-input",modelValue:y.formData.subscribeName,"onUpdate:modelValue":a[0]||(a[0]=e=>y.formData.subscribeName=e),modelModifiers:{trim:!0},maxlength:"10",name:"subscribeName",placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1})])),_:1}),u(v,{class:"gui-form-item"},{default:o((()=>[u(I,{class:"gui-form-label gui-secondary-text"},{default:o((()=>[r("联系方式")])),_:1}),u(v,{class:"gui-form-body"},{default:o((()=>[u(V,{type:"number",class:"gui-form-input",modelValue:y.formData.subscribePhone,"onUpdate:modelValue":a[1]||(a[1]=e=>y.formData.subscribePhone=e),modelModifiers:{trim:!0},maxlength:"11",name:"subscribePhone",placeholder:"请输入联系方式"},null,8,["modelValue"])])),_:1})])),_:1}),u(v,{class:"gui-form-item"},{default:o((()=>[u(I,{class:"gui-form-label gui-secondary-text"},{default:o((()=>[r("预约时间")])),_:1}),u(v,{class:"gui-form-body"},{default:o((()=>[u(V,{type:"text",class:"gui-form-input",modelValue:y.formData.createTimeS,"onUpdate:modelValue":a[2]||(a[2]=e=>y.formData.createTimeS=e),modelModifiers:{trim:!0},maxlength:"100",name:"createTimeS",placeholder:"请输入预约时间"},null,8,["modelValue"])])),_:1})])),_:1}),u(v,{class:"gui-form-item"},{default:o((()=>[u(I,{class:"gui-form-label gui-secondary-text"},{default:o((()=>[r("预约人数")])),_:1}),u(v,{class:"gui-form-body"},{default:o((()=>[u(V,{type:"number",class:"gui-form-input",modelValue:y.formData.subscribePeople,"onUpdate:modelValue":a[3]||(a[3]=e=>y.formData.subscribePeople=e),modelModifiers:{trim:!0},maxlength:"100",name:"subscribePeople",placeholder:"请输入预约人数"},null,8,["modelValue"])])),_:1})])),_:1}),u(v,{class:"gui-form-item"},{default:o((()=>[u(I,{class:"gui-form-label"},{default:o((()=>[r("预约展厅")])),_:1}),u(v,{class:"gui-form-body"},{default:o((()=>[u(w,{mode:"selector",range:y.list,"range-key":"exhibitionTitle",onChange:D.pickerChange},{default:o((()=>[u(v,{class:"gui-flex gui-row gui-nowrap gui-space-between gui-align-items-center"},{default:o((()=>[y.list[y.listIndex]?(s(),l(I,{key:0,class:"gui-text gui-secondary-text"},{default:o((()=>[r(n(y.list[y.listIndex].exhibitionTitle),1)])),_:1})):c("",!0),y.list[y.listIndex]?c("",!0):(s(),l(I,{key:1,class:"gui-text gui-secondary-text"},{default:o((()=>[r("请选择")])),_:1})),u(I,{class:"gui-form-icon gui-icons gui-text-center gui-color-gray"},{default:o((()=>[r("")])),_:1})])),_:1})])),_:1},8,["range","onChange"])])),_:1})])),_:1})])),_:1}),u(v,{class:"gui-flex gui-row gui-nowrap gui-justify-content-center gui-padding-x"},{default:o((()=>[u(P,{type:"default",class:"gui-button gui-bg-primary gui-noborder",style:{width:"400rpx","margin-top":"188rpx!important"},formType:"submit"},{default:o((()=>[u(I,{class:"gui-icons gui-color-white gui-button-text"},{default:o((()=>[r("提交")])),_:1})])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})}],["__scopeId","data-v-46179d1b"]]);export{D as default};
