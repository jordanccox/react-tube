import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoList = props.videos.map((video, index) => {
    return (<VideoListItem key={index} video={video} selectVideo={props.selectVideo}/>);
  });

  return (
    <ul className="col-md-4 list-group">
      {videoList}
    </ul>
  );
};

export default VideoList;