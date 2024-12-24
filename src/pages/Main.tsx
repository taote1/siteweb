import { Header } from '../components/Header/Header'
import { Card } from '../components/Cards/Card'
import moscow from '../Database/moscow'
import ufa from '../Database/ufa'

export const Main = () => {
  return (
    <div>
        <Header />
        <div className='mainPage'>
        <Card {...moscow}/>
        <Card {...ufa}/>
        <Card {...moscow}/>
        <Card {...ufa}/>
        <Card {...moscow}/>
        <Card {...ufa}/>
        <Card {...moscow}/>
        <Card {...ufa}/>
        <Card {...moscow}/>
        <Card {...ufa}/>
        <Card {...moscow}/>
        <Card {...ufa}/>
        </div>
    </div>
  )
}
