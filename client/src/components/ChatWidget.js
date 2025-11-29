import React, { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: 'Hi! Need help with products or ordering?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEnd = useRef(null);

  useEffect(() => {
    if (open && messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), from: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate automated reply
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now()+1, from: 'bot', text: 'Thanks — we will respond shortly. For faster help call us at +91 99597 96665.' }]);
    }, 900);
  };

  return (
    <div>
      <div className={`chat-toggle`} onClick={() => setOpen(!open)} aria-hidden>
        {open ? <span>✕</span> : <span>Chat</span>}
      </div>

      <div className={`chat-panel ${open ? 'open' : ''}`}>
        <div className="chat-header">Live Chat</div>
        <div className="chat-body">
          {messages.map(m => (
            <div key={m.id} className={`chat-msg ${m.from}`}>
              <div className="chat-text">{m.text}</div>
            </div>
          ))}
          <div ref={messagesEnd} />
        </div>

        <div className="chat-input">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Type a message..." />
          <button className="btn btn-primary" onClick={sendMessage}>Send</button>
        </div>
      </div>

    </div>
  );
};

export default ChatWidget;
