import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { removeBooking } from '../../redux/bookingSlice';
import style from './ui.module.css'
import { Button, Popconfirm, PopconfirmProps, message } from 'antd';

export const RemoveButton = () => {
    const dispatch: AppDispatch = useDispatch();

    const confirm: PopconfirmProps['onConfirm'] = (e) => {
        console.log(e);
        message.success('Удалено!');
        handleBooking()
      };
      
      const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        message.error('Вы отменили действие');
      };

  const handleBooking = () => {
    dispatch(removeBooking());
  };
  return (
    <Popconfirm
    title="Предупреждение"
    description="Вы точно хотитe удалить эту бронь?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Да"
    cancelText="Нет"
  >
    <Button danger>Удалить бронь</Button>
  </Popconfirm>
  )
}
