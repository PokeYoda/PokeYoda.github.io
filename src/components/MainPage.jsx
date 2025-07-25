
import PictureBox from "./PictureBox"
import "./MainPage.css"

function MainPage(){

    return(
        <div className="mainPage-main">
            <div>
                <h1>Main page</h1>
                <p><a href="firstPage.html">link</a></p>
            </div>
            <div id="main_text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet dui eros. Duis porta dui vel dolor pellentesque elementum vel non augue. Nam in venenatis mi. Maecenas lacinia metus justo, et maximus nisl tincidunt et. Aenean tristique magna non ante tristique tincidunt. Nullam dui nisi, accumsan vitae suscipit vitae, dictum non diam. Fusce porttitor pulvinar vehicula. Duis feugiat ullamcorper porttitor. Suspendisse sagittis odio vel semper venenatis. Donec aliquam ante orci, eu scelerisque nulla lobortis eget. Mauris auctor, tellus vitae auctor rhoncus, massa ante sollicitudin turpis, non sodales nisi nunc eu justo. Vestibulum bibendum velit accumsan, feugiat orci et, sodales dolor. Nam efficitur accumsan auctor. Fusce eu tempor nisi. Sed nec leo non quam vestibulum ornare eu in justo. Nullam tempus porttitor erat et sagittis.</span>
            </div>
            <div className="mainPage-picturesBox">

                <PictureBox url="images/Meteora.jpg"/>
                <PictureBox url="images/HuntingParty.jpg"/>
                <PictureBox url="images/HybridTheory.jpg"/>
                <PictureBox url="images/LivingThings.jpg"/>
                
            </div>
        </div>
    )
}

export default MainPage