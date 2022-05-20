import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../landing';
import Login from '../login';
import Shop from '../app/shops';


const Main = () => {
return (  
//Routing for Elements       
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/shops' element={<Shop 
      name='Test' 
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore consequuntur eos, 
      quaerat est qui saepe ducimus pariatur alias, ipsum ea impedit. 
      Et iste veniam debitis porro alias nobis officiis.'
      oeffnungszeiten='Mo-Fr: 09:00 Uhr - 18:00 Uhr -- Sa 10:00 Uhr - 16:00 Uhr'
      adresse='Musterstr. 1 -- 
      12345 Musterstadt'
      tag={['Unverpackt', 'Vegan', 'Nachhaltig']}
      mail= 'info@gibtesnicht.de'
      tel='015155255663'

      
      />}></Route>
      
    </Routes>
);
}
export default Main;