import img2 from "./image/2.jpg";
import img3 from "./image/3.jpg";
import img4 from "./image/4.jpg";
import img5 from "./image/5.jpg";
function Project(){
    var arr = [{title: "project1", imgsrc: img2},
     
     {title: "project2", imgsrc: img3},{title: "project3", imgsrc: img4},{title: "project4", imgsrc: img5}]
    return(
        <>
         <section id="projects">
         <h2 className="text-important">Projects</h2>
      <div className="projects-container">
        {/* <!--Project Card --> */}

       {arr.map(el => <div class="project-card">
          <img src={el.imgsrc} alt="" />
          <h3>{el.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>)}


        
        
        
        
      </div>
         </section>
          
        </>
    )
}
export default Project