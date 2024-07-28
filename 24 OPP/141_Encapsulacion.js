function Empleados(name){
    let reportes = [];
    this.name = name;
    this.getMostrar = () =>{
        return reportes;
    }
    this.addReporte= (nameReporte) =>{
        reportes.push(nameReporte);
    }
    this.getReportes = () =>{
        reportes.forEach(element => {
            console.log(element)
        });
    }

}

const empleado1 = new Empleados('Jaime');
empleado1.addReporte("Reporte de empleados")
empleado1.addReporte("Reporte de contabilidad")

empleado1.getReportes();
console.log(empleado1.getMostrar());