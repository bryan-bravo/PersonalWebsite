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

//if the value x is in the frames 
function _includes(array,value){
	for(var i =0;i<array.length;i++)
		if(array[i].x==value)
			return true;
	
	return false;
}
//get the index
function getIndex(fArray,rArray){
	//set the greatest counter
	fArray.forEach(function(_framesCurrentValue, _framesIndex, fArray){
		rArray.forEach(function(refCurrentValue, refIndex, rArray){
			if(_framesCurrentValue.x==refCurrentValue&&!_framesCurrentValue.checked){
				_framesCurrentValue.checked=true;
				_framesCurrentValue.counter++;
			}
			if(!_framesCurrentValue.checked)
				_framesCurrentValue.counter++;
		});
		console.log(_framesCurrentValue.x)
	});

	// find largestCounter
	var largestCounter=fArray.reduce(function(accumulator, currentValue, currentIndex, fArray){
		if(accumulator<currentValue.counter)
			return currentValue.counter;
		else
			return accumulator;
	},fArray[0].counter);

	//find index of largest counter
	var bork = fArray.findIndex(function(element, index){
		if(element.counter==largestCounter)
			return true;
		else 
			return false;
	});
 	//reset
	fArray.forEach(function(currentValue, index){
		currentValue.checked=false;
		currentValue.counter=0;
	});
	console.log("--------")

	return bork;
}
console.log("refString: "+refString);

//"driver"
 for(i=refStringSize;i>0;i--){
	var x = refString.shift();
	//if frames are not filled
	if(_frames.length!=frameNumber){
		if(!_includes(_frames,x)){
			_frames.push({'x':x,'counter':0,'checked':false});
			faultCount++;
		}	
			
	//if frames are filled
	}else{
		if(!_includes(_frames,x)){
			_frames[getIndex(_frames,refString)]={'x':x,'counter':0,'checked':false};
			faultCount++;
		}
	}
 }
  console.log(_frames);
  console.log('fault count: '+faultCount);
