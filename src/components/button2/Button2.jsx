import React from 'react'

function Button2(props) {
    let { children } = props;
    const colors = props.colors
    let fromColor = props.colors[0]
    let toColor = props.colors[1]
    let color1 = "innov8VeryDarkGreen"
    let color2 = "innov8DarkGreen"
    console.log({colors})
    switch(props.variant){
      case "bgSwoop":
          return (
            <div className={`group rounded-[.4rem] relative overflow-hidden transition cursor-pointer`}>
              <div className={`w-[200%] h-full absolute -z-10  transition duration-300  group-hover:-translate-x-1/2 bg-gradient-to-r from-${fromColor} via-innov8VeryDarkGreen to-`+colors[1]}>
  
                </div>
              <p className="mx-4 my-3 group-hover:text-white">
              {children}
              </p>
            </div>
          );
      default:
        return(<p>check variant specification</p>)
    }
    
}

export default Button2

