import React from 'react'

const ReadTime = (props) => {
    const wordsPerMinute = 200;
    const wordCount = `${props.content}`.split(/\s+/).length;
    const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
    const read_time = `${readTimeMinutes} minute${readTimeMinutes !==1 ? 's': ''} read` 
    return read_time;
}

export default ReadTime