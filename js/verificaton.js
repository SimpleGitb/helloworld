function configuration(){
	$(".serach").toggle();
}
//$(".nav>li").click(function(){
//	$(this).addClass("active").siblings().removeClass("active");
//})
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
function selectval1(){
	var val = $(".selectval1").val();
	console.log(val);
}
function selectval2(){
	var val = $(".selectval2").val();
	console.log(val);
}
function webQuery(){
	$(".main2").show();
	var btn = $(".btnquery").val();
	$("#myframe").attr("src",btn);

	$.ajax({
	  type: 'GET',
	  url: 'http://monitor.yunsee.vuln.cn/getHtml?url='+btn,
	  cache: false,
	  dataType:'json',
//	  headers: {
//	              'referer' : 'https://www.baidu.com/'
//	          },
      beforeSend: function(request) {
                request.setRequestHeader("Referer", "https://www.baidu.com");
                request.setRequestHeader("User-Agent", "https://www.baidu.com");
            },
	  success: function(html,xml,m){
	  var d = HTMLEncode(html.html);
	  
//   var jsonStr1 = JSON.stringify(html.header);
var ht = html.header;
var str="";
	 for(var key in ht){
	 	str+= `
	 		<div class="xyhead">${key}:<span> ${ht[key]}</span></div>
	 	`;
//		console.log(key)    //键
//		console.log(ht[key])  //值
		}
	 $("#tab3>p").html("");
	$("#tab3>p").append(str);
		var reg = /\n(\n)*( )*(\n)*\n/g;
	  $("pre>code").text(HTMLDecode(d).replace(reg,"\n"));
	  var _hmt = _hmt || [];
	  var hm = document.createElement("script");
	  hm.src = 'js/prism.js?ver='+Math.random();
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	  }
	});
	

//var ajax= new XMLHttpRequest();
//ajax.open("GET",'http://monitor.yunsee.vuln.cn/getHtml?url='+btn);
//ajax.setRequestHeader('Authorization','APPCODE eef1833dbc5748cc86a6419ea0f92d9a');
//ajax.setRequestHeader("Content-Type","multipart/form-data/")
//ajax.send();
//ajax.onreadystatechange = function () {
//	if(ajax.readyState==4 && ajax.status == 200){
//		var txt=ajax.responseText;
//		var header=ajax.getAllResponseHeaders();
//		$("#tab3>p").text(header);
//		var d = HTMLEncode(ajax.responseText);
//	  $("pre>code").text(HTMLDecode(d));
//	  var _hmt = _hmt || [];
//	  var hm = document.createElement("script");
//	  hm.src = 'js/prism.js?ver='+Math.random();
//	  var s = document.getElementsByTagName("script")[0]; 
//	  s.parentNode.insertBefore(hm, s);
//	}
//}
	
	function HTMLEncode(html) {
		var temp = document.createElement("div");
		(temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
		var output = temp.innerHTML;
		temp = null;
		return output;
		}
		function HTMLDecode(text) { 
		var temp = document.createElement("div"); 
		temp.innerHTML = text; 
		var output = temp.innerText || temp.textContent; 
		temp = null; 
		return output; 
		} 
	
//	$.ajax({
//	   	type: "POST",
//		url: "http://www.baidu.com",
//		dataType: "text",
//		contentType: "application/json; charset=utf-8",
//		success: function(data){ 
//			console.log(data);
//		},
//	    error: function (XMLHttpRequest) {
//	       $(".alert").show();
//			window.setTimeout(function(){
//			    $(".alert").hide();
//			},2000);
//	    }
//	});
//$.ajax({
//  type: "post",
//  url: 'http://www.yunsee.cn/',
//  dataType: 'json',
//  crossDomain: true,
//  xhrFields: {
//      withCredentials: true
//  },
//  success: function(data, status, xhr) {
//      //do something
//  },
//  error: function(jqXHR, textStatus, errorThrown) {
//      console.log(jqXHR, textStatus, errorThrown);
//  }
//});


}
