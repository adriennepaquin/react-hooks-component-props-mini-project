import Article from "./Article"

function ArticleList(props) {
    //console.log(props.blogs)
    
    const blogPosts = props.blogs.map((blog) => {
        console.log(blog.title)
        return (
           <Article key={blog.id} title={blog.title} date={blog.date} preview={blog.preview} />
        )
    })
    return (
        <main>
            {blogPosts}
        </main>
    )
}

export default ArticleList