import { CalendarIcon } from '@primer/octicons-react';
import React, { Component } from 'react';
import PostFile from '../posts/build/json/posts_db.json';
import Body from './Body';
import Tags from './Tags';
import Title from './Title';

class PostView extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.id = window.location.pathname.substring(10);
    this.post = Object.values(PostFile).filter((post) => post.url === this.id);
    // eslint-disable-next-line prefer-destructuring
    this.tags = this.post.map((post) => post.tags)[0];
    // eslint-disable-next-line prefer-destructuring
    this.date = this.post.map((post) => post.date)[0];
  }

  render() {
    return (
      <div className="post">
        <Title title={this.post.map((post) => post.title)} />
        <div className="post__date">
          <CalendarIcon size={14} />
          <span className="post__date__value">{this.date}</span>
        </div>
        <Body content={this.post.map((post) => post.body)} />

        <div className="post__tag">
          {this.tags.map((t) => <Tags tag={t} />)}
        </div>
      </div>
    );
  }
}

export default PostView;
