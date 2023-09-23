const VideoListItem = (props) => {
  return (
    <div className="row">
      <div className="col">
        <img src={props.video.snippet.thumbnails.default.url} onClick={() => props.selectVideo(props.video)}/>
      </div>
      <div className="col">
        <p>{props.video.snippet.title}</p>
      </div>
      <hr className="mt-3"/>
    </div>
  );
};

export default VideoListItem;