const validator = {
    isValid: (latitud, longitud) => {
        if (isNaN(latitud)) return false;
    if (isNaN(longitud)) return false;
    return true;
    }  
}

export default validator;