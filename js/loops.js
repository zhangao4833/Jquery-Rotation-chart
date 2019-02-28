$(function () {
	$('#longImg').width($('#allBox').width()*10);
	$('#longImg img').width($('#allBox').width());
	//默认第一个圆点状态为选中
	var $stratli = 1;
	
	//修复初始化的时候等待时间太长
	$('#btnr').bind('click',function(){
			$('#longImg').finish()
			// clearInterval(ristate);
			riLoop()
			// ristate = setInterval(riLoop,2000);
		})
	$('#btnl').bind('click',function(){
			$('#longImg').finish()
			// clearInterval(ristate);
			leLoop(1,true)
			// ristate = setInterval(riLoop,2000);
		})
	function riLoop(rage,rage2) {
		if(rage){
			licolor('r');
		}
		$('#btnr').off();
		$('#btnl').off();
		console.log('动画执行中',(parseInt($('#longImg').css('left').slice(0,-2)))+'px',ristate,$('#allBox').width()*rage2,rage2)
		$('#longImg').animate({
			left:(parseInt($('#longImg').css('left').slice(0,-2)) - $('#allBox').width()*rage2)+'px',
		},500,function () {
			if(parseInt($('#longImg').css('left').slice(0,-2)) < -8000){
				$('#longImg').css('left','-1000px');
			}
			//动画完成后才能重新启用点击功能
			$('#btnr').bind('click',function(){
					$('#longImg').finish()
					// clearInterval(ristate);
					riLoop(true,1)
					// ristate = setInterval(riLoop,2000,true,1);
				})
			$('#btnl').bind('click',function(){
					$('#longImg').finish()
					// clearInterval(ristate);
					leLoop(1,true)
					// ristate = setInterval(riLoop,2000,true,1);
				})
			$rage2 = 1;
			clickli();
		});
	}
	var ristate = setInterval(riLoop,2000,true,1);
	
	//左边滑动效果
	function leLoop(range,auto) {
		console.log(range)
		if(auto){
			licolor('l');
		}
		$('#btnr').off();
		$('#btnl').off();
		$('#loopli li').off();
		console.log('左动画执行中',(parseInt($('#longImg').css('left').slice(0,-2)))+'px',ristate)
		$('#longImg').animate({
			left:(parseInt($('#longImg').css('left').slice(0,-2)) + $('#allBox').width()*range)+'px',
		},500,function () {
			if(parseInt($('#longImg').css('left').slice(0,-2)) > -1000){
				$('#longImg').css('left',-$('#allBox').width()*8);
			}
			//动画完成后才能重新启用点击功能
			$('#btnr').bind('click',function(){
					$('#longImg').finish()
					// clearInterval(ristate);
					riLoop(true,1)
					// ristate = setInterval(riLoop,2000,true,1);
				})
			$('#btnl').bind('click',function(){
					$('#longImg').finish()
					// clearInterval(ristate);
					leLoop(1,true)
					// ristate = setInterval(riLoop,2000,true,1);
				})
				
			clickli();
				
				
				
			
		});
	}
	for (var i = 0;i < $('#longImg img').length - 2;i++){
		$('#loopli').append('<li id=li'+(i+1)+'>'+(i+1)+'</li>')
	}
	
	$('#loopli li').eq($stratli-1).addClass('active')
	//动态添加li圆点
	//圆点跟着变色函数
	function licolor(dr){
		if(dr == 'r'){
			$('#loopli li').removeAttr('class');
			if ($stratli == $('#loopli li').length){
				$stratli = 1;
			}else{
				$stratli++;
			}
			$('#loopli li').eq($stratli-1).addClass('active')
		}else if(dr == 'l'){
			$('#loopli li').removeAttr('class');
			if ($stratli == 1){
				$stratli = $('#loopli li').length;
			}else{
				$stratli--;
			}
			$('#loopli li').eq($stratli-1).addClass('active')
		}
	}
	
	//给圆点添加点击事件
	function clickli(){
		$('#loopli li').bind('click',function () {
			if ($stratli > parseInt($(this).attr('id').slice(2,))){
				//向左移动
				console.log('向左移动',parseInt($(this).attr('id').slice(2,)),$(this),$stratli - parseInt($(this).attr('id').slice(2,)));
				
				$('#loopli li').removeAttr('class');
				$(this).addClass('active');
				var $rage = $stratli - parseInt($(this).attr('id').slice(2,));
				$stratli = parseInt($(this).attr('id').slice(2,));
				$('#longImg').finish()
				// clearInterval(ristate);
				leLoop($rage,false);
				// ristate = setInterval(riLoop,2000,true,1);
			}else if($stratli < parseInt($(this).attr('id').slice(2,))){
				//向右移动
				console.log('向右移动');
				console.log('向右移动',parseInt($(this).attr('id').slice(2,)),$(this));

				$('#loopli li').removeAttr('class');
				$(this).addClass('active');
				var $rage = parseInt($(this).attr('id').slice(2,)) - $stratli;
				$stratli = parseInt($(this).attr('id').slice(2,));
				$('#longImg').finish()
				// clearInterval(ristate);
				riLoop(false,$rage);
				// ristate = setInterval(riLoop,2000,true,1);
			}
			
		});
	}
	clickli();
	//注册鼠标悬停事件
	$('#allBox').bind('mouseenter',function () {
		$('#btnr').finish()
		$('#btnl').finish()
		$('#btnr').animate({
			right:'0px',
		},500);
		$('#btnl').animate({
			left:'0px',
		},500);
		clearInterval(ristate);
	});
	//注册鼠标离开事件
	$('#allBox').bind('mouseleave',function () {
		$('#btnr').animate({
			right:'-120px',
		},500);
		$('#btnl').animate({
			left:'-120px',
		},500);
		ristate = setInterval(riLoop,2000,true,1);
	});
	
	
	
	
	
	
	
	
// 	$('#btn').bind('click',function(){
// 		$('#longImg').finish()
// 		clearInterval(ristate);
// 		riLoop()
// // 		setTimeout(function () {
// // 			ristate = setInterval(riLoop,2000);
// // 		},2000);
// 	})
	});