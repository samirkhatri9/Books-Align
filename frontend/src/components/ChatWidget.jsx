import { useState, useRef, useEffect } from 'react'

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL

const WELCOME = "Hi! I'm the Books Align assistant. I can help with NDIS accounting questions, booking a consultation, or anything else about our services."

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '4px 0' }}>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgba(10,27,41,0.4)',
            animation: `chatBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: WELCOME }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).slice(2)}`)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setLoading(true)
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId }),
      })
      const data = await res.json()
      const reply = data.reply ?? data.text ?? data.output ?? data.message ?? 'Sorry, I could not get a response right now.'
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Something went wrong. Please try again or contact us directly.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <style>{`
        @keyframes chatBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chat-window { animation: chatSlideUp 0.22s ease-out; }
        .chat-input:focus { border-color: #0a1b29 !important; }
        .chat-send-btn:hover:not(:disabled) { background: #1a3b59 !important; }
        .chat-toggle:hover { transform: scale(1.08); }
        .chat-message-list::-webkit-scrollbar { width: 4px; }
        .chat-message-list::-webkit-scrollbar-thumb { background: rgba(10,27,41,0.15); border-radius: 4px; }
      `}</style>

      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>

        {isOpen && (
          <div
            className="chat-window"
            style={{
              width: '360px',
              height: '500px',
              marginBottom: '12px',
              display: 'flex',
              flexDirection: 'column',
              background: '#fff9ec',
              border: '1.5px solid rgba(10,27,41,0.18)',
              borderRadius: '16px',
              boxShadow: '0 12px 40px rgba(10,27,41,0.2)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              background: '#0a1b29',
              color: '#fff9ec',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: "'Work Sans', sans-serif",
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,249,236,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <ChatIcon />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.2 }}>Books Align Assistant</div>
                  <div style={{ fontSize: '11px', opacity: 0.65, marginTop: '1px' }}>NDIS Accounting Support</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', color: '#fff9ec', cursor: 'pointer', padding: '4px', display: 'flex', opacity: 0.8 }}
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div
              className="chat-message-list"
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontFamily: "'Public Sans', sans-serif",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
                >
                  <div style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? '#0a1b29' : '#ffffff',
                    color: msg.role === 'user' ? '#fff9ec' : '#0a1b29',
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    boxShadow: '0 1px 4px rgba(10,27,41,0.07)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '16px 16px 16px 4px',
                    background: '#ffffff',
                    boxShadow: '0 1px 4px rgba(10,27,41,0.07)',
                  }}>
                    <TypingDots />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{
              borderTop: '1px solid rgba(10,27,41,0.1)',
              padding: '12px',
              display: 'flex',
              gap: '8px',
              background: '#fff9ec',
              flexShrink: 0,
            }}>
              <textarea
                ref={inputRef}
                className="chat-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about NDIS accounting..."
                rows={1}
                style={{
                  flex: 1,
                  resize: 'none',
                  border: '1.5px solid rgba(10,27,41,0.18)',
                  borderRadius: '8px',
                  padding: '9px 12px',
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: '13.5px',
                  background: '#ffffff',
                  color: '#0a1b29',
                  outline: 'none',
                  lineHeight: 1.4,
                  transition: 'border-color 0.15s',
                  maxHeight: '100px',
                  overflowY: 'auto',
                }}
              />
              <button
                className="chat-send-btn"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                style={{
                  background: loading || !input.trim() ? 'rgba(10,27,41,0.25)' : '#0a1b29',
                  color: '#fff9ec',
                  border: 'none',
                  borderRadius: '8px',
                  width: '40px',
                  flexShrink: 0,
                  cursor: loading || !input.trim() ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.15s',
                }}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          className="chat-toggle"
          onClick={() => setIsOpen(o => !o)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#0a1b29',
            color: '#fff9ec',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(10,27,41,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.18s',
          }}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </button>
      </div>
    </>
  )
}
