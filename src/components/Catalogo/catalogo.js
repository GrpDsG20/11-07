import React from 'react';
import '../Catalogo/catalogo.scss'
import { CataProd } from './produc';




export const Catalogo = () => {

  return (
    <>
     
      <div className='menu-tempo'></div>
      <div className='container-products'>

        <div className='cabezera'>
         
          <h2>Catálogo de Productos</h2>


          <div className='filtros-cabeza'>

            <div className='filter1'>
            <select name="ordenar" id="" className='fil' type="select">
              <option value="volvo">Nombre: Ordenar de A a Z</option>
              <option value="volvo">Nombre: Ordenar de Z a A</option>
            </select>
            </div>

            <div className='filter'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.55994 1.08002C4.18354 1.08002 1.43994 3.82361 1.43994 7.20002C1.43994 10.5764 4.18354 13.32 7.55994 13.32C8.89588 13.32 10.1306 12.8897 11.1374 12.1613L15.8737 16.8863L16.8862 15.8738L12.2062 11.1825C13.1259 10.111 13.6799 8.72017 13.6799 7.20002C13.6799 3.82361 10.9363 1.08002 7.55994 1.08002ZM7.55994 1.80002C10.5468 1.80002 12.9599 4.21314 12.9599 7.20002C12.9599 10.1869 10.5468 12.6 7.55994 12.6C4.57307 12.6 2.15994 10.1869 2.15994 7.20002C2.15994 4.21314 4.57307 1.80002 7.55994 1.80002Z" fill="#45484D" stroke="#393C41" stroke-width="0.8" stroke-linejoin="round"/>
</svg>
 <input type="text" className='fil' placeholder='  Buscar Producto'/>         
           </div>
         
         </div>

        </div>



        <div className='conteCata'>

          <div className='filtros'>
          <div className='cat-fil'>
              <h3>Categorias</h3>
              <select className='comboboxx' name="order" id="categoria">
                <option value="">Seleccione categoria</option>
                <option value="marca1">marca1</option>
                <option value="marca2">marca2</option>
                <option value="marca3">marca3</option>
                <option value="marca4">marca4</option>
              </select>
            </div> 
                     
            <div className='cat-fil'>
              <h3>Marcas</h3>
              <select className='comboboxx' name="order" id="marcas">
                <option value="">Seleccione Marcas</option>
                <option value="marca1">marca1</option>
                <option value="marca2">marca2</option>
                <option value="marca3">marca3</option>
                <option value="marca4">marca4</option>
              </select>
            </div>
          </div>
          </div>
          <div className='catalogo'>  
          <div class="cont-cata">
  
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/> 
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/> 
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>
<CataProd 
name="Aceite Dieléctrico"
des="Distro DT-11"
mark="NYNAS"
/>

</div>
          

        </div>
        </div>



      
    </>

    
  )
}