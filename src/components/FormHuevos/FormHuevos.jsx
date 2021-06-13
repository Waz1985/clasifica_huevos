
const FormHuevos = ({medidaHuevo, setMedidaHuevo}) => {
    const clasificaHuevosHandler = (event) =>{
        setMedidaHuevo(event.target.value)
    }



    return(
        <div>
            <input type="number" min="1" max="30" onChange={clasificaHuevosHandler} value={medidaHuevo} />
        </div>
    );
}
export default FormHuevos;