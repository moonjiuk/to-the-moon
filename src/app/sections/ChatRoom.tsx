"use client";
import { db } from "@/app/components/Firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ChatRoom() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false); //3초 쿨타임

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isSending) return;

    setIsSending(true);//3초 쿨타임
    const alignment = Math.random() > 0.5 ? "left" : "right"; //무작위로 채팅 좌, 우 배치
    await addDoc(collection(db, "messages"), {
      text: input,
      timestamp: serverTimestamp(),
      alignment,
    });

    setInput("");

    //3초 쿨타임
    setTimeout(() => {
      setIsSending(false);
    }, 3000);
  };

  return (
    <section id="chat-room">
      <h2>Chat Room</h2>

      <div className="chat-box">
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx} className={msg.alignment}>
              {msg.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Talk with Bunnies"
          maxLength={200}
        />
        <button onClick={sendMessage} disabled={isSending}>Say it</button>
      </div>
    </section>
  );
}
