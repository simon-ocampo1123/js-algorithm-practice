console.clear()
console.log('=== Práctica de lógica JavaScript ===')

// =========================
// EJERCICIO 1
// =========================

function ejercicio1() {
  const numeros = [3, 7, 2, 9, 4]
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 5) {
      console.log(numeros[i])
    }
  }
}
// ejercicio1()

// =========================
// EJERCICIO 2
// =========================

function ejercicio2() {
  const numeros = [3, 7, 2, 9, 4]
  let contador = 0

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 5) {
      contador++
    }
  }
  console.log(contador)
}

// ejercicio2()

// =========================
// EJERCICIO 3
// =========================

function ejercicio3() {
  const numeros = [3, 7, 2, 9, 4]
  let contador = 0

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > contador) {
      contador = numeros[i]
    }
  }
  console.log(contador)
}

// ejercicio3()

function ejercicio4() {
  const numeros = [5, 1, 4, 2, 3]
  let contador = 0 //5
  let segundoNum = 0 //1, 4, ya no asigna los demas

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > contador) {
      segundoNum = contador
      contador = numeros[i]
    } else if (numeros[i] > segundoNum) {
      segundoNum = numeros[i]
    }
  }
  console.log(segundoNum)
}

ejercicio4()

function ejercicio5() {
  const numeros = [3, 7, 2, 9, 4, 10, 6]
  let num1 = 0 //10
  let num2 = 0 //9
  let num3 = 0 //7

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > num1) {
      num3 = num2
      num2 = num1
      num1 = numeros[i]
    } else if (numeros[i] > num2) {
      num3 = num2
      num2 = numeros[i]
    } else if (numeros[i] > num3) {
      num3 = numeros[i]
    }
  }
  console.log(num1, num2, num3)
}

// ejercicio5()

function ejercicio6() {
  const numeros = [2, 7, 11, 15]
  const target = 9
  let sum = 0

  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (i !== j) {
        sum = numeros[i] + numeros[j]
        if (sum === target) {
          console.log(`Resultado ${numeros[i]} y ${numeros[j]} es ${target}`)
        }
      }
    }
  }
}

// ejercicio6()

function ejercicio7() {
  let fibonacci = 10
  let serie = [0, 1]
  let valor = 0

  for (let i = 2; i < fibonacci; i++) {
    valor = serie[i - 1] + serie[i - 2]
    serie[i] = valor
  }
  console.log('resultado', serie)
}

// ejercicio7()
