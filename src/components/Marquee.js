import React, { useState, useEffect } from "react";
import "../css/style.css";
//import "../css/mystyle.css";

// class Marquee extends Component{
    
//     render(){
//         console.log(type);
//         return(
//             <div><p>adfsadfa</p></div>);
//     }
// }

/**
 * This component is to load marquee
 * */
function Marquee(props) {
    // const x = console.log(props.type);
    // const y = props.type;
    // const info = props.type(( ) => {
    //     return (<div ><p>{}</p></div>);});    
    // return (
    //     <div className="">
    //         <div className="">
    //             <div className="col-12"><h2></h2></div>
    //             <div className="col-12">
    //                 {info}
    //             </div>
    //         </div>
    //     </div>
    // );
    // return (
    //    <div className="">
    //         {x}
    //         {y}
    //     </div>
    // );

    //props destructure

    const { blocks, type } = props;

    // Assign default values to state and set state using useState react hook
    const [blocksData, setBlocksData] = useState([]);
    const [headline, setHeadline] = useState("");
    const [subhead, setSubhead] = useState("");
    const [CTA, setCTA] = useState("");
  
    // After updating props this useEffect hook is triggered and to render background Image
    useEffect(() => {
      if (blocks) {
        setBlocksData(blocks[0]);
        setHeadline(blocks[0].headline);
        setSubhead(blocks[0].subhead);
        setCTA(blocks[0].cta); 
        let Background = new Image();
        Background.onload = function () {
          document.getElementById("image").style.backgroundImage =
            "url(" + Background.src + ")";
        };
        Background.src = `backgrounds/${blocks[0].background}`;  
        document.title = type;
      }
    }, [props]);

   console.log(blocksData);
  
    return (
      <div className="container">
        <div className="content margin">
          <div className="col headline">{headline}</div>
          <div className="col subheader margin">{subhead}</div>
        </div>
        <div className="CTA">
            <div className=" CTA-header">{CTA}</div>
            <div className="col ml-mt CTA-tag">
              <div className="margin">LET'S TALK.</div>
            </div>
        </div>
      </div>
      
    );
    
}


export default Marquee;