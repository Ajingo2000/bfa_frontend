import React from 'react'

const FormattedDate = (props) => {
  const formatted_date = new Date(props.date)

  const formattedDateString = formatted_date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDateString
}

export default FormattedDate