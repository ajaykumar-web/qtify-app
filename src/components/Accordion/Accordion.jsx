import * as React from 'react';
import { styled } from '@mui/system'; // Import styled from '@mui/system'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { accordionData } from '../../constants/constants';

const AccordionStyle = styled('div')(({ theme }) => ({
    '.MuiPaper-root': {
        border: '1px solid #fff',
        borderRadius: '0.625rem',
        width: '75%',
        display: 'block',
        margin: '1rem auto 0',
    },
    '.MuiButtonBase-root': {
        backgroundColor: '#121212',
        borderRadius: '0.625rem',
        '.MuiTypography-body1': {
            color: '#fff',
            fontSize: '1.25rem',
            fontWeight: 500,
        },
    },
}));

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <AccordionStyle>
            {accordionData.map((items, index) => {
                return (
                    <Accordion
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={index}
                            id={index}
                        >
                            <Typography sx={{ color: 'text.secondary' }}>
                                {items.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{items.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </AccordionStyle>
    );
}
