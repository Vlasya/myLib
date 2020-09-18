
// Заполнить случайными числами.
// for( i=0,max=15 ;i<a.length;i++){
// 	a[i]=Math.floor(Math.random() * Math.floor(max));
// }
// ---------------------------------------------------------

// Проверка на число 
// do{
// 	a = +prompt('Enter a',1);
// } while(isNaN(a) || a<1);
// ------------------------------

// Простое число 
// isPrime = true;

	// if(a>2){
		
	// 	for(i=2;i<a;i++){
	// 		console.log(a+'%'+i+' = '+(a%i));
			
	// 		if(a%i === 0){
	// 			// isPrime = false;
	// 			isPrime = !isPrime;
	// 			console.log(a,'is composite number');
	// 			break;
	// 		}
	// 	}

	// }

// 	if(isPrime){
// 		console.log(a,'is prime');

// -----------------------------------

// -------найти максимальное число и минимальное число.
// if(a[i]>a[0]){
// 	a[0]=a[i];
// 	max=a[0];
// } 
// console.log('Maxa[0]:max ', max);
// -----------------------------------------


// let n= +prompt("Введите количество");

// let a=1;
// let b=1;

// for (i=3; i<=n; i++){
//  let c=a+b;
//  a=b;
//  b=c;
 
//  console.log(b);
// }


// var summ=0;

// for (x=2;x<250;x++){
// 	for ( i = 2 , composite= true; i <x && composite; i++) {
// 		if(x%i===0){
// 			composite= false;
// 		}
// 	}
// 	if (composite) {
// 		summ+=x;
// 	}
// }
// console.log('Сумма простых чисел = ', summ);


// let n = 250, sum = 0;
// for (let i = 2, isComposite=true; i < n && isComposite; i++){
//     for (let j = 2; j < i; j++){
//         if (i % j !== 0){
// 				isComposite=false;
				
// 		  };
// 		  sum+=i;
//     }
    
// }
// console.log(sum)



// let n= +prompt("Введите количество");

// let a=1;
// let b=1;

// for (i=3; i<=n; i++){
// 	let c=a+b;
// 	a=b;
// 	b=c;
	
// 	console.log(b);
// }




// ЗАполняет массив рандомными числами
function genRandomArray(arr=[],min,max){
	for(i=0;i<arr.length;i++){
		arr[i]=Math.floor(Math.random() * (max - min)) + min;
	}
}

// Сортирует и возвращает массив с уникальными значениями
function sort_unicArr(arr){
	arr=arr.sort(function(a,b){
	  return a-b;
	  console.log(arr,'sort');
  });
  var retArr=[];
  for(var i=0;i<arr.length;i++){
	  if(arr[i-1]!==arr[i]){
		  retArr.push(arr[i]);
	  }
  }
  return retArr;
}


//Счетчик

function count(){
	let i=0;
	return function(){
		i++
		return i
	}
}
let a= count();
console.log(a());


// Собираем все обьекты в один
function convert(obj){
	if(typeof obj!=='object'||Array.isArray(obj)) return 'Только объекты';

	let newObject={};
	returnNewObj(newObject,obj)
	return newObject
}

function returnNewObj(newObject,obj){
	for(let el in obj){
		if(typeof obj[el]==='object'){
			returnNewObj(newObject,obj[el])
		}else{
			newObject[el]=obj[el]
		}
	}
}
// console.log('returnNewObj(obj): ', newObject);



// Проверка числа на простоту

isPrime=function(){
	for(i=2,sqr=Math.sqrt(this);i<=sqr;i++){
		if(this%i===0){
			return false
		}
	}
	return this>1
}

function isPrime(num) {
	
	if(
		 num < 2 ||
		 num > 2 && num % 2 === 0 ||
		 num > 3 && num % 3 === 0 ||
		 num > 6 && (num - 1) % 6 !== 0 && (num + 1) % 6 !== 0
	) return false;

	for(var i = 6, sqrt = 1 + Math.sqrt(num); i <= sqrt; i += 6)
		 if(num % (i - 1) === 0 || num % (i + 1) === 0) return false;

	return true;

}


// НАходим элементы объекта в массиве с одинаковым ключом

function theSameName(arr){
	let count=arr.reduce(function(prev,item){
		prev[item.name]=(prev[item.name] || 0)+1;
		return  prev
},{})


let same= arr.filter(function(obj){
return count[obj.name]>1
})

return same
}


