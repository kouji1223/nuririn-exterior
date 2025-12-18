import React from 'react';
import { UserCog, Lock } from 'lucide-react';

export const CraftsmanLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border-t-4 border-primary-500">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-primary-50 rounded-full text-primary-600 mb-4">
            <UserCog size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">職人ログイン</h1>
          <p className="text-gray-500 text-sm mt-2">登録済みの職人の方はこちらから</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ログインID</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="IDを入力" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">パスワード</label>
            <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="••••••••" />
          </div>
          
          <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
            <Lock size={18} />
            ログインする
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <a href="#" className="text-primary-600 hover:underline">パスワードをお忘れの方</a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>職人登録がお済みでない方は<a href="#" className="text-primary-600 underline">こちら</a>からお問い合わせください。</p>
      </div>
    </div>
  );
};
