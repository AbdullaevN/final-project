// import React from 'react';
// import { useContext, useEffect, useState } from "react";
// import {
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { cardsContext } from "../../contexts/cardsContext";
// import AllCardsPage from "../AllCardsPage";

// const Filter = () => {

//   const { getCards, cards } = useContext(cardsContext);
//   const navigate = useNavigate();
//   const [brandValue, setBrandValue] = useState("");

//   let object = new URLSearchParams(window.location.search);
//   function filterProducts(key, value) {
//     object.set(key, value);
//     let newUrl = `${window.location.pathname}?${object.toString()}`;
//     navigate(newUrl);
//     getCards();
//     setBrandValue(value);
//   }

//   useEffect(() => {
//     setBrandValue(object.get("type"));
//   }, [object]);

//   useEffect(() => {
//     getCards();
//   }, []);

//     return (
//         <div>
            
//       <div className="home-page">
//         <div className="sidebar">
//           <FormControl className="radio-grrr" component="fieldset">
//             <FormLabel
//               className="category_h2 "
//               style={{
//                 textAlign: "center",
//                 marginTop: "10px",
//                 fontFamily: "Arvo, serif",
//                 letterSpacing: "1.10px",
//                 fontSize: "30px",
//                 fontWeight: "500",
//               }}
//               component="legend"
//             >
//               Меню
//             </FormLabel>
//             <RadioGroup
//               aria-label="gender"
//               value={brandValue}
//               name="radio-buttons-group"
//               onChange={(e) => filterProducts("type", e.target.value)}
//             >
//               <div className="filter">
//                 <FormControlLabel
//                   value="Man"
//                   control={<Radio />}
//                   style={{ fontFamily: "Arvo, serif" }}
//                   label="Man"
//                 />
//                 <FormControlLabel
//                   value="Woman"
//                   control={<Radio />}
//                   style={{ fontFamily: "Arvo, serif" }}
//                   label="Woman"
//                 />
//                 <FormControlLabel
//                   value="Kids"
//                   control={<Radio />}
//                   style={{ fontFamily: "Arvo, serif" }}
//                   label="Kids"
//                 />
//                 <FormControlLabel
//                   value="Teens"
//                   control={<Radio />}
//                   style={{ fontFamily: "Arvo, serif" }}
//                   label="Teens"
//                 />
//               </div>
//             </RadioGroup>
//           </FormControl>
//         </div>

//         <div className="products2">
//           {cards ? (
//             cards.map((item) => (
//               <AllCardsPage cards={cards} key={item.id} />
//             ))
//           ) : (
//             <></>
//           )}
//         </div>
//       </div>
//         </div>
//     );
// };

// export default Filter;