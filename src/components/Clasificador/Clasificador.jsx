const Clasificador = ({medidaHuevo}) => {
    if(medidaHuevo <= 10){
        return "El huevo es Pequeno";
    }else if(medidaHuevo > 10 && medidaHuevo <=20) {
        return "El huevo es Mediano";
    }else if(medidaHuevo > 20 && medidaHuevo <=30) {
        return "El huevo es Grande";
    }
}
export default Clasificador;