import { useGLTF } from "@react-three/drei";
import { createContext } from "react";
import { useState } from "react";




export const ColorContext = createContext({});

export const ColorContextProvider = ({children}) => {

    const [currentColor, setCurrentColor] = useState({
        color:"#9BB5CE",
        text:"Sierra Blue",
        rgbColor:"155, 181, 206",
    })

    const { materials } = useGLTF('/scene.gltf')

    let changeColorContext = (colorObj) => {

        materials.Body.color.set(colorObj.color)
        setCurrentColor(colorObj)
      };
    
    return(
        <ColorContext.Provider value={{currentColor, changeColorContext}}>
            {children}
        </ColorContext.Provider>
    )
}