import React from 'react'
import { Nav } from '../components/Nav/Nav'
import style from '../components/Cards/ui.module.css'
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Buttons } from '../components/Buttons/Button';
import { RemoveButton } from '../components/Buttons/RemoveButton';

export const Booking = () => {
    const bookings = useSelector((state: RootState) => state.bookings.bookings);
  return (
    <div>
    <div>
        <Nav />
    </div>
    <h2 className={style.nameSection}>Ваши бронирования</h2>
      {bookings.length === 0 ? (
        <h1 className={style.notQuest}>У вас нет забронированных квартир.</h1>
      ) : (
        <div className='wrapBooking'>
            {bookings.map((booking) => (
            <div key={booking.id} className={style.card}>
            <h3>Квартира в {booking.head}</h3>
            <p>Площадь: {booking.square}</p>
            <p>Ремонт: {booking.repair}</p>
            <p className={style.price}>Цена: {booking.price}</p>
            <p>Район: {booking.district}</p>
            <RemoveButton id = {booking.id}/>
        </div>
          ))}
        </div>
      )}
    </div>
  )
}
