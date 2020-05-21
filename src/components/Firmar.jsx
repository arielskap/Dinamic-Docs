import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import '../assets/styles/firmar.css';

const Firmar = () => {
  const canvas = useRef(false);

  const resizeCanvas = (canvas, render) => {
    canvas.setHeight(document.querySelector('.firmar').offsetHeight);
    canvas.setWidth(document.querySelector('.firmar').offsetWidth);
    if (render) {
      canvas.renderAll();
    }
  };

  useEffect(() => {
    canvas.current = new fabric.Canvas('canvas');
    canvas.current.backgroundColor = 'white';
    canvas.current.isDrawingMode = 1;
    canvas.current.freeDrawingBrush.color = 'black';
    canvas.current.freeDrawingBrush.width = 8;
    resizeCanvas(canvas.current);
    canvas.current.renderAll();
  }, []);

  const clear = () => {
    canvas.current.clear();
    canvas.current.backgroundColor = 'white';
    canvas.current.renderAll();
  };

  return (
    <div className='firmar'>
      <canvas className='border-2 border-black' id='canvas' />
      <div className='text-right mt-1'>
        <button className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded' type='button' onClick={clear}>Limpiar</button>
      </div>
    </div>
  );
};

export default Firmar;