import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Ubuntu', system-ui, sans-serif;
    background-color: #f5eddd;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  background-color: #E6BE8A;
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
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

.details{
  text-align: center; 
  margin-bottom: 20px;
  border: 3px solid #CFB53B;
  padding: 20px;
  border-radius: 25px;
  background-color:  #E6BE8A;

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
    z-index: 1000; 
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

.heading1 {
  
  text-align: center;
    margin: 20px 0;
    font-size: 3em;
    font-weight: bold;
}

.comment-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  max-width: 800px; 
  margin: 20px auto; 
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid black;
  background-color: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
  border-radius: 25px;
}


input {
  padding: 5px 10px; 
  border: 2px solid black;
  border-radius: 10px;
  margin-right: 10px;
}

button {
  text-decoration: none; 
  color: inherit; 
  padding: 5px 10px; 
  border: 2px solid black;
  border-radius: 10px;
  font-weight: bold;
  background-color: #E6BE8A;
  transition: background-color 0.5s ease; 
  cursor: pointer;
  transition: background-color 0.5s ease; 
}

  button:hover {
    background-color: #d69c70; 
  }
`;
