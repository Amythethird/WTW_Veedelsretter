import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";

interface rating {
  title: boolean;
  durchschnitt: number;
  full: boolean
}
function Rating(props: rating) {
  const total = 5;
  const einSt = 1
  const zweiSt = 2
  const dreiSt = 3
  const vierSt = 4


  let rating;
  if(props.full){
    rating = (
      <div>
        <div className="is-flex">
          <p className="has-text-weight-medium mb-2 is-size-3 mr-1">{props.durchschnitt}</p>
          <p>von 5</p>
        </div>
          <div className="rating">
         <div> 
            {[...new Array(total)].map((arr, index) => (
                <FontAwesomeIcon
                  key={arr}
                  icon={index < total ? StarSolid : StarRegular}
                  color={index < total ? "#257708" : " "}
                />
              
              ))}
          </div>
           <div>
           {[...new Array(total)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < vierSt ? StarSolid : StarRegular}
                color={index < vierSt ? "#257708" : " "}
              />
             
            ))}
           </div>
            <div>
            {[...new Array(total)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < dreiSt ? StarSolid : StarRegular}
                color={index < dreiSt ? "#257708" : " "}
              />
             
            ))}
            </div>
            <div>
            {[...new Array(total)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < zweiSt ? StarSolid : StarRegular}
                color={index < zweiSt ? "#257708" : " "}
              />
             
            ))}
            </div>
            <div>
            {[...new Array(total)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < einSt ? StarSolid : StarRegular}
                color={index < einSt ? "#257708" : " "}
              />
             
            ))}
            </div>
           
          </div>
      </div>
    )
  }else{
    rating = (
      <div>
        <div className="is-flex">
          <p className="has-text-weight-medium mb-2 is-size-3 mr-1">{props.durchschnitt}</p>
          <p>von 5</p>
          </div>
          <div className="is-flex has-align-items-center mt-4">
          <div className="rating">
         <div className=" is-flex is-align-items-center"> 
          <label className="checkbox mr-2">
            <input type="checkbox" />
          </label>
            {[...new Array(total)].map((arr, index) => (
                <FontAwesomeIcon
                  key={arr}
                  icon={index < total ? StarSolid : StarRegular}
                  color={index < total ? "#257708" : " "}
                />
              
              ))}
         </div>
         <div className=" is-flex is-align-items-center"> 
          <label className="checkbox mr-2">
            <input type="checkbox" />
          </label>
            {[...new Array(total)].map((arr, index) => (
                <FontAwesomeIcon
                  key={arr}
                  icon={index < vierSt ? StarSolid : StarRegular}
                  color={index < vierSt ? "#257708" : " "}
                />
              
              ))}
         </div>
         <div className=" is-flex is-align-items-center"> 
          <label className="checkbox mr-2">
            <input type="checkbox" />
          </label>
            {[...new Array(total)].map((arr, index) => (
                <FontAwesomeIcon
                  key={arr}
                  icon={index < dreiSt ? StarSolid : StarRegular}
                  color={index < dreiSt ? "#257708" : " "}
                />
              
              ))}
         </div>
         <div className=" is-flex is-align-items-center"> 
          <label className="checkbox mr-2">
            <input type="checkbox" />
          </label>
            {[...new Array(total)].map((arr, index) => (
                <FontAwesomeIcon
                  key={arr}
                  icon={index < zweiSt ? StarSolid : StarRegular}
                  color={index < zweiSt ? "#257708" : " "}
                />
              
              ))}
         </div>
         <div className=" is-flex is-align-items-center"> 
          <label className="checkbox mr-2">
            <input type="checkbox" />
          </label>
            {[...new Array(total)].map((arr, index) => (
                <FontAwesomeIcon
                  key={arr}
                  icon={index < einSt ? StarSolid : StarRegular}
                  color={index < einSt ? "#257708" : " "}
                />
              
              ))}
         </div>
           
          </div>
          </div>
      </div>
    )
  }

  return (
    <div className="container">
     {rating}
    </div>
  );
}

export default Rating;

/*
 {[...new Array(total)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < aktive ? StarSolid : StarRegular}
                color={index < aktive ? "#257708" : " "}
              />
            ))}
            <p>{"(42)"}</p>
*/