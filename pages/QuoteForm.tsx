import React, { useState, ChangeEvent } from 'react';
import { QuoteFormData, HouseShape, BuildingStories, EstimatePeriod, MinQuotes } from '../types';
import { Check, ChevronRight, Upload, Home, MapPin } from 'lucide-react';

const INITIAL_DATA: QuoteFormData = {
  houseShape: '',
  dimensions: '',
  needsMeasurement: false,
  photoEntrance: null,
  photoFront: null,
  photoSide: null,
  photoBack: null,
  stories: '',
  blueprint: null,
  otherImages: null,
  requests: '',
  lastName: '',
  firstName: '',
  postalCode: '',
  prefecture: '',
  cityAddress: '',
  phone: '',
  email: '',
  password: '',
  estimatePeriod: '',
  minQuotes: '',
  agreeToPolicy: false,
};

const PREFECTURES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

export const QuoteForm: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, fieldName: keyof QuoteFormData) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [fieldName]: e.target.files![0] }));
    }
  };

  const handleShapeSelect = (shape: HouseShape) => {
    setFormData(prev => ({ ...prev, houseShape: shape }));
  };

  // Mock Zip code search
  const handleZipBlur = () => {
    if (formData.postalCode.length >= 7) {
      // In a real app, fetch address here. Mocking for demo.
      setFormData(prev => ({
        ...prev,
        prefecture: '東京都',
        cityAddress: '千代田区1-1-1'
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToPolicy) {
      alert("プライバシーポリシーへの同意が必要です。");
      return;
    }
    // API submission logic would go here
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">送信完了</h2>
          <p className="text-gray-600 mb-8">
            お見積り依頼ありがとうございます。<br/>
            職人が内容を確認次第、ご連絡差し上げます。
          </p>
          <a href="/" className="block w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition-colors">
            トップページへ戻る
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">無料一括見積もり依頼</h1>
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <div className={`flex items-center gap-2 ${step === 1 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 1 ? 'border-primary-600 bg-primary-50' : 'border-gray-300'}`}>1</div>
              建物情報
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className={`flex items-center gap-2 ${step === 2 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 2 ? 'border-primary-600 bg-primary-50' : 'border-gray-300'}`}>2</div>
              お客様情報
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="p-6 md:p-10 space-y-8 animate-in slide-in-from-right duration-300">
              {/* House Shape */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">お家の形 <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.values(HouseShape).map((shape) => (
                    <button
                      key={shape}
                      type="button"
                      onClick={() => handleShapeSelect(shape)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.houseShape === shape 
                          ? 'border-primary-500 bg-primary-50 text-primary-700' 
                          : 'border-gray-200 hover:border-primary-200 text-gray-600'
                      }`}
                    >
                      <Home className="mx-auto mb-2 opacity-50" />
                      <span className="block text-center text-sm font-bold">{shape}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">間口×奥行</label>
                <input
                  type="text"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleInputChange}
                  placeholder="例：8m × 10m"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Measurement Service */}
              <div>
                <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    name="needsMeasurement"
                    checked={formData.needsMeasurement}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="font-bold text-gray-700">採寸サービスを希望する</span>
                </label>
              </div>

              {/* Photos */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">外観写真（塗装面）</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(['photoEntrance', 'photoFront', 'photoSide', 'photoBack'] as const).map((field, idx) => {
                    const labels = ["玄関面", "正面", "横面", "裏面"];
                    return (
                      <div key={field} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, field)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Upload className="mx-auto text-gray-400 mb-2" />
                        <span className="text-sm font-medium text-gray-600">{labels[idx]}</span>
                        {formData[field] && <p className="text-xs text-primary-600 mt-2 truncate">{formData[field]?.name}</p>}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Stories */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">何階建て <span className="text-red-500">*</span></label>
                <select
                  name="stories"
                  value={formData.stories}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  <option value="">選択してください</option>
                  {Object.values(BuildingStories).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Other Files */}
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">図面</label>
                  <input type="file" onChange={(e) => handleFileChange(e, 'blueprint')} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">その他画像</label>
                  <input type="file" onChange={(e) => handleFileChange(e, 'otherImages')} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"/>
                </div>
              </div>

              {/* Requests */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">ご要望・その他</label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500"
                  placeholder="気になる箇所や、特に相談したいことがあればご記入ください。"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if(!formData.houseShape || !formData.stories) {
                      alert("必須項目を入力してください");
                      return;
                    }
                    setStep(2);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 flex items-center gap-2"
                >
                  次へ進む <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="p-6 md:p-10 space-y-8 animate-in slide-in-from-right duration-300">
               <h3 className="text-xl font-bold border-b pb-2 mb-6">お客様について</h3>
               
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">姓 <span className="text-red-500">*</span></label>
                   <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">名 <span className="text-red-500">*</span></label>
                   <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">郵便番号 <span className="text-red-500">*</span></label>
                 <div className="flex gap-2">
                   <span className="flex items-center text-gray-500 font-bold">〒</span>
                   <input required type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} onBlur={handleZipBlur} placeholder="123-4567" className="w-40 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
                   <p className="text-xs text-gray-500 flex items-center">※入力後、住所が自動入力されます</p>
                 </div>
               </div>

               <div className="grid md:grid-cols-3 gap-4">
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">都道府県 <span className="text-red-500">*</span></label>
                   <select required name="prefecture" value={formData.prefecture} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 bg-white">
                      <option value="">選択</option>
                      {PREFECTURES.map(p => <option key={p} value={p}>{p}</option>)}
                   </select>
                 </div>
                 <div className="md:col-span-2">
                   <label className="block text-sm font-bold text-gray-700 mb-2">市区町村以降 <span className="text-red-500">*</span></label>
                   <input required type="text" name="cityAddress" value={formData.cityAddress} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">電話番号 <span className="text-red-500">*</span></label>
                 <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                 <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">ログイン用パスワード <span className="text-red-500">*</span></label>
                 <input required type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" placeholder="8文字以上の英数字" />
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">見積もり期間</label>
                   <select name="estimatePeriod" value={formData.estimatePeriod} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 bg-white">
                      <option value="">選択してください</option>
                      {Object.values(EstimatePeriod).map(v => <option key={v} value={v}>{v}</option>)}
                   </select>
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">最低見積もり社数</label>
                   <select name="minQuotes" value={formData.minQuotes} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 bg-white">
                      <option value="">選択してください</option>
                      {Object.values(MinQuotes).map(v => <option key={v} value={v}>{v}</option>)}
                   </select>
                 </div>
               </div>

               <div className="pt-4 border-t border-gray-100">
                 <label className="flex items-start gap-3 cursor-pointer">
                   <input required type="checkbox" name="agreeToPolicy" checked={formData.agreeToPolicy} onChange={handleInputChange} className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-primary-500" />
                   <span className="text-sm text-gray-600">
                     <a href="#" className="text-primary-600 underline hover:text-primary-700">プライバシーポリシー</a>に同意の上、見積もりを依頼します。
                   </span>
                 </label>
               </div>

               <div className="flex gap-4 pt-4">
                 <button type="button" onClick={() => setStep(1)} className="w-1/3 py-3 rounded-lg border border-gray-300 text-gray-600 font-bold hover:bg-gray-50">
                   戻る
                 </button>
                 <button type="submit" className="w-2/3 bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 shadow-md">
                   無料お見積りを依頼する
                 </button>
               </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
