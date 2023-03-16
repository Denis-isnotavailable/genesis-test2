// import "@babel/polyfill";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillUnlock, AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import ReactPlayer from 'react-player'
// import Hls from "hls.js";

import { getOneCourse, resetOneCourse } from "../../redux/operations";
import { DescriptionStyled, ImageThumbStyled, LessonItemStyled, LessonsListStyled, OneCoursePageStyled, VideoStyled, ButtonThumbStyled } from "./OneCoursePage.styled";


const OneCoursePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const course = useSelector(state => state.oneCourse);
    const isLoading = useSelector(state => state.isLoading);    
    const [videoLink, setVideoLink] = useState("");
    const [currentLesson, setCurrentLesson] = useState(1);
    // const [currentLessonTime, setCurrentLessonTime] = useState(0);
    // const video = useRef(); 
    const player = useRef()

    console.log(player);
    

    useEffect(() => {
        dispatch(getOneCourse(id));    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(Object.keys(course).length !== 0) setVideoLink(course?.lessons[0]?.link)
    }, [course]);

    // useEffect(() => {
    //     const hls = new Hls();

    //     hls.loadSource("https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8");
    //     hls.attachMedia(video);
    //     hls.on(Hls.Events.MANIFEST_PARSED, function() { video.play(); });
    // }, [videoLink]);

    const handleSetVideoLink = (link, status, order) => {
        if (status === "unlocked" && link !== videoLink) {
            setVideoLink(link);
            setCurrentLesson(order);
        };      
    }

    // const handleSetVideoTimeUpdate = (currentTime) => {
    //     setCurrentLessonTime(currentTime);
    //     console.log(currentLessonTime);
    // }

    // console.log(course);
    console.log(videoLink);    

    
    const { previewImageLink,
        description,
        title,       
        rating,
        lessons,
        duration } = course;
   
    return (
        <>
            {
                !isLoading && Object.keys(course).length !== 0 &&
                <OneCoursePageStyled>
                    
                    <ButtonThumbStyled to={"/"} onClick={() => dispatch(resetOneCourse())}>
                        <AiOutlineArrowLeft size={24} /> GO BACK
                    </ButtonThumbStyled>
                        
                    <ImageThumbStyled>
                        <img src={`${previewImageLink}/cover.webp`} alt="course poster" width={"100%"} height={"100%"} />
                    </ImageThumbStyled>
                        
                    <h1>{title}</h1>
                    <h2>{description}</h2>                    

                    <DescriptionStyled>
                        <li>Lessons: <span>{lessons.reduce((acc, l) => acc = l.status === "unlocked" ? acc + 1 : acc, 0)}</span></li>
                        <li>Rating: <span>{rating}</span></li>
                        <li>Duration: <span>{duration} hours</span></li>
                    </DescriptionStyled>
                        
                        <h3>Lesson {currentLesson}</h3>  

                        <VideoStyled>
                            

                            <ReactPlayer
                                ref={player}
                                url={videoLink}
                                // url={'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'}
                                controls                                
                                width={'100%'}
                                // onReady={() => player.getInternalPlayer('hls')}
                                // config={{
                                //     file: {
                                //     hlsOptions: {
                                //         forceHLS: true,
                                //         debug: false,                                    
                                //     },
                                //     },
                                // }}
                            />

                            
                        {/* <video
                            // src={videoLink}
                            // ref={video}
                            // src="http://techslides.com/demos/sample-videos/small.mp4"                
                            width="100%"
                            controls
                            preload="auto"
                            onLoadStart={e => e.target.currentTime = 2}
                            onTimeUpdate={e => handleSetVideoTimeUpdate(e.target.currentTime)}
                            >                                
                        </video> */}
                    </VideoStyled>                    

                    <h3>Choose the lesson to watch</h3>
                        
                    <LessonsListStyled>
                            {[...lessons]
                                .sort((lesson1, lesson2) => lesson1.order - lesson2.order)
                                .map(lesson =>
                                <LessonItemStyled
                                    key={lesson.id}
                                    onClick={() => handleSetVideoLink(lesson.link, lesson.status, lesson.order)}
                                    status={lesson.status === "unlocked" && lesson.link}
                                >
                                    <div>{lesson.status === "unlocked" && lesson.link ? <AiFillUnlock size={38} /> : <AiFillLock size={38} />}</div>
                                    <h4>Lesson {lesson.order}: {lesson.title}</h4>
                                </LessonItemStyled>)}
                    </LessonsListStyled> 
                    
                </OneCoursePageStyled>
            }
        </>
                        
    );
}

export default OneCoursePage;



            // {/* <img src={lessons && `${lessons[0].previewImageLink}/${lessons[0].order}.webp`} alt="lesson poster" width={320} /> */}

            // {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} /> */}

            // {/* <video src="https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-2/AppleHLS1/lesson-2.m3u8" controls></video> */}

            // {/* <div>
            //     <video width={640} controls preload="auto" >
            //         <source                        
            //             src={'https://youtu.be/7gphiFVVtUI'}
            //             // type="application/x-mpegURL"
                        
            //         />
            //     </video>
            // </div> */}