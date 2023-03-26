import React, { useRef, useEffect } from "react";


const MyCanvas = (props) => {
    const canvasRef = useRef(null)
    var img_width = props.width;
    console.log('***'+props.mywidth);
    var img_height = 0;

    useEffect(() => {
        const image = new Image();
        image.src = "/sticker.png";
        
        img_width = image.width;
        img_height = image.height;

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = "#0000FF"
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
       
        image.onload = () => {
            context.drawImage(image, 0, 0)
        }
    }, []);

    return <canvas ref={canvasRef} {...props} />
}

export default MyCanvas