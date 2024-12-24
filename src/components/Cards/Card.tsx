import { Buttons } from '../Buttons/Button'
import style from './ui.module.css'

interface Props {
    head: string,
    square: string,
    repair: string,
    price: number,
    district: string,
    id: number
}

export const Card = (props: Props) => {
  return (
    <div key={props.id} className={style.card}>
        <h3>Квартира в {props.head}</h3>
        <p>Площадь: {props.square}</p>
        <p>Ремонт: {props.repair}</p>
        <p className={style.price}>Цена: {props.price}</p>
        <p>Район: {props.district}</p>
        <Buttons/>
    </div>
  )
}
