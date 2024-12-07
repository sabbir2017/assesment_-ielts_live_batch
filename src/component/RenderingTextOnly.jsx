const RenderingTextOnly = ({ htmlString }) => {
    const textContent = new DOMParser().parseFromString(htmlString, 'text/html').body.textContent || "";

  return (
    textContent
  )
}

export default RenderingTextOnly