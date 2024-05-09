import styles from './styles.module.scss'
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from 'react-icons/bs'

interface IImcProps {
    data: {
        title: string;
        color: string;
        icon: 'down' | 'up'
        imc: number[];
        yourImc?: number;
    }
}

export const Imc = ({ data }: IImcProps) => {

    return (
        <div className={styles.containerImcLeves} style={{ background: data.color }}>
            <div className={styles.containerImcLeves_icons}>
                {data.icon === 'up' && <BsHandThumbsUpFill size={30} />}
                {data.icon === 'down' && <BsHandThumbsDownFill size={30} />}
            </div>
            <h1>{data.title}</h1>
            {data.yourImc &&
                <article>Seu IMC é de <strong>{data.yourImc}  kg/m²</strong></article>
            }

            <p>
                IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
            </p>
        </div>
    );
}