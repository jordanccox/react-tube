const VideoDetail = props => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const url=`https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="ratio ratio-16x9">
        <iframe src={url} allow="fullscreen"></iframe>
      </div>
      <div className="details">
        <div><h4>{props.video.snippet.title}</h4></div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;