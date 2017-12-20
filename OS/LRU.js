//variable declaration
var frameNumber=3;
var refStringSize=9;

var faultCount=0;
var refString = [];
var _frames=[];
var refD=[];//different
var arrayOfDisplayArrays=[];

//fills the array
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for(i=0;i<refStringSize;i++)
	refString.push(getRandomInt(0,9));
//returns boolean the one unchecked is the LRU in the frames
function onlyOneUnchecked(array){
	let uncheckedCount=0;
	for(var i =0;i<array.length;i++)
		if(array[i].checked==false)
			uncheckedCount++;
	if(uncheckedCount==1)
		return true;
	else
		return false;
}
//getting the index of the LRU in _frames
function getLRUIndex(_frames,refD){
	//checks all that are in the refD
	for(var i = refD.length;!onlyOneUnchecked(_frames);i--){
		_frames.forEach(function(currentValue,index,array){
			if(array[index].x==refD[i]&&array[index].checked==false){
			array[index].checked=true;	
			}
		});	
	}
	//get the index of the uncheckedframe
	var bork = _frames.findIndex(function(element, index){
		if(element.checked==false)
			return true;
		else 
			return false;
	});
	_frames.forEach(function(currentValue,index,array){
			array[index].checked=false;	
			
		});	
		return bork;
}
//if the value x is in the frames 
function _includes(array,value){
	for(var i =0;i<array.length;i++){
		if(array[i].x==value)
			return true;
	}
	return false;
}

console.log("refString: "+refString);

//"driver"
 for(i=refStringSize;i>0;i--){
	var x = refString.shift();
	//if frames are not filled
	if(_frames.length!=frameNumber){
		if(!_includes(_frames,x)){
			_frames.push({'x':x,'checked':false});
			faultCount++;

		}	
			
	//if frames are filled
	}else{
		if(!_includes(_frames,x)){
		var index=getLRUIndex(_frames,refD);
		_frames[index]={'x':x,'checked':false};
		faultCount++;

		}
	}
	refD.push(x);
 }
 
 console.log(_frames);
 console.log(faultCount)
