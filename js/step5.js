function Controller($scope){

	$scope.angulo = 0;
	var STEP = 10;
	$scope.vai = function(){
		$scope.angulo += STEP;
		while($scope.angulo >= 360){
			$scope.angulo -= 360;
		}
	}
	$scope.volta = function(){
		$scope.angulo -= STEP;
		while($scope.angulo < 0){
			$scope.angulo += 360;
		}
	}
}
