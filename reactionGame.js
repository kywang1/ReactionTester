            function getRandomColor(){
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for(var i = 0; i < 6; i++){
                    color+= letters[Math.round(Math.random()*15)];
                }
                return color;
            }

            function changeRadius(){
                if(Math.random() > 0.5){
                    radius = "100px";
                } else{
                    radius = "0px";
                }
                return radius;
            }

            function changeTop(){
                var top = Math.random();
                top = top*300;
                return top+"px";
            }

            function changeLeft(){
                var left = Math.random();
                left = left*500;
                return left+"px"
            }

            var clickedTime;
            var createdTime;
            var reactionTime;

            function makeBox(){
                
                var x = Math.random();
                x = x*2000;
                
                setTimeout(function(){
                    document.getElementById("box").style.top=changeTop();
                    document.getElementById("box").style.left=changeLeft();
                    document.getElementById("box").style.backgroundColor= getRandomColor();
                    document.getElementById("box").style.borderRadius = changeRadius();
                    document.getElementById("box").style.display = "block";

                    createdTime = Date.now();
                },x);
            }   

            document.getElementById("box").onclick=function(){
                clickedTime = Date.now();
                reactionTime = (clickedTime - createdTime)/1000;
                document.getElementById("time").innerHTML = reactionTime;
                this.style.display = "none";
                makeBox();
            }

            makeBox();