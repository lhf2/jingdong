window.onload=function(){
//***************************top************************************
		var $lis=document.getElementsByClassName('lia');
		for(var i=0;i<$lis.length;i++){
             $lis[i].onmousemove=function(){
				 var $xsj=this.getElementsByClassName('xsj')[0];
				 if($xsj){
				$xsj.style.webkitTransform='rotatez('+'180'+'deg)';
				 }
	  			var $yincang=this.getElementsByClassName('liy')[0];
				if($yincang){
					this.style.backgroundColor='white';
				    $yincang.style.display='block';
				}
				var $yinc=this.getElementsByClassName('yinc')[0];
				if($yinc){
					$yinc.style.backgroundImage='url(../images/vip.jpg) no-repeat';
					$yinc.style.backgroundPosition='0px -15px';
				}
				var $yinc1=this.getElementsByClassName('yinc1')[0];
				if($yinc1){
					$yinc1.style.backgroundImage='url(../images/phone.jpg) no-repeat';
					$yinc1.style.backgroundPosition='-128px -399px';
				}
			 }
			 $lis[i].onmouseout=function(){
				 this.style.backgroundColor='#f7f7f7';
				var $xsj=this.getElementsByClassName('xsj')[0];
				 if($xsj){
				$xsj.style.webkitTransform='rotatez('+'0'+'deg)';
				 }
	  			var $yincang=this.getElementsByClassName('liy')[0];
				 if($yincang){
					 this.style.backgroundColor='#f7f7f7'
				     $yincang.style.display='none';
				}
				var $yinc=this.getElementsByClassName('yinc')[0];
				if($yinc){
					$yinc.style.backgroundImage='url(../images/vip.jpg) no-repeat';
					$yinc.style.backgroundPosition='0px 0px';
				}
				var $yinc1=this.getElementsByClassName('yinc1')[0];
				if($yinc1){
					$yinc1.style.backgroundImage='url(../images/phone.jpg) no-repeat';
					$yinc1.style.backgroundPosition='-128px -360px';
				}
			 }
		}
/*********************************更换城市***************************************/
		 $genghuan=document.getElementById('genghuan');
		 $chengshi=document.getElementById('chengshi');		
		 $genghuan.onclick=function(){
		 	$closecs=this.getElementsByClassName('closecs')[0];
		 	$genghuan.style.backgroundColor='#fff';
		 	$chengshi.style.display='block';
		 	if($closecs){
		 	$closecs.onclick=function(){
	    	console.log('$closecs');
	    	$chengshi.style.display='none';
	    }}
		 }
		$genghuan.onmouseout=function(e){
		if(e.relatedTarget==this || this.contains(e.relatedTarget)){
				return;
		}
		$chengshi.style.display='none';
		$genghuan.style.backgroundColor='#F7F7F7';
	    }
	    
/*********************************我的京东********************************************/
 		 $myjd=document.getElementsByClassName('myjd')[0];
 		 $ren=document.getElementById('ren');
 		 $jiaotou1=document.getElementById('jiaotou1');
 		 $jdbox=document.getElementsByClassName('jd-box')[0];	 	 
 		 $myjd.onmousemove=function(){
 		 		$ren.style.backgroundImage='url(../images/bb.jpg) no-repeat';
 		 	 	$ren.style.backgroundPosition='-121px -60px';		 	 		
 		 	 	$jiaotou1.style.top='7px';
 		 	 	$jiaotou1.style.webkitTransform='rotatez('+'180'+'deg)';
 		 	 	$jdbox.style.display='block';
 		 	 }
 		 $myjd.onmouseout=function(){
 		 	 	$ren.style.backgroundImage='url(../images/bb.jpg) no-repeat';
 		 	 	$ren.style.backgroundPosition='-121px -30px';
 		 	 	$jiaotou1.style.top='12px';
 		 	 	$jiaotou1.style.webkitTransform='rotatez('+'0'+'deg)';
 		 	 	$jdbox.style.display='none';
 		 	 }
 /*********************************去购物车结算************************************/
 		 var $car=document.getElementsByClassName('car')[0];
 		 var $carlogo=document.getElementById('carlogo');
 		 var $prompt2=document.getElementsByClassName('prompt2')[0];
 		 $car.onmousemove=function(){
 		 		$carlogo.style.backgroundImage='#fff url(../images/bb.jpg) no-repeat';		 		
 		 		$carlogo.style.backgroundPosition='-121px -120px';
 		 		$carlogo.style.top='5px';
 		 		$prompt2.style.display='block';
 		 }
 		 $car.onmouseout=function(){
 		 		$carlogo.style.backgroundImage='url(../images/bb.jpg) no-repeat';
 		 		$carlogo.style.backgroundPosition='-121px -91px';
 		 		$carlogo.style.top='7px';
 		 		$prompt2.style.display='none';
 		 }
 /******************************关闭二维码图片*************************************/
 		 var $erweima=document.getElementsByClassName('erweima')[0];
 		 var $close=document.getElementById('close');
 		 $close.onclick=function(){
 		 	$erweima.style.display='none';
 		 }
 /******************************全部商品分类*************************************/
 		 var $lialls=document.getElementsByClassName('liall');
 		 for (var i = 0; i < $lialls.length; i++) {
 		 		 	$lialls[i].onmousemove=function(){
	 		 		 	 var $xiaoyu=this.getElementsByClassName('xiaoyu')[0];
	 		 		 	 if($xiaoyu){
	 		 		 	 	$xiaoyu.style.display='none';
	 		 		 	 }
	 		 		 	 var $imc=this.getElementsByClassName('i-mc')[0];
	 		 		 	 if($imc){
	 		 		 	 	$imc.style.display='block';
	 		 		 	 }
	 		 		 	 var $close1=this.getElementsByClassName('close1')[0];
	 		 		 	 if($close1){
	 		 		 	 	$close1.style.display='block';	 		 		 	 	
	 		 		 	 }
	 		 		 	 $close1.onclick=function(){
	 		 		 	 	$imc.style.display='none';
	 		 		 	 }	 		 		 		
 		 		 	}
 		 		 	$lialls[i].onmouseout=function(){
	 		 		 	 var $xiaoyu=this.getElementsByClassName('xiaoyu')[0];
	 		 		 	 if($xiaoyu){
	 		 		 	 	$xiaoyu.style.display='block';
	 		 		 	 }
	 		 		 	  var $imc=this.getElementsByClassName('i-mc')[0];
	 		 		 	 if($imc){
	 		 		 	 	$imc.style.display='none';
	 		 		 	 }
	 		 		 	 var $close1=this.getElementsByClassName('close1')[0];
	 		 		 	 if($close1){
	 		 		 	 	$close1.style.display='none';
	 		 		 	 }		
 		 		 	}
 		 }		 
/*********************************轮播开始*****************************/
		 var $tupianjihe=document.getElementById('tupianjihe');
		 var $yuandian=document.getElementsByClassName('yuandian');
		 var juli=0;
		 var num=0;
		 var flag;
		 var flag2;
		 for (var i = 0; i < $yuandian.length; i++) {
			$yuandian[i].index=i;
			$yuandian[i].onmouseover=function(){
				$tupianjihe.style.marginLeft=(this.index)*(-670)+'px';
				clearInterval(lunbo1);					
				if(flag){
				 	 flag.style.backgroundColor='#999';
				 	}
		 		if(flag2){
		 		 	 flag2.style.backgroundColor='#999';
		 		 	} 
		 		 $yuandian[this.index].style.background='#E4393C';
				 flag=this; 
		 		if(this.index==6){
		 			juli=0;num=0;
		 		}else{
		 			juli=(-670)*(this.index);num=this.index;
		 		}
			}
			$yuandian[i].onmouseout=function(){
					clearInterval(lunbo1);
					lunbo1=setInterval(lunbo,1000);
			}
		}
		 var lunbo=function(){
			$tupianjihe.style.marginLeft=juli+'px';
			juli-=670;
			if(juli==-4020){
				juli=0;
			}
			for (var i = 0; i < $yuandian.length; i++) {
				$yuandian[i].style.background='#999';
			}	
				if(flag){
				 	flag.style.backgroundColor='#999';
				 	}
		 		if(flag2){
		 		    flag2.style.backgroundColor='#999';
		 		 	} 
				$yuandian[num].style.background='#E4393C';
				flag2=$yuandian[num];
				num++;
				if(num==6){
					num=0;
				}
		}
		 var lunbo1=setInterval(lunbo,1000);
/***********************************左右按键*****************************/
	 	 var $zuo=document.getElementsByClassName('zuo')[0];
	 	 var $you=document.getElementsByClassName('you')[0];
	 	 var $tupianjiheall=document.getElementById('tupianjiheall');
	 	 var xiaonum=0;
	 	 $zuo.onclick=function(){
	 	 	xiaonum=xiaonum-606;
	 	 	$tupianjiheall.style.marginLeft=xiaonum+'px';
	 	 	if(xiaonum==-3030){
	 	 		xiaonum=606;
	 	 	}
	 	 }
	 	 var xiaonum1=-3636;
	 	 $you.onclick=function(){
	 	 	xiaonum1=xiaonum1+606;
	 	 	$tupianjiheall.style.marginLeft=xiaonum1+'px';
	 	 	if(xiaonum1==0){
	 	 		xiaonum1=-3636;
	 	 	}
	 	 }
//****************************三层选项卡*****************************
	var forelist=$('.fore-list');
	forelist.hover(function(){
		$('.hf-box').show();
		$($('.fore-list-con')[$(this).index()]).show();
	},function(){})

	var forelist1=$('.fore-list1');
	forelist1.hover(function(){
		$('.hf-box').show();
		$(this).css('color','#E4393C');
		$('.fore-list-con').hide();
		$($('.fore-list-con')[$(this).index()]).show();
	},function(){
		forelist1.css('color','#666666');
	})
	//机票二层选项卡
	var jplist=$('.jp-list');
	jplist.hover(function(){
		$(this).css('color','#E4393C');
		$('.jp-con').hide();
		$($('.jp-con')[$(this).index()]).show();
	},function(){
		jplist.css('color','#666666');
	})
	//游戏二层选项卡
	var gamelist=$('.game-list');
	gamelist.hover(function(){
		$(this).css('color','#E4393C');
		$('.game-con').hide();
		$($('.game-con')[$(this).index()]).show();
	},function(){
		gamelist.css('color','#666666');
	})
	$('.banner-b-right3').hover(function () {}, function () {
		$('.hf-box').hide();
		$('.fore-list-con').hide();
	})
/*******************************楼层*******************************/
	 	 var $list1s=document.getElementsByClassName('list1');
	 	 var $hongtiao=document.getElementById('hongtiao');
	 	 var $onefs=document.getElementsByClassName('onefloor');
	 	 for (var i = 0; i < $list1s.length; i++) {
	 	 	$list1s[i].index=i;
	 	 	$list1s[i].onmouseover=function(){	 	 		
	 	 		/*this.style.color='#E03A3E';*/
	 	 		var a=0;
	 	 		a=this.index*159;
	 	 		$hongtiao.style.left=a+'px';
	 	 		for(var i=0;i<5;i++){
				$onefs[i].style.display='none';
				}
				$onefs[this.index].style.display='block';
	 	 		}
	 	 }
	 	 	/*$list1s[i].onmouseout=function(){	 	 		
	 	 		this.style.color='#666666';
	 	 	}*/
/*************************************楼层大轮播****************************/
		 var $tupianlcs=document.getElementsByClassName('tupianlc');
		 var $tilists=document.getElementsByClassName('tiao-list');
		 var $tjtp=document.getElementById('tjtp');
		 for(var i=0;i<$tilists.length;i++){
			$tilists[i].index=i;
			$tilists[i].onmouseover=function(){
				var b=0;
				b=this.index*473;
				$tjtp.style.left=-b+'px';
				for(var j=0;j<$tilists.length;j++){
					// $tdlist[j].style.display='none';
					$tilists[j].style.backgroundColor='#999999';
				}			
				$tilists[this.index].style.backgroundColor='#7ABD54';
			}
	}
/*************************************楼层小轮播********************************/
			 var $imgshow=document.getElementById('imgshow');	
			 var $xtlists=document.getElementsByClassName('xt-list');
			 for(var i=0;i<$xtlists.length;i++){
				$xtlists[i].index=i;
				$xtlists[i].onmouseover=function(){
					var c=0;
					c=this.index*209;
					$imgshow.style.left=-c+'px';
					for(var j=0;j<$xtlists.length;j++){
						$xtlists[j].style.backgroundColor='#999999';
					}
					    $xtlists[this.index].style.backgroundColor='#7ABD54';
				}
			}
/**************************三楼亮光部分***************************************/
		 	 var $cfs=document.getElementsByClassName('clothing-fore1');
		 	 var $gaoliangs=document.getElementsByClassName('gaoliang');
		 	 for(var i=0;i<$cfs.length;i++){
				$cfs[i].index=i;		
				$cfs[i].onmouseover=function(e){
					if(e.relatedTarget==this || this.contains(e.relatedTarget)){
						return;
					}
					for(var j=0;j<$cfs.length;j++){
						$gaoliangs[j].style.display='block';
					}			
					$gaoliangs[this.index].style.display='none';
				}
				$cfs[i].onmouseout=function(e){
					if(e.relatedTarget==this || this.contains(e.relatedTarget)){
						return;
					}
					for(var j=0;j<$cfs.length;j++){
						$cfs.style.display='none';
					}
				}
			}
/**************************热门晒单 热门活动 ***********************************/
		 	 var $sharemc=document.getElementById('share-mc');
		 	 var top=-237;
		 	 var zidong=function(){		 	 	
		 	 	 $sharemc.style.marginTop=top+'px';
		 	 	  top=top+79;		 	 	 
		 	 	 if(top>0){
		 	 	 	top=-237;
		 	 	 }
		 	 }
		 	 var zidong1=setInterval(zidong,1000);
		 	 var $activemc=document.getElementById('active-mc');
		 	 var top1=-237;
		 	 var zidong2=function(){		 	 	
		 	 	 $activemc.style.marginTop=top1+'px';
		 	 	  top1=top1+79;		 	 	 
		 	 	 if(top1>0){
		 	 	 	top1=-237;
		 	 	 }
		 	 }
		 	 var zidong3=setInterval(zidong2,2000);
}