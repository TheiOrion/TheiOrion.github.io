$(function() {
    var $barItemFive = $("#barItemFive");
    var randomNumber = Math.floor(Math.random() * 31) + 1;
    console.log(randomNumber);
    var funhausObject = {
        1:{
            "url":"https://i.imgur.com/OUVhCmW.png"
        },
        2:{
            "url":"https://i.imgur.com/YsJjYkO.png"
        },
        3:{
            "url":"https://i.imgur.com/ejvyVDL.png"
        },
        4:{
            "url":"https://i.imgur.com/2ldbd0M.png"
        },
        5:{
            "url":"https://i.imgur.com/LUb7ooU.png"
        },
        6:{
            "url":"https://i.imgur.com/ry85Nwb.png"
        },
        7:{
            "url":"https://i.imgur.com/qca1cvm.png"
        },
        8:{
            "url":"https://i.imgur.com/2zUhjCj.png"
        },
        9:{
            "url":"https://i.imgur.com/hJFr56v.png"
        },
        10:{
            "url":"https://i.imgur.com/uHmjvv2.png"
        },
        11:{
            "url":"https://i.imgur.com/HC6OXbK.png"
        },
        12:{
            "url":"https://i.imgur.com/NlndAxS.png"
        },
        13:{
            "url":"https://i.imgur.com/jCkB85s.png"
        },
        14:{
            "url":"https://i.imgur.com/E1VJuQh.png"
        },
        15:{
            "url":"https://i.imgur.com/lYCqPhp.png"
        },
        16:{
            "url":"https://i.imgur.com/nrz4TIJ.png"
        },
        17:{
            "url":"https://i.imgur.com/Mwc0El5.png"
        },
        18:{
            "url":"https://i.imgur.com/13txoXR.png"
        },
        19:{
            "url":"https://i.imgur.com/O4jjBbO.png"
        },
        20:{
            "url":"https://i.imgur.com/JuQtu8U.png"
        },
        21:{
            "url":"https://i.imgur.com/65ugmDO.png"
        },
        22:{
            "url":"https://i.imgur.com/fmU9Vl8.png"
        },
        23:{
            "url":"https://i.imgur.com/Ve1Irqv.png"
        },
        24:{
            "url":"https://i.imgur.com/Ix3Xapa.png"
        },
        25:{
            "url":"https://i.imgur.com/qscrscO.png"
        },
        26:{
            "url":"https://i.imgur.com/ZJPgDFA.png"
        },
        27:{
            "url":"https://i.imgur.com/ZHA182j.png"
        },
        28:{
            "url":"https://i.imgur.com/aRPM90I.png"
        },
        29:{
            "url":"https://i.imgur.com/JROgKkT.png"
        },
        30:{
            "url":"https://i.imgur.com/boZ1qfV.png"
        },
        31:{
            "url":"https://i.imgur.com/0GwAIPp.png"
        }
    };
    
    var randomHausImage = funhausObject[randomNumber]["url"];
    console.log(randomHausImage);

    $barItemFive.css({"background": "url('"+randomHausImage+"')",
                      "background-position": "center",
                      "background-repeat": "no-repeat",
                      "opacity": "1"});

    var $vidsClick = $("#vids");
    var $socialClick = $("#social");
	var $gameClick = $("#game");
	var $newsClick = $("#news");
    var $dissmissClick = $("#dismissAll");

	var $selectedVids = $(".selectedVids");
	var $selectedSocial = $(".selectedSocial");
	var $selectedGame = $(".selectedGame");
	var $selectedNews = $(".selectedNews");

    $vidsClick.click(function(){

    	if ($(".socialActive")[0]){
    		$selectedSocial.removeClass("socialActive");
            $socialClick.removeClass("socialButtonActive");
    		$selectedSocial.fadeOut("slow");
    	}
    	if ($(".gameActive")[0]){
    		$selectedGame.removeClass("gameActive");
            $gameClick.removeClass("gameButtonActive");
    		$selectedGame.fadeOut("slow");
    	}
    	if ($(".newsActive")[0]){
    		$selectedNews.removeClass("newsActive");
            $newsClick.removeClass("newsButtonActive");
    		$selectedNews.fadeOut("slow");
    	}

    	$selectedVids.addClass("vidsActive");
        $vidsClick.addClass("vidsButtonActive");
    	$selectedVids.fadeIn("slow");
    });

    $socialClick.click(function(){

    	if ($(".vidsActive")[0]){
    		$selectedVids.removeClass("vidsActive");
            $vidsClick.removeClass("vidsButtonActive");
    		$selectedVids.fadeOut("slow");
		}
		if ($(".gameActive")[0]){
    		$selectedGame.removeClass("gameActive");
            $gameClick.removeClass("gameButtonActive");
    		$selectedGame.fadeOut("slow");
    	}
    	if ($(".newsActive")[0]){
    		$selectedNews.removeClass("newsActive");
            $newsClick.removeClass("newsButtonActive");
    		$selectedNews.fadeOut("slow");
    	}

		   	$selectedSocial.addClass("socialActive");
            $socialClick.addClass("socialButtonActive");
		   	$selectedSocial.fadeIn("slow");

    });
	$gameClick.click(function(){

    	if ($(".vidsActive")[0]){
    		$selectedVids.removeClass("vidsActive");
            $vidsClick.removeClass("vidsButtonActive");
    		$selectedVids.fadeOut("slow");
		}
		if ($(".socialActive")[0]){
    		$selectedSocial.removeClass("socialActive");
            $socialClick.removeClass("socialButtonActive");
    		$selectedSocial.fadeOut("slow")
    	}
    	if ($(".newsActive")[0]){
    		$selectedNews.removeClass("newsActive");
            $newsClick.removeClass("newsButtonActive");
    		$selectedNews.fadeOut("slow");
    	}

		$selectedGame.addClass("gameActive");
        $gameClick.addClass("gameButtonActive");
		$selectedGame.fadeIn("slow");
	});


	$newsClick.click(function(){
		if ($(".vidsActive")[0]){
    		$selectedVids.removeClass("vidsActive");
            $vidsClick.removeClass("vidsButtonActive");
    		$selectedVids.fadeOut("slow");
		}
		if ($(".socialActive")[0]){
    		$selectedSocial.removeClass("socialActive");
            $socialClick.removeClass("socialButtonActive");
    		$selectedSocial.fadeOut("slow");
    	}
    	if ($(".gameActive")[0]){
    		$selectedGame.removeClass("gameActive");
            $gameClick.removeClass("gameButtonActive");
    		$selectedGame.fadeOut("slow");
    	}

    	$selectedNews.addClass("newsActive");
        $newsClick.addClass("newsButtonActive");
    	$selectedNews.fadeIn("slow");

	});

    $dissmissClick.click(function(){

        if ($(".vidsActive")[0]){
            $selectedVids.removeClass("vidsActive");
            $vidsClick.removeClass("vidsButtonActive");
            $selectedVids.fadeOut("slow");
        }
        if ($(".socialActive")[0]){
            $selectedSocial.removeClass("socialActive");
            $socialClick.removeClass("socialButtonActive");
            $selectedSocial.fadeOut("slow");
        }
        if ($(".gameActive")[0]){
            $selectedGame.removeClass("gameActive");
            $gameClick.removeClass("gameButtonActive");
            $selectedGame.fadeOut("slow");
        }
        if ($(".newsActive")[0]){
            $selectedNews.removeClass("newsActive");
            $newsClick.removeClass("newsButtonActive");
            $selectedNews.fadeOut("slow");
        }    
    });

});