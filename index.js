var sorted_from = [];
var sorted_to = [];
var max_overlap = 0;
var current_overlap = 0;
function results(data){
    //1
    for (k=0; k<data.length; k++){
        sorted_from.push(data[k].from);
        sorted_to.push(data[k].to);
    }
    //2
    sorted_from = sorted_from.sort(function(a, b){return a-b});
    sorted_to = sorted_to.sort(function(a, b){return a-b});

    var a = sorted_from.length;
    var b = sorted_to.length;
    //3
    var i = 0;
    var j = 0;
    while(i < a && j < b){
        if(sorted_from[i] < sorted_to[j]){
    			current_overlap++;
    			max_overlap = Math.max(max_overlap, current_overlap);
    			i++;
    		}
    		else{
    			current_overlap--;
    			j++;
    		}
    }
    return max_overlap;
}
results(parts);
