import React, { useState } from 'react';
import { Grid, Fab, Card, CardContent, Typography, TextField } from '@material-ui/core';
import { MessageBox } from 'react-chat-elements';

function Mensagens() {
  const [chatsAtivos, setChatsAtivos] = useState(['Chat 1', 'Chat 2', 'Chat 3']);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');

  function abrirChatsAtivos(chat) {
    setSelectedChat(chat);
    setMessages({ ...messages, [chat]: [{user: 'other', text: 'Hello'}, {user: 'other', text: 'Hi'}, {user: 'other', text: 'How are you?'}] });
  }

  function handleSendMessage() {
    if (newMessage.trim() !== '') {
      setMessages({ ...messages, [selectedChat]: [...(messages[selectedChat] || []), {user: 'me', text: newMessage }]});
      setNewMessage('');
    }
  }

  function ChatMessage({ message }) {
    return (
      <MessageBox
        position={message.user === 'me' ? 'right' : 'left'}
        type="text"
        text={message.text}
        dateString={new Date().toLocaleString()}
        avatar={null}
      />
    );
  }

  return (
    <Grid container>
      <Grid item>
        <Fab color="primary" aria-label="add" sx={{ margin: 1 }} size="small">
          1
        </Fab>
        <Fab color="secondary" aria-label="edit" sx={{ margin: 1 }} size="small">
          2
        </Fab>
        <Fab color="success" aria-label="like" sx={{ margin: 1 }} size="small">
          3
        </Fab>
        {chatsAtivos.map((chat, index) => (
          <Card key={index} onClick={() => abrirChatsAtivos(chat)} sx={{ margin: 1 }}>
            <CardContent>
              <Typography variant="body2">{chat}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <Grid item xs>
        <div style={{ borderLeft: '1px solid black', height: '100%' }} />
      </Grid>
      <Grid item xs>
        <Typography variant="h6">{selectedChat}</Typography>
        {selectedChat && messages[selectedChat].map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        <TextField
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write a message"
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

export default Mensagens;