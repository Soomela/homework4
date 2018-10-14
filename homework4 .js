// exp2
function triangleStars(height){
  while (height>0)
            {
            let starCounter = (height * 2) - 1;
                let line = "";
                while (starCounter > 0)
                {
                    line += "*";
                    starCounter--;
                }
                console.log(line);
                height--;
            }
}

triangleStars(4);

// ex3
function multiToSingle(multArr){

	let singArr = [];
	let x = multArr.length;
	let y = multArr[0].length;
	let y0 = multArr[0];
	let yi = 0;
	let z = multArr[1].length;
	let z0 = multArr[1];
	let zi = 0;
	let i = 0;
	
	while(x != 0){
	
		while(y != 0){
		
		singArr[i] = y0[yi];
		yi++;
		i++;
		y--;
		
		}
		
		while(z != 0){
		
		singArr[i] = z0[zi];
		zi++;
		i++;
		z--;
		
		}
		
		x--;	
	
	}
	
	console.log(singArr);

} 


multiToSingle([[1,2,3],[4,5,6]]);  //should return [1,2,3,4,5,6]
	  
	  
	  
	  
	  
	  
	  
	  
	  
// ex4

function findMinMax(arraybol, bol) {
	
	if(bol === true){
		
		let lenOfAr = arraybol.length;
		let i = 0;
		let j = 0;
		
		while(lenOfAr != 0){
			
			lenOfAr--;
			j = arraybol[lenOfAr];
			
			if(i < j) {
			i = j;
			} 
			
		}
		console.log(i);
	}
	
	if(bol === false){
	
		let lenOfAr = arraybol.length;
		let x = 0;
		let y = 0;
		
		while(lenOfAr != 0){
			
			lenOfAr--;
			y = arraybol[lenOfAr];
			if(x === 0){
			
			x = arraybol[lenOfAr];
			
			}
			
			if(x > y) {
			x = y;
			} 
			
		}
		
		console.log(x);
	
	}
	
	
}

findMinMax([4,2,66,-44,8],true)   //should log 66
findMinMax([4,2,66,-44,8],false)   //should log -44



	  
	  
	  
	  
	  


// ex6
function sum(number) {
	
	let n = 0;
	let lengthh = number.length; 
	
	
	while(lengthh != 0){
    	lengthh = lengthh - 1;
		n = n + number[lengthh]; 
	}
	console.log(n)
}


sum([4,3,2]);

	  
	  

//ex7
function reverse(str){
		  let lengStr = str.length;
		  let x = "";
		  
		  while(lengStr != 0){
			  lengStr = lengStr - 1;
			  x = x + str[lengStr];
			  
		  }
		  console.log(x);
	  }
	  
	  reverse('abcd');

	  
// ex8
	  function checkerboard(anum){
		  let t = anum;
		  let x1 = 1;
		  let txt = "";
		  let finalt = "";
		  
		  while(anum != 0){
			  
			  x1++;
			  
			  if (x1 % 2 === 0) {
				  while(t != 0){
					  t--;
					  txt = txt + "*";
				  } 
				  finalt = finalt + txt;
			  }
			  
				  else {
					  while(t != 0){
						  t--;
						  txt = txt + "*";
					  }
					  finalt = finalt + " " + txt;
				  }
			  
			  finalt = finalt + "\n";
			  anum = anum - 1;
					  
			  } console.log(finalt);
		  }
	  
	  checkerboard(5);


	
	  
//ex5
function forEach(arr01, functionval){
		leng = arr01.length;
		while(leng != 0){
			  leng--;
			  functionval(arr01[leng]);
		  }
	}
	  
	forEach([1,2,3,4], function (val){
		console.log(val);
	});