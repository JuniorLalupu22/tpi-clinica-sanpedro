const mayusFirst = (text) => {
    const textLower = text.toLowerCase();
    const textConverted = textLower.charAt(0).toUpperCase() + textLower.substring(1, textLower.length+1);

    return textConverted
}

export default mayusFirst