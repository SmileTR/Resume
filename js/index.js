
//设置当前点击的选项为红色
var typeDiv = document.getElementById("typeId");
var typeList = typeDiv.getElementsByTagName("li");

for(var i = 0;i < typeList.length;i++){
	typeList[i].onclick = function(){
		for(var j = 0;j < typeList.length;j++){
			typeList[j].className = "";
			this.className = "active";
		}
	}
}

//获取浏览器向上滚动的距离
function getScroll(){
	return {
		top:window.pageYOffset || 
		document.documentElement.scrollTop || 
		document.body.scrollTop || 0,

		left:window.pageXOffset || 
		document.documentElement.scrollLeft ||
		document.body.scrollLeft || 0
	}
}


//到一定程度固定导航栏

var qzyxDiv = document.getElementById("qzyxId");


window.addEventListener("scroll",function(){
	var n = getScroll().top;
	console.log(n )
	if(n >= 600){
		typeDiv.className = "type fixed";
		typeDiv.style.backgroundColor = "#00bcd4";
		qzyxDiv.style.marginTop = 100 + "px";

				if( n < 1178 ){
				typeList[0].onclick();
			}else if(n >= 1178 && n < 1755){
				typeList[1].onclick();
			}else if(n >= 1755 && n < 2335 ){
				typeList[2].onclick();
			}else{
				typeList[3].onclick();
			}
	}else{
		typeDiv.className = "type";
		typeDiv.style.backgroundColor = "";
		qzyxDiv.style.marginTop = 50 + "px";
	}

},false);




//切换项目经历

var xmjlDiv = document.getElementById("xmjlId");
var btnList = xmjlDiv.getElementsByTagName("span");
var xm1 = document.getElementById("xm1");
var xm2 = document.getElementById("xm2");
var xmList = [xm1,xm2];
var countR = 0;
var countL = 1;

function changeLeft(){

	if(countL >= 0){
		for(var i = 0;i < xmList.length;i++){
			xmList[i].className = "content_three";
			countL--;
		}

		if(countL < 0){
			countL = 0;
		}
		xmList[countL].className = "content_three index";

	}

}

function changeRight(){
	
	if(countR <= 1 ){
		for(var i = 0;i < xmList.length;i++){
			xmList[i].className = "content_three";
			countR++;
		}
		
		if(countR > 1){
			countR = 1;
		}
		xmList[countR].className = "content_three index";
		
		
	}
}

btnList[0].addEventListener("click",changeLeft,false);

	

btnList[1].addEventListener("click",changeRight,false);

