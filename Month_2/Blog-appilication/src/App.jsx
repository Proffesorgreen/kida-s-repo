import { useCallback, useState } from 'react'
import Navbar from './nav_bar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import SinglePost from './SinglePost/SinglePost'
import Newblog from './Newblog/Newblog'

const blog_1 = {
   title: 'Lorem ipsum dolor sit amet',
   type: 'Sci-fi',
   text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam ante orci, venenatis in dictum vel, finibus id leo. Nunc eros quam,sollicitudin sit amet tristique ut, finibus quis dui. Morbi at pulvinar risus, vel iaculis sapien. Aenean facilisis eu enim ac luctus. Vivamus vehicula erat sed semper commodo. Aliquam ut porta nisi. Vestibulum non justo at risus placerat vehicula. Duis sed orci sapien. Cras quis urna vitae enim tincidunt vehicula. Nulla facilisi. Sed feugiat orci lectus. Curabitur quis magna at purus fermentum tempus at ornare risus ',
   id: 0,
}

function App() {
  
   const [blogs, setBlogs] = useState(new Array(10).fill(blog_1))

   const addblog = useCallback(
      function addblog(newblog) {
         setBlogs([...blogs, newblog])
      },
      [blogs]
   )

   function deleteblog(id) {
      setBlogs(blogs.filter(blogin => blogin.id !== id))
   }

   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route
               path='/'
               element={<Home bloglist={blogs} onDelete={deleteblog} />}
            />
            <Route path='/single' element={<SinglePost />} />
            <Route path='/new' element={<Newblog addfunction={addblog} />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
