import React from 'react';
import { LogIn } from 'lucide-react';

export const UserLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-orange-50 rounded-full text-orange-500 mb-4">
            <LogIn size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">マイページログイン</h1>
          <p className="text-gray-500 text-sm mt-2">見積もり依頼済みのお客様</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">パスワード</label>
            <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>
          
          <button className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-colors">
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
};
