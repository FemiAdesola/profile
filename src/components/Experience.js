import React from 'react'

 const Experience = () => {
    return (
        <div>
             <h1 className="lg-heading">
            About<span className="text-secondary"> My Work Experience</span>
        </h1>
        <h2 className="sm-heading">
            Few things about my work experience.....
        </h2>
        

        <div className="work-info">
            <div className="job job-1">
                <h2><span className="text-tertiary">A-Insinöörit Oy, Espoo, Finland.</span></h2>
                <h3>Position: Designer and Laboratory Technician </h3>
                <h4>04/2011 – 08/2020</h4>
                <h3><span className="text-secondary">Work Description</span></h3>
                <p>• Strain-gauge installation, measurements, and data analysis<br/>
                    • Data processing and reporting<br/>
                    • Bentonite sample material installation and sampling measurement.<br/>
                    • Tensile strength measurement analysis,<br/>
                    • Assemble, disassemble and analysis Water retention curve test.<br/>
                    • Assemble, disassemble and analysis Infiltration test.<br/>
                    • Lab equipment and instrument calibration<br/>
                    • Designs test equipment with SolidWorks software

                </p>
            </div>

            <div className="job job-2">
                <h2><span className="text-tertiary">ISS Oy, Finland.</span></h2>
                <h3>Position: Maintenance assistant</h3>
                <h4>10/2010 - 01/2013</h4>
                <h3><span className="text-secondary">Work Description</span></h3>
                <p> Real Estate and Maintenance Unit,<br/>
                    • Responsible for house and yard maintenance.

                </p>
            </div>

            <div className="job job-3">
                <h2><span className="text-tertiary">Lappeenranta University Technology, Lappeenranta, Finland.</span></h2>
                <h3>Position: Summer internship</h3>
                <h4>06/2009 – 09/2009</h4>
                <h3><span className="text-secondary">Work Description</span></h3>
                <p> Mechanical Engineering Department (Steel Structure Laboratory).<br/>
                    • Data analysis,<br/>
                    • Reporting of fatigue and strength of material testing in the Laboratory.
                </p>
            </div>

            <div className="job job-4">
                <h2><span className="text-tertiary">Bakholon NIG.LTD, Lagos state, Nigeria</span></h2>
                <h3>Position: Maintenance Engineer and Head shift.</h3>
                <h4>03/1996 – 08/2001</h4>
                <h3><span className="text-secondary">Work Description</span></h3>
                <p> • Operated knitting fibre machine<br/>
                    • Managed the flow of incoming and used fabric<br/>
                    • Ensured manufacturing process run smoothly and efficiently.<br/>
                    • Organised and planned production schedules<br/>
                    • Repair and routine maintenance of knitted machine
                </p>
            </div>
        </div>
        </div>
    )
}

export default Experience