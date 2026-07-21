import './App.css';

import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {

  const show = true;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "30px"
      }}
    >

      {show && <CourseDetails />}

      {show ? <BookDetails /> : null}

      {show ? <BlogDetails /> : null}

    </div>
  );
}

export default App;