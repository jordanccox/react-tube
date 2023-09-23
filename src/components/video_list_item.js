const VideoListItem = (props) => {
  return (
    <div>
      <img src={props.video.snippet.thumbnails.default.url} onClick={() => props.selectVideo(props.video)}/>
      <hr/>
    </div>
  );
};

export default VideoListItem;