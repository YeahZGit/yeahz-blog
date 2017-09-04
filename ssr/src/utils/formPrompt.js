
export default function(username, email, content) {
	/*
	{
		error: 
		usernamePrompt:
		emailPrompt:
		contentPrompt: 
	}
	*/
	username = username.trim();
	email = email.trim();
	content = content.trim();

	if(!username) {
		return { error: true, usernamePrompt: '请填写用户名' }
	}
	if(!/^[\u4e00-\u9fa5\w][- \u4e00-\u9fa5\w]{0,15}[\u4e00-\u9fa5\w]$/.test(username)) {
    return { error: true, usernamePrompt: '至少两个字符，勿使用特殊字符' }
  }
  // if(/yeahz/i.test(username)) {
  //   return { error: true, usernamePrompt: '请勿使用博主名称' }
  // }

	if(!email) {
		return { error: true, emailPrompt: '请填写email' }
	}
	if(!/^\w[-\w\.]*@\w[-\w\.]*\.[a-zA-Z]+$/.test(email)) {
		return { error: true, emailPrompt: '邮箱格式错误' }
	}

	if(!content) {
		return { error: true, contentPrompt: '请填写评论内容' }
	}
	
	return { error: false }
}