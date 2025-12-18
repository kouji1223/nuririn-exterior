import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, PhoneOff, PiggyBank, FileText, UserCheck, ShieldCheck, ArrowRight, Construction } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-orange-100 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white text-primary-600 px-4 py-1 rounded-full text-sm font-bold shadow-sm mb-6 border border-primary-100">
            わずらわしい営業を完全カット！ネットで完結！
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            外壁塗装工事の<br/>
            <span className="text-primary-600">見積り比較サイト</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            NuRiRiNは外壁塗装工事でお困りの方とその職人さんをつなぐ、無料の見積りサイトです。<br className="hidden md:inline"/>
            見積もり段階での業者訪問は一切なし！だれでも簡単に複数社の見積りを比較できます。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/quote" 
              className="bg-primary-600 hover:bg-primary-700 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
            >
              無料でお見積り依頼する
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        
        {/* Abstract shapes/bg */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>

      {/* Concept / About */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">NuRiRiNとは？</h2>
            <p className="text-xl text-primary-600 font-bold mb-4">
              だれでも簡単に複数社の外壁塗装工事のお見積りを比較できます！
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              NuRiRiNは外壁塗装工事でお困りの方とその職人さんをつなぐ、無料の見積もり比較サイトです。<br/>
              見積もり段階での業者訪問は一切なし！だれでも安心してご利用できます。
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12 flex flex-col items-center">
            <span className="text-sm text-primary-600 mb-2">NuRiRiNについて詳しく</span>
            こんなお悩みありませんか？
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { text: "見積もり依頼をしたら\nたくさんの業者から電話がくる", icon: PhoneOff },
              { text: "施工後に\n追加料金が発生しそう", icon: PiggyBank },
              { text: "会員登録が\n面倒くさい", icon: UserCheck },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-gray-200 hover:border-primary-500">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-500">
                  <item.icon size={32} />
                </div>
                <p className="text-lg font-medium text-gray-800 whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">NuRiRiNの特徴</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-6 items-start">
              <div className="bg-primary-100 p-4 rounded-full text-primary-600 shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">施工後の見積もり額の変更はございません！</h3>
                <p className="text-gray-600 leading-relaxed">
                  NuRiRiNでは依頼後の見積額の変更は原則禁止です。<br/>
                  お見積りした金額で施工いたします。
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary-100 p-4 rounded-full text-primary-600 shrink-0">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">見積もり段階での業者訪問は一切なし</h3>
                <p className="text-gray-600 leading-relaxed">
                  現地調査は契約後。見積もり段階では、お客様がアップロードした情報をもとに算出するため、業者がお家に来ることはありません。
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/quote" className="inline-block bg-primary-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-primary-700 transition-colors">
              無料でお見積り依頼する
            </Link>
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">選ばれる理由</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: "01",
                title: "見積もりをネットで完結！",
                desc: "書類の送付やファックス等一切不要で、ネット上で契約まで済ませることができます。"
              },
              {
                id: "02",
                title: "営業電話がかかってこない！",
                desc: "登録後に営業電話や、チラシの投函、営業電話がかかってくることは一切ございません。"
              },
              {
                id: "03",
                title: "職人と直接取引で安価！",
                desc: "職人とお客様を直接つなぐことにより、仲介業者に支払う料金を削減することができます。"
              }
            ].map((point) => (
              <div key={point.id} className="bg-white p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-primary-100 text-primary-600 px-4 py-2 rounded-bl-xl font-bold text-sm">
                  POINT {point.id}
                </div>
                <h3 className="text-xl font-bold text-primary-600 mt-6 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">ご利用の流れ</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: 1, title: "お見積り依頼", desc: "お見積りフォームからご希望の内容を入力し、送信してください。" },
              { step: 2, title: "職人がお見積り", desc: "当サービスに登録済みの職人がご依頼内容を確認し、お見積りいたします。" },
              { step: 3, title: "お見積り結果をご連絡", desc: "弊社より職人からお見積り結果をもとに、ご提案をさせていただきます。" },
              { step: 4, title: "ご契約", desc: "お見積り内容にご納得いただければ、ご契約となります。お支払いは振込のみでお願いいたします。" },
              { step: 5, title: "塗装工事の施工", desc: "ご契約の内容で当日、職人がお伺いいたします。" },
            ].map((item, idx, arr) => (
              <div key={item.step} className="flex gap-6 relative">
                {idx !== arr.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md z-10">
                  {item.step}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">新着施工事例</h2>
          <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 inline-block w-full max-w-2xl">
            <Construction className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500">現在、施工事例はありません</p>
          </div>
        </div>
      </section>
    </div>
  );
};
