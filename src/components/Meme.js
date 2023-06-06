import React from "react";
import memesData from "../memesData"

export default function Meme()
{
    
    function newUrl()
    {
        return((allMemeImages.data.memes)[Math.floor(Math.random() * (allMemeImages.data.memes).length)].url)
    }
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function newMeme()
    {
        setMeme(prevState => ({...prevState, randomImage: newUrl() }))
    }
    return(
        <main>
            <div className="meme-form">
                <input type="text" className="meme-input" placeholder="Top text"/>
                <input type="text" className="meme-input" placeholder="Bottom text"/>
                <button onClick={newMeme} className="meme-button">Get a new meme image  🖼️</button>
            </div>
            <img className="meme-img" src={meme.randomImage} alt="meme" />
        </main>
    )
}