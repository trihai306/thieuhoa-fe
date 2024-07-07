

export interface StaticPost {
  staticPage: StaticPage;
  metaData: MetaData;
  dataView: DataView;
  hideHeader: boolean;
}

export interface StaticPage {
  id: number;
  status: number;
  title: string;
  slug: string;
  content: string;
  style: string;
  meta: string;
  created_at: string;
  updated_at: string;
  content_mobile: string;
}

export interface MetaData {
  meta_description: string;
  meta_og_image: string;
  meta_og_url: string;
  meta_og_title: string;
  script: string;
}

export interface DataView {
  content: string;
  style: string;
  script_body: string;
  script: string;
}
