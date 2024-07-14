import NewsLetterContainer from "./newsletter-container"
const NewsLetter = () => {
  return (
    <div>
      <div className=' p-5 m-5 text-center'>
        <h1 className="font-extrabold text-[50px]">NewsLetter</h1>
        <p className="text-[20px] text-center">Hey, there, I hope you enjoy our content, we write personal devotions, Bible Questions as well as Spiritial texts. Subscribe to out newsletter to keep up to date with the latest blog posts.</p>
        
        <div className="p-5 flex flex-col items-center">
          <NewsLetterContainer/>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
