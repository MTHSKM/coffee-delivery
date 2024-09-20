import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Address } from './pages/Address'
import { Order } from './pages/Order'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout></DefaultLayout>}>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/address' element={<Address></Address>}></Route>
                <Route path='/order/:orderId' element={<Order></Order>}></Route>
            </Route>
        </Routes>
    )
}