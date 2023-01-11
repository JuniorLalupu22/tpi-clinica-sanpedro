import React, {useRef} from 'react'
// import img1 from '../../img/img1.jpg';
// import img2 from '../../img/img2.jpg';
// import img3 from '../../img/img3.jpg';
// import img4 from '../../img/img4.jpg';
// import img5 from '../../img/img5.jpg';


import '../../sass/DesarrolloIntegral.sass';

const SlideDesarrollo = ({children}) =>{
    // {children}
    
    return(
        // <div className='contenedorDesarrolloIntegral'>
        //     <div className='contenedorSlideshow'>
                <div className='slideDesarrollo'>
                    {children}
                    {/* hola */}
                {/* <img src={img1} alt=""/> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>  */}
                </div>
        //     </div>
        // </div>
                     
        
    )
}

const PresentacionDesarrolloIntegral = ({children}) =>{
    const slideshow = useRef(null)
    // const intervaloSlideshow = useRef(null)

    const siguiente = () =>{
        if(slideshow.current.children.length > 0){
            const primerElemento = slideshow.current.children[0];
            
            slideshow.current.style.transition=`300ms ease-out all`

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform=`translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                slideshow.current.style.transition='none';
                slideshow.current.style.transform=`translateX(0)`;
                slideshow.current.appendChild(primerElemento)
                
                slideshow.current.removeEventListener('transitionend', transicion)
            }

            slideshow.current.addEventListener('transitionend', transicion)
            
        }
    }

    const anterior = () =>{
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1
            const ultimoElemento = slideshow.current.children[index];

            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)
            slideshow.current.style.transition='none';
            

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform=`translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                // slideshow.current.style.transition='none';
                slideshow.current.style.transition=`300ms ease-out all`
                slideshow.current.style.transform=`translateX(0)`;
                // slideshow.current.appendChild(primerElemento)
            },30)

            // slideshow.current.addEventListener('transitionend', transicion)
            
        }
    }
    // setInterval(()=>{
    //     siguiente();
    // }, 5000)
    
    // useEffect(()=>{
    //     intervaloSlideshow.current = setInterval(()=>{
    //         siguiente();
    //     }, 5000)
        
    //     slideshow.current.addEventListener('mouseenter', ()=>{
    //         clearInterval(intervaloSlideshow.current)
    //     })
        
    //     slideshow.current.addEventListener('mouseleave', ()=>{
    //         intervaloSlideshow.current = setInterval(()=>{
    //             siguiente();
    //         }, 5000)
    //     })
        
    // }, [])

    

    return(
        <>
            <div className='mainDesarrolloIntegral'>
                {/* Contenedor Principal */}
                <div className='contenedorDesarrolloIntegral'>
                    <div className='contenedorSlideshow' ref={slideshow}>

                        {children}
                        {/* <SlideDesarrollo children={children}> */}
                            {/* {children} */}
                        {/* </SlideDesarrollo> */}
                        
                        {/* <div className='slideDesarrollo'>
                            {children} */}
                            {/* <img src={img1} alt=""/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>  */}
                        {/* </div> */}
                        {/* <div className='slideDesarrollo'>
                            <img src={img2} alt=""/> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                        </div> */}
                        {/* <div className='slideDesarrollo'>
                            <img src={img3} alt=""/> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                        </div> */}
                        {/* <div className='slideDesarrollo'>
                            <img src={img4} alt=""/> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                        </div> */}
                        {/* <div className='slideDesarrollo'>
                            <img src={img5} alt=""/> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
                        </div> */}
                    </div>
                    <div className='botones_ant_sig'>
                        <button onClick={anterior}>
                            <i className="fas fa-angle-left"></i>
                        </button>
                        <button onClick={siguiente}>
                            <i className="fas fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export {PresentacionDesarrolloIntegral, SlideDesarrollo};