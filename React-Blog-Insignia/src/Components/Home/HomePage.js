import React, {Component} from 'react';
import {findHomePosts} from '../../Models/post';
import {getCategories} from '../../Models/category';
import HomeView from './HomeView';
import $ from 'jquery';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            categories: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadPostsSuccess = this.onLoadPostsSuccess.bind(this);
        this.onLoadCategoriesSuccess = this.onLoadCategoriesSuccess.bind(this);
    }

    onLoadPostsSuccess(response) {
        // Display teams
        this.setState({posts: response})
    }

    onLoadCategoriesSuccess(response) {
        // Display teams
        this.setState({categories: response})
    }
    
    componentDidMount() {
        // Request list of teams from the server
        findHomePosts(this.onLoadPostsSuccess);
        getCategories(this.onLoadCategoriesSuccess);
    }

    render() {
        $(window).scrollTop(0);
        return (
            <div>
                <HomeView posts={this.state.posts} categories={this.state.categories}/>
            </div>
        );
    }
}