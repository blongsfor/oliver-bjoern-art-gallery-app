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
  }
  .navbar {
  display: flex;
  justify-content: center; 
  padding: 0 20px;
  align-items: center;
  
   }

.link {
  text-decoration: none; 
  color: inherit; 
  padding: 10px 20px; 
  border: 2px solid black;
  border-radius: 10px;
  font-weight: bold;

}

.artpiece {
  border: 5px solid #e6c619; 
  border-radius: 10px; 
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

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
  border: 2px solid black;

}

.artpiece-details{
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 20px;

}

.navbar {
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 0 20px;
    width: 100%; /* Ensure the navbar takes the full width of its container */
  }
  .navbar .link {
  margin: 0 10px;
}


.favorite-button {
    position: relative;
    top: 10px;
    right: 10px;
    background-color: #e6c619;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

`;
