import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/main.module.css';


const Home = (props) => {

    // check url and output appropriate html
    const checkUrl = () =>{

        // check for home page
        if(props.seg.toLowerCase() === "home"){

            // return home html
            return <h2 className="text-center p-2">Welcome</h2>;
        
        // check for numbers
        }else if(!isNaN(props.seg)){

            // return number html
            return <h2 className="text-center p-2">The number is: {props.seg}</h2>;
        
        // check for any other string
        }else if(isNaN(props.seg)){

            // if we have both colors add them
            if(props.color1 && props.color2){

                // return number html
                return <h2 className="text-center p-2" style={{backgroundColor:props.color2, color:props.color1}}>The word is: {props.seg}</h2>;

            // just show word
            }else{

                // return number html
                return <h2 className="text-center p-2">The word is: {props.seg}</h2>;

            }

        }

    }

    // return
    return(
        <div className={styles.wrapper}>
            {checkUrl()}
        </div>
    )

}

// export
export default Home;