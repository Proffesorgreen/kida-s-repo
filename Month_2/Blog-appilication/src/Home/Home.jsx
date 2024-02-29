import './home.css'
import Header from '../Header/Header'
import Post from '../Post/Post'

function Home({ bloglist, onDelete }) {
   return (
      <>
         <Header />
         <div className='home-container'>
            {/* <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-field"
        ></input>
      </div> */}
            {bloglist.map(blogarr => (
               <Post
                  //  make sure each blog has an id otherwise this will set a random id by default
                  // BUT YOUR BLOGS SHOULD HAVE AN ID in order to be able to delete or delete them
                  // this is just to prevent app warnings
                  key={blogarr.id || Math.random() * 1000}
                  title={blogarr.title}
                  type={blogarr.type}
                  text={blogarr.text}
                  id={blogarr.id}
                  onDelete={onDelete}
               />
            ))}
         </div>
      </>
   )
}

export default Home
