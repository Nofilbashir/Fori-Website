import React,{useEffect,useState} from 'react'
import axios from "axios";
import Linegraph from '../linechart/linegraph_bottom';
import PieChart from "../piechart/piechart";
import BarChart from "../barchart/barchart"
import {Paper} from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import "./cal_box4.css";
var perYearsaving;


function Cla_box4() {
    const [renderGraph,setrenderGraph]=useState(false);
    const [notify,setNotify]=useState({selectCountry:false,kmsValue:false});
    const[ perDaysaving,setPerdaysaving]=useState(0);
    const countries=[{country:"Select Your Country"},{country:"Norway"},{country:"Pakistan"},{country:"China"}]
    const[userinput,setUserinput]=useState({country:"Select Your Country",kms:""});
    const [dataY,setDataY] =useState([])
    const [piedata, setpiedata] =useState([])
    const [tressData,setTressData] = useState(0)
    const [fuelSaved,setFuelsaved]=useState(0)

    const [size, setSize] = useState(window.innerWidth<=500?"18rem":window.innerWidth<=1300 && window.innerWidth>500? '30rem':"35rem")

    // function for collecting user's data to send to backend
    function userData(e){
        const inputName=e.target.name;
        const input=e.target.value;
        setUserinput({...userinput,[inputName]:input})
}

    const sizeSetterFunction =() =>{
      if(window.innerWidth<=500){
        setSize((prev)=>{
          return "18rem"
        })
      }else  if(window.innerWidth<=1300 && window.innerWidth>500){
         setSize((prev)=>{
          return "30rem"
        })
      }
      else if(window.innerWidth>1300){
         setSize((prev)=>{
          return "35rem"
        })
      }
    }

      
      // ..............................................................user form submiision...................
      function submit(e){
        e.preventDefault();
        if(userinput.country==="Select Your Country" || userinput.kms===""){
          setrenderGraph(false);
          if(userinput.country==="Select Your Country"){
           return  userinput.kms===""?setNotify({selectCountry:true,kmsValue:true}):setNotify({selectCountry:true,kmsValue:false})
            }else{
             return  userinput.country==="Select Your Country"?setNotify({selectCountry:true,kmsValue:true}):setNotify({selectCountry:false,kmsValue:true})
        }
        }else{
          setNotify({selectCountry:false,kmsValue:false});
        axios({
          method: "POST",
          url: "http://localhost:2000/api/calculation",
          data: { UserInput: { name:userinput.country, KmsShared:userinput.kms} }
        }).then(response => {
          setrenderGraph(true)
          setPerdaysaving(response.data.data.perDaySaving)
          console.log(response.data.data)
           setpiedata([
            { name: 'Diesel Cars %', value: response.data.data.d,color:"red"},
            { name: 'Petrol Cars %', value: response.data.data.p,color:"orange"},
            { name: 'Hybrid cars %', value: response.data.data.h,color:"blue"}
          ])
          setTressData(response.data.data.TressSaved)
          setFuelsaved(response.data.data.FuelSavedperkm)
          
  })}

    }
    // .............................................calculation..............................................

    useEffect(()=>{
      perYearsaving=perDaysaving*365;
      const [year1,year2,year3,year4,year5]=[Math.round(perYearsaving),Math.round(perYearsaving*2),Math.round(perYearsaving*3),Math.round(perYearsaving*4),Math.round(perYearsaving*5)]
      setDataY( [
          {name: 'Year 1',Carbon_Emissions_Saved_Yearly:year1},
          {name: 'Year 2',Carbon_Emissions_Saved_Yearly:year2},
          {name: 'Year 3',Carbon_Emissions_Saved_Yearly:year3},
          {name: 'Year 4',Carbon_Emissions_Saved_Yearly: year4},
          {name: 'Year 5',Carbon_Emissions_Saved_Yearly: year5}
        ])
      
          
    },[perDaysaving])

    useEffect(()=>{

      window.addEventListener('resize', function(){
        sizeSetterFunction()
      }, true);
    // window.removeEventListener('resize', function(){
    //   sizeSetterFunction()
    // },true);
      
    })
    // ..............................................paper styles....................

    const useStyles = makeStyles({
      root: {
        backgroundColor: "#f7f7f7",
        border: 0,
        borderRadius: "1rem",
        boxShadow: '0 3px 5px 2px lightgrey',
        color: 'white',
        padding: '2rem 1rem',
        width:"100%",
        height:"100%"
      },
    });
    const classes = useStyles();

  //   .................................................................................
  // ..........................................piechart data........................................................
 
                      
      
    
                      

    return (
        <>
    <div className='cal_box4'>
        <div className="b4_c1">
        <div className="calculationBox" style={{backgroundColor:"#EBEBEB"}} >
            <div className="b_box2" style={{paddingLeft:"2rem"}}  >
            
                <h1 style={{color:'#E12121', fontWeight:"bold" }}>Calculate Impact of Electric Cars</h1>

                <p style={{color:'#808080',textAlign:"justify" }} className="b_box2_p">The Fori team of sustainability specialists carried out a comprehensive study to come up with an easy and accessible technology assessment concept to measure the impacts of EV sharing. Our tech is accessible to anyone who wants to contribute towards the reduction of there carbon footprint. Our tech is based on a comprehensive set of indicators. These measurements of EV impacts decision making both a personal and policy levels. </p>
  
            </div>
            <div className="banner_img" >
            <img  src={require("../../../services/imgs/Group27.png")} alt="img" />
            </div>
           </div>
           {/* .............................................................form for user input....................................... */}
        <form className='b4_b1_left' onSubmit={submit}>
            <div className="b4_left_b1">
            <div className="countryselector">
                <h4>Select Your Region</h4>
                {/* <label htmlFor="country">Choose your country:</label> */}
                {notify.selectCountry?<p className='notify1'>*required feild</p>:null}
                <select name="country" id="country" autofous={0} onChange={userData}>
                    {countries.map((obj,index)=>{
                        return(<option key={index} value={obj.country} className="country_option">{obj.country}</option>)
                    })}
                </select>
                <br/><br/>
          </div>
          <div className="kmsshared">
              <h4>Enter Daily Shared Kms! </h4>
              {notify.kmsValue?<p className='notify2'>*required feild</p>:null}
              <input type="kms" name="kms" id="kms" placeholder={notify.kmsValue?"*required feild":null} className="f_name" value={userinput.kms} onChange={userData} />
          </div>
          </div>
          <button type="submit">Calculate Your Impact</button>
 
          


        </form>
        {/* ........................................Graphs.............................. */}
        {renderGraph?
          <div className='graphs__container'>
            
            {/* ....................................first graph........................... */}
                <div className='graphs__container__cards'>
                    <Paper className={classes.root}> 
                    <div className='graphs__container__firstcard'>
                    <div className='graphs__container__fcard_header'>
                    <h2>Congratulation <span role="img" aria-label="congrats">🎉</span></h2>
                    <p>Your are helping us in saving the planet by promoting ride sharing </p>
                 
                    </div>
                    <h5>Your contribution towards the green planet with this ride is</h5>
                    <div className='graphs__container__fcard'>
                      <div className='graphs__container__fcard__childs'>{tressData} trees are relaxed</div>
                      <div className='graphs__container__fcard__childs'>{(perDaysaving*1000).toFixed(2)} gram of Carbondioxide saved</div>
                      <div className='graphs__container__fcard__childs'>{fuelSaved.toFixed(2)} liter of fuel saved</div>
                    </div>
                    </div>
                    </Paper>
                      <p>you saved {perDaysaving} Kg . Delectus atque odit officiis placeat ipsam nihil vero, necessitatibus dolorem debitis. Sapiente esse dolorum quae et atque veritatis magnam? Commodi, deserunt excepturi.</p>
                </div>


            {/* ....................................2nd graph (piechart).................................. */}
                <div className='graphs__container__cards'>
                    <Paper className={classes.root}>
                    <Linegraph data={dataY}/>
                    </Paper>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quae pariatur incidunt magnam nulla blanditiis dolorem quis nemo laudantium itaque aliquid atque, provident quidem labore doloremque enim recusandae, libero eveniet!</p>
                </div>



            {/* ......................................3rd graph................................... */}
                <div className='graphs__container__cards'>
                    <Paper className={classes.root}>
                      <BarChart data={tressData}/>
                    </Paper>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quae pariatur incidunt magnam nulla blanditiis dolorem quis nemo laudantium itaque aliquid atque, provident quidem labore doloremque enim recusandae, libero eveniet!</p>
                </div>



            {/* ..........................................4rd graph................................... */}
                <div className='graphs__container__cards'>
                    <Paper className={classes.root}>

                        
                      

                    <PieChart data={piedata} legend={true} styless={{width:"100%",height: size }}/>
                    </Paper>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quae pariatur incidunt magnam nulla blanditiis dolorem quis nemo laudantium itaque aliquid atque, provident quidem labore doloremque enim recusandae, libero eveniet!</p>
                </div>
            {/*...........................................4rd graph end here.............................  */}
          </div>
          

        :null}
        {/* ....................................................................................... */}
        </div>
        
    </div>
    </>
  )
}

export default Cla_box4;











