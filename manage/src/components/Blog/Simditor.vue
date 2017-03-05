<template>
	<textarea id="simditor">
	</textarea>
</template>

<script>
import $ from 'jquery'
import Simditor from 'simditor'
export default {
  props: ['value'],
  data() {
    return {
      textnames: 'simditor',
      content: '',
      isFirst: true,
      toolbar: [
        'title',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'fontScale',
        'color',
        'ol',      
        'ul',          
        'blockquote',
        'code',         
        'table',
        'link',
        'image',
        'hr',        
        'indent',
        'outdent',
        'alignment'
      ]
    }
  },
  mounted() {
    this.createEditor();
  },
  watch: {
    value(){
      var vm = this;
      if(vm.isFirst){
        vm.editor.setValue(vm.value);
        vm.isFirst = false;
      }
    }
  },
  methods: {
    createEditor: function() {
      var vm = this;
      vm.editor = new Simditor({
        textarea: $('#simditor'),
        placeholder: '请输入正文',
        defaultImage: 'image/*',
        toolbar: vm.toolbar,
        upload: {
          url: '/api/uploads/pictures', //文件上传的接口地址
          fileKey: 'picture', //服务器端获取文件数据的参数名
          leaveConfirm: '正在上传文件'
        },
        pasteImage: true,//是否允许粘贴上传图片，依赖 upload 选项，仅支持 Firefox 和 Chrome 浏览器。
        tabIndent: true,//是否在编辑器中使用 tab 键来缩进
      });
      vm.editor.on("valuechanged", function(e, src) {
        vm.content = vm.editor.getValue();
        vm.$emit('setContent', vm.content)
        //window.localStorage.setItem('draft',JSON.stringify({title: 'demo'}));
      })//valuechanged是simditor自带获取值得方法
    }
  }
}
</script>

<style>
  
</style>