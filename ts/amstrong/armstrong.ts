function isArmstrong(num) {
    let digits = [...num.toString()]
    let result = 0
    let power = digits.length;
    digits.forEach((digit) => {
      result+=Math.pow(parseInt(digit),power)
    })
    if(result === num) return "Is Armstrong"
    return "Not Armstrong"
  }
  
  console.log(isArmstrong(1634))