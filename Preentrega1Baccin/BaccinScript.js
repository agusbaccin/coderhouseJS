/*Ingresar la nota de cuantos alumnos quiera. 
Devolver las siguientes condiciones:     -6      -> Desaprobado
                                     >=6 y <=10  -> Aprobado
*/

function evaluarAlumnos(cantidadAlumnos){
  for (let i = 1; i <= cantidadAlumnos; i++) {
    let nota = Number(
      prompt(
        "Ingrese la nota del alumno n°: " + i + " en el rango entre 0 y 10"
      )
    );
    const result = isApproved(nota);
    if (result) {
      alert("El alumno esta aprobado");
    } else {
      alert("El alumno esta desaprobado");
    }
  }
}

function isApproved(nota) {
    if(nota>=0 && nota<6){
        return false
    }else if(nota>=6 && nota<=10){
        return true
    }
} 

const cantidadAlum = Number(prompt("Ingrese la cantidad de alumnos a evaluar"));

evaluarAlumnos(cantidadAlum);



