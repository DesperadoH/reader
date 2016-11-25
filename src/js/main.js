

(function(){

	var Util = (function(){

		var prefix = 'html5_reader_';
		var storageGetter = function(key){
			return localStorage.getItem(prefix + key);
		}
		var storageSetter = function(key,val){
			return localStorage.setItem(prefix + key, val);
		}
		return {
			storageGetter : storageGetter,
			storageSetter : storageSetter
		}

	})();

	var Dom = {
		top_nav: $("#top-nav"),
		bottom_nav: $("#bottom-bar"),
		content_warp: $("#content-warp"),
		night_day_switch_button: $("#night-button"),
		font_button: $("#font-button"),
		font_container: $("#font-container"),
		boolean: false
	};
	var win = $(window);
	var doc = $(document);

	function main(){
		// 项目的入口函数
		eventHandle();
	}

	function readerModel(){
		// todo 数据交互
		
	}
	function readerBaseFrame(){
		// todo 渲染基本的UI结构
	}
	function eventHandle(){
		// 交互的事件绑定
		
		
		// var top_nav = document.getElementById("top-nav");
		// var bottom_nav = document.getElementById("bottom-bar");
		// var font_container = document.getElementById("font-container");
        $('#content-warp').click(function(){             
            //Dom.top_nav.toggle();             
			// Dom.bottom_nav.toggle();
			
			if(Dom.boolean){

				// top_nav.className = "top-nav";
				// bottom_nav.className = "bottom-bar";
				Dom.top_nav.removeClass("transTop");
				Dom.bottom_nav.removeClass("transBottom");
				Dom.boolean = false;
			}else {
				Dom.top_nav.addClass("transTop");
				Dom.bottom_nav.addClass("transBottom");
				// top_nav.className = "top-nav transTop";
				// bottom_nav.className = "bottom-bar transBottom";
				Dom.boolean = true;
			}
			
         })
       Dom.font_button.click(function(){
        	if(Dom.font_container.css("display") == 'none'){
        		Dom.font_container.show();
        	}else{
        		Dom.font_container.hide();
        	}
        	
        })
        Dom.night_day_switch_button.click(function(){

        })

        Dom.content_warp.scroll(function(){
        	Dom.top_nav.removeClass("transTop");
			Dom.bottom_nav.removeClass("transBottom");
			Dom.font_container.hide();
			Dom.boolean = false;
			
        })

}

	main();

	

})();