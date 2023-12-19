import { useEffect, useState } from "react";
import React from "react";
import mydata from '../../resume.json';


import InfiniteScroll from 'react-infinite-scroll-component';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteOptions, PaletteColorOptions, PaletteColor } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import styles from "./Gallery.module.scss";

import _ from 'lodash';

const DEFAULT_IMAGES = 5

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

declare module '@mui/material/styles' {
    interface Palette {
        toggleBtnGroup: PaletteColor;
    }
    interface PaletteOptions {
        toggleBtnGroup?: PaletteColorOptions;
    }
}

const UnsplashImage = ({ url, key, openModal }) => (
    <div className={styles.image_item} key={key} >
        <img
            src={url}
            onClick={() => openModal(url)} />
        <div className={styles.view_image}>View Image</div>
    </div>
);

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

interface FuncProps {
}

const Gallery: React.FC<FuncProps> = (props) => {

    const [images, setImages] = useState<number[]>([]);
    const [loaded, setIsLoaded] = useState(false);
    const imageData = mydata["imageData"];
    const [hasMore, setHasMore] = useState(true);
    const [portfolioType, setportfolioType] = useState("FASHION");
    const [modalSrc, setModalSrc] = useState<string | null>(null);
    const [showButton, setButton] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        // fetchImages();
        !showButton && images.length < DEFAULT_IMAGES && checkImageData()
        showButton && checkImageData()

        const handleEsc = (event) => {
            if (event.keyCode === 27) closeModal();
        };
        window.addEventListener('keydown', handleEsc);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [portfolioType]);

    const openModal = (src: string) => {
        setModalSrc(src);
    };

    const closeModal = () => {
        setModalSrc(null);
    };

    const fetchImages = (count) => {

        if (!showButton) {
            setHasMore(false);
            return;
        } else {
            checkImageData(count);
        }
    };

    const checkImageData = (count = 5) => {
        if (imageData[portfolioType] <= 0) {
            return;
        }
        if (images.length >= imageData[portfolioType] || images.length + count >= imageData[portfolioType]) {
            setImages(_.concat(_.range(0, imageData[portfolioType] + 1)));
            setHasMore(false);
        } else {
            setImages(_.concat(images, _.range(images.length, images.length + count)));
            setHasMore(true);
        }
        setIsLoaded(true);
    }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newPortfolioType: string,
    ) => {
        if (newPortfolioType === null || newPortfolioType === portfolioType) {
            return;
        }
        setportfolioType(newPortfolioType);
    };

    return (
        <section id="gallery" className={styles.gallery}>
            <div className="">
                <span className={styles.section_headings}>Gallery</span>
            </div>
            <ThemeProvider theme={theme}>
                <ToggleButtonGroup
                    value={portfolioType}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    className={styles.toggleButtonGroup + " " + classes.toggleButtonGroup}
                >
                    <ToggleButton value="FASHION" className={styles.toggleButton}>FASHION</ToggleButton>
                    <ToggleButton value="WEDDING_BRIDAL" className={styles.toggleButton}>WEDDING / BRIDAL</ToggleButton>
                    <ToggleButton value="EVENTS" className={styles.toggleButton}>EVENTS</ToggleButton>
                </ToggleButtonGroup>
            </ThemeProvider>
            <div className={styles.container}>
                <InfiniteScroll
                    dataLength={images.length}
                    next={() => { fetchImages(10) }}
                    hasMore={showButton ? hasMore : false}
                    loader={<Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}
                >
                    {imageData[portfolioType] > 0 && <div className={styles.image_grid} style={{ marginTop: "30px" }}>
                        {loaded
                            ? images.map((image, index) => (
                                <UnsplashImage
                                    url={portfolioType + "/" + image + ".jpg"}
                                    openModal={openModal}
                                    key={index}
                                />
                            ))
                            : ""}
                        {!showButton && (
                            <button
                                onClick={() => { setButton(true); checkImageData(imageData[portfolioType]); }}
                                className={styles.showButton}
                            >
                                Load more
                            </button>
                        )
                        }
                    </div>}
                </InfiniteScroll>

            </div>
            {modalSrc && (
                <div
                    onClick={closeModal}
                    style={{
                        background: `RGBA(0,0,0,.5) url(${modalSrc}) no-repeat center`,
                        backgroundSize: 'contain',
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        zIndex: 10000,
                        top: 0,
                        left: 0,
                    }}
                />
            )}
        </section >


    );
};

export default Gallery;
