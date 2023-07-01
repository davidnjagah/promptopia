

export default function Home() {
  return (
    <section className="w-full flex-center flex-col mx-auto ">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md"/>
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
    <p className="desc text-center">
      Promptopia is an open-source AI prompting tool 
      for modern world to discover, create and share 
      creative prompts
    </p>
    {/* <button 
     onClick={() => {console.log("You've clicked Me")}}
    className="black_btn">
      Press
    </button> */}

    {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a
      onClick={() => console.log("You've clicked Me")}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`} >
        Press Me
        </h2>
    </a>
    </div> */}
    </section>
  )
}