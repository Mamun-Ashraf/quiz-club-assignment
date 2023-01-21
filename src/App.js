
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import CSSQuiz from './components/Quizzes/CSSQuiz';
import GitQuiz from './components/Quizzes/GitQuiz';
import JsQuiz from './components/Quizzes/JsQuiz';
import Quizzes from './components/Quizzes/Quizzes';
import ReactQuiz from './components/Quizzes/ReactQuiz';
import Statistics from './components/Statistics/Statistics';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('topic.json')
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>,
          loader: () => fetch('topic.json')
        },
        {
          path: 'blog', element: <Blog></Blog>
        },
        {
          path: 'quizzes',
          element: <Quizzes></Quizzes>
        },

        {
          path: 'react',
          element: <ReactQuiz></ReactQuiz>
        },
        {
          path: 'js',
          element: <JsQuiz></JsQuiz>
        },
        {
          path: 'css',
          element: <CSSQuiz></CSSQuiz>
        },
        {
          path: 'git',
          element: <GitQuiz></GitQuiz>
        }
      ]
    },

    {
      path: '*',
      element: <h4>This route not found 404</h4>
    }
  ])
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
