import React from "react";

export default function Meme() {
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])


    function newMeme() {
        setMeme(prevState => ({ ...prevState, randomImage: (allMemeImages)[Math.floor(Math.random() * (allMemeImages).length)].url }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMemeState => {
            return {
                ...prevMemeState, [name]: value
            }
        })
    }

    return (
        <main>
            <div className="meme-form">
                <input
                    type="text"
                    className="meme-input"
                    placeholder="Top text"
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                />

                <input
                    type="text"
                    className="meme-input"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                />

                <button
                    onClick={newMeme}
                    className="meme-button">Get a new meme image  🖼️</button>
            </div>
            <div className="meme">
                <img className="meme-img" src={meme.randomImage} alt="meme" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}