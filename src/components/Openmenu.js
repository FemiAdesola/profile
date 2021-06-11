import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


const Testimonial = () => {
    return (
        <div>
           
        <div>
            <div className="testimonoial">
                <h2> <a href="../pdf/ains.pdf" target="_blank" >Work certificate from A-Insinöörit Oy</a>
                </h2>
                <hr/>
                <h2> <a href="https://openbadgepassport.com/app/badge/info/310968" target="_blank">Software development Skill
                        [Front-End]</a>
                </h2>
                <hr/>
                <h2> <a href="https://openbadgepassport.com/app/badge/info/332155" target="_blank">Software development Skill
                        [Back-End]</a>
                </h2>
                <hr/>
                
                <h2> <a href="https://openbadgepassport.com/app/badge/info/299639" target="_blank">Wireless Communication Systems</a>
                </h2>
                <hr/>
               
                <h2> <a href="https://openbadgepassport.com/app/badge/info/313036" target="_blank">Measurement Technology 
                        </a>
                </h2>
                <hr/>
               
                <h2> <a href='../pdf/Coursera.pdf' target="_blank">The Impact of Technology</a>
                </h2>
                <hr/>
                <h2> <a href="../pdf/LUT_testimonial.pdf" target="_blank">Testimonial From Placement in LUT</a>
                </h2>
                <hr/>
                </div>
            </div>
        </div>
    )
}


const Testimonials = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   return (
       <div className='testimonials'>
            <h1 className="lg-heading">
            My<span className="text-secondary"> Testimonial</span>
        </h1>
        <h2 className="sm-heading">
            This is my Testimonial which tells about me.....
        </h2>
        <h3>Click below to read more about my <b>Open Badge</b>....</h3>
        <br/>
      <button className='button' onClick={handleClick}>
       Testimonials
      </button>
           <Menu
               style={{'textAlign':'center'}}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
               <MenuItem  onClick={handleClose}>{ <Testimonial/>}</MenuItem>
      </Menu>
    </div>
  ); 
}
export default Testimonials