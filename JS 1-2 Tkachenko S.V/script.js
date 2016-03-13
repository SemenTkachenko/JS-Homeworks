var names = [];
		var access = false;
		
		for (var i = 0; i < 5; i++) {
			names.push( prompt('Введите имя') );
		};
		
		var logIn = prompt('Введите свой логин');
		
		for (var j = 0; j < names.length; j++) {
			if (logIn == names[j]) {
				alert(logIn + ', вы успешно вошли!');
				access = true;
				break;
			}
		}
		
		if (!access) {
			alert('Неверный логин!');
		}