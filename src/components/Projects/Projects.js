import React, { useState, useEffect } from 'react';
import "../../Stylesheets/Projects.css";
import EachProject from './EachProject';
import mydata from '../../resume.json';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteOptions, PaletteColorOptions, PaletteColor } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    toggleButtonGroup: {
        '& .MuiToggleButtonGroup-grouped': {
            color: '#fff',
        },
        '& .MuiToggleButtonGroup-grouped.Mui-selected': {
            color: '#f44336'
        },
    },
});

const theme = createTheme({
    palette: {
        toggleBtnGroup: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        },
    },
});

const Projects = ({ openModal }) => {
    // let projects = mydata["projects"];
    // let projects = mydata["projects"];
    const [projectsType, setProjectsType] = useState("TECHNICAL");
    const [projects, setProjects] = useState(mydata["projects"][projectsType]);
    const [aim, setAim] = useState(true);
    const classes = useStyles();

    const showAim = () => {
        if (window.innerWidth <= 660) {
            setAim(false)
        }
        else { setAim(true) }
    }
    useEffect(() => {
        showAim();
        setProjects(mydata["projects"][projectsType]);
    }, [projectsType])
    window.onresize = showAim;

    const handleChange = (event, newProjectsType,
    ) => {
        if (newProjectsType === null || newProjectsType === projectsType) {
            return;
        }
        setProjectsType(newProjectsType);
    };

    return (
        <section id="projects">
            < div className="projects-bg" >
                <div className="project-heading">
                    <span className="section-headings">Projects</span>
                </div>
                <ThemeProvider theme={theme}>
                    <ToggleButtonGroup
                        value={projectsType}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        className={"toggleButtonGroup " + classes.toggleButtonGroup}
                    >
                        <ToggleButton value="TECHNICAL" className="toggleButton">TECHNICAL</ToggleButton>
                        <ToggleButton value="FINANCE" className="toggleButton">FINANCE / COMPANY EVALUATION</ToggleButton>
                    </ToggleButtonGroup>
                </ThemeProvider>
                <div id="projects-container" className="container">
                    <div className="row">
                        {Object.keys(projects).map(key => {
                            return (<EachProject key={key} value={key} isVisible={aim} project={projects[key]} openModal={openModal} />)
                        }
                        )}
                    </div>
                </div>
            </div >

        </section>
    );
};

export default Projects;