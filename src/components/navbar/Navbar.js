import './Navbar.css'

function Navbar({item1, item2, item3, item4, item5, item6, item7, Titulo1, Titulo2, item8, item9}){
    return(
        <div className='navbar'>
<div>
    Nome
</div>
<div className='navbar-content'>
<div className='navbar-content-children'>
    {item1}
</div>
<div className='navbar-content-children'>
{item2}
</div>
<div className='navbar-content-children'>
 {item3}
</div>
<div className='navbar-content-children'>
    {item4}
</div>
</div>


<div className="footer">

{Titulo1}
{item5}
{item6} 
{item7}  
  
</div>

<div className="footer2">
{Titulo2}
{item8}
{item9}
</div>
</div>





    )
}

export default Navbar;