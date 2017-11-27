function MyCtrl($scope){

	$scope._delta = function(){
		return $scope.b * $scope.b - 4 * $scope.a * $scope.c;
	}

	$scope.delta = function(a, b, c){
		return b*b - 4*a*c;
	}

	$scope.r1 = function(){
		return (-$scope.b + Math.sqrt($scope._delta())) / (2 * $scope.a)
	}

	$scope.r2 = function(){
		return (-$scope.b - Math.sqrt($scope._delta())) / (2 * $scope.a)
	}

	$scope.meutexto_reversed = function($meutexto){
		return $meutexto.split("").reverse().join("")
	}

	$scope.calcularIMC = function($altura, $peso){
		var quadradoAltura = $altura*$altura;
		var total = $peso/quadradoAltura;
		return total;
	}

	$scope.calcularDesconto = function($valor,$percentual){
		var valorDescontado = $valor * ($percentual/100);
		return $valor + $percentual;
		//return valor - valorDescontado;
	}
}
