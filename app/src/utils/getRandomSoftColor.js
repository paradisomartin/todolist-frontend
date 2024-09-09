const colors = [
    "#FFEBE6", // Soft red
    "#E6FFFA", // Soft teal
    "#E6F7FF", // Soft blue
    "#FFFBE6", // Soft yellow
    "#F3E6FF", // Soft purple
    "#E6FFE6", // Soft green
  ];
  
  // Función para obtener un color diferente del anterior
  export const getRandomSoftColor = (previousColor) => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === previousColor); // Evitar que se repita el mismo color
    return newColor;
  };
  