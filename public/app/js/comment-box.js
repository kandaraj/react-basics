var CommentBox = React.createClass({
    getInitialState: function (){
      return { data: [] };
    },
    componentDidMount: function() {
      this.loadFromServer();
      setInterval(this.loadFromServer, this.props.pollInterval)
    },
    loadFromServer: function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    dataChanged: function(data){
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: data,
        success: function(data){
          this.setState({data: data});
        }.bind(this),
        error: function(){
          console.error("Error posting");
        }.bind(this)
      });
    },
    render: function() {
        return (
          <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm onFormSubmit={this.dataChanged} />
          </div>
      );
    }
});

var CommentList = React.createClass({
    render: function() {
        var comment = this.props.data.map(function(comment){
          return(
            <Comment author={comment.author} key={comment.id}>
              {comment.text}
            </Comment>
          );
        });
        return (
          <div className="commentList">
            {comment}
          </div>
      );
    }
});

var CommentForm = React.createClass({
    getInitialState: function(){
      return { author: '', text: ''};
    },
    handleAuthorChange: function(e){
      this.setState({author: e.target.value});
    },
    handleTextChange: function(e){
      this.setState({text: e.target.value});
    },
    handleSubmitForm: function(e){
      e.preventDefault();
          var author = this.state.author.trim();
          var text = this.state.text.trim();
          if (!text || !author) {
            return;
          }
          this.props.onFormSubmit(this.state);
          // TODO: send request to the server
          this.setState({author: '', text: ''});
    },
    render: function() {
        return (
          <form className="commentForm" onSubmit={this.handleSubmitForm}>
            <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
            <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
            <input type="submit" value="Post" />
          </form>
      );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                 </h2>
                 {this.props.children}
            </div>
        );
    }
});

ReactDOM.render(
        <CommentBox url="/api/comments" pollInterval={2000}/>,
        document.getElementById('content')
    );
