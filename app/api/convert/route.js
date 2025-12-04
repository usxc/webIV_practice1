import { NextResponse } from "next/server";

export async function POST(request) {
  // リクエスト受け取り
  const data = await request.json();
  const yen = Number(data.日本円);

  // 日本円→米ドル変換（1ドル = 150円で計算）
  const rate = 150;
  const totalCents = Math.round((yen / rate) * 100);
  const dollars = Math.floor(totalCents / 100);
  const cents = totalCents % 100;

  // メッセージ編集
  const message = `${yen}円は${dollars}ドル${cents}セントです`;

  // レスポンスを返す
  return NextResponse.json({ メッセージ: message });
}