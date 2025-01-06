
  
  function calcularPromedio(num1, num2, num3) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'|| typeof num3 !== 'number') {
      throw new Error('Ambos parámetros deben ser números.');
    }
    return (num1 + num2+num3) / 3;
  };
  
  function determinarMayor (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Ambos parámetros deben ser números.');
    }
    return num1 > num2 ? num1 : num2;
  };

  const esPar = (numero) => {
    if (typeof numero !== 'number') {
      throw new Error('El parámetro debe ser un número.');
    }
    return numero % 2 === 0;
  };
  
  (() => {
    try {
      
      const num1 = 10;
      const num2 = 20;
      const num3 = 30;
  
      
      const promedio = calcularPromedio(num1, num2, num3);
      const mayor = determinarMayor(num1, num2);
      const esNum1Par = esPar(num1);
  
      console.log(`Promedio: ${promedio}`);
      console.log(`Mayor: ${mayor}`);
      console.log(`¿El número ${num1} es par?: ${esNum1Par}`);
    } catch (error) {
      console.error(error.message);
    }
  })();
  