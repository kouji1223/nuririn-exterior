export enum HouseShape {
  RECTANGLE = '長方形',
  L_SHAPE = 'L字型',
  STAIRS = '階段型',
  OTHER = 'その他'
}

export enum BuildingStories {
  ONE = '1階建て',
  TWO = '2階建て',
  THREE = '3階建て',
  OVER_THREE = '4階建て以上'
}

export enum EstimatePeriod {
  ASAP = 'なるべく早く',
  WITHIN_MONTH = '1ヶ月以内',
  WITHIN_3_MONTHS = '3ヶ月以内',
  UNCIDED = '未定'
}

export enum MinQuotes {
  ONE = '1社',
  TWO = '2社',
  THREE = '3社',
  MAX = 'できるだけ多く'
}

export interface QuoteFormData {
  // Step 1
  houseShape: HouseShape | '';
  dimensions: string; // "WxD"
  needsMeasurement: boolean;
  photoEntrance: File | null;
  photoFront: File | null;
  photoSide: File | null;
  photoBack: File | null;
  stories: BuildingStories | '';
  blueprint: File | null;
  otherImages: File | null;
  requests: string;

  // Step 2
  lastName: string;
  firstName: string;
  postalCode: string;
  prefecture: string;
  cityAddress: string;
  phone: string;
  email: string;
  password: string;
  estimatePeriod: EstimatePeriod | '';
  minQuotes: MinQuotes | '';
  agreeToPolicy: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
