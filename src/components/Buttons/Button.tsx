import style from './ui.module.css'
import { AppDispatch } from '../../redux/store';
import { addBooking } from '../../redux/bookingSlice';
import { useDispatch } from 'react-redux';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';


export const Buttons = () => {
  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Забронировано!');
    handleBooking()
  };
  
  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Вы отменили бронирование');
  };
  const dispatch: AppDispatch = useDispatch();

  const handleBooking = () => {
    dispatch(addBooking());
  };

  return (
    <Popconfirm
    title="Предупреждение"
    description="Вы точно хотите забронировать эту квартиру?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Да"
    cancelText="Нет"
  >
    <Button className={style.button}>Забронировать</Button>
  </Popconfirm>
  )
}
