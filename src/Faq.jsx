
import { makeStyles } from '@mui/styles';
// import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material/';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Css/homepage.css';
import add from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Faq() {

    const useStyles = makeStyles({
        summary: {
            backgroundColor: 'black',
            color: 'white',
        },
        main: {
            border: '1px solid black'
        },
        heading:{
            color:'blue',
            fontWeight:'800',
        }
    }
    );
    const classes = useStyles();
    return (
        <>
            <div className="w-full mt-10 px-10">
            <h1 className="text-2xl w-full text-center font-bold mb-10">
                    Frequently Asked Questions
                </h1>
                <div className='border-2 border-black border-solid mt-3'>
                    <Accordion>
                        <AccordionSummary className={classes.summary}
                            expandIcon={<ExpandMoreIcon className="icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading" >FAQ ONE</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-2 border-black border-solid mt-3'>
                    <Accordion>
                        <AccordionSummary className={classes.summary}
                            expandIcon={<ExpandMoreIcon  className="icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading" >FAQ ONE</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-2 border-black border-solid mt-3'>
                    <Accordion>
                        <AccordionSummary className={classes.summary}
                            expandIcon={<ExpandMoreIcon  className="icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">FAQ ONE</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-2 border-black border-solid mt-3'>
                    <Accordion>
                        <AccordionSummary className={classes.summary}
                            expandIcon={<ExpandMoreIcon  className="icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">FAQ ONE</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-2 border-black border-solid mt-3'>
                    <Accordion>
                        <AccordionSummary className={classes.summary}
                            expandIcon={<ExpandMoreIcon  className="icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">FAQ ONE</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-2 border-black border-solid mt-3'>
                    <Accordion>
                        <AccordionSummary className={classes.summary}
                            expandIcon={<ExpandMoreIcon  className="icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">FAQ ONE</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                
            </div>
        </>
    );
}

export default Faq;