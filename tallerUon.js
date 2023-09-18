//***********************? primer punto ?*****************************//

// let calcularDistacia = (coordenadaXUno, coordenadaXDos, coordenadaYUno, coordenadaYDos) => Math.sqrt((Math.pow ((coordenadaXDos - coordenadaXUno), 2)) + Math.pow((coordenadaYDos - coordenadaYUno),2),2);

// let distanciaCalculada = calcularDistacia(232,343,21,24);

// console.log(distanciaCalculada);


//***********************? segundo punto ?*****************************//

// let limpiarDatos = (codigo)=>codigo.split(":")[1]

// let resultado = limpiarDatos("ARQ123:ALEXISLOPEZ")
// console.log(resultado)

//***********************? tercer punto ?*****************************//

// let temperaturaMaxima = 100
// let temperaturaMinima = 30

// let calcularTemperaturaMedia = (temperaturaMaxima, temperaturaMinima)=> ((temperaturaMaxima + temperaturaMinima)/2)
// console.log(`la temperatura media es de: ${calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima)}`)

//***********************? cuarto punto ?*****************************//

// function contarSablesNegativos(energias) {
//     let contador = 0
  
//     for (let i = 0; i < energias.length; i++) {
//       if (energias[i] < 0) {
//         contador++
//       }
//     }
//     return contador
//   }
  
//   let energiasSables = [-16, -46, 342, -454, 57650]; 
//   console.log(`Cantidad de sables de luz con energía negativa: ${contarSablesNegativos(energiasSables)}`)
  

//***********************? quinto punto ?*****************************//

let salarioBase = 3500000;
let comisionPorLicencia = 1500000;
let deduccionesImpuestos = 0.05;

function calcularSalarioMensual(ventasLicencias) {
  
    let comisionTotal = ventasLicencias * comisionPorLicencia;
    let salarioAntesDeducciones = salarioBase + comisionTotal;
    let impuestos = salarioAntesDeducciones * deduccionesImpuestos;
    let salarioMensual = salarioAntesDeducciones - impuestos;
    return salarioMensual;
  }
  let ventasLicencias = 3;
  let salarioVendedor = calcularSalarioMensual(ventasLicencias);
  
  console.log(`El salario mensual del vendedor es: ${salarioVendedor} créditos galácticos`);
  