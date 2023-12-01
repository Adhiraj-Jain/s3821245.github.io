import { useEffect, useState } from "react";
import React from "react";
import mydata from '../../resume.json';

import styles from "./Gallery.module.scss";

import InfiniteScroll from 'react-infinite-scroll-component';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const UnsplashImage = ({ url, key }) => (
    <div className={styles.image_item} key={key} >
        <img src={"FASHION/" + url + ".jpg"} />
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

    var _ = require('lodash');
    const [images, setImages] = useState<number[]>([]);
    const [loaded, setIsLoaded] = useState(false);
    const imageData = mydata["imageData"];
    const [hasMore, setHasMore] = useState(true);
    const [portfolioType, setportfolioType] = useState("FASHION");

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = (count = 10) => {
        // setImages([...images, ...res.data]);
        if (images.length + count > imageData[portfolioType]) {
            setHasMore(false);
            return;
        }
        setImages(_.concat(images, _.range(images.length, images.length + count)));
        setIsLoaded(true);
        console.log(images);
    };

    const changePortfolioType = () => {
        if (portfolioType.match("work")) {
            setportfolioType("volunteer")
        }
        else {
            setportfolioType("work")
        }
    }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newPortfolioType: string,
    ) => {
        setportfolioType(newPortfolioType);
        // setImages(_.concat(images, _.range(images.length, images.length + count)));
        // setIsLoaded(true);
    };

    return (
        <section id="gallery" className={styles.gallery}>
            <div className="">
                <span className={styles.section_headings}>Gallery</span>
            </div>
            <ThemeProvider theme={theme}>
                <ToggleButtonGroup
                    color="toggleBtnGroup"
                    value={portfolioType}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    className={styles.toggleButtonGroup}
                >
                    <ToggleButton value="FASHION" className={styles.toggleButton}>FASHION</ToggleButton>
                    <ToggleButton value="WEDDING_BRIDAL" className={styles.toggleButton}>WEDDING/BRIDAL</ToggleButton>
                    <ToggleButton value="EVENTS" className={styles.toggleButton}>EVENTS</ToggleButton>
                </ToggleButtonGroup>
            </ThemeProvider>
            <div className={styles.container}>
                <InfiniteScroll
                    dataLength={images.length}
                    next={() => fetchImages(5)}
                    hasMore={hasMore}
                >
                    <div className={styles.image_grid} style={{ marginTop: "30px" }}>
                        {loaded
                            ? images.map((image, index) => (
                                <UnsplashImage
                                    url={image}
                                    key={index}
                                />
                            ))
                            : ""}
                    </div>
                </InfiniteScroll>
            </div>
        </section>


    );
};

export default Gallery;
