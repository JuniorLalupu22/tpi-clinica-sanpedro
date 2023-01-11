const capitalize = (text) => {
    const textCapitalize = text.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    return textCapitalize
}

export default capitalize