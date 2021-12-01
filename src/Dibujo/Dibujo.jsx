import './Dibujo.scss';

export default function Dibujo() {
    return (
        <div className="contenedor">
            <div className="contenedor-persona">
                <div className="persona-cabeza"></div>
                <div className="persona-brazo derecho"></div>
                <div className="persona-brazo izquierdo"></div>
                <div className="persona-cuerpo"></div>
                <div className="persona-pierna derecha"></div>
                <div className="persona-pierna izquieda"></div>
            </div>
        </div>
    )
}