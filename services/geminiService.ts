import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: `
          あなたは「NuRiRiN（ヌリリン）」という外壁塗装見積もり比較サイトのAIアシスタントです。
          ユーザーは家の塗装を検討している一般の方です。
          以下の役割を担ってください：
          1. 外壁塗装や屋根塗装に関する専門用語をわかりやすく解説する。
          2. NuRiRiNのサービスの特徴（営業電話なし、ネット完結、職人直結など）をアピールする。
          3. 丁寧で親しみやすい口調（「です・ます」調）で話す。
          4. 具体的な見積もり金額を提示することは避け、「フォームから無料見積もりを依頼してください」と促す。
          
          回答は200文字以内で簡潔にまとめてください。
        `,
      }
    });
    
    return response.text || "申し訳ありません。現在応答できません。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "システムエラーが発生しました。しばらく経ってから再度お試しください。";
  }
};
