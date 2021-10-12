import React from 'react'
import my_image from './assets/my_image.jpeg'
import { Footer } from './Footer'

export const Header = () => {
    return (
        <div>
            <div>
            <h1 className="header scale-up-center">Hey There, I am Navyansh Kesarwani <br/> Welcome to My Portfolio</h1>
            </div>
            <div className="image-container">
            <img className="my-image scale-up-center" src={my_image} alt="Logo" />
            </div>
            <div className="tagline-area">
            <p className="professional-tagline">I am Android and Web Developer. I have pretty much nice experience working in both the domains of Android and Web Development.</p>
            </div>
            <Footer text="Navigate to Projects and About Me section from the above Navigation Bar."/>
        </div>
    )
}
