import React from 'react'
import './dashboard.css'

const Dashboard = () => {
  return (
      <section className='dashboard'>
          <article className='dashboard__container'>
              
            <div className="dashboard__container-intro">
        
                <div className="dashboard__container-intro-text">
                <h1>CO2 Analysis</h1>
                <p>Fori is a leading in the path of sustainable management technologies. We provide a one stop solution for all emissions related data management. Our dashboards help in environment friendly decision making for teams across different industries. Our dashboards provide strategic insights into the emissions of an entity which help in meeting regulatory and moral standards.</p>
                </div>

                <div className="dashboard__container-intro-image">
                <img src={require("./images/Group26.png")} alt="img" />
                </div>
            </div>
            </article>

            <article className='dashboard__container'>
            <div className="dashboard__container-graph1">

                <div className="dashboard__container-intro-image dashboard__container-intro-image-card">
                <img src={require("./images/Group 240.png")} alt="img" />
                </div>
        
                <div className="dashboard__container-intro-text">
                <h1>CO2 Analysis</h1>
                <p>Fori is a leading in the path of sustainable management technologies. We provide a one stop solution for all emissions related data management. Our dashboards help in environment friendly decision making for teams across different industries. Our dashboards provide strategic insights into the emissions of an entity which help in meeting regulatory and moral standards.</p>
                </div>

            </div>
            </article>

             <article className='dashboard__container'>
            <div className="dashboard__container-graph2">

                <div className="dashboard__container-intro-text">
                <h1>CO2 Analysis</h1>
                <p>Fori is a leading in the path of sustainable management technologies. We provide a one stop solution for all emissions related data management. Our dashboards help in environment friendly decision making for teams across different industries. Our dashboards provide strategic insights into the emissions of an entity which help in meeting regulatory and moral standards.</p>
                </div>

                <div className="dashboard__container-intro-image dashboard__container-intro-image-card ">
                <img src={require("./images/Group 237.png")} alt="img" />
                </div>
    
            </div>
            </article>

            <article className='dashboard__container'>
            <div className="dashboard__container-graph3">

                
                <div className="dashboard__container-intro-image dashboard__container-intro-image-card">
                <img src={require("./images/Group 241.png")} alt="img" />
                </div>
        
                <div className="dashboard__container-intro-text">
                <h1>CO2 Analysis</h1>
                <p>Fori is a leading in the path of sustainable management technologies. We provide a one stop solution for all emissions related data management. Our dashboards help in environment friendly decision making for teams across different industries. Our dashboards provide strategic insights into the emissions of an entity which help in meeting regulatory and moral standards.</p>
                </div>

            </div>
            </article>

                 <article className='dashboard__container'>
            <div className="dashboard__container-graph4">

                <div className="dashboard__container-intro-text">
                <h1>CO2 Analysis</h1>
                <p>Fori is a leading in the path of sustainable management technologies. We provide a one stop solution for all emissions related data management. Our dashboards help in environment friendly decision making for teams across different industries. Our dashboards provide strategic insights into the emissions of an entity which help in meeting regulatory and moral standards.</p>
                </div>

                <div className="dashboard__container-intro-image dashboard__container-intro-image-card ">
                <img src={require("./images/Group 239.png")} alt="img" />
                </div>
    
            </div>
            </article>
      </section>
  )
}

export default Dashboard
