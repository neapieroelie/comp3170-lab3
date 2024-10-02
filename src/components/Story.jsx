export default function Story(props) {
    const {story} = props;

    function handleDelete(e) {
        if ( e.target === e.currentTarget) {
            // you clicked on the tile itself
            return;
          }
      
          if ( e.target.tagName !== 'SPAN' ) {
            return;
          }
      
          e.currentTarget.remove(); // otherwise, remove the tile
    }

    return (
        <div className="story" onClick={handleDelete}>
            <div className="story-image">
                <img src={story.image} alt="" />
            </div>
            <a className="story-heading" href={story.link}>{story.title}</a>
            <p className="story-author">By: {story.author}</p>
            <p className="story-desc">{story.description}</p>
            <span className="delete">x</span>
        </div>
    );
}
