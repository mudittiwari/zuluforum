
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
            <div className="w-full md:mt-10 mt-4 px-10">
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
                            <Typography className="heading" >How can I report my problem?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                            Any query, of generic nature, related to content, design, service or technological issues with respect to THIS.WEBSITE platform can be sent to through this customized Feedback interface.
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
                            <Typography className="heading" >Facing problems regarding registration or log in?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                            In case you are facing any problem regarding the registration or login process, please do get in touch with us through this form. We would be more than happy to get back to you and help in solving issues you may face while browsing and/or participating through THIS.WEBSITE, as we value your participation in THIS.WEBSITE. 
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
                            <Typography className="heading">What are the documents required to file a complaint?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                            Proof of possession of any government authorised identification card (Aadhaar Card, Voter's Identity Card,Driving License, etc). Documents
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
                            <Typography className="heading">Did not find your suggestions on the platform?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                            Do not hesitate to get in touch with us with the same we will address your issue at the earliest as we value your participation in the THIS.WEBSITE Platform.
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
                            <Typography className="heading">Any other issue</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.summary}>
                            <Typography>
                            Apart from the above mentioned category if you are facing any other issue with regard to the site, please do not hesitate to get in touch with us. Let us know about your problem with brief description of the issue which you are facing. We would be happy to revert back to you.

Click here to view: User Manual - PDF (3.5 MB)
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                
                
            </div>
        </>
    );
}

export default Faq;