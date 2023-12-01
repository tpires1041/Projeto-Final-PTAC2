import Menu from './Componentes/Menu';
import './Menu.css';
import Card from './Componentes/Card';

export default function Home(){
    return(
        <div>
            <h1 id='titulo'>Vídeos</h1>
            <Menu />
            <Card />
        </div>
     );
}