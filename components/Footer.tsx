import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">NuRiRiN</h2>
          <p className="text-sm leading-relaxed mb-4">
            NuRiRiN Japan合同会社<br/>
            わずらわしい営業を完全カット！ネットで完結！<br/>
            外壁塗装工事の見積り比較サイト
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">サービス</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/quote" className="hover:text-primary-500">無料見積もり</Link></li>
            <li><Link to="/craftsman-login" className="hover:text-primary-500">職人登録・ログイン</Link></li>
            <li><a href="#" className="hover:text-primary-500">施工事例（準備中）</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">サポート</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary-500">運営会社</a></li>
            <li><a href="#" className="hover:text-primary-500">プライバシーポリシー</a></li>
            <li><a href="#" className="hover:text-primary-500">お問い合わせ</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} NuRiRiN Japan GK. All rights reserved.
      </div>
    </footer>
  );
};
