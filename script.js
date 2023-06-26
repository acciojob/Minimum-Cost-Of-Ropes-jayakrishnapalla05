function calculateMinCost() {
  //your code here
     var input = document.getElementById("rope-lengths").value;
      var arr = input.split(",").map(Number);
      arr.sort(function(a, b) {
        return a - b;
      });
      var cost = 0;
      var totalCost = 0;
    for (var i = 0; i < arr.length; i++)
	 {
        arr.sort(function(a, b) {
          return a - b;
        });
        cost = arr[i] + arr[i + 1];
        totalCost += cost;
        arr[i + 1] = cost;
	 }
      document.getElementById("result").innerHTML =totalCost;
  
  
}  
