import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'; 

class PostsIndex extends Component{
    componentDidMount(){
        this.props.fetchPosts();
        //check chrome -> network > HXR , show an empty array 
    }


    render(){
        return(
            <div>
                Posts Index 
            </div>    
        )
    };

}

export default connect(null, {fetchPosts : fetchPosts})(PostsIndex);