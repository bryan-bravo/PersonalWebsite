var frameNumber=3;
var refStringSize=9;

var faultCount=0;
var tracker =0;//different
var refString = [];
var _frames=[];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(i=0;i<refStringSize;i++)
	refString.push(getRandomInt(0,9));

function firstInIndex(array) {
	//find the smallest tracker	
	 var smallest=array.reduce(function(accumulator, currentValue, currentIndex, array){
		if(accumulator>currentValue.tracker)
			return currentValue.tracker;
		else
			return accumulator;
	},array[0].tracker);

	var bork = array.findIndex(function(element, index){
		if(element.tracker==smallest)
			return true;
		else 
			return false;
	});
	
	return bork;	
}
//if the char is in the frames
function _includes(array,value){
	for(var i =0;i<array.length;i++){
		if(array[i].x==value)
			return true;
	}
	return false;
}
 
console.log("refString: "+refString);

 for(i=refStringSize;i>0;i--){
	var x = refString.shift();
	//if frames are not filled
	if(_frames.length!=frameNumber){
		if(!_includes(_frames,x)){
			_frames.push({"x":x,"tracker":tracker});
			tracker++;
			faultCount++;
		}	
	//if frames are filled
	}else{
		if(!_includes(_frames,x)){
			let index =firstInIndex(_frames);
			_frames[index]={"x":x,"tracker":tracker};
			tracker++;
			faultCount++;

		}
	}
 } 

console.log(_frames);
console.log('fault count: '+faultCount);
