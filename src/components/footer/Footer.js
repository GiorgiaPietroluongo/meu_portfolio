import './Footer.css';

function Footer({Titulo1, item1, item2, item3, Titulo2, item4, item5}){
          return(
            <div className='footer-body'>
            <div className='footer-tittle'>
                {Titulo1}
           
            <div className='footer-itens' >
            {item1} 
            </div>
            <div>
            {item2}  
            </div>
            <div>
            {item3} 
            </div>
            </div> 
            <div className='footer-tittle'>
                {Titulo2}
                <div className='footer-items'>
                {item4}
            </div>
            <div>
                {item5}
            </div>
            </div>
            


          </div> 
        
          
})
         

export default Footer;