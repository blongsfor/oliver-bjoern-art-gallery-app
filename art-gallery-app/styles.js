import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    justify-content: center; 
    align-items: center;
    background-color: #f5eddd;
  }
  .navbar {
  display: flex;
  justify-content: center; 
  padding: 0 20px;
  align-items: center;
  margin-inline: auto;
  }

.link {
  text-decoration: none; 
  color: inherit; 
  padding: 10px 20px; 
  border: 2px solid black;
  border-radius: 10px;
  font-weight: bold;
  background-color: #edb790;
  transition: background-color 0.5s ease; 
}

  .link:hover {
    background-color: #d69c70; 
  }



.artpiece {
  border:solid 5vmin #eee;
  border-bottom-color:#c2ad3e;
  border-left-color:#a89324;
  border-radius:2px;
  border-right-color:#a89324;
  border-top-color:#b89e14;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  box-sizing:border-box;
  display:inline-block;
  margin:10px 10px;
  height:80vh;
  padding:5px;
  position:relative;
  text-align:center;
  &:before {
    border-radius:2px;
    bottom:-2vmin;
    box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
    content:"";
    left:-2vmin;
    position:absolute;
    right:-2vmin;
    top:-2vmin;
  }
  &:after {
    border-radius:2px;
    bottom:-2.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
    content:"";
    left:-2.5vmin;
    position:absolute;
    right:-2.5vmin;
    top:-2.5vmin;
  }

}

ul {
  list-style-type: none;
}
 li {
  list-style-type: none;
 }

.details{
  text-align: center; 
  margin-bottom: 20px;
  border: 3px solid #b5b8b1;
  padding: 20px;
  border-radius: 25px;
  background-color: #e2e3e1;

}

.artpiece-details{
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 20px;
  padding-bottom: 60px;
}

.navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    z-index: 1000; /* Ensure the navbar stays on top */
  }



  .navbar .link {
  margin: 0 10px;
}


.favorite-button {
    position: relative;
    top: 15px;
    background-color: #e6c619;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

.heading{
  text-align: center;
    margin: 20px 0;
    font-size: 2em;
    font-weight: bold;


}
`;
