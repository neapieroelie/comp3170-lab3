import { STORIES } from './data';
import Story from './components/Story';

function App() {

  const storyList = STORIES.map(story => <Story key={story.title} story={story} />);

  return (
    <div className='storySection'>
      <h1>E News! Top Stories</h1>
      {storyList}
    </div>
  );
}

export default App;
