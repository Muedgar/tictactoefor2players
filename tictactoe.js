let status = {
    array : ["","","","","","","","",""],
    current : "", 
    over : false,
    empty_spots : [],
    winner: "",
    loser: "",
    draw: "",
    input: null
};
function playerX() {
    var count = 0;
            for(var i=0;i<status.array.length;i++) {
                if(status.array[i]!="") {
                    count++;
                }
            }
            if(count==9) {
                return draw();
            }
    if(winnerAskX()||winnerAskO()) {
        return false;
    }
   
        var done = false;
        var position = status.input;
            for(var a=0;a<status.empty_spots.length;a++) {
                if(status.empty_spots[a] == position) {
                    if(status.array[position] == "") {
                        done = true;
                        delete status.empty_spots[a];
                    }
                }
            }
        
        
         if(done==true) {
            status.array[position] = {player:status.current, positionPlayedTo: position};
         var newId = `header${status.input}`;
         document.getElementById(newId).innerHTML = status.current;
        console.log(status.array[position]);
        if(status.current=="X") {
            status.current = "O";
        }else if(status.current=="O") {
            status.current = "X";
        }
         }
        
        
        document.getElementById("current-player-header").innerHTML = status.current;
        
        var lastCount = 0;
            for(var i=0;i<status.array.length;i++) {
                if(status.array[i]!="") {
                    lastCount++;
                }
            }
            if(lastCount==9) {
                return draw();
            }
        
        if(winnerAskX()||winnerAskO()) {
                return true;
            }
            
}
function playerO() {
    var count = 0;
            for(var i=0;i<status.array.length;i++) {
                if(status.array[i]!="") {
                    count++;
                }
            }
            if(count==9) {
                return draw();
            }
    if(winnerAskX()||winnerAskO()) {
        return false;
    }
   
        var done = false;
        var position = status.input;
            for(var a=0;a<status.empty_spots.length;a++) {
                if(status.empty_spots[a] == position) {
                    if(status.array[position] == "") {
                        done = true;
                        delete status.empty_spots[a];
                    }
                }
            }
        
         if(done==true) {
            status.array[position] = {player:status.current, positionPlayedTo: position};
            var newId = `header${status.input}`;
            document.getElementById(newId).innerHTML = status.current;
            console.log(status.array[position]);
            if(status.current=="X") {
                status.current = "O";
            }else if(status.current=="O") {
                status.current = "X";
            }
         }
         
        
        document.getElementById("current-player-header").innerHTML = status.current;
        var lastCount = 0;
            for(var i=0;i<status.array.length;i++) {
                if(status.array[i]!="") {
                    lastCount++;
                }
            }
            if(lastCount==9) {
                return draw();
            }
            if(winnerAskX()||winnerAskO()) {
                return true;
            }
            
}
function runner() {
    
    if(status.current=="X") {
        playerX();
    }else{
        playerO();
    }
}

function app(cur) {
    console.log(status);
    
    if((cur=='O')||(cur=='X')) {
        status.array = ["","","","","","","","",""];
        status.over = false;
        status.empty_spots = [0,1,2,3,4,5,6,7,8];
        status.winner = "";
        status.loser = "";
        status.draw = "";
        status.input = null;
        status.current = cur;
        document.getElementById("winner").innerHTML = "";
        document.getElementById("loser").innerHTML = "";
        document.getElementById("current-player-header").innerHTML = status.current;
        for(var b=0;b<9;b++) {
                var newId = `header${b}`;
                document.getElementById(newId).innerHTML = "";
        }
    }else if(status.current=="") {
        
        return false;
    }else if((status.current!="")&&(cur>=0)&&(cur<9)){
        var count = 0;
        for(var i=0;i<status.array.length;i++) {
            if(status.array[i]!="") {
                count++;
            }
        }
        if(count==9) {
            return draw();
        }
            if(winnerAskX()||winnerAskO()) {
            return false;
        }else{
            status.input = cur;
            document.getElementById("current-player-header").innerHTML = status.current;
            runner();
            return true;
        }
        }
    }


function winnerAskX() {
        var matchingForX = 0;
        var xPlays = [];
        var winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for(var find=0;find<status.array.length;find++) {
            if((status.array[find].player == "X")) {
                xPlays.push(status.array[find].positionPlayedTo);
            }
        }
        
        for(var winningX = 0;winningX<winningCombination.length;winningX++) {
            var count = 0;
            for(var xSearch=0;xSearch<3;xSearch++) {
                for(var xxSearch=0;xxSearch<xPlays.length;xxSearch++) {
                    if(winningCombination[winningX][xSearch] == xPlays[xxSearch]) {
                        count++
                    }
                }
            }
            if(count==3) {
                matchingForX++;
                break;
            }
        }
        
        if(matchingForX>0) {
            status.over = true;
            status.winner = "X";
            status.loser = "O";
            status.draw = "false";
            status.current = "";
            document.getElementById("winner").innerHTML = status.winner;
            document.getElementById("loser").innerHTML = status.loser;
            console.log(status);
            return true;
        }
    }
    function winnerAskO() {
        
       
            var matchingForO = 0;
            var oPlays = [];
            var winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
            for(var find=0;find<status.array.length;find++) {
                if((status.array[find].player == "O")) {
                    oPlays.push(status.array[find].positionPlayedTo);
                }
            }
            
            for(var winningO = 0;winningO<winningCombination.length;winningO++) {
                var count = 0;
                for(var oSearch=0;oSearch<3;oSearch++) {
                    for(var ooSearch=0;ooSearch<oPlays.length;ooSearch++) {
                        if(winningCombination[winningO][oSearch] == oPlays[ooSearch]) {
                            count++
                        }
                    }
                }
                if(count==3) {
                    matchingForO++;
                    break;
                }
            }
            if(matchingForO>0) {
                status.over = true;
                status.winner = "O";
                status.loser = "X";
                status.draw = "false";
                status.current = "";
                console.log(status);
                document.getElementById("winner").innerHTML = status.winner;
                document.getElementById("loser").innerHTML = status.loser;
                document.getElementById("current-player-header").innerHTML = status.current;
                return true;
            }
        }
        function draw() {
            
            
            var count = 0;
            for(var i=0;i<status.array.length;i++) {
                if(status.array[i]!="") {
                    count++;
                }
            }
            if(count==9) {
            
            if(!(winnerAskX())&&!(winnerAskO())) {
                status.over = true;
                status.winner = "";
                status.loser = "";
                status.draw = "true";
                status.current = "";
                document.getElementById("winner").innerHTML = "draw";
                document.getElementById("loser").innerHTML = "draw";
                return true;
            }else{
                return false;
            }
        }
            
        }
