import { useEffect, useState } from "react";
import React from "react";
import mydata from '../../resume.json';

import styles from "./Gallery.module.scss";

import InfiniteScroll from 'react-infinite-scroll-component';

const UnsplashImage = ({ url, key }) => (
    <div className={styles.image_item} key={key} >
        <img src={"FASHION/" + url + ".jpg"} />
    </div>
);

interface FuncProps {
}

const Gallery: React.FC<FuncProps> = (props) => {

    var _ = require('lodash');
    const [images, setImages] = useState<number[]>([10]);
    const [loaded, setIsLoaded] = useState(false);
    const imageData = mydata["imageData"];
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = (count = 10) => {
        // setImages([...images, ...res.data]);
        if (images.length + count > imageData["FASHION"]) {
            setHasMore(false);
            return;
        }
        setImages(_.concat(images, _.range(images.length, images.length + count)));
        setIsLoaded(true);
        console.log(images);
    };

    return (
        <section id="gallery">
            <div className="project-heading">
                <span className="section-headings">Projects</span>
            </div>
            <div className="">
                <div className="hero-body">
                    <div className={styles.container}>
                        <InfiniteScroll
                            dataLength={images.length}
                            next={() => fetchImages(5)}
                            hasMore={hasMore}
                            loader={
                                <img
                                    src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                                    alt="loading"
                                />
                            }
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
                </div>
            </div>
        </section>


    );
};

export default Gallery;
