import React from 'react'

function Button2(props) {
  
    let { children } = props;
    console.log(props)
    switch(props.variant){
      case "bgSwoop":
          return (
            <button className={`group rounded-[.4rem] relative overflow-hidden transition`}>
              <div className={
                `bg-red-200 w-[200%] h-full absolute -z-10  transition-transform group-hover:-translate-x-1/2 
                ${props.colors?"bg-gradient-to-r from-"+props.colors.from+" via-"+props.colors.from+" to-"+props.colors.to:""+props.color}`}>
  
                </div>
              <p className="mx-4 my-1 group-hover:text-white">
              {children}
              </p>
            </button>
          );
      default:
        return(<p>check variant specification</p>)
    }
    
}

export default Button2