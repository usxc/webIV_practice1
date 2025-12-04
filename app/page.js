"use client";

import { useState } from "react";

export default function Home() {
  const [yen, setYen] = useState("");

  // データ送信
  const handleSubmit = async () => {
    const response = await fetch("/api/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 日本円: yen }),
    });

    // レスポンス受け取り
    const data = await response.json();

    // アラート表示
    alert(data.メッセージ);
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>日本円 → 米ドル 変換</h1>

      {/* 日本円入力 */}
      <input
        type="number"
        value={yen}
        onChange={(e) => setYen(e.target.value)}
        placeholder="日本円を入力"
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />

      <button
        onClick={handleSubmit}
        style={{ padding: "8px 16px", fontSize: "16px" }}
      >
        変換
      </button>
    </main>
  );
}