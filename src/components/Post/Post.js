

//// reference for building my own Post component ////


// The individual post component //
    // const Post = props => (
    //     <article className="post">
    //         <h2 className="post-title">{props.title}</h2>
    //         <hr />
    //         <p className="post-content">{props.content}</p>
    //         <button onClick={props.delete}>Delete this post</button>
    //     </article>
    // );
    
    // // The seperate form component to be written later
    
    // class Form extends React.Component {}
    
    // // The posts loop component
    
    // class Posts extends React.Component {
    //     state = {
    //         posts: [],
    //         post: {
    //             title: "",
    //             content: ""
    //         }
    //         // error:false
    //     };
    
    //     componentDidMount() {
    //         const { posts } = this.state;
    //         axios
    //             .get("url")
    //             .then(response => {
    //             const data = Object.values(response.data);
    //             this.setState({ posts : data });
    //             });
    //     }
    //     handleChange = event => {
    //         const [name , value] = [event.target.name, event.target.value];
    //         // const value = event.target.value;
    //         const { post } = this.state;
    //         const newPost = {
    //             ...post,
    //             [name]: value
    //         };
    //         this.setState({ post: newPost });
    //     };
    
    //     handleSubmit = event => {
    //         event.preventDefault();
    //         const {post} = this.state;
    //         const {posts} = this.state;
    //         axios
    //             .post("url", post)
    //             .then(response => {
    //             // console.log(response);
    //             const newPost = Object.values(response.data);
    //             this.setState({ post: newPost });
    //             const updatedPosts =  [...posts, {title:post.title,content:post.content}];
    //             this.setState({ posts: updatedPosts});
    //             // console.log(post);
    //             console.log(updatedPosts);
    //             console.log(this.state.posts);
    //             });
    //     };
    
    //     handleDelete = () => {
    //         const { post } = this.state;
    //         axios.delete("url",{params: {id: post.id}})
    //         .then(response => {
    //             console.log(response);
    //         });
    //     };
    
    //     render() {
    //         let posts = <p>No posts yet</p>;
    //         if (this.state.posts !== null) {
    //             posts = this.state.posts.map(post => {
    //                 return <Post 
    //                                  key={post.id} 
    //                                  {...post}
    //                                  delete={this.handleDelete}/>;
    //             });
    //         }
    
    //         return (
    //             <React.Fragment>
    //                 {posts}
    //                 <form className="new-post-form" onSubmit={this.handleSubmit}>
    //                     <label>
    //                         Post title
    //                         <input
    //                             className="title-input"
    //                             type="text"
    //                             name="title"
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>
    //                     <label>
    //                         Post content
    //                         <input
    //                             className="content-input"
    //                             type="text"
    //                             name="content"
    //                             onChange={this.handleChange}
    //                         />
    //                     </label>
    //                     <input className="submit-button" type="submit" value="submit" />
    //                 </form>
    //             </React.Fragment>
    //         );
    //     }
    // }

//// reference for building my own Post component ////