
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
// function genRandomArray(arr=[],min,max){
// 	for(i=0;i<arr.length;i++){
// 		arr[i]=Math.floor(Math.random() * (max - min)) + min;
// 	}
// }

// Сортирует и возвращает массив с уникальными значениями
// function sort_unicArr(arr){
// 	arr=arr.sort(function(a,b){
// 	  return a-b;
// 	  console.log(arr,'sort');
//   });
//   var retArr=[];
//   for(var i=0;i<arr.length;i++){
// 	  if(arr[i-1]!==arr[i]){
// 		  retArr.push(arr[i]);
// 	  }
//   }
//   return retArr;
// }


//Счетчик

// function count(){
// 	let i=0;
// 	return function(){
// 		i++
// 		return i
// 	}
// }
// let a= count();
// console.log(a());
