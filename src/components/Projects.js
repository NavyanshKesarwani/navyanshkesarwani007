import React from 'react'
import neoai from './assets/neoai.png'
import memecon from './assets/memecon.png'
import { Footer } from './Footer'

export const Projects = () => {
    return (
        <div>
            <div>
                <h1 className="header scale-up-center">Projects</h1>
            </div>
            <div className="neoai-project">
                <div className="project-description-1 scale-up-center">
                    <div>
                        <h1 className="header">Neo AI</h1>
                    </div>
                    <p className="description">
                        The Latest Project I worked on is Neo AI. It is an Android App, that makes the use of Natural Language Processing and Web Scraping API to give you the result based on the query user gives to the app.
                        Using this ability of the app, users can search for numerous things, like result of some mathematical problems, details about a famous personality, some general knowledge questions, etc. 
                    </p>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.navyanshkesarwani.neoai"><img className="neoai-image scale-up-center" src={neoai} alt="Neo AI"/></a>
            </div>
            <div className="memecon-project">
                <div className="project-description-2 scale-up-center">
                    <div>
                        <h1 className="header">MemeCon</h1>
                    </div>
                    <p className="description">
                        MemeCon is the first Android App that I made and published on Google Play Store. This Android App shows you the most popular memes that are present on popular website for the memes- Reddit. It scrapes data like the Image URL, Title of the Meme, etc., and they all get displayed in the main Android App. This is done with the help of Reddit Scraping API. Using the App, users can also download the meme on their devices and also share them through all available Social Media Apps.
                    </p>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.navyanshkesarwani.memecon"><img className="memecon-image scale-up-center" src={memecon} alt="Neo AI"/></a>
            </div>
            <div>
                <Footer text="Click on the App's Icon to visit App on Google Play Store."/>
            </div>
        </div>
    )
}
