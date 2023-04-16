
function twoSum(arr, x){
  let pairExist = false
  let n = arr.length
  for (let i =0; i< n; i++){
    for (let j=i; j<=n; j++){
      if (arr[i]+arr[j]==x){
        console.log(`The sum of  ${arr[i]} and ${arr[j]} is ${x}`)
        result.push([arr[i], arr[j]])
        pairExist = true
      }
    }
  }
  return pairExist
}

function main(){
  result = []
  arr = [1,2,3,5,6,3]
  
  isSum7 = twoSum(arr, 7)
  if (isSum7){
    console.log('yeah')
  } else{
    console.log('naah')
  }

  console.log('result:', result)
}

main()