import BigPictureLink from '../components/BigPictureLink'

const Portfolio = () => {
    return (
        <div>
            <div className="fiery">
                <div className="lessnefarious">
                    Portfolio
                </div>
            </div>
            <div className="portfoliolinks">
                <BigPictureLink
                    imageurl="/assets/terminal.gif" 
                    title="Programs" 
                    description="Tools and more technical projects that show off my software development skills" 
                    link="/programs"
                />
                <BigPictureLink
                    imageurl="/assets/joystick.gif" 
                    title="Games" 
                    description="Small browser games I make for fun" 
                    link="/games"
                />
                <BigPictureLink
                    imageurl="/assets/blueprint.gif" 
                    title="Art" 
                    description="My drawings and animations" 
                    link="/art"
                />
            </div>
        </div>
    );
}

export default Portfolio;