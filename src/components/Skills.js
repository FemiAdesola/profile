import React from 'react'

const Skills = () => {
    return (
        <div className ='skills'>
            <h1 className="lg-heading">
            About MY
            <span className="text-secondary"> Skill & Publication</span>
        </h1>
        <h1 className="sm-heading">
            About the skills and publication I have acquired
        </h1>
        <div className="about-skill">
            
            <div className="skill skill-1">
                <h2><span className="text-secondary">KEY SKILL</span></h2>
                <p>• Laboratory measurements<br/>
                • Lab equipment calibration<br/>
                • Instrument calibration<br/>
                • Cost efficiency analysis on product and production<br/>
                • Analysis on effect of particle properties on Centrifugation<br/>
                • National instrument system with LabView measurement connection<br/>
                • Mechanical, hydraulic and thermal testing<br/>
                • Effects of instrument calibration on experimental results<br/>
                • Filtration and infiltration modelling<br/>
                <li>Software Development Skills (FRONT-END)</li>
                    <dd> •HTML, CSS and Sass</dd> 

                <li>Software Development Skills (BACK-END)</li>
                <dd> •RESTful using, NodeJS, ExpressJS and MangoDB</dd>
                
                </p>
                
            </div>

            <div className="skill skill-2">
                <h2><span className="text-secondary">CERTIFICATE COURSES</span></h2>
                <p> • Software Development Skill [Backt-End], 02/2021 – 03/2021, (FITech Network University, Finland).<br/>
                    • Measurement Technology, 01/2021 – 02/2021, (FITech Network University, Finland).<br/>
                    • Software Development Skill [Front-End], 12/2020 – 01/2021, (FITech Network University, Finland).<br/>
                    • Wireless Communication Systems, 10/2020 – 12/2020, (FITech Network University, Finland).<br/>
                    • The impact of Technology, EIT Digital On Coursera, 08/2018 – 10/2018, Certified 18th October 2019.<br/> 
                • Strain gauge Measurement in Experimental stress analysis and the manufacture of Transducers, Hottinger Baldwin
                Messtechnik (HBM academy, Germany) 26 – 28/09/2011

            
                </p>
            </div>

            <div className="skill skill-3">
                <h2><span className="text-secondary">KEY PROJECT</span></h2>
                <p>• Demonstration of initial state and progress of water uptake for Posiva Oy, Eurajoki, Finland<br/>
                • Full-scale KBS-3H Multi-Purpose test funded by EU FP7<br/>
                • Downscaled tests on buffer behavior For Posiva Oy, Eurajoki, Finland<br/>
                • Production of predictions of subsystem behaviours by experimental means and quantification of the limits of validity
                of the existing means to predict the subsystem behaviour for Posiva Oy, Finland<br/>

            
                </p>
            </div>

            <div className="skill skill-4">
                <h2><span className="text-secondary">POSSESSION</span></h2>
                <p>• Occupational Safety Card, Expires Jan 2025.<br/>
                • Driver’s Licences, Class ‘B’, Expires Jan 2029

            
                </p>
            </div>

            <div className="skill skill-5">
                <h2><span className="text-secondary">HOBBIES AND INTERESTS</span></h2>
                <p>• Reading<br/>
                • Researching<br/>
                • Traveling<br/>
                • Volleyball

            
                </p>
            </div>

            <div className="skill skill-6">
                <h2><span className="text-secondary">EXTRA CURRICULAR ACTIVITIES</span></h2>
                <p>• Forest Process Engineers, Finland, Member 2020 – <br/>
                • Society Petroleum Engineering, Denmark, Member 2009 –2012<br/>
                • Engineering student, Finland, Member. 2007 – 2010<br/>
                </p>
            </div>


            <div className="publication">
                <h2><span className="text-secondary">Publications</span></h2>
                    <a href="https://lutpub.lut.fi/handle/10024/161447" className="btn-light"target="_blank">• Oyinloye, Femi Adesola. Cost-Efficiency and Beneficial Effects of the Process to Recover Lignin, Hemicellulose and
                    Cellulose with Deep Eutectic Solvent. N.p., 2020. Print.
                    </a>

                    <a href="https://www.posiva.fi/en/index/media/reports.html" className="btn-light"target="_blank">• Matti Halonen, Femi Adesola Oyinloye. 2020. Downscaled Tests on Buffer Pellet Behavior in Steel Cells 2018-25,
                    Published 22.01.2020
                    </a>

                    <a href="https://www.posiva.fi/en/index/media/reports.html" className="btn-light"target="_blank">• Pintado X., Adesola F., Turtiainen M. 2014. Downscaled tests on buffer behaviour. Posiva Working Report 2012-100.
                    Posiva Oy, Eurajoki, Finland.
                    </a>
                
            </div>

        </div>
        </div>
    )
}
export default Skills;