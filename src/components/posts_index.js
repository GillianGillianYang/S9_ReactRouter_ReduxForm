import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'; 
import _ from 'lodash';

class PostsIndex extends Component{
    componentDidMount(){
        this.props.fetchPosts();
        //check chrome -> network > HXR , show an empty array 
    }

    renderPosts(){

        return(
            _.map(this.props.posts, post =>{
                return(
                    <li className="list-group-item" key={post.id}>
                        {post.title}
                    </li>
                );
            } )

        );
    }

    render(){
       // console.log(this.props.posts);  //show twice , first empty 
        return(
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul> 
            </div>    
        )
    };

}

function mapStateToProps(state){
    return {posts : state.posts} ;
}

export default connect(mapStateToProps, {fetchPosts : fetchPosts})(PostsIndex);