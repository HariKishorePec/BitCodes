
function twoSum(arr, x){ //let sorted array
  console.log('ok2')
  let n = arr.length
  let min = 0
  let max = n-1    //so, arr[max]  gives last element

  while(min<max){
    let sum = arr[min]+arr[max]
    if (sum === x){
      console.log(`Sum of ${arr[min]} and ${arr[max]} is ${x}`)
      return true
    } else {
      if (sum < x) {
        min+=1
      } else {
        max-=1
      }
    }
  }
  return false
}

function main(){

  console.log('ok')
  let arr = [1,1,2,3,5,6,9,11]
  let x = 8
  let isSum = twoSum(arr, x)
  if (isSum){
    console.log('yeah')
  } else{
    console.log('naah')
  }
}

main()