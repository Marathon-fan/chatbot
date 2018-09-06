import React,  { Component }from 'react';

import { Button, Comment,  Form, Header  } from 'semantic-ui-react'
import moment from 'moment';

const nocache = require('superagent-no-cache');
const request = require('superagent');

class Assessment extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      serverMsg: 'Thanks for choosing Medius!',
      userMsg: 'Let me ask you something',
      textArea: 'Please in your question'
  };
}


  handleSubmit(event) {
    const data = new FormData(event.target);
  }
 
  handleChangeTextArea(event) {
    this.setState({ textArea: event.target.value });
  }  

  updateAnswer(question) {
    request
    .post('http://localhost:5000/chatbot/01')
    .query({ message: question}) // query string
    .use(nocache) // Prevents caching of *only* this request
    .end((err, res) => {
      // Do something
      const newState = Object.assign({}, this.state, {
        serverMsg: res.text
      });
      this.setState(newState);     
    });
  }

  handleChangeButton(event) {
    this.setState({ userMsg: this.state.textArea });
    this.updateAnswer(this.state.userMsg);
    this.forceUpdate();
  }

  render() {
    return(
      <div>
         <Comment.Group>
               <Header as='h3' dividing>
                  Start to chat
               </Header>

              <Comment>
                <div width ='20px' height='20px'>
                <Comment.Avatar src='https://s33.postimg.cc/6izv3nkm7/smart.png' />
                </div>
                <Comment.Content>
                  <Comment.Author as='a'>Medius</Comment.Author>
                  <Comment.Metadata>
                    <div>{ (new moment()).format()}</div>
                  </Comment.Metadata>
                  <Comment.Text>{this.state.serverMsg}</Comment.Text>
                </Comment.Content>
                <br/>
             </Comment>

            <Comment>
              <Comment.Avatar src='https://s33.postimg.cc/6hpxaidq7/user.png' />
              <Comment.Content>
                <Comment.Author as='a'>User</Comment.Author>
                <Comment.Metadata>
                  <div>{ (new moment()).format()}</div>
                </Comment.Metadata>
                <Comment.Text>{this.state.userMsg}</Comment.Text>
              </Comment.Content>
              <br/>
            </Comment>

            <Form reply onSubmit={this.handleSubmit} >
              <Form.TextArea id="textArea" placeholder="Please input your question" onChange={event => this.handleChangeTextArea(event)} />
              <Button id='formButton' content='Answer question' labelPosition='left' icon='edit' primary onClick={event => this.handleChangeButton(event)}/>
            </Form>
          </Comment.Group>
        </div>
    );
  };
};

export default Assessment;