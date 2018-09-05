import React,  { Component }from 'react';

import { Button, Comment,  Form, Header  } from 'semantic-ui-react'

class Assessment extends Component {

  constructor() {
    super();

    this.state = {
      steps: [
        {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          end: true,
        },
      ]
  };
}

  componentWillMount() {
    this.setState()
  };

  // handleNewUserMessage = (newMessage) => {
  //   console.log(`New message incomig! ${newMessage}`);
  // }

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
                  <Comment.Author as='a'>Matt</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
                <br/>
             </Comment>

            <Comment>
              <Comment.Avatar src='https://s33.postimg.cc/6hpxaidq7/user.png' />
              <Comment.Content>
                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                <Comment.Metadata>
                  <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
              <br/>
            </Comment>

            <Form reply>
              <Form.TextArea />
              <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>

          </Comment.Group>
        </div>
    );
  };

};

export default Assessment;