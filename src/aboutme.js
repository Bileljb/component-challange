import img1 from "./image/1.jpg";
function Aboutme(){
    return(
        <>
        <section id="about-me">
        <h1>
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
         </h1>
        <img className="avatar" src={img1} alt="jhon-doe" />
        </section>
            
    
        </>
    )
}
export default Aboutme
